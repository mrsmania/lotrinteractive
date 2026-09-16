import { CHARACTERS } from "../data/characters";
import { PEOPLES } from "../data/peoples";
import { RELATIONS, RELATION_DEGREE } from "../data/relations";
import type { RelationEdge } from "../data/relations";
import { seededRandom } from "./draw";

/** The coordinate space the graph is laid out in, matching the map's for consistency. */
export const GRAPH_W = 1000;
export const GRAPH_H = 760;

/** Keeps nodes clear of the viewport edge so medallions and labels are not clipped. */
const MARGIN = 74;

/** Fixed seed and iteration count: the same graph every visit. */
const SEED = 7734;
const ITERATIONS = 700;

/** Starting temperature, as a fraction of the layout's width. */
const T0 = 0.11;

/** How strongly nodes are drawn to the middle. Enough to stop drift, no more. */
const CENTRE_PULL = 0.005;

/**
 * Clear space to leave between two medallion edges, in graph units.
 *
 * Generous, and relaxed over many passes, because this is what evens out the
 * density: the simulation alone leaves the hubs in a knot at the centre with
 * empty space around the rim, and the separation pass pushes that crowd
 * outwards into it.
 */
const NODE_GAP = 11;
const SEPARATION_PASSES = 60;

export interface LayoutNode {
  id: string;
  x: number;
  y: number;
  /** Connection count, used to size the node. */
  degree: number;
  colour: string;
}

export interface RelationsLayout {
  nodes: LayoutNode[];
  byId: ReadonlyMap<string, LayoutNode>;
}

/**
 * A force-directed layout of the character graph.
 *
 * Fruchterman-Reingold: every pair of nodes repels, every edge pulls, and the
 * maximum step shrinks on a linear cooling schedule. 57 nodes and 201 edges is
 * small enough that the naive O(n^2) repulsion runs in a few milliseconds, so
 * there is no case for pulling in a simulation library or for animating it.
 *
 * Determinism matters here: the picture should be the same every time the page
 * is opened, or people cannot learn its shape. Nodes therefore start on a
 * circle grouped by people (a good starting arrangement as well as a fixed
 * one) with only seeded jitter to break the symmetry, and the simulation runs
 * a fixed number of iterations rather than until some convergence test.
 */
