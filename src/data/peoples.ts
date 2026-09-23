import type { People } from "../types";

/**
 * The peoples, keyed by id. The ids are English, like every other id in the
 * codebase; the German wording the page is authored in is data here, and
 * PEOPLES_EN in lib/i18n.ts carries the English.
 */
export const PEOPLES: Record<string, People> = {
  hobbit: { colour: "#9cc464", singular: "Hobbit", plural: "Hobbits" },
  man: { colour: "#d0a44f", singular: "Mensch", plural: "Menschen" },
  elf: { colour: "#86c9d6", singular: "Elb", plural: "Elben" },
  dwarf: { colour: "#cf7f3a", singular: "Zwerg", plural: "Zwerge" },
  istar: { colour: "#e6e0d2", singular: "Istar", plural: "Istari" },
  orc: { colour: "#9aa33f", singular: "Ork", plural: "Orks und Uruks" },
  nazgul: { colour: "#9a8ec4", singular: "Nazgûl", plural: "Nazgûl" },
  maia: { colour: "#c0392b", singular: "Maia", plural: "Maiar" },
  ent: { colour: "#4e8a6a", singular: "Ent", plural: "Ents" },
  creature: { colour: "#c98fb0", singular: "Wesen", plural: "Wesen und Tiere" },
  dragon: { colour: "#e05a2b", singular: "Drache", plural: "Drachen" }
};
