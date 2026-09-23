import { memo } from "react";
import type { CSSProperties, PointerEvent } from "react";
import { CHARACTERS } from "../data/characters";
import { PEOPLES } from "../data/peoples";
import { CONTOUR_WIDTH, MARKER_SCALE, RIM_R, RIM_WIDTH } from "../data/map";
import { MARKERS } from "../lib/markers";
import { MedallionContent } from "./Medallion";

// Medallion geometry, in map units. The numbers are the drawn map's; what
// scales them to this one is MARKER_SCALE.
const MARKER_R = 11.4 * MARKER_SCALE;
const DISC_R = 12.1 * MARKER_SCALE;
const HUB_R = 2 * MARKER_SCALE;
const SPOKE_WIDTH = 0.8 * MARKER_SCALE;

/** The glow on hover and selection, outside the rim so it reads as a halo. */
const RING_R = RIM_R + 1.9;
const RING_WIDTH = 2.4 * MARKER_SCALE;

/**
 * Where a medallion stands, and the counter-scale that keeps it a readable
 * size however far the map is zoomed.
 *
 * The counter-scale is a CSS variable, --counter, set once on the group that
 * carries the view (see MapView), and not a number written into each marker's
 * transform. That is what lets this layer be memoised: panning and zooming
 * change one property on one element and leave all eighty medallions alone,
 * where they used to re-render every one of them on every frame.
 */
export function counterPlaced(x: number, y: number): CSSProperties {
  return { transform: `translate(${x.toFixed(1)}px,${y.toFixed(1)}px) scale(var(--counter))` };
}

interface Props {
  selectedId: string | null;
  /** Characters passing the current filters; the rest are dimmed out. */
  visibleIds: ReadonlySet<string>;
  /** A character is being pointed at, or no longer is. Must be stable. */
  onHover: (id: string | null, ev?: PointerEvent) => void;
}

export const Markers = memo(function Markers({ selectedId, visibleIds, onHover }: Props) {
  return (
    <g id="markers">
      {/* Crowded places: a dot at the true spot, with a line to each
          medallion. Both go the same way as the medallion they belong to
          when the filter dims it, or a place nobody passes would be left
          trailing lines at people who are no longer there. */}
      {MARKERS.hubs.map((h, i) => (
        <circle
          key={i}
          className={"hub" + (h.ids.some((id) => visibleIds.has(id)) ? "" : " dimmed")}
          cx={h.x}
          cy={h.y}
          r={HUB_R}
          fill="#8a2f18"
        />
      ))}
      {MARKERS.spokes.map((s, i) => (
        <path
          key={i}
          className={"spoke" + (visibleIds.has(s.id) ? "" : " dimmed")}
          d={`M${s.x1},${s.y1} L${s.x2.toFixed(1)},${s.y2.toFixed(1)}`}
          stroke="#8a6a3a"
          strokeWidth={SPOKE_WIDTH}
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
              "marker" + (c.id === selectedId ? " selected" : "") + (dimmed ? " dimmed" : "")
            }
            style={counterPlaced(p.x, p.y)}
            onPointerEnter={(ev) => onHover(c.id, ev)}
            onPointerMove={(ev) => onHover(c.id, ev)}
            onPointerLeave={() => onHover(null)}
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
            <circle r={RIM_R} fill="none" stroke="#231a10" strokeWidth={CONTOUR_WIDTH} opacity=".75" />
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
  );
});
