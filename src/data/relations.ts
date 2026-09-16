import { CHARACTERS, CHARACTER_BY_ID } from "./characters";
import { PLACES } from "./places";
import { JOURNEYS, JOURNEY_MEMBERS } from "./journeys";

/**
 * The character relationship graph.
 *
 * Groundwork for the connections map. The graph is built and queryable here;
 * only the view that draws it is still missing. See docs/relations-map.md for
 * the plan.
 *
 * Three kinds of connection can be derived from the data as it stands:
 *
 *   bond     an explicit tie authored per character in the `bonds` array.
 *            Asymmetric as written (Frodo lists Sam and Sam lists Frodo, but
 *            not every pair agrees), so edges are normalised to unordered
 *            pairs.
 *   journey  the two characters travelled together on one of the JOURNEYS.
 *   place    the two characters share a home.
 *
 * `bond` is the one that carries the story. The other two are cheap to derive
 * and are included so the eventual view can offer them as separate layers
 * rather than needing new data.
 */
export type RelationKind = "bond" | "journey" | "place";

export interface RelationEdge {
  /** The two character ids, always sorted, so a pair has exactly one edge. */
  a: string;
  b: string;
  /** Every reason these two are connected. */
  kinds: RelationKind[];
  /** Shorthand for kinds.length, the natural line weight in a drawing. */
  weight: number;
}

/** A shared home says little once a place is this crowded ("both are hobbits"). */
const CROWDED_PLACE = 6;

function pairKey(a: string, b: string): string {
  return a < b ? a + "|" + b : b + "|" + a;
}

function buildEdges(): RelationEdge[] {
  const edges = new Map<string, RelationEdge>();

  const connect = (a: string, b: string, kind: RelationKind) => {
    if (a === b) return;
    // Ignore references to anyone outside the cast.
    if (!CHARACTER_BY_ID.has(a) || !CHARACTER_BY_ID.has(b)) return;
    const key = pairKey(a, b);
    let edge = edges.get(key);
    if (!edge) {
      edge = { a: a < b ? a : b, b: a < b ? b : a, kinds: [], weight: 0 };
      edges.set(key, edge);
    }
    if (!edge.kinds.includes(kind)) {
      edge.kinds.push(kind);
      edge.weight = edge.kinds.length;
    }
  };

  // Authored ties
  for (const c of CHARACTERS) {
    for (const other of c.bonds ?? []) connect(c.id, other, "bond");
  }

  // Travelled together
  for (const journey of JOURNEYS) {
    const members = JOURNEY_MEMBERS[journey.id] ?? [];
    for (let i = 0; i < members.length; i++) {
      for (let j = i + 1; j < members.length; j++) {
        connect(members[i], members[j], "journey");
      }
    }
  }

  // Same home
  const byPlace = new Map<string, string[]>();
  for (const c of CHARACTERS) {
    const list = byPlace.get(c.home) ?? [];
    list.push(c.id);
    byPlace.set(c.home, list);
  }
  for (const [placeId, list] of byPlace) {
    if (!PLACES[placeId] || list.length < 2 || list.length > CROWDED_PLACE) continue;
    for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
        connect(list[i], list[j], "place");
      }
    }
  }

  return [...edges.values()].sort((x, y) => y.weight - x.weight);
}

export const RELATIONS: RelationEdge[] = buildEdges();

/** Every edge touching a character. */
export function relationsFor(id: string): RelationEdge[] {
  return RELATIONS.filter((e) => e.a === id || e.b === id);
}

/** The characters directly connected to `id`, optionally limited to one kind. */
export function neighboursOf(id: string, kind?: RelationKind): string[] {
  const out: string[] = [];
  for (const e of RELATIONS) {
    if (kind && !e.kinds.includes(kind)) continue;
    if (e.a === id) out.push(e.b);
    else if (e.b === id) out.push(e.a);
  }
  return out;
}

/** Number of connections per character, the obvious way to size a node. */
export const RELATION_DEGREE: ReadonlyMap<string, number> = (() => {
  const degree = new Map<string, number>();
  for (const c of CHARACTERS) degree.set(c.id, 0);
  for (const e of RELATIONS) {
    degree.set(e.a, (degree.get(e.a) ?? 0) + 1);
    degree.set(e.b, (degree.get(e.b) ?? 0) + 1);
  }
  return degree;
})();
