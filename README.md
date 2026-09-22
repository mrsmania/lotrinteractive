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
src/components/               Header, Sidebar, MapView, MapTiles, RelationsView,
                              CharacterSheet, Legend
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

The journeys are built as SVG markup and injected once (`src/lib/buildMap.ts`)
rather than as JSX. Nothing in them responds to the user and they never change,
so running React's reconciler over them on every hover would cost something and
buy nothing. Everything that does respond to the user (markers, sidebar,
character sheet) is ordinary React.

The connections view (`src/components/RelationsView.tsx`) draws the character
relationship graph derived in `src/data/relations.ts`, positioned by a
deterministic force-directed layout in `src/lib/relationsLayout.ts` that runs
once at startup. Hovering a character lights their web; clicking opens the same
character sheet. See [docs/relations-map.md](docs/relations-map.md).

Both views share their filter and selection state, which lives in `App`, so the
sidebar drives either one.

The text is authored in German; English lives in `src/data/en.ts` and is looked
up per field with a fallback. Switching language is pure state, so neither view
is disturbed.

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
