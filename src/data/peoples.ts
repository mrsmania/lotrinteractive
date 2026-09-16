import type { People } from "../types";

/**
 * The peoples. Keys are the German names, which the original page used as ids
 * and which the data still refers to; PEOPLES_EN in lib/i18n.ts carries the
 * English wording shown to the reader.
 */
export const PEOPLES: Record<string, People> = {
  Hobbit: { colour: "#9cc464", plural: "Hobbits" },
  Mensch: { colour: "#d0a44f", plural: "Menschen" },
  Elb: { colour: "#86c9d6", plural: "Elben" },
  Zwerg: { colour: "#cf7f3a", plural: "Zwerge" },
  Istar: { colour: "#e6e0d2", plural: "Istari" },
  Ork: { colour: "#9aa33f", plural: "Orks und Uruks" },
  "Nazgûl": { colour: "#9a8ec4", plural: "Nazgûl" },
  Maia: { colour: "#c0392b", plural: "Maiar" },
  Ent: { colour: "#4e8a6a", plural: "Ents" },
  Wesen: { colour: "#c98fb0", plural: "Wesen und Tiere" },
  Drache: { colour: "#e05a2b", plural: "Drachen" }
};
