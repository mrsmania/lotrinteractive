import { CHARACTERS } from "../data/characters";
import { MARKER_SCALE } from "../data/map";
import { PLACES } from "../data/places";

export interface Point {
  x: number;
  y: number;
}

/** A line from a crowded place out to one of its characters. */
export interface Spoke {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export interface MarkerLayout {
  /** Where each character's medallion sits, by character id. */
  positions: Record<string, Point>;
  /** Places with more than one character get a dot at the true location. */
  hubs: Point[];
  spokes: Spoke[];
}

/**
 * Works out where to put each character's medallion.
 *
 * A place with a single character gets it straight above. Where several share
 * a place they are fanned out across the upper half circle with a thin line
 * back to the place itself, so nobody is hidden underneath anyone else.
 *
 * Pure and dependent only on static data, so it is computed once.
 */
export function computeMarkers(): MarkerLayout {
  const positions: Record<string, Point> = {};
  const hubs: Point[] = [];
  const spokes: Spoke[] = [];

  const byPlace: Record<string, string[]> = {};
  for (const c of CHARACTERS) {
    (byPlace[c.home] ??= []).push(c.id);
  }

  for (const [placeId, group] of Object.entries(byPlace)) {
    const place = PLACES[placeId];
    if (!place) continue;

    if (group.length > 1) {
      const radius = (17 + group.length * 3) * MARKER_SCALE;
      hubs.push({ x: place.x, y: place.y });
      group.forEach((id, i) => {
        const angle = Math.PI + ((i + 0.5) / group.length) * Math.PI;
        const x = place.x + Math.cos(angle) * radius * 1.15;
        const y = place.y + Math.sin(angle) * radius * 0.95 - 6 * MARKER_SCALE;
        positions[id] = { x, y };
        spokes.push({ x1: place.x, y1: place.y, x2: x, y2: y });
      });
    } else {
      positions[group[0]] = { x: place.x, y: place.y - 16 * MARKER_SCALE };
    }
  }

  return { positions, hubs, spokes };
}

export const MARKERS = computeMarkers();
