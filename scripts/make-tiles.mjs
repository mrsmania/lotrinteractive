/**
 * Cuts the map image into a pyramid of tiles.
 *
 *   node scripts/make-tiles.mjs
 *
 * The map is a 7680x4386 drawing, some 32MB as a PNG. Sending that to every
 * visitor to show a map three thousand pixels wide would be absurd, so it is
 * cut into square tiles at five resolutions, from the whole map in one small
 * tile down to full size. The page then asks only for the tiles it is showing
 * at the resolution it is showing them, which is a megabyte or so at the
 * opening view and a handful of tiles as you zoom in.
 *
 * Tiles land in public/images/map/<z>/<col>-<row>.webp, where z counts up from
 * 0 (the whole map in one tile) to LEVELS - 1 (the image at its own size). The
 * grid is derivable from the image size alone, so there is no manifest: see
 * `tileGrid` in src/lib/tiles.ts, which has to agree with TILE and LEVELS here.
 *
 * The source image is not in public/, because everything in public/ is copied
 * into the build and served. It is not in git either, being far too big; see
 * the README for where to put it.
 */
import { mkdir, readdir, rm, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";

const SOURCE = "map-source/map-detailed.png";
const OUT = "public/images/map";

/** Tile edge, in pixels of the tile itself. Must match src/lib/tiles.ts. */
const TILE = 512;
/** Resolutions, halving downwards from the image's own. Must match src/lib/tiles.ts. */
const LEVELS = 5;
/** Enough for a drawing in sepia ink; the paper grain is what costs the bytes. */
const QUALITY = 78;

async function main() {
  const source = path.resolve(SOURCE);
  try {
    await stat(source);
  } catch {
    exit(`no source image at ${SOURCE} — see the README`);
  }

  const { width, height } = await sharp(source, { limitInputPixels: false }).metadata();
  console.log(`${SOURCE}: ${width}x${height}`);

  await rm(OUT, { recursive: true, force: true });

  let count = 0;
  for (let z = 0; z < LEVELS; z++) {
    // At level z the image is shown at 1 / step of its own size, so a tile of
    // TILE pixels covers TILE * step pixels of the source.
    const step = 2 ** (LEVELS - 1 - z);
    const span = TILE * step;
    const cols = Math.ceil(width / span);
    const rows = Math.ceil(height / span);

    // Resize once per level rather than once per tile: scaling a crop of the
    // source would let each tile resample its own edge and leave seams.
    const scaled = sharp(
      z === LEVELS - 1
        ? source
        : await sharp(source, { limitInputPixels: false })
            .resize(Math.round(width / step), Math.round(height / step))
            .toBuffer(),
      { limitInputPixels: false },
    );
    const level = await scaled.metadata();

    await mkdir(path.join(OUT, String(z)), { recursive: true });
    for (let col = 0; col < cols; col++) {
      for (let row = 0; row < rows; row++) {
        const left = col * TILE;
        const top = row * TILE;
        await scaled
          .clone()
          .extract({
            left,
            top,
            width: Math.min(TILE, level.width - left),
            height: Math.min(TILE, level.height - top),
          })
          .webp({ quality: QUALITY })
          .toFile(path.join(OUT, String(z), `${col}-${row}.webp`));
        count++;
      }
    }
    console.log(`  z${z}: ${cols}x${rows} tiles at 1/${step}`);
  }

  console.log(`\n${count} tiles, ${(await weigh(OUT)) / 1e6} MB total`);
  console.log(`src/data/map.ts must say MAP_IMAGE_W = ${width}, MAP_IMAGE_H = ${height}`);
}

/** Total size of everything under a directory, in bytes. */
async function weigh(dir) {
  let total = 0;
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    total += entry.isDirectory() ? await weigh(full) : (await stat(full)).size;
  }
  return total;
}

function exit(message) {
  console.error(message);
  process.exit(1);
}

await main();
