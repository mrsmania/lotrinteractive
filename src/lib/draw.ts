import { PLACES } from "../data/places";
import type { Forest, MountainRange } from "../data/map";

/** A deterministic pseudo-random source, so the map is drawn identically every time. */
export type Random = () => number;

/** Linear congruential generator, seeded once per map build. */
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

/**
 * A chain of little drawn peaks along the range's spine, jittered sideways and
 * sorted back to front so the nearer ones overlap the further ones.
 */
export function mountainRange(range: MountainRange, size: number, rnd: Random): string {
  const peaks: [number, number, number][] = [];
  let s = "";

  for (let i = 0; i < range.points.length - 1; i++) {
    const a = range.points[i];
    const b = range.points[i + 1];
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
    const n = Math.max(2, Math.round(len / (size * 0.62)));
    for (let j = 0; j < n; j++) {
      const t = j / n;
      const nx = -(b[1] - a[1]) / len;
      const ny = (b[0] - a[0]) / len;
      const off = (rnd() - 0.5) * size * 0.95;
      peaks.push([
        a[0] + (b[0] - a[0]) * t + nx * off,
        a[1] + (b[1] - a[1]) * t + ny * off,
        size * (0.62 + rnd() * 0.7),
      ]);
    }
  }

  peaks.sort((x, y) => x[1] - y[1]);
  for (const [x, y, height] of peaks) {
    const halfBase = height * 0.78;
    const base = y + height * 0.42;
    const top = y - height * 0.6;
    s +=
      '<path d="M' + (x - halfBase).toFixed(1) + "," + base.toFixed(1) +
      " L" + x.toFixed(1) + "," + top.toFixed(1) +
      " L" + (x + halfBase).toFixed(1) + "," + base.toFixed(1) +
      '" fill="#e6dabb" stroke="#6b5636" stroke-width=".85" stroke-linejoin="round" stroke-linecap="round"/>';
    // Shading lines down the near face.
    for (let q = 1; q <= 3; q++) {
      const t = q / 4.2;
      const rx = x + halfBase * t;
      const ry = top + (base - top) * t;
      s +=
        '<path d="M' + rx.toFixed(1) + "," + ry.toFixed(1) +
        " L" + (rx - halfBase * t * 0.5).toFixed(1) + "," + base.toFixed(1) +
        '" stroke="#6b5636" stroke-width=".5" opacity=".5" fill="none"/>';
    }
  }
  return s;
}

/** Scattered tree crowns filling the forest's clumps, drawn back to front. */
export function forest(wood: Forest, rnd: Random): string {
  let s = '<g opacity=".92">';

  for (const c of wood.clumps) {
    s += '<circle cx="' + c[0] + '" cy="' + c[1] + '" r="' + c[2] + '" fill="' + wood.colour + '" opacity=".09"/>';
  }

  const trees: [number, number, number][] = [];
  for (const c of wood.clumps) {
    const count = Math.round((c[2] * c[2]) / 22);
    for (let i = 0; i < count; i++) {
      const a = rnd() * Math.PI * 2;
      const d = Math.sqrt(rnd()) * c[2] * 0.94;
      trees.push([c[0] + Math.cos(a) * d, c[1] + Math.sin(a) * d * 0.86, 2.4 + rnd() * 1.7]);
    }
  }

  trees.sort((a, b) => a[1] - b[1]);
  for (const t of trees) {
    const x = t[0].toFixed(1);
    const y = t[1].toFixed(1);
    const r = t[2];
    s += '<path d="M' + x + "," + (t[1] + r * 0.85).toFixed(1) + " v" + (r * 0.85).toFixed(1) +
      '" stroke="' + wood.colour + '" stroke-width=".55" opacity=".8"/>';
    s += '<circle cx="' + x + '" cy="' + y + '" r="' + r.toFixed(1) + '" fill="' + wood.colour +
      '" fill-opacity=".26" stroke="' + wood.colour + '" stroke-width=".62"/>';
  }
  return s + "</g>";
}

