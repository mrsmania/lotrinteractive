import MANIFEST from "virtual:character-images";

/**
 * Character pictures live in public/images/characters/, named after the
 * character id (frodo.jpg, gandalf.png, ...).
 *
 * The folder is read at build time by plugins/character-images.ts and handed
 * over as a manifest, so the app knows up front which characters have a
 * picture. Nothing is requested speculatively and a missing file never
 * produces a failed request: the UI simply draws the shared placeholder.
 */
const FOLDER = "images/characters/";

export function characterImageUrl(id: string): string | null {
  const file = MANIFEST[id.toLowerCase()];
  if (!file) return null;
  // BASE_URL already ends in a slash and carries the /lotrinteractive/ prefix
  // the deployed site is served under.
  return import.meta.env.BASE_URL + FOLDER + encodeURIComponent(file);
}

export function hasCharacterImage(id: string): boolean {
  return id.toLowerCase() in MANIFEST;
}

/** How many characters currently have a picture. Handy while filling the folder. */
export function characterImageCount(): number {
  return Object.keys(MANIFEST).length;
}
