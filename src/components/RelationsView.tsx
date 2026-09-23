import { memo, useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { CHARACTER_BY_ID } from "../data/characters";
import { RELATIONS } from "../data/relations";
import type { RelationEdge, RelationKind } from "../data/relations";
import { GRAPH_H, GRAPH_W, RELATIONS_LAYOUT, nodeRadius } from "../lib/relationsLayout";
import type { Translator } from "../lib/i18n";
import { useZoomPan } from "../hooks/useZoomPan";
import { MedallionContent } from "./Medallion";
import { counterPlaced } from "./Markers";

/**
 * Colour per kind of connection, and the order that decides an edge's colour
 * when it has more than one reason: an authored bond outranks a shared journey,
 * which outranks a shared home.
 */
export const KIND_COLOUR: Record<RelationKind, string> = {
  bond: "#c9a227",
  journey: "#7fa45c",
  place: "#6d8b90",
};
const KIND_ORDER: RelationKind[] = ["bond", "journey", "place"];

/** How far an edge bows away from the straight line between its two nodes. */
const BOW = 0.12;

/** Articles to drop when shortening a name to fit under a node. */
const ARTICLES = /^(the|der|die|das)\s+/i;

/**
 * A name short enough to sit under a node without colliding with its
 * neighbours: the first word, with any leading article dropped so "The
 * Witch-king of Angmar" becomes "Witch-king" rather than "The". The full name
 * is a click away on the character sheet.
 */
function shortLabel(name: string): string {
  return name.split(",")[0].replace(ARTICLES, "").split(/\s+/)[0];
}

interface Props {
  translator: Translator;
  selectedId: string | null;
  /** Characters passing the current filters; the rest are dimmed out. */
  visibleIds: ReadonlySet<string>;
  activeKinds: ReadonlySet<RelationKind>;
  /** Bumped when something elsewhere asks for a character to be brought into view. */
  focusNonce: number;
  onSelect: (id: string) => void;
}

/** The dominant kind of an edge, limited to the kinds currently switched on. */
function dominantKind(edge: RelationEdge, active: ReadonlySet<RelationKind>): RelationKind | null {
  for (const kind of KIND_ORDER) {
    if (edge.kinds.includes(kind) && active.has(kind)) return kind;
  }
  return null;
}

function edgePath(x1: number, y1: number, x2: number, y2: number): string {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.max(Math.hypot(dx, dy), 0.01);
  const bow = len * BOW;
  // Control point pushed out along the perpendicular, so two nodes joined by
  // several lines do not stack them all on top of each other.
  const cx = (x1 + x2) / 2 - (dy / len) * bow;
  const cy = (y1 + y2) / 2 + (dx / len) * bow;
  return `M${x1},${y1} Q${cx.toFixed(1)},${cy.toFixed(1)} ${x2},${y2}`;
}

export function RelationsView({
  translator,
  selectedId,
  visibleIds,
  activeKinds,
  focusNonce,
  onSelect,
}: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const zoomPan = useZoomPan(svgRef, {
    width: GRAPH_W,
    height: GRAPH_H,
    onTap: (target) => {
      const id = target?.closest<SVGGElement>(".graph-node")?.dataset.id;
      if (id) onSelect(id);
    },
  });
  const [hoverId, setHoverId] = useState<string | null>(null);

  const { centreOn, view } = zoomPan;
  const { byId } = RELATIONS_LAYOUT;

  // Only the edges whose kinds are switched on, each with the colour to use.
  const edges = useMemo(() => {
    return RELATIONS.flatMap((edge) => {
      const kind = dominantKind(edge, activeKinds);
      if (!kind) return [];
      const a = byId.get(edge.a);
      const b = byId.get(edge.b);
      if (!a || !b) return [];
      return [{ edge, kind, a, b, d: edgePath(a.x, a.y, b.x, b.y) }];
    });
  }, [activeKinds, byId]);

  /** The character whose web is being highlighted: hover wins over selection. */
  const focusId = hoverId ?? selectedId;

  const related = useMemo(() => {
    if (!focusId) return null;
    const set = new Set<string>([focusId]);
    for (const { edge } of edges) {
      if (edge.a === focusId) set.add(edge.b);
      else if (edge.b === focusId) set.add(edge.a);
    }
    return set;
  }, [focusId, edges]);

  // Bring a requested character into view, same contract as the map.
  useEffect(() => {
    if (!focusNonce || !selectedId) return;
    const node = byId.get(selectedId);
    if (node) centreOn(node, 1.8);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusNonce]);

  const counterScale = Math.min(1.3, Math.max(0.5, 1 / view.k));
  const focusCharacter = focusId ? CHARACTER_BY_ID.get(focusId) : undefined;
  const focusDegree = related ? related.size - 1 : 0;

  return (
    <div className="map-field graph-field">
      <svg
        id="graph"
        ref={svgRef}
        viewBox={`0 0 ${GRAPH_W} ${GRAPH_H}`}
        preserveAspectRatio="xMidYMid meet"
        {...zoomPan.handlers}
      >
        <g
          transform={`translate(${view.tx.toFixed(2)} ${view.ty.toFixed(2)}) scale(${view.k.toFixed(4)})`}
          style={{ "--counter": counterScale.toFixed(3) } as CSSProperties}
        >
          <GraphEdges edges={edges} focusId={focusId} visibleIds={visibleIds} />
          <GraphNodes
            translator={translator}
            selectedId={selectedId}
            focusId={focusId}
            related={related}
            visibleIds={visibleIds}
            onHover={setHoverId}
          />
        </g>
      </svg>

      <div className="legend">
        <h3>{translator.t("connections")}</h3>
        {KIND_ORDER.filter((k) => activeKinds.has(k)).map((kind) => (
          <div className="path-key" key={kind}>
            <i style={{ borderColor: KIND_COLOUR[kind], borderStyle: "solid" }} />
            {translator.t(kind === "bond" ? "kindBond" : kind === "journey" ? "kindJourney" : "kindPlace")}
          </div>
        ))}
        {focusCharacter && (
          <div className="legend-focus">
            <b>{translator.field(focusCharacter, "name").split(",")[0]}</b>
            <span>
              {focusDegree} {translator.t("connectionCount")}
            </span>
          </div>
        )}
      </div>

      <div className="map-controls">
        <button onClick={() => zoomPan.zoom(1.35)} title={translator.t("closer")}>
          +
        </button>
        <button onClick={() => zoomPan.zoom(1 / 1.35)} title={translator.t("further")}>
          &minus;
        </button>
        <button onClick={() => zoomPan.glideTo(0, 0, 1)} title={translator.t("wholeMap")}>
          &#8634;
        </button>
      </div>
    </div>
  );
}

type Edge = { edge: RelationEdge; kind: RelationKind; d: string };

/**
 * The two layers of the graph, memoised so that panning and zooming, which
 * re-render the view on every frame, leave them alone. The nodes keep their
 * size through the --counter variable set on the group above them, as the
 * map's medallions do (see counterPlaced).
 */
const GraphEdges = memo(function GraphEdges({
  edges,
  focusId,
  visibleIds,
}: {
  edges: Edge[];
  focusId: string | null;
  visibleIds: ReadonlySet<string>;
}) {
  return (
    <g className="graph-edges">
      {edges.map(({ edge, kind, d }) => {
        const touchesFocus = focusId === edge.a || focusId === edge.b;
        return (
          <path
            key={`${edge.a}|${edge.b}`}
            className={
              "graph-edge" +
              (focusId ? (touchesFocus ? " lit" : " hushed") : "") +
              (visibleIds.has(edge.a) && visibleIds.has(edge.b) ? "" : " dimmed")
            }
            d={d}
            stroke={KIND_COLOUR[kind]}
            strokeWidth={edge.weight > 1 ? 1.9 : 1.1}
            fill="none"
          />
        );
      })}
    </g>
  );
});

const GraphNodes = memo(function GraphNodes({
  translator,
  selectedId,
  focusId,
  related,
  visibleIds,
  onHover,
}: {
  translator: Translator;
  selectedId: string | null;
  focusId: string | null;
  related: ReadonlySet<string> | null;
  visibleIds: ReadonlySet<string>;
  onHover: (id: string | null) => void;
}) {
  const { nodes } = RELATIONS_LAYOUT;
  return (
    <g className="graph-nodes">
      {nodes.map((node) => {
        const character = CHARACTER_BY_ID.get(node.id);
        if (!character) return null;
        const r = nodeRadius(node.degree);
        const hushed = Boolean(related) && !related!.has(node.id);
        const name = shortLabel(translator.field(character, "name"));
        return (
          <g
            key={node.id}
            data-id={node.id}
            className={
              "graph-node" +
              (node.id === selectedId ? " selected" : "") +
              (node.id === focusId ? " focused" : "") +
              (hushed ? " hushed" : "") +
              (visibleIds.has(node.id) ? "" : " dimmed")
            }
            style={counterPlaced(node.x, node.y)}
            onPointerEnter={() => onHover(node.id)}
            onPointerLeave={() => onHover(null)}
          >
            <circle className="ring" r={r + 3.5} fill="none" stroke={node.colour} strokeWidth="2.4" filter="url(#glow)" />
            <circle r={r + 0.6} fill={node.colour} opacity=".5" />
            <g transform={`translate(${-r},${-r}) scale(${(r * 2) / 100})`}>
              <MedallionContent id={node.id} />
            </g>
            <text className="graph-label" y={r + 13} textAnchor="middle">
              {name}
            </text>
          </g>
        );
      })}
    </g>
  );
});
