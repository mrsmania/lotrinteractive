import { JOURNEYS } from "../data/journeys";
import { smoothPath } from "./draw";

/**
 * The journeys, drawn over the map image (components/MapTiles).
 *
 * The map names and draws its own places, so the app adds neither: what it has
 * to say about a place it says through the medallion standing on it. That
 * leaves the journeys, which nothing on the map shows.
 *
 * This returns markup rather than JSX on purpose. Nothing in here responds to
 * the user or ever changes, so running React's reconciler over it on every
 * hover would cost something and buy nothing. The parts that do respond to the
 * user, the character markers, are ordinary components in MapView.
 */
export function buildWorld(): string {
  let out = '<g id="journeys" fill="none" stroke-linecap="round">';
  for (const journey of JOURNEYS) {
    out +=
      '<path class="journey-line" data-journey="' + journey.id +
      '" d="' + smoothPath(journey.places) +
      '" stroke="' + journey.colour +
      '" stroke-width="3" stroke-dasharray="10 11" opacity=".85"/>';
  }
  return out + "</g>";
}