/** Little hummocks for the downs. */
export function hills(points: [number, number][]): string {
  let s = '<g fill="none" stroke="#7a6a4e" stroke-width="1.4" stroke-linecap="round">';
  for (const p of points) {
    s += '<path d="M' + (p[0] - 7) + "," + p[1] + ' q7,-8 14,0"/>';
  }
  return s + "</g>";
}

export function compassRose(x: number, y: number, r: number): string {
  const spike = (angle: number, length: number, fill: string) => {
    const rad = (angle * Math.PI) / 180;
    const perp = ((angle + 90) * Math.PI) / 180;
    const b = r * 0.16;
    const px = x + Math.cos(rad) * length;
    const py = y + Math.sin(rad) * length;
    const ax = x + Math.cos(perp) * b;
    const ay = y + Math.sin(perp) * b;
    const bx = x - Math.cos(perp) * b;
    const by = y - Math.sin(perp) * b;
    return (
      '<path d="M' + px.toFixed(1) + "," + py.toFixed(1) +
      " L" + ax.toFixed(1) + "," + ay.toFixed(1) +
      " L" + bx.toFixed(1) + "," + by.toFixed(1) +
      ' Z" fill="' + fill + '"/>'
    );
  };

  let s =
    '<g opacity=".8"><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="none" stroke="#6b5636" stroke-width=".9"/>' +
    '<circle cx="' + x + '" cy="' + y + '" r="' + r * 0.72 + '" fill="none" stroke="#6b5636" stroke-width=".45" opacity=".6"/>';
  for (const a of [45, 135, 225, 315]) s += spike(a, r * 0.68, "#a89268");
  for (const a of [0, 90, 180, 270]) s += spike(a, r, "#6b5636");
  s += '<circle cx="' + x + '" cy="' + y + '" r="' + r * 0.1 + '" fill="#f2e7cd" stroke="#6b5636" stroke-width=".5"/>';
  s += '<text x="' + x + '" y="' + (y - r - 6) +
    '" text-anchor="middle" font-size="11" fill="#4a3823" letter-spacing="1.4" font-family="Inter, Segoe UI, Helvetica, Arial, sans-serif">N</text>';
  return s + "</g>";
}

/** The barred scale bar. `mapName` translates the MILES caption. */
export function scaleBar(x: number, y: number, mapName: (s: string) => string): string {
  const step = 38.5;
  let s = '<g opacity=".85" font-family="Inter, Segoe UI, Helvetica, Arial, sans-serif">';
  for (let i = 0; i < 3; i++) {
    s += '<rect x="' + (x + i * step) + '" y="' + y + '" width="' + step +
      '" height="6" fill="' + (i % 2 ? "#f2e7cd" : "#5a4830") + '" stroke="#5a4830" stroke-width=".7"/>';
    s += '<text x="' + (x + i * step) + '" y="' + (y - 5) +
      '" font-size="9" fill="#4a3823" text-anchor="middle">' + i * 100 + "</text>";
  }
  s += '<text x="' + (x + 3 * step) + '" y="' + (y - 5) + '" font-size="9" fill="#4a3823" text-anchor="middle">300</text>';
  s += '<text x="' + (x + 1.5 * step) + '" y="' + (y + 18) +
    '" font-size="9.5" fill="#4a3823" text-anchor="middle" letter-spacing="1.2">' + mapName("MEILEN") + "</text>";
  return s + "</g>";
}

