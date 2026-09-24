import { useCallback, useEffect, useRef, useState } from "react";

export interface View {
  /** Scale. */
  k: number;
  /** Translation in map units. */
  tx: number;
  ty: number;
}

const INITIAL: View = { k: 1, tx: 0, ty: 0 };
const MIN_SCALE = 0.62;
/** How far in the view may go, unless the caller says otherwise. */
const MAX_SCALE = 6;
/** Pointer travel in map units above which a press counts as a drag, not a click. */
const DRAG_THRESHOLD = 6;
const GLIDE_MS = 520;
/** Two taps closer together than this, in time and in screen pixels, are a double tap. */
const DOUBLE_TAP_MS = 320;
const DOUBLE_TAP_PX = 28;
/** How far a double tap zooms in. */
const DOUBLE_TAP_ZOOM = 2;

type Point = { x: number; y: number };

export interface ZoomPan {
  view: View;
  /** Multiply the scale, optionally keeping the map point (px, py) still. */
  zoom: (factor: number, px?: number, py?: number) => void;
  /** Ease to a given view. */
  glideTo: (tx: number, ty: number, k: number) => void;
  /** Go to a given view at once. */
  jumpTo: (tx: number, ty: number, k: number) => void;
  /** Centre a map position, zooming to `scale`. */
  centreOn: (p: { x: number; y: number }, scale?: number) => void;
  reset: () => void;
  /** Spread onto the <svg>. */
  handlers: {
    onPointerDown: (ev: React.PointerEvent<SVGSVGElement>) => void;
    onPointerMove: (ev: React.PointerEvent<SVGSVGElement>) => void;
    onPointerUp: (ev: React.PointerEvent<SVGSVGElement>) => void;
    onPointerCancel: (ev: React.PointerEvent<SVGSVGElement>) => void;
  };
}

/**
 * Zoom and pan for the map SVG.
 *
 * The arithmetic is the original page's: pointer coordinates are converted
 * into the SVG's own coordinate space, allowing for the letterboxing that
 * preserveAspectRatio introduces, and zooming keeps the point under the cursor
 * still.
 *
 * On a touch screen every finger is tracked. One finger drags; two pinch, the
 * map staying pinned under both of them, so the spot between the fingers
 * travels with them while the gap between them sets the scale. Lifting one of
 * the two carries on as a drag with the other rather than jumping. A double
 * tap zooms in on the spot tapped.
 */
export interface ZoomPanOptions {
  /** The SVG's viewBox size; pointer coordinates are mapped into it. */
  width: number;
  height: number;
  /**
   * Called when a press ends without having turned into a drag, with the
   * element that was pressed.
   *
   * Selection cannot be done with an ordinary onClick on the thing being
   * clicked: this hook takes pointer capture so a drag survives the pointer
   * leaving the SVG, and capture retargets the compatibility mouse events, so
   * the browser fires `click` on the <svg> rather than on the marker. Pointer
   * *down* still reports the real target, so that is what gets remembered.
   */
  onTap?: (target: Element | null) => void;
  /**
   * How far in the view may go. A map drawn small, in a phone held upright,
   * needs to go further in than one filling a desktop to show as much.
   */
  maxScale?: number;
}

