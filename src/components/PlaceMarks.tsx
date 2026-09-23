import { memo } from "react";
import { PLACE_LORE } from "../data/placeLore";
import { PLACE_MARKS, PLACE_MARK_R } from "../lib/markers";
import { PlaceIcon } from "./PlaceIcon";
import { counterPlaced } from "./Markers";

/** The hit area is larger than the ring, so it can be tapped on a phone. */
const HIT_R = PLACE_MARK_R * 1.25;

interface Props {
  /** Whether the layer is on. Off, nothing is drawn and nothing is clickable. */
  on: boolean;
  selectedId: string | null;
  onSelect: (id: string) => void;
}

/**
 * A ring at every place that has a sheet, with the symbol of what it is.
 *
 * Built out of the medallion's own frame — the dark contour, the gold ring, the
 * hairline inside it — because the map already has that vocabulary and a place
 * should join it rather than import a second one. Not identical, though: the
 * rim is one gold instead of a people's colour, the inside is ink on parchment
 * instead of a photograph, and the ring is a shade smaller. Same family,
 * plainly not a person.
 *
 * It stands beside the name the map letters, near enough to belong to it and
 * clear of the words themselves — which was the whole objection to marking
 * places at all. Each place says where in its own `mark`; lib/markers only
 * parts any two that were lettered too close together.
 *
 * Shown while the sidebar is on its Places tab, and then the cast is not: one
 * pile of circles on the map at a time, or you cannot tell what you are looking
 * at.
 */
export const PlaceMarks = memo(function PlaceMarks({
  on,
  selectedId,
  onSelect,
}: Props) {
  if (!on) return null;

  return (
    <g id="place-marks">
      {PLACE_LORE.map((lore) => {
        const at = PLACE_MARKS[lore.id];
        if (!at) return null;
        const r = PLACE_MARK_R;
        return (
          <g
            key={lore.id}
            className={"place-mark" + (lore.id === selectedId ? " selected" : "")}
            data-place={lore.id}
            // Medallions keep a readable size as the map scales, and so do these.
            style={counterPlaced(at.x, at.y)}
            onClick={() => onSelect(lore.id)}
          >
            <circle className="place-ring-glow" r={r + 1.9} filter="url(#glow)" />
            <g transform={`translate(${-r},${-r}) scale(${(r * 2) / 100})`}>
              <circle className="place-face" cx="50" cy="50" r="47.5" />
              <PlaceIcon name={lore.icon} />
              <circle cx="50" cy="50" r="47" fill="none" stroke="#1c1410" strokeWidth="4" />
              <circle className="place-rim" cx="50" cy="50" r="46" fill="none" strokeWidth="2.4" />
              <circle
                className="place-rim"
                cx="50"
                cy="50"
                r="42"
                fill="none"
                strokeWidth=".55"
                opacity=".5"
              />
            </g>
            <circle r={HIT_R} fill="transparent" />
          </g>
        );
      })}
    </g>
  );
});
