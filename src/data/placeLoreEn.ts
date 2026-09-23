import type { PlaceText } from "../types";
import { ERIADOR_EN } from "./placeLoreEn/eriador";
import { RIDDERMARK_EN } from "./placeLoreEn/riddermark";
import { MORDOR_EN } from "./placeLoreEn/mordor";
import { WILDERLAND_EN } from "./placeLoreEn/wilderland";

/**
 * English (UK) text for the places, keyed by place id. Anything missing falls
 * back to the German field on the place, which is why every field is optional —
 * the same arrangement as data/en.ts for the cast, and grouped the same way the
 * German is, one file per part of the story.
 */
export const PLACE_LORE_EN: Record<string, Partial<PlaceText>> = {
  ...ERIADOR_EN,
  ...RIDDERMARK_EN,
  ...MORDOR_EN,
  ...WILDERLAND_EN,
};

