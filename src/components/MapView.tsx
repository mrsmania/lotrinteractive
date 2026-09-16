import { useEffect, useMemo, useRef, useState } from "react";
import { CHARACTERS, CHARACTER_BY_ID } from "../data/characters";
import { PEOPLES } from "../data/peoples";
import { MAP_H, MAP_W } from "../data/map";
import { buildDefs, buildWorld } from "../lib/buildMap";
import { MARKERS } from "../lib/markers";
import type { Translator } from "../lib/i18n";
import { useZoomPan } from "../hooks/useZoomPan";
import { MedallionContent } from "./Medallion";
import { Legend } from "./Legend";

/** Radius of a medallion on the map, in map units. */
const MARKER_R = 11.4;

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
  showPlaceNames: boolean;
  focus: FocusRequest | null;
  onSelect: (id: string) => void;
}

export function MapView({
  translator,
  selectedId,
  visibleIds,
  showJourneys,
  showPlaceNames,
  focus,
  onSelect,
}: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);
  const zoomPan = useZoomPan(svgRef);
  const [tooltip, setTooltip] = useState<{ id: string; x: number; y: number } | null>(null);

  // The defs never change; the world only when the language does, because the
  // captions are baked into it.
  const defs = useMemo(buildDefs, []);
  const world = useMemo(() => buildWorld(translator.mapName), [translator]);

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

  const showTooltip = (id: string, ev: React.PointerEvent) => {
    const field = fieldRef.current?.getBoundingClientRect();
    if (!field) return;
    setTooltip({ id, x: ev.clientX - field.left, y: ev.clientY - field.top });
  };

  const classes = [
    showJourneys ? "" : "without-journeys",
    showPlaceNames ? "" : "without-labels",
  ]
    .filter(Boolean)
    .join(" ");

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
        <g dangerouslySetInnerHTML={{ __html: defs }} />

        <g transform={`translate(${view.tx.toFixed(2)} ${view.ty.toFixed(2)}) scale(${view.k.toFixed(4)})`}>
          {/* The drawn world, injected as markup: see lib/buildMap.ts. */}
          <g dangerouslySetInnerHTML={{ __html: world }} />

          <g id="markers">
            {/* Crowded places: a dot at the true spot, with a line to each medallion. */}
            {MARKERS.hubs.map((h, i) => (
              <circle key={i} cx={h.x} cy={h.y} r="2" fill="#8a2f18" />
            ))}
            {MARKERS.spokes.map((s, i) => (
              <path
                key={i}
                d={`M${s.x1},${s.y1} L${s.x2.toFixed(1)},${s.y2.toFixed(1)}`}
                stroke="#8a6a3a"
                strokeWidth=".8"
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
                  className={
                    "marker" +
                    (c.id === selectedId ? " selected" : "") +
                    (dimmed ? " dimmed" : "")
                  }
                  transform={`translate(${p.x.toFixed(1)},${p.y.toFixed(1)}) scale(${counterScale.toFixed(3)})`}
                  onClick={() => {
                    // A press that panned the map is not a click on the marker.
                    if (!zoomPan.didDrag()) onSelect(c.id);
                  }}
                  onPointerEnter={(ev) => showTooltip(c.id, ev)}
                  onPointerMove={(ev) => showTooltip(c.id, ev)}
                  onPointerLeave={() => setTooltip(null)}
                >
                  <circle
                    className="ring"
                    r="15.5"
                    fill="none"
                    stroke={colour}
                    strokeWidth="2.4"
                    filter="url(#glow)"
                  />
                  <circle r="12.1" fill={colour} opacity=".55" />
                  <g
                    filter="url(#mapTone)"
                    transform={`translate(${-MARKER_R},${-MARKER_R}) scale(${(MARKER_R * 2) / 100})`}
                  >
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
