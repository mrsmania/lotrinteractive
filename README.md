# lotrinteractive

An interactive map of Middle-earth and the characters of *The Lord of the
Rings*. React + TypeScript, built with Vite, deployed to GitHub Pages.

Live: https://mrsmania.github.io/lotrinteractive/

## Running it

```bash
npm install
npm run dev      # http://localhost:5173/lotrinteractive/
npm run build    # type-checks, then writes dist/
npm run preview  # serve the built output
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
src/data/                     places, peoples, characters, English text, journeys,
                              map geometry, and the relationship graph
src/lib/                      drawing helpers, map builder, i18n, image lookup,
                              marker placement
src/components/               Header, Sidebar, MapView, CharacterSheet, Legend
src/hooks/useZoomPan.ts       zoom and pan for the map SVG
docs/relations-map.md         plan for the character connections view
```

The world map is generated as SVG markup and injected once
(`src/lib/buildMap.ts`). It is several thousand static shapes that never
respond to the user, so running React's reconciler over them would cost a lot
and buy nothing. Everything that does respond to the user (markers, sidebar,
character sheet) is ordinary React.

The text is authored in German; English lives in `src/data/en.ts` and is looked
up per field with a fallback. Switching language is pure state, so the map view
is not disturbed.

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages. Because the site is served from a subpath, `base` is
set to `/lotrinteractive/` in `vite.config.ts`; asset URLs go through
`import.meta.env.BASE_URL`.

## Origin

Ported from a single 2,500-line HTML file (`mittelerde.html`). The map
geometry, the drawing helpers and all the character text are the original's,
carried over unchanged.
