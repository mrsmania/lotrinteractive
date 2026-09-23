# lotrinteractive

An interactive map of Middle-earth and the characters of *The Lord of the
Rings* and *The Hobbit*, with a second view showing how the characters are
connected to one another. React + TypeScript, built with Vite, deployed to GitHub Pages.

Live: https://mrsmania.github.io/lotrinteractive/

## Running it

```bash
npm install
npm run dev      # http://localhost:5173/lotrinteractive/
npm run build    # type-checks, then writes dist/
npm run preview  # serve the built output
npm run tiles    # re-cut the map image, only needed if it changes
```

## Character pictures

Drop an image into `public/images/characters/`, named after the character id:

```
public/images/characters/frodo.jpg
public/images/characters/gandalf.png
```

Accepted: `jpg` `jpeg` `png` `webp` `avif` `gif` `svg`. Square images around
400x400 work best, since they are cropped to a circle and shown small.

Anyone without a file gets the shared placeholder. The folder is read at build
time by `plugins/character-images.ts` and handed to the app as a manifest, so
nothing is requested speculatively and a missing picture never causes a failed
request. During `npm run dev` the folder is watched, so adding a file reloads
the page.

Character ids are the `id` field in `src/data/characters.ts`.

## Layout

```
plugins/character-images.ts   reads public/images/characters/ into a virtual module
scripts/make-tiles.mjs        cuts the map image into public/images/map/
src/data/                     places, peoples, characters, English text, journeys,
                              map metrics, and the relationship graph
src/lib/                      journey paths, tile grid, i18n, image lookup,
                              marker placement, graph layout
src/components/               Header, Sidebar, MapView, MapTiles, Journeys,
                              RelationsView, CharacterSheet, Legend
src/hooks/useZoomPan.ts       zoom and pan, shared by both views
docs/relations-map.md         how the connections view works
```

## The map

The world is a drawn map of Middle-earth, 7680x4386 pixels and about 32MB as a
PNG. Nobody is going to be sent 32MB to look at a map two thousand pixels wide,
so `npm run tiles` cuts it into 512-pixel tiles at five resolutions — the whole
map in one 28KB tile, then halving steps up to its own size — and the page asks
only for the tiles it is showing at the resolution it is showing them. Opening
the site costs a few hundred kilobytes; zooming in fetches a handful of tiles
for the part you are looking at.

`src/components/MapTiles.tsx` draws every level from the coarsest up to the one
the view deserves, one over another, so there is never a hole to look at while
a tile is in flight and the map sharpens as the better tiles arrive. The grid
follows from the image's size, so `src/lib/tiles.ts` can work a tile's URL out
from (level, column, row) and there is no manifest to fetch first. TILE and
LEVELS there have to agree with `scripts/make-tiles.mjs`.

Tiles are chosen to match CSS pixels rather than device pixels: on a dense
display the map is a shade softer than it could be and costs a quarter of the
bytes. Zooming in raises the density and fetches the sharper level anyway.

The source image lives in `map-source/`, which is outside `public/` — anything
in `public/` is copied into the build and served — and is not in git, being far
too big for it. The tiles under `public/images/map/` are what the site serves,
and they are committed. To change the map, drop the new image in as
`map-source/map-detailed.png`, run `npm run tiles`, and update `MAP_IMAGE_W`
and `MAP_IMAGE_H` in `src/data/map.ts` if its size differs.

What the app lays over the map — the journeys and the character medallions —
lives in the fixed 1600 x 913.75 space declared in `src/data/map.ts`, which is
the image at a 4.8th of its pixel size. A map coordinate is therefore the pixel
position on the image divided by 4.8, which is what makes a place's position
checkable against the image by eye.

The app draws nothing for a place: no symbol and no name. The map letters and
draws every one of them already, and a second set in another typeface only
argued with it. What the app has to say about a place it says through the
medallion standing on it, and `PLACES` in `src/data/places.ts` is now purely
where that medallion stands, where a journey turns, and where the map goes when
you ask to be shown someone.