export function computeRelationsLayout(edges: RelationEdge[] = RELATIONS): RelationsLayout {
  const ids = CHARACTERS.map((c) => c.id);
  const n = ids.length;
  const index = new Map(ids.map((id, i) => [id, i]));
  const rnd = seededRandom(SEED);

  const x = new Float64Array(n);
  const y = new Float64Array(n);
  const dx = new Float64Array(n);
  const dy = new Float64Array(n);

  // Start on a circle, grouped by people, so related characters begin near
  // each other and the result settles into readable clusters.
  const order = [...CHARACTERS].sort((a, b) => {
    const pa = Object.keys(PEOPLES).indexOf(a.people);
    const pb = Object.keys(PEOPLES).indexOf(b.people);
    return pa - pb || a.id.localeCompare(b.id);
  });
  const radius = Math.min(GRAPH_W, GRAPH_H) * 0.42;
  order.forEach((c, i) => {
    const angle = (i / n) * Math.PI * 2;
    const j = index.get(c.id)!;
    x[j] = GRAPH_W / 2 + Math.cos(angle) * radius + (rnd() - 0.5) * 12;
    y[j] = GRAPH_H / 2 + Math.sin(angle) * radius + (rnd() - 0.5) * 12;
  });

  // Ideal edge length for this many nodes in this much space.
  const k = Math.sqrt((GRAPH_W * GRAPH_H) / n);

  // Well-connected characters are pulled on by many edges at once, which would
  // drag every hub into a knot at the centre. Damping each node's response by
  // its own degree lets the hubs hold station and the leaves orbit them, which
  // is what makes the clusters legible.
  const damping = ids.map((id) => 1 / Math.sqrt(Math.max(RELATION_DEGREE.get(id) ?? 1, 1)));
  const pairs = edges
    .map((e) => [index.get(e.a), index.get(e.b), e.weight] as const)
    .filter((p): p is readonly [number, number, number] => p[0] !== undefined && p[1] !== undefined);

  for (let step = 0; step < ITERATIONS; step++) {
    dx.fill(0);
    dy.fill(0);

    // Repulsion between every pair
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        let ex = x[i] - x[j];
        let ey = y[i] - y[j];
        let d2 = ex * ex + ey * ey;
        if (d2 < 0.01) {
          // Exactly coincident nodes have no direction to separate along.
          ex = (rnd() - 0.5) * 0.1;
          ey = (rnd() - 0.5) * 0.1;
          d2 = ex * ex + ey * ey;
        }
        const d = Math.sqrt(d2);
        const force = (k * k) / d;
        const ux = (ex / d) * force;
        const uy = (ey / d) * force;
        dx[i] += ux;
        dy[i] += uy;
        dx[j] -= ux;
        dy[j] -= uy;
      }
    }

    // Attraction along edges, stronger where an edge has several reasons
    for (const [a, b, weight] of pairs) {
      const ex = x[a] - x[b];
      const ey = y[a] - y[b];
      const d = Math.max(Math.sqrt(ex * ex + ey * ey), 0.01);
      const force = ((d * d) / k) * (0.6 + 0.4 * weight);
      const ux = (ex / d) * force;
      const uy = (ey / d) * force;
      dx[a] -= ux * damping[a];
      dy[a] -= uy * damping[a];
      dx[b] += ux * damping[b];
      dy[b] += uy * damping[b];
    }

    // A weak pull to the centre keeps loosely attached nodes from drifting off
    for (let i = 0; i < n; i++) {
      dx[i] += (GRAPH_W / 2 - x[i]) * CENTRE_PULL * k;
      dy[i] += (GRAPH_H / 2 - y[i]) * CENTRE_PULL * k;
    }

    // Cool down: the furthest any node may move this step
    const limit = GRAPH_W * T0 * (1 - step / ITERATIONS);
    for (let i = 0; i < n; i++) {
      const d = Math.max(Math.hypot(dx[i], dy[i]), 0.01);
      const move = Math.min(d, limit);
      x[i] += (dx[i] / d) * move;
      y[i] += (dy[i] / d) * move;
    }
  }

  // Fit the result to the viewport, preserving the aspect ratio so the layout
  // is not stretched. Done before separation, because scaling afterwards would
  // shrink the gaps it just opened.
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  for (let i = 0; i < n; i++) {
    minX = Math.min(minX, x[i]);
    maxX = Math.max(maxX, x[i]);
    minY = Math.min(minY, y[i]);
    maxY = Math.max(maxY, y[i]);
  }
  const scale = Math.min(
    (GRAPH_W - 2 * MARGIN) / Math.max(maxX - minX, 1),
    (GRAPH_H - 2 * MARGIN) / Math.max(maxY - minY, 1),
  );
  const offsetX = (GRAPH_W - (maxX - minX) * scale) / 2 - minX * scale;
  const offsetY = (GRAPH_H - (maxY - minY) * scale) / 2 - minY * scale;
  for (let i = 0; i < n; i++) {
    x[i] = x[i] * scale + offsetX;
    y[i] = y[i] * scale + offsetY;
  }

  // The simulation treats nodes as points, so tightly bound pairs (Merry and
  // Pippin, say) end up closer together than their medallions are wide. A few
  // rounds of pushing overlapping pairs apart fixes that without disturbing
  // the overall shape.
  const radii = ids.map((id) => nodeRadius(RELATION_DEGREE.get(id) ?? 0) + NODE_GAP);
  for (let pass = 0; pass < SEPARATION_PASSES; pass++) {
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const ex = x[j] - x[i];
        const ey = y[j] - y[i];
        const want = radii[i] + radii[j];
        const d = Math.max(Math.hypot(ex, ey), 0.01);
        if (d >= want) continue;
        const push = (want - d) / 2;
        const ux = (ex / d) * push;
        const uy = (ey / d) * push;
        x[i] -= ux;
        y[i] -= uy;
        x[j] += ux;
        y[j] += uy;
      }
    }
    // Separation can shove a node past the edge; pull it back before the next
    // pass so the two constraints settle together.
    for (let i = 0; i < n; i++) {
      x[i] = Math.min(GRAPH_W - MARGIN, Math.max(MARGIN, x[i]));
      y[i] = Math.min(GRAPH_H - MARGIN, Math.max(MARGIN, y[i]));
    }
  }

  const nodes: LayoutNode[] = CHARACTERS.map((c) => {
    const i = index.get(c.id)!;
    return {
      id: c.id,
      x: Math.round(x[i] * 10) / 10,
      y: Math.round(y[i] * 10) / 10,
      degree: RELATION_DEGREE.get(c.id) ?? 0,
      colour: PEOPLES[c.people]?.colour ?? "#c9a227",
    };
  });

  return { nodes, byId: new Map(nodes.map((nd) => [nd.id, nd])) };
}

/**
 * Node radius in graph units, growing with connection count.
 *
 * Kept small: with 57 nodes the limiting factor is room for the labels, not
 * the medallions, and a reader can zoom in on any face they want a better look
 * at.
 */
export function nodeRadius(degree: number): number {
  return 9 + Math.sqrt(degree) * 1.9;
}

/** Computed once: the layout depends only on static data. */
export const RELATIONS_LAYOUT = computeRelationsLayout();
