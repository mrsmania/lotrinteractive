import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { CHARACTER_BY_ID } from "../data/characters";
import { MAP_H, MAP_W, MARKER_OUTER_R } from "../data/map";
import { MARKERS } from "../lib/markers";
import { PLACES } from "../data/places";
import type { Translator } from "../lib/i18n";
import { useZoomPan } from "../hooks/useZoomPan";
import { TOUCH_MIN_PX, coarsePointer, counterScale } from "../lib/counterScale";
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
  /** A tap that landed on the map itself, on nobody and nowhere. */
  onBackgroundTap?: () => void;
}

/**
 * The scale at which the map fills a box that is much taller than the map is,
 * such as a phone held upright; 1 for any box the whole map suits.
 */
function coverScale(box: { w: number; h: number }): number {
  if (!box.w || !box.h) return 1;
  const cover = Math.max(box.w / MAP_W, box.h / MAP_H) / Math.min(box.w / MAP_W, box.h / MAP_H);
  return cover < 1.6 ? 1 : Math.min(cover, 3.4);
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
  onBackgroundTap,
}: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);
  // The tile layer has to know how much of the map is on screen and how large
  // it is being drawn, neither of which the view alone can say.
  const [box, setBox] = useState({ w: 0, h: 0 });
  const home = coverScale(box);
  const zoomPan = useZoomPan(svgRef, {
    width: MAP_W,
    height: MAP_H,
    // As much detail at the deepest zoom as a desktop gets, however small the
    // map started out.
    maxScale: Math.min(14, 6 * home),
    onTap: (target) => {
      const id = target?.closest<SVGGElement>(".marker")?.dataset.id;
      if (id && !showPlaces) {
        onSelect(id);
        return;
      }
      const placeId = target?.closest<SVGGElement>(".place-mark")?.dataset.place;
      if (placeId) onSelectPlace(placeId);
      else if (!target?.closest(".marker")) onBackgroundTap?.();
    },
  });
  const [tooltip, setTooltip] = useState<{ id: string; x: number; y: number } | null>(null);

  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setBox({ w: entry.contentRect.width, h: entry.contentRect.height });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const { centreOn, glideTo, jumpTo, view } = zoomPan;

  // The map is far wider than it is tall, so in a phone held upright the whole
  // of it is a strip across the middle of the screen with black above and
  // below. There it opens filling the height instead, on the middle of the
  // map, and the reader pans east and west. Done once, on the first measure,
  // so turning the phone later does not take the map away from the reader.
  const opened = useRef(false);
  useEffect(() => {
    if (opened.current || !box.w || !box.h) return;
    opened.current = true;
    if (home === 1) return;
    jumpTo(MAP_W / 2 - (MAP_W / 2) * home, MAP_H / 2 - (MAP_H / 2) * home, home);
  }, [box, home, jumpTo]);

  // Bring a requested character into view. Depends on the nonce alone so that
  // selecting the same character twice still moves the map.
  useEffect(() => {
    if (!focus) return;
    const p = focus.place ? PLACES[focus.id] : MARKERS.positions[focus.id];
    // Never further out than the phone's opening view, or picking somebody
    // would shrink the map back to a strip.
    if (p) centreOn(p, Math.max(focus.scale, home));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focus?.nonce]);

  // preserveAspectRatio="xMidYMid meet" fits the viewBox inside the element and
  // centres it, so the element shows the whole viewBox and a margin either side
  // of it in whichever direction it is the roomier.
  const fit = box.w && box.h ? Math.min(box.w / MAP_W, box.h / MAP_H) : 0;
  const density = fit * view.k;

  // Medallions grow with the map, but more slowly than it does, and on a touch
  // screen never below what a finger can find; see lib/counterScale. Handed
  // down as the CSS variable --counter rather than as a prop; see
  // counterPlaced in Markers.
  const counter = counterScale(
    view.k,
    density,
    MARKER_OUTER_R * 2,
    coarsePointer() ? TOUCH_MIN_PX : 0,
    home,
  );
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
    // A finger has no hover: the tooltip would pop up under it on the tap that
    // opens the sheet, and stay there after, so it is kept for the mouse.
    if (!id || !ev || !field || ev.pointerType !== "mouse") {
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
          style={{ "--counter": counter.toFixed(3) } as CSSProperties}
        >
          <MapTiles {...visible} density={density} />

          <Journeys active={activeJourneys} />

          <PlaceMarks
            on={showPlaces}
            selectedId={selectedPlaceId}
            onSelect={onSelectPlace}
          />

          {!showPlaces && (
            <Markers touch={coarsePointer()} selectedId={selectedId} visibleIds={visibleIds} onHover={hover} />
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
