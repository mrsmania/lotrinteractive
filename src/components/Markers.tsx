import { memo } from "react";
import type { CSSProperties, PointerEvent } from "react";
import { CHARACTERS } from "../data/characters";
import { PEOPLES } from "../data/peoples";
import { CONTOUR_WIDTH, MARKER_SCALE, RIM_R, RIM_WIDTH } from "../data/map";
import { MARKERS } from "../lib/markers";
import { MedallionContent } from "./Medallion";

const HUB_R = 2 * MARKER_SCALE;
const SPOKE_WIDTH = 0.8 * MARKER_SCALE;
const RING_WIDTH = 2.4 * MARKER_SCALE;

/**
 * Medallion geometry, in map units. The numbers are the drawn map's; what
 * scales them to this one is MARKER_SCALE.
 *
 * A touch screen gets a slimmer rim with the face grown out to meet it. There
 * the medallions are swollen to stay findable (lib/counterScale), and the rim
 * swells with them: at the desktop's weight it took a quarter of the width,
 * a thick ring of colour round a small face. The outer edge stays about where
 * it was, so lib/markers' spacing still holds.
 */
const GEOMETRY = {
  mouse: {
    face: 11.4 * MARKER_SCALE,
    disc: 12.1 * MARKER_SCALE,
    rim: RIM_R,
    rimWidth: RIM_WIDTH,
    contourWidth: CONTOUR_WIDTH,
  },
  touch: { face: 9.1, disc: 9.4, rim: 9.6, rimWidth: 0.9, contourWidth: 1.5 },
};

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
  /** Whether the pointer is a finger; see GEOMETRY. */
  touch: boolean;
  selectedId: string | null;
  /** Characters passing the current filters; the rest are dimmed out. */
  visibleIds: ReadonlySet<string>;
  /** A character is being pointed at, or no longer is. Must be stable. */
  onHover: (id: string | null, ev?: PointerEvent) => void;
}

export const Markers = memo(function Markers({ touch, selectedId, visibleIds, onHover }: Props) {
  const g = touch ? GEOMETRY.touch : GEOMETRY.mouse;
  /** The glow on hover and selection, outside the rim so it reads as a halo. */
  const ringR = g.rim + (touch ? 1.3 : 1.9);
  /** The unseen area that takes a tap, past the rim. */
  const hitR = g.rim + 3;
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
            {/* Something a fingertip can land on, a little wider than the
                medallion; unseen, and first so it is drawn under it. */}
            <circle r={hitR} fill="transparent" />
            <circle
              className="ring"
              r={ringR}
              fill="none"
              stroke={colour}
              strokeWidth={RING_WIDTH}
              filter="url(#glow)"
            />
            {/* Dark contour first, then the people's colour over its
                middle: one stroke on top of another, so the rim is cut
                out of the paper on both edges for the price of two
                circles. */}
            <circle r={g.rim} fill="none" stroke="#231a10" strokeWidth={g.contourWidth} opacity=".75" />
            <circle r={g.rim} fill="none" stroke={colour} strokeWidth={g.rimWidth} />
            <circle r={g.disc} fill={colour} opacity=".55" />
            {/* The picture used to be put through a desaturating filter
                so it sat in the paper rather than on it. That made sense
                over the app's own pale drawn map; over this one it only
                took away the contrast that lets a face be seen at all.
                What sits the medallion in the paper now is the rim. */}
            <g transform={`translate(${-g.face},${-g.face}) scale(${(g.face * 2) / 100})`}>
              <MedallionContent id={c.id} />
            </g>
          </g>
        );
      })}
    </g>
  );
});
