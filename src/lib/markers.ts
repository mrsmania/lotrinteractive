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
  /** The character it points to, so it can be hidden along with them. */
  id: string;
}

/** The dot at a crowded place itself. */
export interface Hub extends Point {
  /** Everyone who stands here; the dot goes when the last of them does. */
  ids: string[];
}

export interface MarkerLayout {
  /** Where each character's medallion sits, by character id. */
  positions: Record<string, Point>;
  /** Places with more than one character get a dot at the true location. */
  hubs: Hub[];
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
 * Above, unless the place says otherwise: the map letters most places below
 * the symbol it draws for them, but a few, Fangorn among them, are named from
 * above, and there the medallions go the other way rather than sit on the
 * name. See `fan` on Place.
 *
 * Pure and dependent only on static data, so it is computed once.
 */
/** Centre to centre, close enough to read as a group and far enough not to touch. */
const SPACING = MARKER_OUTER_R * 2.15;
/** How far out the innermost arc sits, clear of the dot marking the place. */
const FIRST_ARC = MARKER_OUTER_R * 2.4;
/** Two medallions touch at this distance; nothing may sit closer. */
const CLEARANCE = MARKER_OUTER_R * 2;
/** How far the separating may carry a medallion off the arc it was given. */
const MAX_DRIFT = MARKER_OUTER_R;
/** Enough passes for the crowded places; it stops as soon as nothing moves. */
const SEPARATION_PASSES = 200;

export function computeMarkers(): MarkerLayout {
  const positions: Record<string, Point> = {};
  const hubs: Hub[] = [];
  const spokes: Spoke[] = [];
  /** Where each medallion's spoke starts, for the crowded places. */
  const anchors: Record<string, Point> = {};

  const byPlace: Record<string, string[]> = {};
  for (const c of CHARACTERS) {
    (byPlace[c.home] ??= []).push(c.id);
  }

  for (const [placeId, group] of Object.entries(byPlace)) {
    const place = PLACES[placeId];
    if (!place) continue;

    // Up is the usual way, and in SVG's downward y that is negative.
    const away = place.fan === "down" ? 1 : -1;

    if (group.length === 1) {
      positions[group[0]] = { x: place.x, y: place.y + away * 16 * MARKER_SCALE };
      continue;
    }

    hubs.push({ x: place.x, y: place.y, ids: group });
    for (let placed = 0, ring = 0; placed < group.length; ring++) {
      const radius = FIRST_ARC + ring * SPACING;
      // Keeping the arc spacing fixed rather than the count means an arc holds
      // what it holds; the rest go to the next one out. Erebor ends up with a
      // dozen, which no single arc could take without them running together.
      const step = SPACING / radius;
      // n medallions span (n - 1) steps, so a half circle holds one more than
      // the steps that fit in it. Counting the steps alone sent a fourth
      // character out to a second ring with three quarters of the first still
      // empty, which is how Shadowfax came to stand fifty units north of
      // Edoras, in Fangorn.
      const capacity = Math.max(1, Math.floor(Math.PI / step) + 1);
      const arc = group.slice(placed, placed + capacity);
      // Centred on straight up, or straight down where the place asks for it.
      const start = (away * Math.PI) / 2 - (step * (arc.length - 1)) / 2;
      arc.forEach((id, i) => {
        const angle = start + i * step;
        positions[id] = {
          x: place.x + Math.cos(angle) * radius,
          y: place.y + Math.sin(angle) * radius,
        };
        anchors[id] = { x: place.x, y: place.y };
      });
      placed += arc.length;
    }
  }

  separate(positions);

  // Spokes are drawn last, from each place to wherever its medallion ended up.
  for (const [id, anchor] of Object.entries(anchors)) {
    const p = positions[id];
    spokes.push({ x1: anchor.x, y1: anchor.y, x2: p.x, y2: p.y, id });
  }

  return { positions, hubs, spokes };
}

/**
 * Pushes apart any two medallions that would overlap.
 *
 * Each place fans its own out so that none of its own collide, but nothing
 * stopped two places from doing it into the same piece of paper: Shagrat came
 * to stand on the Witch-king, two map units apart, with one simply invisible
 * under the other. Neighbouring places cannot be solved by hand — moving one
 * lands it on the next — so overlaps are relaxed away here instead.
 *
 * A medallion may be carried at most MAX_DRIFT off the arc it was given, so it
 * still reads as belonging to its place and its spoke still points somewhere
 * sensible. Where a pair cannot be separated inside that, they end up as far
 * apart as it allows. Iteration order is the cast's, so the result is the same
 * every time.
 */
function separate(positions: Record<string, Point>): void {
  const ids = Object.keys(positions);
  const ideal = ids.map((id) => ({ ...positions[id] }));

  for (let pass = 0; pass < SEPARATION_PASSES; pass++) {
    let moved = false;

    for (let i = 0; i < ids.length; i++) {
      for (let j = i + 1; j < ids.length; j++) {
        const a = positions[ids[i]];
        const b = positions[ids[j]];
        let dx = b.x - a.x;
        let dy = b.y - a.y;
        let d = Math.hypot(dx, dy);
        if (d >= CLEARANCE) continue;
        // Exactly coincident: part them along a fixed axis rather than
        // dividing by nothing, so the outcome stays deterministic.
        if (d < 1e-6) {
          dx = 1;
          dy = 0;
          d = 1;
        }
        const push = (CLEARANCE - d) / 2;
        const ux = (dx / d) * push;
        const uy = (dy / d) * push;
        a.x -= ux;
        a.y -= uy;
        b.x += ux;
        b.y += uy;
        moved = true;
      }
    }

    // Back onto the leash, so nobody wanders away from the place they belong to.
    ids.forEach((id, i) => {
      const p = positions[id];
      const dx = p.x - ideal[i].x;
      const dy = p.y - ideal[i].y;
      const drift = Math.hypot(dx, dy);
      if (drift <= MAX_DRIFT) return;
      p.x = ideal[i].x + (dx / drift) * MAX_DRIFT;
      p.y = ideal[i].y + (dy / drift) * MAX_DRIFT;
    });

    if (!moved) break;
  }
}

export const MARKERS = computeMarkers();
