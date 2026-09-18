import { PLACES } from "../data/places";

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

/** A Catmull-Rom style smooth path through a list of place ids. */
export function smoothPath(placeIds: string[]): string {
  const p = placeIds.map((k) => [PLACES[k].x, PLACES[k].y]);
  if (p.length < 2) return "";
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
