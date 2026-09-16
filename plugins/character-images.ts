import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import type { Plugin } from "vite";

/**
 * Reads public/images/characters/ at build time and exposes the result as a
 * virtual module, so the app never has to probe the server with speculative
 * requests to find out which characters have a picture.
 *
 * The module maps a character id to a file name:
 *   { frodo: "frodo.jpg", gandalf: "gandalf.png" }
 *
 * A character with no matching file simply has no entry, and the UI falls back
 * to the single shared placeholder.
 */
const VIRTUAL_ID = "virtual:character-images";
const RESOLVED_ID = "\0" + VIRTUAL_ID;

const EXTENSIONS = new Set(["jpg", "jpeg", "png", "webp", "avif", "gif", "svg"]);

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

export function characterImages(): Plugin {
  const folder = "public/images/characters";
  let dir = "";

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
      return `export default ${JSON.stringify(readCharacterImages(dir))};`;
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
      server.watcher.on("unlink", refresh);
    },
  };
}
