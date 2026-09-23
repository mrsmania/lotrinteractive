import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { CHARACTER_BY_ID } from "../data/characters";
import { MAP_H, MAP_W } from "../data/map";
import { MARKERS } from "../lib/markers";
import { PLACES } from "../data/places";
import type { Translator } from "../lib/i18n";
import { useZoomPan } from "../hooks/useZoomPan";
import { MapTiles } from "./MapTiles";
import { Journeys } from "./Journeys";
import { PlaceMarks } from "./PlaceMarks";
import { Markers } from "./Markers";
import { Legend } from "./Legend";

/** A request from elsewhere in the app to bring a character into view. */
export interface FocusRequest {
  id: string;
  /** Whether the id names a place rather than a character. */
  place?: boolean;
  scale: number;
  /** Bumped on every request so repeats of the same character still fire. */
  nonce: number;
}

interface Props {
  translator: Translator;
  selectedId: string | null;
  /** Characters passing the current filters; the rest are dimmed out. */
  visibleIds: ReadonlySet<string>;
  /** Ids of the journeys currently drawn across the map. */
  activeJourneys: ReadonlySet<string>;
/** Whether the map is showing places rather than the cast. */
  showPlaces: boolean;
  selectedPlaceId: string | null;
  focus: FocusRequest | null;
  onToggleJourney: (id: string) => void;
  onSelect: (id: string) => void;
  onSelectPlace: (id: string) => void;
}

export function MapView({
  translator,
  selectedId,
  visibleIds,
  activeJourneys,
  showPlaces,
  selectedPlaceId,
  focus,
  onToggleJourney,
  onSelect,
  onSelectPlace,
}: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);
  const zoomPan = useZoomPan(svgRef, {
    width: MAP_W,
    height: MAP_H,
    onTap: (target) => {
      const id = target?.closest<SVGGElement>(".marker")?.dataset.id;
      if (id && !showPlaces) {
        onSelect(id);
        return;
      }
      const placeId = target?.closest<SVGGElement>(".place-mark")?.dataset.place;
      if (placeId) onSelectPlace(placeId);
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

  const { centreOn, glideTo, view } = zoomPan;

  // Bring a requested character into view. Depends on the nonce alone so that
  // selecting the same character twice still moves the map.
  useEffect(() => {
    if (!focus) return;
    const p = focus.place ? PLACES[focus.id] : MARKERS.positions[focus.id];
    if (p) centreOn(p, focus.scale);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focus?.nonce]);

  // Medallions keep a readable size as the map scales. Handed down as the CSS
  // variable --counter rather than as a prop; see counterPlaced in Markers.
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

  // Stable, so the memoised marker layer is not re-rendered by its own hover.
  const hover = useCallback((id: string | null, ev?: React.PointerEvent) => {
    const field = fieldRef.current?.getBoundingClientRect();
    if (!id || !ev || !field) {
      setTooltip(null);
      return;
    }
    setTooltip({ id, x: ev.clientX - field.left, y: ev.clientY - field.top });
  }, []);

  const tooltipCharacter = tooltip ? CHARACTER_BY_ID.get(tooltip.id) : undefined;

  return (
    <div className="map-field" ref={fieldRef}>
      <svg
        id="map"
        ref={svgRef}
        viewBox={`0 0 ${MAP_W} ${MAP_H}`}
        preserveAspectRatio="xMidYMid meet"
        {...zoomPan.handlers}
      >
        <g
          transform={`translate(${view.tx.toFixed(2)} ${view.ty.toFixed(2)}) scale(${view.k.toFixed(4)})`}
          style={{ "--counter": counterScale.toFixed(3) } as CSSProperties}
        >
          <MapTiles {...visible} density={density} />

          <Journeys active={activeJourneys} />

          <PlaceMarks
            on={showPlaces}
            selectedId={selectedPlaceId}
            onSelect={onSelectPlace}
          />

          {!showPlaces && (
            <Markers selectedId={selectedId} visibleIds={visibleIds} onHover={hover} />
          )}
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

      <Legend
        translator={translator}
        activeJourneys={activeJourneys}
        onToggleJourney={onToggleJourney}
      />

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
