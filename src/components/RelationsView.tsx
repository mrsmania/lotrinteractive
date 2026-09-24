import { memo, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import type { CSSProperties } from "react";
import { CHARACTER_BY_ID } from "../data/characters";
import { RELATIONS } from "../data/relations";
import type { RelationEdge, RelationKind } from "../data/relations";
import { GRAPH_H, GRAPH_W, RELATIONS_LAYOUT, nodeRadius } from "../lib/relationsLayout";
import type { Translator } from "../lib/i18n";
import { useZoomPan } from "../hooks/useZoomPan";
import { TOUCH_MIN_PX, coarsePointer, counterScale } from "../lib/counterScale";
import { Medallion, MedallionContent } from "./Medallion";
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
  /** Whether the phone's card for the selected character is showing. */
  peek: boolean;
  onSelect: (id: string) => void;
  /** Open the full sheet for the character the card is showing. */
  onExpand: () => void;
  onClosePeek: () => void;
  /** A tap on the open graph, on nobody. */
  onBackgroundTap?: () => void;
}

/** Below this width the view is a phone's; matches the CSS breakpoint. */
const NARROW_QUERY = "(max-width:880px)";
/** Where on screen, as a fraction from the top, the card keeps the picked character. */
const PEEK_FOCUS_Y = 0.3;

function subscribeNarrow(onChange: () => void) {
  const q = window.matchMedia(NARROW_QUERY);
  q.addEventListener("change", onChange);
  return () => q.removeEventListener("change", onChange);
}
const isNarrow = () => window.matchMedia(NARROW_QUERY).matches;

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
  peek,
  onSelect,
  onExpand,
  onClosePeek,
  onBackgroundTap,
}: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const compact = useSyncExternalStore(subscribeNarrow, isNarrow);
  const zoomPan = useZoomPan(svgRef, {
    width: GRAPH_W,
    height: GRAPH_H,
    onTap: (target) => {
      const id = target?.closest<SVGGElement>(".graph-node")?.dataset.id;
      if (id) pick(id);
      else onBackgroundTap?.();
    },
  });
  const [hoverId, setHoverId] = useState<string | null>(null);

  const { centreOn, glideTo, jumpTo, view } = zoomPan;
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

  // As on the map (see lib/counterScale), measured against a typical node.
  const [box, setBox] = useState({ w: 0, h: 0 });
  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setBox({ w: entry.contentRect.width, h: entry.contentRect.height });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const fit = box.w && box.h ? Math.min(box.w / GRAPH_W, box.h / GRAPH_H) : 0;

  // In a phone held upright the whole graph is a band across the middle, its
  // names too small to read. It opens a little closer, its ring filling the
  // width. Once, on the first measure, as the map does.
  const opened = useRef(false);
  useEffect(() => {
    if (opened.current || !box.w || !box.h) return;
    opened.current = true;
    if (box.w / box.h > (GRAPH_W / GRAPH_H) * 0.8) return;
    const k = 1.3;
    jumpTo(GRAPH_W / 2 - (GRAPH_W / 2) * k, GRAPH_H / 2 - (GRAPH_H / 2) * k, k);
  }, [box, jumpTo]);

  /**
   * Bring a character into view. On a phone the card covers the foot of the
   * screen, so the character is kept high, clear of it, rather than centred.
   */
  const bringIntoView = (id: string) => {
    const node = byId.get(id);
    if (!node) return;
    if (!compact || !fit) {
      centreOn(node, 1.8);
      return;
    }
    const k = Math.max(1.8, view.k);
    // The viewBox is letterboxed into the screen, so a height on screen is
    // found from the part of the viewBox that is showing.
    const y = GRAPH_H / 2 + (PEEK_FOCUS_Y - 0.5) * (box.h / fit);
    glideTo(GRAPH_W / 2 - node.x * k, y - node.y * k, k);
  };

  /** A character picked on the graph or on the card. */
  const pick = (id: string) => {
    onSelect(id);
    if (compact) bringIntoView(id);
  };

  // Bring a requested character into view, same contract as the map.
  useEffect(() => {
    if (!focusNonce || !selectedId) return;
    bringIntoView(selectedId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusNonce]);

  /** The picked character's connections, for the card: bonds first, strongest first. */
  const neighbours = useMemo(() => {
    if (!selectedId) return [];
    return edges
      .filter(({ edge }) => edge.a === selectedId || edge.b === selectedId)
      .map(({ edge, kind }) => ({
        id: edge.a === selectedId ? edge.b : edge.a,
        kind,
        weight: edge.weight,
      }))
      .filter((n) => visibleIds.has(n.id))
      .sort(
        (a, b) => KIND_ORDER.indexOf(a.kind) - KIND_ORDER.indexOf(b.kind) || b.weight - a.weight,
      );
  }, [selectedId, edges, visibleIds]);

  const counter = counterScale(
    view.k,
    fit * view.k,
    nodeRadius(4) * 2,
    coarsePointer() ? TOUCH_MIN_PX : 0,
  );
  const focusCharacter = focusId ? CHARACTER_BY_ID.get(focusId) : undefined;
  const focusDegree = related ? related.size - 1 : 0;
  const showPeek = peek && compact && Boolean(selectedId && CHARACTER_BY_ID.has(selectedId));

  return (
    <div className={"map-field graph-field" + (showPeek ? " peeking" : "")}>
      <svg
        id="graph"
        ref={svgRef}
        viewBox={`0 0 ${GRAPH_W} ${GRAPH_H}`}
        preserveAspectRatio="xMidYMid meet"
        {...zoomPan.handlers}
      >
        <g
          transform={`translate(${view.tx.toFixed(2)} ${view.ty.toFixed(2)}) scale(${view.k.toFixed(4)})`}
          style={{ "--counter": counter.toFixed(3) } as CSSProperties}
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

      {showPeek && (
        <PeekCard
          translator={translator}
          id={selectedId!}
          neighbours={neighbours}
          onPick={pick}
          onExpand={onExpand}
          onClose={onClosePeek}
        />
      )}
    </div>
  );
}