/** The little drawn icon marking a place, chosen by its `kind`. */
export function placeSymbol(o: { x: number; y: number; kind: string }): string {
  const x = o.x;
  const y = o.y;
  switch (o.kind) {
    case "stadt":
      return '<path d="M' + (x - 6) + "," + (y + 4) + ' v-7 l3,-3 l3,3 v-3 l3,-3 l3,3 v10 Z" fill="#4a3a22"/>';
    case "burg":
    case "halle":
      return '<path d="M' + (x - 6) + "," + (y + 4) + ' v-8 h2 v-3 h2 v3 h2 v-3 h2 v3 h2 v8 Z" fill="#4a3a22"/>';
    case "turm":
      return '<path d="M' + (x - 3) + "," + (y + 4) + " v-11 h6 v11 Z M" + (x - 4.5) + "," + (y - 7) +
        ' h9 l-1.5,-3 h-6 Z" fill="#4a3a22"/>';
    case "hafen":
      return '<path d="M' + x + "," + (y - 7) + " v10 M" + (x - 4) + "," + (y - 4) + " h8 M" + (x - 4) + "," + (y + 3) +
        ' q4,4 8,0" fill="none" stroke="#4a3a22" stroke-width="1.6"/>';
    case "dorf":
      return '<g fill="#4a3a22"><path d="M' + (x - 5) + "," + (y + 3) + ' v-4 l2.5,-3 l2.5,3 v4 Z"/><path d="M' +
        (x + 0.5) + "," + (y + 3) + ' v-3 l2,-2.4 l2,2.4 v3 Z"/></g>';
    case "ruine":
      return '<g fill="#5a4a30"><path d="M' + (x - 5) + "," + (y + 4) + ' v-7 h2.4 v4 h1.6 v-8 h2.4 v11 Z"/><path d="M' +
        (x + 2) + "," + (y + 4) + ' v-5 h2.6 v5 Z"/></g>';
    case "tor":
      return '<path d="M' + (x - 6) + "," + (y + 4) + ' v-9 h3.4 v6 h5.2 v-6 h3.4 v9 Z" fill="#4a3a22"/>';
    case "berg":
      return '<path d="M' + (x - 8) + "," + (y + 5) + " L" + x + "," + (y - 9) + " L" + (x + 8) + "," + (y + 5) +
        ' Z" fill="#7a6a4e" stroke="#4a3c26" stroke-width=".8"/><path d="M' + (x - 3) + "," + (y - 1.6) +
        " L" + x + "," + (y - 9) + " L" + (x + 3) + "," + (y - 1.6) + ' Z" fill="#f2ecdc"/>';
    case "vulkan":
      return (
        '<path d="M' + (x - 11) + "," + (y + 6) + " L" + (x - 3) + "," + (y - 8) + " h6 L" + (x + 11) + "," + (y + 6) +
        ' Z" fill="#4a3128" stroke="#2e1c14" stroke-width=".8"/>' +
        '<path d="M' + (x - 3) + "," + (y - 8) + ' q3,-6 6,0 q-3,3 -6,0 Z" fill="#c9451e"/>' +
        '<path d="M' + (x - 2) + "," + (y - 10) + ' q-3,-8 2,-12 q-2,7 3,10" fill="none" stroke="#7a4a3a" stroke-width="1.2" opacity=".8"/>'
      );
    case "fels":
      return '<path d="M' + (x - 6) + "," + (y + 4) + ' l3,-8 l3,4 l3,-6 l3,10 Z" fill="#7a6a52"/>';
    case "saeule":
      return '<g fill="#5a4a30"><path d="M' + (x - 6) + "," + (y + 4) + ' v-10 h3 v10 Z"/><path d="M' + (x + 3) + "," +
        (y + 4) + ' v-10 h3 v10 Z"/></g>';
    case "grab":
      return '<g fill="#5a4a30"><path d="M' + (x - 6) + "," + (y + 3) + ' q3,-7 6,0 Z"/><path d="M' + (x + 1) + "," +
        (y + 3) + ' q2.5,-5 5,0 Z"/></g>';
    case "sumpf":
      return '<g fill="none" stroke="#4a5a4a" stroke-width="1.4"><path d="M' + (x - 7) + "," + y +
        ' q3.5,-4 7,0 q3.5,4 7,0"/><path d="M' + (x - 5) + "," + (y + 5) + ' q3.5,-4 7,0"/></g>';
    case "wald":
      return "";
    case "haus":
      return '<path d="M' + (x - 4.5) + "," + (y + 3) + ' v-4 l4.5,-4 l4.5,4 v4 Z" fill="#4a3a22"/>';
    case "feld":
      return '<g stroke="#6a5a3a" stroke-width="1" fill="none"><path d="M' + (x - 7) + "," + (y + 2) + " h14 M" +
        (x - 7) + "," + (y - 2) + ' h14"/></g>';
    default:
      return '<circle cx="' + x + '" cy="' + y + '" r="2.6" fill="#4a3a22"/>';
  }
}
