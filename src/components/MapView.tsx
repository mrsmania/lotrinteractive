import { useEffect, useMemo, useRef, useState } from "react";
import { CHARACTERS, CHARACTER_BY_ID } from "../data/characters";
import { PEOPLES } from "../data/peoples";
import { MAP_H, MAP_W, MARKER_SCALE } from "../data/map";
import { buildWorld } from "../lib/buildMap";
import { MARKERS } from "../lib/markers";
import type { Translator } from "../lib/i18n";
import { useZoomPan } from "../hooks/useZoomPan";
import { MapTiles } from "./MapTiles";
import { MedallionContent } from "./Medallion";
import { Legend } from "./Legend";

// Medallion geometry, in map units. The numbers are the drawn map's; what
// scales them to this one is MARKER_SCALE.
const MARKER_R = 11.4 * MARKER_SCALE;
const DISC_R = 12.1 * MARKER_SCALE;
const HUB_R = 2 * MARKER_SCALE;
const SPOKE_WIDTH = 0.8 * MARKER_SCALE;

// The rim, on the other hand, is NOT scaled with the medallion. Everything
// that gives a medallion an edge — its gold frame, its dark contour — is drawn
// in the picture's own 0..100 space, so shrinking the picture takes those
// strokes under a pixel and the medallion loses its edge against a map that is
// itself full of ink. The rim is stated in map units instead, so it keeps its
// weight however small the face inside it gets.
const RIM_R = 9.3;
const RIM_WIDTH = 1.9;
/** The rim's dark contour, drawn under it and a little wider either side. */
const CONTOUR_WIDTH = RIM_WIDTH + 1.2;
/** The glow on hover and selection, outside the rim so it reads as a halo. */
const RING_R = RIM_R + 1.9;
const RING_WIDTH = 2.4 * MARKER_SCALE;

/** A request from elsewhere in the app to bring a character into view. */
export interface FocusRequest {
  id: string;
  scale: number;
  /** Bumped on every request so repeats of the same character still fire. */
  nonce: number;
}

interface Props {
  translator: Translator;
  selectedId: string | null;
  /** Characters passing the current filters; the rest are dimmed out. */
  visibleIds: ReadonlySet<string>;
  showJourneys: boolean;
  focus: FocusRequest | null;
  onSelect: (id: string) => void;
}

