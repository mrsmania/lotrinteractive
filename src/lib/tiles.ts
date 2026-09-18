import { MAP_IMAGE_H, MAP_IMAGE_W, MAP_W } from "../data/map";

/**
 * The tile pyramid.
 *
 * The map image is far too large to send whole, so scripts/make-tiles.mjs cuts
 * it into square tiles at five resolutions and the page asks only for the ones
 * it is showing. The grid follows from the image's size, so there is no
 * manifest to fetch and no round trip before the first tile: a URL can be
 * worked out from (level, column, row) alone.
 *
 * TILE and LEVELS have to agree with scripts/make-tiles.mjs.
 */

/** Tile edge, in pixels of the tile itself. */
export const TILE = 512;
/** Resolutions, 0 being the whole map in one tile and LEVELS - 1 its own size. */
export const LEVELS = 5;

/** Map units per pixel of the source image. */
const UNIT = MAP_W / MAP_IMAGE_W;

/** A rectangle of the map, in map units. */
export interface Rect {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
}

export interface Tile {
  key: string;
  href: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

/**
 * The coarsest level that still has a pixel for every pixel it will be drawn
 * on, given `density` screen pixels per map unit.
 *
 * Screen pixels, not device pixels: on a dense display the map is a shade
 * softer than it could be, which costs a quarter of the bytes. Zooming in
 * raises the density and fetches the sharper level anyway, so the detail is
 * never actually out of reach.
 */
export function levelFor(density: number): number {
  for (let z = 0; z < LEVELS - 1; z++) {
    // At level z the image is at 1 / 2^(LEVELS-1-z) of its own size.
    if (1 / UNIT / 2 ** (LEVELS - 1 - z) >= density) return z;
  }
  return LEVELS - 1;
}

/** The tiles of one level that fall within `view`. */
export function tilesIn(z: number, view: Rect): Tile[] {
  // A tile of TILE pixels at level z covers this much of the source image.
  const span = TILE * 2 ** (LEVELS - 1 - z);
  const step = span * UNIT;
  const cols = Math.ceil(MAP_IMAGE_W / span);
  const rows = Math.ceil(MAP_IMAGE_H / span);

  const first = (v: number) => Math.max(0, Math.floor(v / step));
  const last = (v: number, n: number) => Math.min(n - 1, Math.floor(v / step));

  const tiles: Tile[] = [];
  for (let col = first(view.x0); col <= last(view.x1, cols); col++) {
    for (let row = first(view.y0); row <= last(view.y1, rows); row++) {
      // The right and bottom edges of the map are short of a whole tile.
      const w = Math.min(span, MAP_IMAGE_W - col * span) * UNIT;
      const h = Math.min(span, MAP_IMAGE_H - row * span) * UNIT;
      tiles.push({
        key: `${z}/${col}-${row}`,
        href: `${import.meta.env.BASE_URL}images/map/${z}/${col}-${row}.webp`,
        x: col * step,
        y: row * step,
        // Tiles are drawn a hair wider than they are so that rounding cannot
        // leave a hairline of background showing between two of them.
        w: w + UNIT,
        h: h + UNIT,
      });
    }
  }
  return tiles;
}
