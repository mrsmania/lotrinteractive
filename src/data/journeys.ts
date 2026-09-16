import type { Journey } from "../types";

/** Journeys of the main groups, drawn as dashed lines across the map. */
export const JOURNEYS: Journey[] = [
  {
    id: "gefaehrten",
    name: "Die Gemeinschaft",
    colour: "#a8842e",
    places: [
      "beutelsend",
      "bree",
      "wetterspitze",
      "bruchtal",
      "caradhras",
      "moria",
      "lorien",
      "argonath",
      "amonhen"
    ]
  },
  {
    id: "ringtraeger",
    name: "Frodo und Sam",
    colour: "#8e3b2c",
    places: [
      "amonhen",
      "emynmuil",
      "totensuempfe",
      "morannon",
      "hennethannun",
      "minasmorgul",
      "cirithungol",
      "orodruin"
    ]
  },
  {
    id: "hobbits",
    name: "Merry und Pippin",
    colour: "#5c7f3c",
    places: ["amonhen", "fangorn", "isengart", "edoras", "minastirith"]
  },
  {
    id: "koenig",
    name: "Aragorn, Legolas, Gimli",
    colour: "#3f6f8c",
    places: ["amonhen", "fangorn", "edoras", "helmsklamm", "dunharg", "pelargir", "pelennor", "morannon"]
  }
];

/**
 * Who actually walked each journey. The original page kept this table inside
 * the function that decided whether to show a journey on a character sheet; it
 * lives here because the relationship graph needs it too.
 */
export const JOURNEY_MEMBERS: Record<string, string[]> = {
  gefaehrten: ["frodo", "sam", "merry", "pippin", "gandalf", "aragorn", "legolas", "gimli", "boromir"],
  ringtraeger: ["frodo", "sam", "gollum"],
  hobbits: ["merry", "pippin"],
  koenig: ["aragorn", "legolas", "gimli"],
};

/** Whether a character belongs to a journey. */
export function journeyHas(journeyId: string, characterId: string): boolean {
  return (JOURNEY_MEMBERS[journeyId] ?? []).includes(characterId);
}