/**
 * The phone's stand-in for the character sheet in the connections view.
 *
 * The sheet fills a phone, and the point of opening somebody here is to see
 * their web, which the sheet then hides. So a pick opens this instead: a card
 * over the foot of the screen, with the web lit above it and the character
 * kept clear of it. It says who they are and holds their connections as a row
 * of medallions, each a tap from becoming the next pick, so the web can be
 * walked from one person to the next with a thumb. The full sheet is one more
 * tap away.
 */
function PeekCard({
  translator,
  id,
  neighbours,
  onPick,
  onExpand,
  onClose,
}: {
  translator: Translator;
  id: string;
  neighbours: { id: string; kind: RelationKind }[];
  onPick: (id: string) => void;
  onExpand: () => void;
  onClose: () => void;
}) {
  const t = translator.t;
  const character = CHARACTER_BY_ID.get(id)!;
  const links = useRef<HTMLDivElement>(null);
  // Each new person's row starts at its beginning.
  useEffect(() => {
    links.current?.scrollTo({ left: 0 });
  }, [id]);

  return (
    <section className="peek" aria-label={translator.field(character, "name")}>
      <button className="close" onClick={onClose} title={t("close")} aria-label={t("close")}>
        &times;
      </button>
      <button className="peek-head" onClick={onExpand}>
        <Medallion id={id} />
        <span>
          <b>{translator.field(character, "name")}</b>
          <small>{translator.field(character, "title")}</small>
          <em>
            {neighbours.length} {t("connectionCount")}
          </em>
        </span>
      </button>

      {neighbours.length > 0 ? (
        <div className="peek-links" ref={links}>
          {neighbours.map((n) => {
            const c = CHARACTER_BY_ID.get(n.id);
            if (!c) return null;
            return (
              <button
                key={n.id}
                style={{ "--kind": KIND_COLOUR[n.kind] } as CSSProperties}
                onClick={() => onPick(n.id)}
              >
                <Medallion id={n.id} />
                <span>{shortLabel(translator.field(c, "name"))}</span>
              </button>
            );
          })}
        </div>
      ) : (
        <p className="peek-none">{t("peekNone")}</p>
      )}

      <button className="button peek-more" onClick={onExpand}>
        {t("peekMore")}
      </button>
    </section>
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
            // Hover lights a web for the mouse only; a finger's tap selects.
            onPointerEnter={(ev) => ev.pointerType === "mouse" && onHover(node.id)}
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
