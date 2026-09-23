import { memo } from "react";
import type { CSSProperties } from "react";
import { JOURNEY_PATHS } from "../lib/buildMap";

interface Props {
  /** Ids of the journeys currently switched on. */
  active: ReadonlySet<string>;
}

/**
 * Every journey is in the document all the time; switching one on is a class,
 * and the line draws itself from its first place to its last (see the
 * .journey-line rules in styles.css). Leaving them mounted is what lets the
 * same transition run backwards when the reader switches one off.
 *
 * pathLength="1" restates each route's length as 1, so one dash of 1 covers
 * the whole of it whatever its real length, and stroke-dashoffset runs between
 * 1 and 0 for all seven alike. Nothing has to be measured in the browser.
 *
 * Memoised because MapView re-renders on every pointer move, to follow the
 * tooltip, and none of that reaches here.
 */
export const Journeys = memo(function Journeys({ active }: Props) {
  return (
    <g id="journeys" fill="none" strokeLinecap="round" strokeLinejoin="round">
      {JOURNEY_PATHS.map((path) => (
        <path
          key={path.id}
          className={"journey-line" + (active.has(path.id) ? " on" : "")}
          data-journey={path.id}
          d={path.d}
          pathLength={1}
          stroke={path.colour}
          strokeWidth={1.5}
          opacity={0.9}
          style={{ "--draw": path.draw + "ms" } as CSSProperties}
        />
      ))}
    </g>
  );
});
