import { createHash } from "node:crypto";
import { readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import sharp from "sharp";
import type { Plugin } from "vite";

/**
 * Reads portrait-source/ at build time and exposes the result as a
 * virtual module, so the app never has to probe the server with speculative
 * requests to find out which characters have a picture.
 *
 * The pictures in that folder are whatever size they were found at, some of
 * them thousands of pixels across, and the largest a medallion is ever drawn is
 * the character sheet's 112. Sending them as they are cost the first visit
 * eight megabytes, and the map had to scale every one of them down again on
 * each frame of a pan. So what the page is given instead is a square thumbnail
 * of each, PORTRAIT pixels on a side and cropped to the middle just as the
 * medallion's `xMidYMid slice` would crop it: made on request while `npm run
 * dev` is running, and written into the build by `npm run build`. The folder
 * stays the one place a picture has to be dropped.
 *
 * The module maps a character id to the thumbnail's file name, which carries a
 * hash of the source so a replaced picture is never served stale from a cache:
 *   { frodo: "frodo.1a2b3c4d.webp", gandalf: "gandalf.5e6f7a8b.webp" }
 *
 * A character with no matching file simply has no entry, and the UI falls back
 * to the single shared placeholder.
 */
const VIRTUAL_ID = "virtual:character-images";
const RESOLVED_ID = "\0" + VIRTUAL_ID;

const EXTENSIONS = new Set(["jpg", "jpeg", "png", "webp", "avif", "gif", "svg"]);

/** Thumbnail edge: twice the character sheet's 112px medallion, for dense screens. */
const PORTRAIT = 240;
const QUALITY = 80;
/** Where the thumbnails are served from, under the site's base. Must match src/lib/images.ts. */
const OUT = "images/portraits/";

export function readCharacterImages(dir: string): Record<string, string> {
  let entries: string[];
  try {
    entries = readdirSync(dir);
  } catch {
    // Folder missing is a normal state: nobody has added pictures yet.
    return {};
  }

  const found: Record<string, string> = {};
  for (const name of entries.sort()) {
    const dot = name.lastIndexOf(".");
    if (dot <= 0) continue;
    const ext = name.slice(dot + 1).toLowerCase();
    if (!EXTENSIONS.has(ext)) continue;
    const id = name.slice(0, dot).toLowerCase();
    // First match wins, which is why the listing is sorted: the result is
    // stable when someone drops both frodo.jpg and frodo.png in the folder.
    if (!(id in found)) found[id] = name;
  }
  return found;
}

interface Portrait {
  /** The picture as it was dropped in the folder. */
  source: string;
  /** What the page asks for, relative to OUT. */
  file: string;
}

function readPortraits(dir: string): Record<string, Portrait> {
  const out: Record<string, Portrait> = {};
  for (const [id, name] of Object.entries(readCharacterImages(dir))) {
    const source = resolve(dir, name);
    const hash = createHash("sha1").update(readFileSync(source)).digest("hex").slice(0, 8);
    out[id] = { source, file: `${id}.${hash}.webp` };
  }
  return out;
}

function makeThumbnail(source: string): Promise<Buffer> {
  return sharp(source)
    .resize(PORTRAIT, PORTRAIT, { fit: "cover", position: "centre" })
    .webp({ quality: QUALITY })
    .toBuffer();
}

export function characterImages(): Plugin {
  const folder = "portrait-source";
  let dir = "";
  let portraits: Record<string, Portrait> = {};

  return {
    name: "lotr-character-images",
    configResolved(config) {
      dir = resolve(config.root, folder);
    },
    resolveId(id) {
      return id === VIRTUAL_ID ? RESOLVED_ID : null;
    },
    load(id) {
      if (id !== RESOLVED_ID) return null;
      portraits = readPortraits(dir);
      const manifest = Object.fromEntries(Object.entries(portraits).map(([k, p]) => [k, p.file]));
      return `export default ${JSON.stringify(manifest)};`;
    },
    async generateBundle() {
      for (const p of Object.values(portraits)) {
        this.emitFile({ type: "asset", fileName: OUT + p.file, source: await makeThumbnail(p.source) });
      }
    },
    configureServer(server) {
      server.watcher.add(dir);
      const refresh = (path: string) => {
        if (!path.startsWith(dir)) return;
        const mod = server.moduleGraph.getModuleById(RESOLVED_ID);
        if (mod) server.moduleGraph.invalidateModule(mod);
        server.ws.send({ type: "full-reload" });
      };
      server.watcher.on("add", refresh);
      server.watcher.on("change", refresh);
      server.watcher.on("unlink", refresh);

      // Thumbnails are cut the first time they are asked for and kept; the
      // hash in the name is what makes a replaced picture a new request.
      const made = new Map<string, Promise<Buffer>>();
      server.middlewares.use((req, res, next) => {
        const at = req.url?.split("?")[0].indexOf("/" + OUT) ?? -1;
        if (at < 0) return next();
        const file = req.url!.split("?")[0].slice(at + OUT.length + 1);
        const portrait = Object.values(portraits).find((p) => p.file === file);
        if (!portrait) return next();
        if (!made.has(file)) made.set(file, makeThumbnail(portrait.source));
        made.get(file)!.then(
          (buf) => {
            res.setHeader("Content-Type", "image/webp");
            res.setHeader("Cache-Control", "max-age=31536000, immutable");
            res.end(buf);
          },
          (err) => next(err),
        );
      });
    },
  };
}
