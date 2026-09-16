# The connections map

A second view of the same cast: instead of *where* characters are, *how they
are tied to each other*. Reached from the Map / Connections switch in the
header.

## The graph

`src/data/relations.ts` derives it from data that was already there. An edge is
an unordered pair, deduplicated, carrying every reason those two are connected:

| kind      | derived from                                      | edges |
| --------- | ------------------------------------------------- | ----- |
| `bond`    | the authored `bonds` array on each character      | 165   |
| `journey` | both walked the same entry in `JOURNEY_MEMBERS`   | 38    |
| `place`   | both live in the same place (fewer than 7 do)     | 36    |

201 edges over 57 characters, nobody isolated, 36 edges backed by more than one
reason. Most connected: Gandalf (28), then Frodo and Aragorn (22 each).

Each kind is a layer the reader can switch off in the header. An edge is drawn
in the colour of its highest-ranking *enabled* kind, `bond` > `journey` >
`place`, so turning off Bonds does not hide a pair who also travelled together,
it recolours their line green.

## The layout

`src/lib/relationsLayout.ts`, Fruchterman-Reingold, run once at module load and
cached. 57 nodes and 201 edges is small enough that naive O(n²) repulsion takes
a few milliseconds, so there is no case for a simulation library, and none for
animating it either.

It is deterministic on purpose. The picture is the same on every visit, or
nobody can learn its shape: fixed seed, fixed iteration count, and a starting
arrangement (a circle grouped by people) chosen rather than random.

Three things were needed beyond the textbook algorithm, each of which is
commented where it happens:

- **Degree damping.** Hubs are pulled on by many edges at once and end up in a
  knot in the middle. Damping each node's response by `1/sqrt(degree)` lets
  hubs hold station while leaves orbit them, which is what makes the clusters
  legible.
- **A separation pass.** The simulation treats nodes as points, so tightly
  bound pairs (Merry and Pippin) end up closer than their medallions are wide.
  Sixty relaxation passes push overlapping pairs apart, clamped to the margins,
  which also evens out the density.
- **Short labels.** 57 full names do not fit. The label is the first word with
  any leading article dropped, so "The Witch-king of Angmar" reads
  "Witch-king". The full name is one click away on the character sheet.

## Reading it

- **Hover** a character to light their web: their edges brighten, everyone
  outside it fades, and labels outside it disappear. The legend names them and
  counts their connections.
- **Click** to open the same character sheet the map uses.
- The sidebar's search and people filters dim non-matching nodes, exactly as
  they dim map markers.

## What is shared with the map view

`selectedId`, `query`, `activePeoples` and `visibleIds` live in `App`, so both
views filter and select against the same state and the sidebar drives either
one. `useZoomPan` takes the viewBox size as an argument and serves both.
`Medallion` and the circular clip and glow in `SharedDefs` are common. People
colours come from `PEOPLES[c.people].colour` in both.

## Ideas not taken

- **Geographic layout.** Seeding node positions from `MARKERS.positions` would
  keep Middle-earth's geography in the graph. Attractive, but a much harder
  layout problem, and the clusters that the free layout finds (the Fellowship,
  Rohan, the house of Durin) are more informative than geography here.
- **An arc diagram** was the cheaper option considered first. The force layout
  earns its extra work by showing the cluster structure; an arc diagram would
  only have ordered the cast.
- **Edge bundling** would tidy the dense middle, but it makes individual
  connections harder to follow, which is the one thing this view is for.
