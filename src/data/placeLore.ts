import type { PlaceGroup, PlaceLore } from "../types";
import { ERIADOR } from "./placeLore/eriador";
import { RIDDERMARK } from "./placeLore/riddermark";
import { MORDOR } from "./placeLore/mordor";
import { WILDERLAND } from "./placeLore/wilderland";
import { AFTER } from "./placeLore/after";

/**
 * The places that have a sheet of their own, keyed by the same ids as PLACES.
 *
 * PLACES says where a place is. This says what it is. Not every entry in PLACES
 * has an entry here, and that is the point: a route needs Tharbad to turn at,
 * but Tharbad has no story worth a page.
 *
 * Authored in German like the rest; English lives in data/placeLoreEn.ts and is
 * looked up per field with a fallback. The sheets themselves are grouped one
 * file per part of the story, under data/placeLore/.
 *
 * Two things are deliberately not fields: who lives at a place (from `home` on
 * each character, which is what puts the medallions on the map) and which
 * journeys pass through it (from the routes in journeys.ts). The sheet derives
 * both, so the two piles of content point at each other for free.
 *
 * On `bookFilm`: for a place this is not an aside. The rule is to name what the
 * film shows, name what the book says, and say which one is the invention —
 * never "the film emphasises" or "the book is subtler", which is a way of
 * saying nothing. Where two places share one divergence their sheets have to
 * agree: Pelargir and the Pelennor tell the same story about the Dead, and it
 * is not the film's.
 */

/** The order the groups are shown in, which is roughly the order of the road. */
export const PLACE_GROUPS: PlaceGroup[] = [
  "eriador",
  "riddermark",
  "mordor",
  "wilderland",
  "after",
];

export const PLACE_LORE: PlaceLore[] = [
  ...ERIADOR,
  ...RIDDERMARK,
  ...MORDOR,
  ...WILDERLAND,
  ...AFTER,
];

/** The places with a sheet, by id. */
export const PLACE_LORE_BY_ID = new Map(PLACE_LORE.map((p) => [p.id, p]));

/** Whether a place has a sheet of its own. */
export function hasLore(placeId: string): boolean {
  return PLACE_LORE_BY_ID.has(placeId);
}