Medallions fan out above the place they belong to, which keeps them clear of
the caption the map draws under it. A few places the map letters from above
instead — Fangorn is named across the middle of its own forest — and those set
`fan: "down"` so the medallions go the other way and leave the name to be read.
It settles neighbours too: Osgiliath is ten map units from Minas Tirith, and
with both fanning the same way its one medallion stood in the outermost of the
City's five.

Each place fans out only its own, though, and nothing stopped two places from
doing it into the same piece of paper: Shagrat stood on the Witch-king, two map
units apart, one of them simply invisible under the other. Neighbouring places
cannot be solved by hand — moving one lands it on the next — so `separate` in
`src/lib/markers.ts` relaxes the overlaps away afterwards, pushing any two
medallions apart until they clear. A medallion may be carried at most its own
radius off the arc it was given, so it still reads as belonging to its place
and its spoke still points somewhere sensible. The pass runs over the cast in
order, so the layout is the same every time.

The dot marking a crowded place and the thin lines out to its medallions belong
to those medallions, and are dimmed by the people filter along with them. A
spoke left behind points at somebody who is no longer there.

Places were read off the image itself. It names nearly all of them, so
Rivendell, Bree, Weathertop, Moria, Erebor, Esgaroth, Isengard, Edoras, Minas
Tirith, Mount Doom and the rest sit on the very symbol the map draws for them;
the handful it does not name (Cirith Ungol, Henneth Annûn, Rhosgobel, the
Woodland Realm, Tuckborough) were placed from the rivers, passes and mountains
around them.

Medallion geometry was authored for the app's first, drawn map, whose
1000-unit width held Middle-earth alone; this map holds it in 1600, so keeping
the size they had on screen would mean 1.6. But that map was drawn to be
written over and this one is not, so `MARKER_SCALE` in `src/data/map.ts` sets
them at well under half that — small enough to read the map through them. It is
the one number to change if they want to be larger or smaller.

Small enough, though, and a medallion stops being visible at all: everything
that gave it an edge — the gold frame, its dark contour — is drawn in the
picture's own 0..100 space and goes under a pixel as the picture shrinks, over
a map that is itself full of ink. So the map draws its own rim instead, stated
in map units and not scaled with the picture: a dark contour with the people's
colour laid over its middle. That is also what makes the peoples legible at a
glance, which is what the legend promises. The picture inside it is no longer
toned down to sit in the paper; the rim does that job now, and the toning only
took away the contrast that lets a face be seen.

## The journeys

Ten routes are drawn over the map: Bilbo and the Dwarves; Frodo and Sam;
Boromir; Merry; Pippin; Aragorn; Legolas and Gimli; Gandalf the Grey and
Gandalf the White, who are one person and two journeys; and Sméagol and Gollum.
Every one of them is off when the page opens, and the legend's key is the
switch that draws it.

There is no line for the Fellowship. It was the road every one of its members
walked, drawn a second time on top of them, so each of them carries it instead,
and where they join it differs: Frodo and Sam, Merry and Pippin leave Hobbiton;
Aragorn's line starts at Bree, where the story finds him; Legolas and Gimli's at
Rivendell; and Boromir comes up to Rivendell from the other end of the map, a
hundred and ten days out of Minas Tirith. They part at Amon Hen. The Fellowship
survives as a company in `JOURNEY_MEMBERS`, along with the pairs and threes that
no longer have a line of their own, and that table rather than the drawn routes
is what the connections view reads — so the nine of them are still fellow
travellers there.

### Following the map

A route is places and bends. A bend is a bare point in the same map units as a
place — the turn of a river, the foot of a pass, a ford — somewhere the road
goes but nobody stops, and the character sheets leave them out when they say in
words where a journey went. They are what lets a line follow what the map draws
rather than cut across it.

Where the Company went by boat the line is *in* the Anduin: every meander the
map draws between the mouth of the Silverlode and the island above the falls is
a bend of the route. The Road east crosses the Hoarwell where the Last Bridge
is, the ride from Isengard to the siege keeps north of the White Mountains, and
Frodo rounds the northern tip of the Ephel Dúath into Ithilien instead of
walking over it. Where a company turned back, the line turns back: out of
Hollin the road climbs towards the Redhorn Gate, gives up, and comes down again
to the West-gate, which is the shape the attempt on Caradhras actually had.

