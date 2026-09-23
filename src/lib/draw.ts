import { PLACES } from "../data/places";
import { isPlaceStep } from "../types";
import type { Step } from "../types";

/**
 * How far along a route the direction used for offsetting is measured over, in
 * map units. Large enough to look past the Anduin's meanders and see the way
 * the river is going.
 */
const OFFSET_WINDOW = 18;

/** A deterministic pseudo-random source, so the graph is laid out identically every time. */
export type Random = () => number;

/** Linear congruential generator, seeded once per layout. */
export function seededRandom(seed: number): Random {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

/**
 * A Catmull-Rom style smooth path through a list of place ids.
 *
 * `offset` shifts the whole route sideways by that many map units, to the
 * right of the way it is travelling. It is what keeps journeys that walk the
 * same road — and after the Fellowship was folded into its members, four of
 * them walk it from Hobbiton to Amon Hen — from hiding one another: the one
 * drawn last would otherwise be the only one you could see.
 *
 * The shift is applied to the places and the curve then drawn through the
 * shifted ones, rather than offsetting the curve itself. Two routes that pass
 * through the same place between the same neighbours get the same tangent
 * there, so they come out parallel for as long as they agree and separate of
 * their own accord where they part.
 */
export function smoothPath(steps: Step[], offset = 0): string {
  const base = steps.map(pointOf);
  if (base.length < 2) return "";
  const p = offset ? shifted(base, offset) : base;
  let d = "M" + p[0][0] + "," + p[0][1];
  for (let i = 0; i < p.length - 1; i++) {
    const p0 = p[i - 1] || p[i];
    const p1 = p[i];
    const p2 = p[i + 1];
    const p3 = p[i + 2] || p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d +=
      "C" +
      c1[0].toFixed(1) + "," + c1[1].toFixed(1) + " " +
      c2[0].toFixed(1) + "," + c2[1].toFixed(1) + " " +
      p2[0] + "," + p2[1];
  }
  return d;
}

/**
 * Roughly how far a route runs, as the sum of its straight legs. The smoothed
 * curve is a little longer than this, but only a little, and what it is for is
 * to give every path the same drawing speed rather than the same duration.
 */
export function routeLength(steps: Step[]): number {
  let total = 0;
  for (let i = 1; i < steps.length; i++) {
    const a = pointOf(steps[i - 1]);
    const b = pointOf(steps[i]);
    total += Math.hypot(b[0] - a[0], b[1] - a[1]);
  }
  return total;
}

/**
 * The route moved sideways, to the right of the way it is travelling.
 *
 * The direction is taken over a window of the route either side of each point
 * rather than from its immediate neighbours. On a traced river the neighbours
 * are a few map units apart and point every which way, so a neighbour-wise
 * normal would swing the offset round with every meander and tie the line in
 * knots; the windowed one follows the course of the river instead, and the
 * whole meandering ribbon shifts across as one piece.
 */
function shifted(base: number[][], offset: number): number[][] {
  const along = [0];
  for (let i = 1; i < base.length; i++) along.push(along[i - 1] + dist(base[i - 1], base[i]));

  return base.map((pt, i) => {
    let a = i;
    let b = i;
    while (a > 0 && along[i] - along[a] < OFFSET_WINDOW) a--;
    while (b < base.length - 1 && along[b] - along[i] < OFFSET_WINDOW) b++;
    let dx = base[b][0] - base[a][0];
    let dy = base[b][1] - base[a][1];
    let len = Math.hypot(dx, dy);
    // A route that doubles straight back on itself — the Fellowship on
    // Caradhras — has no direction over the window at the turn. Fall back to
    // the nearest neighbours, which still have one.
    if (len < 0.5) {
      const before = base[Math.max(0, i - 1)];
      const after = base[Math.min(base.length - 1, i + 1)];
      dx = after[0] - before[0];
      dy = after[1] - before[1];
      len = Math.hypot(dx, dy) || 1;
    }
    return [pt[0] - (dy / len) * offset, pt[1] + (dx / len) * offset];
  });
}

function dist(a: number[], b: number[]): number {
  return Math.hypot(b[0] - a[0], b[1] - a[1]);
}

/** Where a step lies: a place's position, or the bend's own. */
function pointOf(step: Step): number[] {
  if (!isPlaceStep(step)) return [step[0], step[1]];
  const place = PLACES[step];
  if (!place) throw new Error(`journey names an unknown place: ${step}`);
  return [place.x, place.y];
}
