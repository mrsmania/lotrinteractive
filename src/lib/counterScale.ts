/**
 * How much a medallion is shrunk, or swollen, against the scale of the map it
 * sits on: the --counter variable that counterPlaced (components/Markers)
 * applies to every marker.
 *
 * With no counter-scale at all a medallion would grow exactly as the map does;
 * with a counter of 1 / k it would stay the same size on screen however far in
 * you went. It used to be the second, until well past double zoom, which made
 * zooming in feel as if it did nothing for the people on the map. It is now in
 * between: on screen a medallion grows as k^(1 - GROWTH_DAMPING), so it is
 * about 1.7 times its size at double zoom and nearly 4 times at full zoom. The
 * counter never rises above 1 on the way in, and that is what keeps two
 * medallions that lib/markers parted from overlapping again.
 *
 * On a phone the whole map is drawn a few hundred pixels wide and a medallion
 * at that scale is a speck nobody can see a face in or hit with a finger. So
 * when the pointer is coarse there is also a floor in screen pixels, and below
 * it the counter rises above 1 to reach it. Medallions may touch then, until
 * the reader zooms in; a map whose people cannot be found is the worse fault.
 * The floor is not flat, or zooming in on a phone would leave the medallions
 * pinned at it: past the scale the view opened at, it grows at the same rate
 * the medallions do on a desktop.
 */
const GROWTH_DAMPING = 0.25;
/** The counter never rises beyond this, on the way out or for the floor. */
const MAX_COUNTER = 2.4;

/** Smallest on-screen diameter, in CSS pixels, with a finger for a pointer. */
export const TOUCH_MIN_PX = 30;

const coarseQuery =
  typeof window !== "undefined" ? window.matchMedia("(pointer:coarse)") : null;

/** Whether the main pointer is a finger. Read live, so a docked tablet changes its mind. */
export function coarsePointer(): boolean {
  return coarseQuery?.matches ?? false;
}

/**
 * @param k        the view's scale
 * @param density  CSS pixels per map unit at that scale (fit x k); 0 if unknown
 * @param diameter a marker's diameter in map units, before counter-scaling
 * @param minPx    the smallest a marker may be drawn on screen; 0 for no floor
 * @param homeK    the scale the view opens at, from which the floor grows
 */
export function counterScale(
  k: number,
  density: number,
  diameter: number,
  minPx: number,
  homeK = 1,
): number {
  let counter = Math.pow(k, -GROWTH_DAMPING);
  if (minPx > 0 && density > 0) {
    const floor = minPx * Math.pow(Math.max(1, k / homeK), 1 - GROWTH_DAMPING);
    counter = Math.max(counter, floor / (diameter * density));
  }
  return Math.min(MAX_COUNTER, counter);
}