Every bend was read off the map image itself. `map-source/map-detailed.png` at
4.8 pixels to the map unit is the authority; the pyramid under
`public/images/map/` is only what the site serves. The way to check a route is
to draw it back onto that image and look — three legs that crossed mountain
ranges they should have skirted were caught that way and no other.

Stretches walked by more than one company — the Road east, the Anduin, the
Paths of the Dead — are written once at the top of `src/data/journeys.ts` and
spread into each route. That is not only to save repeating them. Two routes
passing through the same point between the same neighbours get the same tangent
there, so sharing the arrays is what makes the lines run exactly parallel for as
long as the companies were together.

### Drawing and undrawing

Switching a path on draws it from its first place to its last; switching it off
takes it away at once. Drawing is one CSS transition on `stroke-dashoffset`:
each path declares `pathLength="1"`, so a single dash of 1 covers the whole
route whatever its real length and the offset runs between 1 and 0 for all ten
alike, with nothing to measure in the browser.

The transition is declared on the `.on` class and not on the rule beneath it,
which is what makes going off instant. A transition is chosen from the style the
element is moving *to*: adding the class moves it to a style that has one and
the line draws; removing the class moves it to a style that has none and the
line is simply gone. Watching a road unwind is no use to anybody who has just
asked to be rid of it.

How long it takes is worked out per path in `src/lib/buildMap.ts` from the
length of the route, so the lines all travel at the same speed rather than
taking the same time: two seconds for Bilbo, six for Gollum, who goes furthest.
`DRAW_SPEED` there is the one number to change to make them quicker or slower.

The lines used to be dashed and to march for ever. That cost a repaint of the
whole map several times a second for as long as the page was open;
`stroke-dashoffset` cannot be animated on the compositor, and each repaint
re-rasterised the lot. Drawing on demand costs the same repaints while a line is
being drawn, once, when the reader asks for it.

### Lines that share a road

Five journeys leave the Shire together and six come down the Anduin, so a line
drawn on top of another would be the only one you could see. Each journey keeps
one slot in a fan `RIBBON_GAP` wide, and `smoothPath` shifts its points sideways
by that much before drawing the curve through them. A journey keeps its slot
whether or not anything else is on, so a road looks the same however the reader
arrived at it.

Sideways means perpendicular to the way the route is travelling — but measured
over a window of the route either side of each point, not from its immediate
neighbours. On a traced river the neighbours are three or four map units apart
and point every which way; a neighbour-wise normal swings the offset round with
every meander and ties the line in knots, which is what the outermost journeys
did on the Anduin. `OFFSET_WINDOW` in `src/lib/draw.ts` is how far along the
route the direction is taken over: far enough to look past the meanders and see
the way the river is going, so the whole meandering ribbon shifts across as one
piece and the lines stay parallel and in order through every bend.

## The connections view

The connections view (`src/components/RelationsView.tsx`) draws the character
relationship graph derived in `src/data/relations.ts`, positioned by a
deterministic force-directed layout in `src/lib/relationsLayout.ts` that runs
once at startup. Hovering a character lights their web; clicking opens the same
character sheet. See [docs/relations-map.md](docs/relations-map.md).

Both views share their filter and selection state, which lives in `App`, so the
sidebar drives either one.

## Names

Every identifier in the codebase is English — place ids, people ids, journey
ids, everything. The text is another matter: it is authored in German, so
`Bruchtal` and `Mensch` and `Freie Völker` are values, never keys. English is
looked up per field with a fallback, in `src/data/en.ts` for the character text
and the tables in `src/lib/i18n.ts` for everything else. Switching language is
pure state, so neither view is disturbed.

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages. Because the site is served from a subpath, `base` is
set to `/lotrinteractive/` in `vite.config.ts`; asset URLs go through
`import.meta.env.BASE_URL`.

## Origin

Ported from a single 2,500-line HTML file (`mittelerde.html`), whose drawn
map — coastline, mountains, forests, rivers, region captions — the app carried
over unchanged until the tiled map replaced it. All the character text is still
the original's.