export function useZoomPan(
  svgRef: React.RefObject<SVGSVGElement | null>,
  { width, height, onTap, maxScale = MAX_SCALE }: ZoomPanOptions,
): ZoomPan {
  const [view, setView] = useState<View>(INITIAL);
  // Pointer handlers and the easing both need the live view without
  // re-subscribing, so it is mirrored into a ref.
  const current = useRef(view);
  current.current = view;

  /** Every pointer currently pressed, by id, at its last position in map space. */
  const pointers = useRef(new Map<number, Point>());
  /** The gap between two pinching fingers and the point midway, last frame. */
  const pinch = useRef<{ dist: number; mid: Point } | null>(null);
  const travelled = useRef(0);
  const frame = useRef(0);
  const downTarget = useRef<Element | null>(null);
  const lastTap = useRef<{ t: number; x: number; y: number } | null>(null);

  // Kept in a ref so the pointer handlers never close over a stale callback.
  const tapHandler = useRef(onTap);
  tapHandler.current = onTap;
  const maxK = useRef(maxScale);
  maxK.current = maxScale;
  const clampScale = useCallback(
    (k: number) => Math.min(maxK.current, Math.max(MIN_SCALE, k)),
    [],
  );

  const apply = useCallback((v: View) => {
    current.current = v;
    setView(v);
  }, []);

  const toMapPoint = useCallback(
    (ev: { clientX: number; clientY: number }): Point => {
      const el = svgRef.current;
      if (!el) return { x: 0, y: 0 };
      const r = el.getBoundingClientRect();
      const m = Math.max(width / r.width, height / r.height);
      return {
        x: (ev.clientX - r.left - (r.width - width / m) / 2) * m,
        y: (ev.clientY - r.top - (r.height - height / m) / 2) * m,
      };
    },
    [svgRef, width, height],
  );

  /** The view that scales by `factor` while keeping the map point (ax, ay) still. */
  const zoomedView = useCallback(
    (factor: number, ax: number, ay: number): View => {
      const v = current.current;
      const next = clampScale(v.k * factor);
      const wx = (ax - v.tx) / v.k;
      const wy = (ay - v.ty) / v.k;
      return { k: next, tx: ax - wx * next, ty: ay - wy * next };
    },
    [clampScale],
  );

  const zoom = useCallback(
    (factor: number, px?: number, py?: number) => {
      cancelAnimationFrame(frame.current);
      apply(zoomedView(factor, px ?? width / 2, py ?? height / 2));
    },
    [apply, zoomedView, width, height],
  );

  const jumpTo = useCallback(
    (tx: number, ty: number, k: number) => {
      cancelAnimationFrame(frame.current);
      apply({ tx, ty, k });
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

  /**
   * Centre a map position, as nearly as the map allows: somebody near its
   * edge is brought as close to the middle as goes without pulling the edge
   * itself into view, which on a phone left a band of black across the top.
   */
  const centreOn = useCallback(
    (p: { x: number; y: number }, scale = 2.4) => {
      let tx = width / 2 - p.x * scale;
      let ty = height / 2 - p.y * scale;
      const r = svgRef.current?.getBoundingClientRect();
      if (r && r.width && r.height) {
        // The part of the viewBox on screen, letterboxing included.
        const m = Math.max(width / r.width, height / r.height);
        const shownW = r.width * m;
        const shownH = r.height * m;
        const keep = (t: number, size: number, shown: number, whole: number) => {
          const lo = (whole + shown) / 2 - size;
          const hi = (whole - shown) / 2;
          return size >= shown ? Math.min(hi, Math.max(lo, t)) : t;
        };
        tx = keep(tx, width * scale, shownW, width);
        ty = keep(ty, height * scale, shownH, height);
      }
      glideTo(tx, ty, scale);
    },
    [glideTo, svgRef, width, height],
  );

  const reset = useCallback(() => glideTo(0, 0, 1), [glideTo]);

  // Wheel has to be a native listener: React's is passive, so preventDefault
  // there would be ignored and the page would scroll while zooming.
  //
  // The zoom follows how far the wheel turned rather than stepping once per
  // event: a mouse wheel sends a few large deltas and a trackpad pinch (which
  // arrives as a wheel with ctrlKey) a stream of small ones, and a fixed step
  // made the second race away.
  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    const onWheel = (ev: WheelEvent) => {
      ev.preventDefault();
      const lines = ev.deltaMode === 1 ? 16 : ev.deltaMode === 2 ? 400 : 1;
      const delta = ev.deltaY * lines * (ev.ctrlKey ? 0.01 : 0.0015);
      const factor = Math.exp(-Math.max(-0.7, Math.min(0.7, delta)));
      const p = toMapPoint(ev);
      zoom(factor, p.x, p.y);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [svgRef, toMapPoint, zoom]);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  /** Distance and midpoint of the first two pointers down. */
  const pinchState = () => {
    const [a, b] = [...pointers.current.values()];
    return {
      dist: Math.max(1, Math.hypot(b.x - a.x, b.y - a.y)),
      mid: { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 },
    };
  };

  const onPointerDown = useCallback(
    (ev: React.PointerEvent<SVGSVGElement>) => {
      cancelAnimationFrame(frame.current);
      pointers.current.set(ev.pointerId, toMapPoint(ev));
      try {
        ev.currentTarget.setPointerCapture(ev.pointerId);
      } catch {
        // Pointer capture is a nicety; dragging still works without it.
      }
      if (pointers.current.size === 1) {
        travelled.current = 0;
        downTarget.current = ev.target instanceof Element ? ev.target : null;
      } else {
        // A second finger: this press is a pinch now, and never a tap.
        travelled.current = Infinity;
        pinch.current = pinchState();
      }
    },
    [toMapPoint],
  );

  const onPointerMove = useCallback(
    (ev: React.PointerEvent<SVGSVGElement>) => {
      const prev = pointers.current.get(ev.pointerId);
      if (!prev) return;
      const p = toMapPoint(ev);
      pointers.current.set(ev.pointerId, p);

      if (pointers.current.size >= 2 && pinch.current) {
        const now = pinchState();
        const before = pinch.current;
        const v = current.current;
        // Whatever lay under the old midpoint is kept under the new one, at
        // the scale the fingers' spread now asks for.
        const k = clampScale(v.k * (now.dist / before.dist));
        const wx = (before.mid.x - v.tx) / v.k;
        const wy = (before.mid.y - v.ty) / v.k;
        apply({ k, tx: now.mid.x - wx * k, ty: now.mid.y - wy * k });
        pinch.current = now;
        return;
      }

      const dx = p.x - prev.x;
      const dy = p.y - prev.y;
      travelled.current += Math.abs(dx) + Math.abs(dy);
      const v = current.current;
      apply({ k: v.k, tx: v.tx + dx, ty: v.ty + dy });
    },
    [toMapPoint, apply, clampScale],
  );

  const endPointer = useCallback(
    (ev: React.PointerEvent<SVGSVGElement>, tapped: boolean) => {
      if (!pointers.current.delete(ev.pointerId)) return;
      if (pointers.current.size >= 2) {
        pinch.current = pinchState();
        return;
      }
      if (pointers.current.size === 1) {
        // Down to one finger: it carries on dragging from where it is.
        pinch.current = null;
        return;
      }

      pinch.current = null;
      const target = downTarget.current;
      downTarget.current = null;
      if (!tapped || travelled.current > DRAG_THRESHOLD) return;

      // A second tap on the same spot, soon after the first, zooms in there.
      // Only for touch: a mouse has its wheel, and a double click that zoomed
      // would get in the way of clicking two medallions in quick succession.
      const now = performance.now();
      const prev = lastTap.current;
      if (
        ev.pointerType === "touch" &&
        prev &&
        now - prev.t < DOUBLE_TAP_MS &&
        Math.hypot(ev.clientX - prev.x, ev.clientY - prev.y) < DOUBLE_TAP_PX
      ) {
        lastTap.current = null;
        const p = toMapPoint(ev);
        const v = zoomedView(DOUBLE_TAP_ZOOM, p.x, p.y);
        glideTo(v.tx, v.ty, v.k);
        return;
      }
      lastTap.current = { t: now, x: ev.clientX, y: ev.clientY };
      tapHandler.current?.(target);
    },
    [toMapPoint, zoomedView, glideTo],
  );

  return {
    view,
    zoom,
    glideTo,
    jumpTo,
    centreOn,
    reset,
    handlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp: (ev) => endPointer(ev, true),
      onPointerCancel: (ev) => endPointer(ev, false),
    },
  };
}