export function MapView({
  translator,
  selectedId,
  visibleIds,
  showJourneys,
  focus,
  onSelect,
}: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);
  const zoomPan = useZoomPan(svgRef, {
    width: MAP_W,
    height: MAP_H,
    onTap: (target) => {
      const id = target?.closest<SVGGElement>(".marker")?.dataset.id;
      if (id) onSelect(id);
    },
  });
  const [tooltip, setTooltip] = useState<{ id: string; x: number; y: number } | null>(null);
  // The tile layer has to know how much of the map is on screen and how large
  // it is being drawn, neither of which the view alone can say.
  const [box, setBox] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setBox({ w: entry.contentRect.width, h: entry.contentRect.height });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const world = useMemo(buildWorld, []);

  const { centreOn, glideTo, view } = zoomPan;

  // Bring a requested character into view. Depends on the nonce alone so that
  // selecting the same character twice still moves the map.
  useEffect(() => {
    if (!focus) return;
    const p = MARKERS.positions[focus.id];
    if (p) centreOn(p, focus.scale);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focus?.nonce]);

  // Medallions keep a readable size as the map scales.
  const counterScale = Math.min(1.3, Math.max(0.45, 1 / view.k));

  // preserveAspectRatio="xMidYMid meet" fits the viewBox inside the element and
  // centres it, so the element shows the whole viewBox and a margin either side
  // of it in whichever direction it is the roomier.
  const fit = box.w && box.h ? Math.min(box.w / MAP_W, box.h / MAP_H) : 0;
  const density = fit * view.k;
  const halfW = fit ? box.w / fit / 2 : MAP_W / 2;
  const halfH = fit ? box.h / fit / 2 : MAP_H / 2;
  const visible = {
    x0: (MAP_W / 2 - halfW - view.tx) / view.k,
    x1: (MAP_W / 2 + halfW - view.tx) / view.k,
    y0: (MAP_H / 2 - halfH - view.ty) / view.k,
    y1: (MAP_H / 2 + halfH - view.ty) / view.k,
  };

  const showTooltip = (id: string, ev: React.PointerEvent) => {
    const field = fieldRef.current?.getBoundingClientRect();
    if (!field) return;
    setTooltip({ id, x: ev.clientX - field.left, y: ev.clientY - field.top });
  };

  const classes = showJourneys ? "" : "without-journeys";

  const tooltipCharacter = tooltip ? CHARACTER_BY_ID.get(tooltip.id) : undefined;

  return (
    <div className="map-field" ref={fieldRef}>
      <svg
        id="map"
        ref={svgRef}
        className={classes}
        viewBox={`0 0 ${MAP_W} ${MAP_H}`}
        preserveAspectRatio="xMidYMid meet"
        {...zoomPan.handlers}
      >
        <g transform={`translate(${view.tx.toFixed(2)} ${view.ty.toFixed(2)}) scale(${view.k.toFixed(4)})`}>
          <MapTiles visible={visible} density={density} />

          {/* The journeys, injected as markup: see lib/buildMap.ts. */}
          <g dangerouslySetInnerHTML={{ __html: world }} />

          <g id="markers">
            {/* Crowded places: a dot at the true spot, with a line to each medallion. */}
            {MARKERS.hubs.map((h, i) => (
              <circle key={i} cx={h.x} cy={h.y} r={HUB_R} fill="#8a2f18" />
            ))}
            {MARKERS.spokes.map((s, i) => (
              <path
                key={i}
                d={`M${s.x1},${s.y1} L${s.x2.toFixed(1)},${s.y2.toFixed(1)}`}
                stroke="#8a6a3a"
                strokeWidth={SPOKE_WIDTH}
                opacity=".7"
              />
            ))}

            {CHARACTERS.map((c) => {
              const p = MARKERS.positions[c.id];
              if (!p) return null;
              const colour = PEOPLES[c.people]?.colour ?? "#c9a227";
              const dimmed = !visibleIds.has(c.id);
              return (
                <g
                  key={c.id}
                  data-id={c.id}
                  className={
                    "marker" +
                    (c.id === selectedId ? " selected" : "") +
                    (dimmed ? " dimmed" : "")
                  }
                  transform={`translate(${p.x.toFixed(1)},${p.y.toFixed(1)}) scale(${counterScale.toFixed(3)})`}
                  onPointerEnter={(ev) => showTooltip(c.id, ev)}
                  onPointerMove={(ev) => showTooltip(c.id, ev)}
                  onPointerLeave={() => setTooltip(null)}
                >
                  <circle
                    className="ring"
                    r={RING_R}
                    fill="none"
                    stroke={colour}
                    strokeWidth={RING_WIDTH}
                    filter="url(#glow)"
                  />
                  {/* Dark contour first, then the people's colour over its
                      middle: one stroke on top of another, so the rim is cut
                      out of the paper on both edges for the price of two
                      circles. */}
                  <circle
                    r={RIM_R}
                    fill="none"
                    stroke="#231a10"
                    strokeWidth={CONTOUR_WIDTH}
                    opacity=".75"
                  />
                  <circle r={RIM_R} fill="none" stroke={colour} strokeWidth={RIM_WIDTH} />
                  <circle r={DISC_R} fill={colour} opacity=".55" />
                  {/* The picture used to be put through a desaturating filter
                      so it sat in the paper rather than on it. That made sense
                      over the app's own pale drawn map; over this one it only
                      took away the contrast that lets a face be seen at all.
                      What sits the medallion in the paper now is the rim. */}
                  <g transform={`translate(${-MARKER_R},${-MARKER_R}) scale(${(MARKER_R * 2) / 100})`}>
                    <MedallionContent id={c.id} />
                  </g>
                </g>
              );
            })}
          </g>
        </g>
      </svg>

      <div
        className={"tooltip" + (tooltip ? " on" : "")}
        style={tooltip ? { left: tooltip.x, top: tooltip.y } : undefined}
      >
        {tooltipCharacter && (
          <>
            <b>{translator.field(tooltipCharacter, "name")}</b>
            <small>{translator.placeName(tooltipCharacter.home)}</small>
          </>
        )}
      </div>

      <Legend translator={translator} />

      <div className="map-controls">
        <button onClick={() => zoomPan.zoom(1.35)} title={translator.t("closer")}>
          +
        </button>
        <button onClick={() => zoomPan.zoom(1 / 1.35)} title={translator.t("further")}>
          &minus;
        </button>
        <button onClick={() => glideTo(0, 0, 1)} title={translator.t("wholeMap")}>
          &#8634;
        </button>
      </div>
    </div>
  );
}
