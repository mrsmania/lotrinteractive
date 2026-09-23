import { JOURNEYS } from "../data/journeys";
import { routeLength, smoothPath } from "./draw";

/**
 * The journeys, ready to be drawn over the map image (components/Journeys).
 *
 * The map names and draws its own places, so the app adds neither: what it has
 * to say about a place it says through the medallion standing on it. That
 * leaves the journeys, which nothing on the map shows.
 *
 * A path draws itself from its first place to its last when the reader
 * switches it on, and retracts the same way when they switch it off. Both are
 * one CSS transition on stroke-dashoffset, so what a path needs from here is
 * its shape and how long it should take: a long road ought to take longer than
 * a short one, or the Fellowship would cross Middle-earth in the time Merry
 * and Pippin take to reach Isengard.
 */

/**
 * Map units a line travels per second while drawing itself. Slow on purpose:
 * the point of drawing a route rather than simply showing it is to be able to
 * follow it, and Middle-earth is wide.
 */
const DRAW_SPEED = 300;
/** No path is over before it is seen, and none outstays its welcome. */
const DRAW_MIN = 2000;
const DRAW_MAX = 9000;

/**
 * How far apart two journeys run where they walk the same road, in map units.
 * Wide enough to tell six lines apart at a glance, narrow enough that the
 * whole fan is about one medallion across and a line still reads as passing
 * through the place it passes through.
 */
const RIBBON_GAP = 1.7;

export interface JourneyPath {
  id: string;
  colour: string;
  /** The smoothed route through its places, as SVG path data. */
  d: string;
  /** How long the line takes to draw itself, in milliseconds. */
  draw: number;
}

/**
 * Worked out once, at module load: the routes never change, and neither the
 * curve nor its length depends on anything the reader does.
 *
 * Each journey keeps one slot in the fan for good, whether or not anything
 * else is on, so a road looks the same however the reader arrived at it. The
 * slots are centred on nothing, so no journey is drawn further from its true
 * places than half the fan.
 */
export const JOURNEY_PATHS: JourneyPath[] = JOURNEYS.map((journey, i) => ({
  id: journey.id,
  colour: journey.colour,
  d: smoothPath(journey.route, (i - (JOURNEYS.length - 1) / 2) * RIBBON_GAP),
  draw: Math.round(
    Math.min(DRAW_MAX, Math.max(DRAW_MIN, (routeLength(journey.route) / DRAW_SPEED) * 1000)),
  ),
}));
