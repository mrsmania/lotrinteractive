import { useCallback, useEffect, useRef, useState } from "react";
import { MAP_H, MAP_W } from "../data/map";

export interface View {
  /** Scale. */
  k: number;
  /** Translation in map units. */
  tx: number;
  ty: number;
}

const INITIAL: View = { k: 1, tx: 0, ty: 0 };
const MIN_SCALE = 0.62;
const MAX_SCALE = 6;
/** Pointer travel in map units above which a press counts as a drag, not a click. */
const DRAG_THRESHOLD = 6;
const GLIDE_MS = 520;

export interface ZoomPan {
  view: View;
  /** Multiply the scale, optionally keeping the map point (px, py) still. */
  zoom: (factor: number, px?: number, py?: number) => void;
  /** Ease to a given view. */
  glideTo: (tx: number, ty: number, k: number) => void;
  /** Centre a map position, zooming to `scale`. */
  centreOn: (p: { x: number; y: number }, scale?: number) => void;
  reset: () => void;
  /** True when the pointer travelled far enough that the press was a drag. */
  didDrag: () => boolean;
  /** Spread onto the <svg>. */
  handlers: {
    onPointerDown: (ev: React.PointerEvent<SVGSVGElement>) => void;
    onPointerMove: (ev: React.PointerEvent<SVGSVGElement>) => void;
    onPointerUp: () => void;
    onPointerCancel: () => void;
  };
}

/**
 * Zoom and pan for the map SVG.
 *
 * The arithmetic is the original page's, unchanged: pointer coordinates are
 * converted into the fixed MAP_W x MAP_H space, allowing for the letterboxing
 * that preserveAspectRatio introduces, and zooming keeps the point under the
 * cursor still.
 */
export function useZoomPan(svgRef: React.RefObject<SVGSVGElement | null>): ZoomPan {
  const [view, setView] = useState<View>(INITIAL);
  // Pointer handlers and the easing both need the live view without
  // re-subscribing, so it is mirrored into a ref.
  const current = useRef(view);
  current.current = view;

  const dragging = useRef(false);
  const last = useRef<{ x: number; y: number } | null>(null);
  const travelled = useRef(0);
  const frame = useRef(0);

  const apply = useCallback((v: View) => {
    current.current = v;
    setView(v);
  }, []);

  const toMapPoint = useCallback(
    (ev: { clientX: number; clientY: number }) => {
      const el = svgRef.current;
      if (!el) return { x: 0, y: 0 };
      const r = el.getBoundingClientRect();
      const m = Math.max(MAP_W / r.width, MAP_H / r.height);
      return {
        x: (ev.clientX - r.left - (r.width - MAP_W / m) / 2) * m,
        y: (ev.clientY - r.top - (r.height - MAP_H / m) / 2) * m,
      };
    },
    [svgRef],
  );

  const zoom = useCallback(
    (factor: number, px?: number, py?: number) => {
      cancelAnimationFrame(frame.current);
      const v = current.current;
      const next = Math.min(MAX_SCALE, Math.max(MIN_SCALE, v.k * factor));
      const ax = px ?? MAP_W / 2;
      const ay = py ?? MAP_H / 2;
      const wx = (ax - v.tx) / v.k;
      const wy = (ay - v.ty) / v.k;
      apply({ k: next, tx: ax - wx * next, ty: ay - wy * next });
    },
    [apply],
  );

  const glideTo = useCallback(
    (tx: number, ty: number, k: number) => {
      cancelAnimationFrame(frame.current);
      const from = current.current;
      if (window.matchMedia("(prefers-reduced-motion:reduce)").matches) {
        apply({ tx, ty, k });
        return;
      }
      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min(1, (now - start) / GLIDE_MS);
        // ease-in-out quadratic
        const e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
        apply({
          tx: from.tx + (tx - from.tx) * e,
          ty: from.ty + (ty - from.ty) * e,
          k: from.k + (k - from.k) * e,
        });
        if (p < 1) frame.current = requestAnimationFrame(step);
      };
      frame.current = requestAnimationFrame(step);
    },
    [apply],
  );

  const centreOn = useCallback(
    (p: { x: number; y: number }, scale = 2.4) => {
      glideTo(MAP_W / 2 - p.x * scale, MAP_H / 2 - p.y * scale, scale);
    },
    [glideTo],
  );

  const reset = useCallback(() => glideTo(0, 0, 1), [glideTo]);

  // Wheel has to be a native listener: React's is passive, so preventDefault
  // there would be ignored and the page would scroll while zooming.
  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    const onWheel = (ev: WheelEvent) => {
      ev.preventDefault();
      const p = toMapPoint(ev);
      zoom(ev.deltaY < 0 ? 1.16 : 1 / 1.16, p.x, p.y);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [svgRef, toMapPoint, zoom]);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  const onPointerDown = useCallback(
    (ev: React.PointerEvent<SVGSVGElement>) => {
      cancelAnimationFrame(frame.current);
      dragging.current = true;
      travelled.current = 0;
      last.current = toMapPoint(ev);
      try {
        ev.currentTarget.setPointerCapture(ev.pointerId);
      } catch {
        // Pointer capture is a nicety; dragging still works without it.
      }
    },
    [toMapPoint],
  );

  const onPointerMove = useCallback(
    (ev: React.PointerEvent<SVGSVGElement>) => {
      if (!dragging.current || !last.current) return;
      const p = toMapPoint(ev);
      const dx = p.x - last.current.x;
      const dy = p.y - last.current.y;
      travelled.current += Math.abs(dx) + Math.abs(dy);
      last.current = p;
      const v = current.current;
      apply({ k: v.k, tx: v.tx + dx, ty: v.ty + dy });
    },
    [toMapPoint, apply],
  );

  const endDrag = useCallback(() => {
    dragging.current = false;
  }, []);

  return {
    view,
    zoom,
    glideTo,
    centreOn,
    reset,
    didDrag: () => travelled.current > DRAG_THRESHOLD,
    handlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp: () => endDrag(),
      onPointerCancel: () => endDrag(),
    },
  };
}
