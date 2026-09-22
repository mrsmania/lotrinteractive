import { CHARACTERS } from "../data/characters";
import { MARKER_OUTER_R, MARKER_SCALE } from "../data/map";
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
 * a place they are fanned out above it in arcs, with a thin line from each
 * back to the place itself, so nobody is hidden underneath anyone else. Arcs
 * step outwards as they fill: the thirteen of Thorin's company and their kin
 * all answer to Erebor, and no one arc could hold them.
 *
 * Pure and dependent only on static data, so it is computed once.
 */
/** Centre to centre, close enough to read as a group and far enough not to touch. */
const SPACING = MARKER_OUTER_R * 2.15;
/** How far out the innermost arc sits, clear of the dot marking the place. */
const FIRST_ARC = MARKER_OUTER_R * 2.4;

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

    if (group.length === 1) {
      positions[group[0]] = { x: place.x, y: place.y - 16 * MARKER_SCALE };
      continue;
    }

    hubs.push({ x: place.x, y: place.y });
    for (let placed = 0, ring = 0; placed < group.length; ring++) {
      const radius = FIRST_ARC + ring * SPACING;
      // Keeping the arc spacing fixed rather than the count means an arc holds
      // what it holds; the rest go to the next one out. Erebor ends up with a
      // dozen, which no single arc could take without them running together.
      const step = SPACING / radius;
      const capacity = Math.max(1, Math.floor(Math.PI / step));
      const arc = group.slice(placed, placed + capacity);
      // Centred on straight up, which in SVG's downward y is -90 degrees.
      const start = -Math.PI / 2 - (step * (arc.length - 1)) / 2;
      arc.forEach((id, i) => {
        const angle = start + i * step;
        const x = place.x + Math.cos(angle) * radius;
        const y = place.y + Math.sin(angle) * radius;
        positions[id] = { x, y };
        spokes.push({ x1: place.x, y1: place.y, x2: x, y2: y });
      });
      placed += arc.length;
    }
  }

  return { positions, hubs, spokes };
}

export const MARKERS = computeMarkers();
