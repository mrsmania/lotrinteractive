/// <reference types="vite/client" />

/**
 * Built by plugins/character-images.ts from the contents of
 * portrait-source/. Maps a character id to its file name.
 */
declare module "virtual:character-images" {
  const manifest: Record<string, string>;
  export default manifest;
}
