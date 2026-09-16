# The connections map

A second view of the same cast: instead of *where* characters are, *how they
are tied to each other*.

Not built yet. The data layer is, and this is the plan for the rest.

## What already exists

`src/data/relations.ts` builds the graph at module load and is fully queryable
today:

```ts
RELATIONS              // RelationEdge[], unordered pairs, deduplicated
relationsFor(id)       // every edge touching a character
neighboursOf(id, kind) // connected character ids, optionally by kind
RELATION_DEGREE        // Map<id, number>, connections per character
```

An edge carries every reason two characters are connected:

| kind      | derived from                                   | edges |
| --------- | ---------------------------------------------- | ----- |
| `bond`    | the authored `bonds` array on each character   | 165   |
| `journey` | both walked the same entry in `JOURNEY_MEMBERS`| 38    |
| `place`   | both live in the same place (fewer than 7 do)  | 36    |

201 edges over 57 characters, nobody isolated, 36 edges backed by more than one
reason. Most connected: Gandalf (28), then Frodo and Aragorn (22 each).

`bond` is the one that carries the story and should be the default layer.
`journey` and `place` are cheap derivations, offered as toggles rather than
mixed in silently.

## What is missing

1. **A layout.** The graph has no coordinates. Two options worth trying:
   - *Force-directed*, computed once at startup from a fixed seed and cached,
     so the picture is the same on every visit. `d3-force` would do it, but 57
     nodes and 201 edges is small enough to hand-roll in an afternoon and skip
     the dependency.
   - *Arc diagram*: characters on a circle grouped by people, chords between
     them. No simulation, deterministic, and it reads well at this size. Worth
     prototyping first because it is much less work.

2. **A `RelationsView` component**, sibling to `MapView`, consuming the same
   props: `translator`, `selectedId`, `visibleIds`, `onSelect`.

3. **A view switch** in `Header`, and a `view: "map" | "relations"` state in
   `App`.

## Why the current structure already fits

The state a second view needs is deliberately not inside `MapView`:

- `selectedId`, `query`, `activePeoples` and `visibleIds` live in `App`, so both
  views filter and select against the same state and the sidebar keeps working
  unchanged.
- `Medallion` / `MedallionContent` are standalone and used by three components
  already, so graph nodes get character pictures for free.
- People colours come from `PEOPLES[c.people].colour`, the same source the map
  markers, chips and legend use, so the two views stay visually consistent.

The only thing to add is the layout and the component. No refactor of what is
there.

## One thing to decide first

Whether the connections map replaces the map view or sits beside it. Beside it
is the assumption above (a toggle, shared sidebar). If the two should ever be
seen together, `MARKERS.positions` could seed the layout so the graph keeps
Middle-earth's geography, which is a nicer idea but a harder layout problem.
