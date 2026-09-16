/** A place on the map. Keys of PLACES are used as ids throughout. */
export interface Place {
  /** Full name, as authored (German). */
  name: string;
  /** Shorter name, used where the full one would crowd the map. */
  shortName?: string;
  x: number;
  y: number;
  /** Which symbol to draw. See `placeSymbol` in lib/draw.ts. */
  kind: string;
  /** Drawn but never labelled. */
  unlabelled?: boolean;
}

/** A people: Hobbit, Elf, Dwarf and so on. Keys of PEOPLES are the ids. */
export interface People {
  /** Colour used for this people across map, chips and legend. */
  colour: string;
  /** Plural form, as authored (German). */
  plural: string;
}

/**
 * Portrait parameters for the procedurally drawn faces of the original
 * single-file version. The UI now shows a picture from
 * public/images/characters/ or the shared placeholder instead, so nothing
 * reads these. They are kept with the data so drawn portraits could be
 * restored without re-authoring 57 descriptions.
 */
export interface PortraitTraits {
  skin?: string;
  hair?: string;
  hairstyle?: string;
  beard?: string;
  eyes?: string;
  cloak?: string;
  headwear?: string;
  ears?: string;
  /** Set on the handful of characters drawn as a special case entirely. */
  special?: string;
}

/** Text fields that exist both as authored (German) and in EN. */
export interface CharacterText {
  name: string;
  title: string;
  allegiance: string;
  weapon: string;
  actor: string;
  source: string;
  bio: string;
  /** What becomes of them. */
  fate: string;
  lifespan?: string;
  otherNames?: string;
  descent?: string;
  appearance?: string;
  nature?: string;
  /** How the book and the film differ. */
  bookFilm?: string;
  /** Milestones, in order. */
  deeds?: string[];
  note?: string;
  notes?: string[];
}

export interface Character extends CharacterText {
  id: string;
  /** People id, a key of PEOPLES. */
  people: string;
  /** Home place id, a key of PLACES. */
  home: string;
  portrait: PortraitTraits;
  /**
   * Ids of closely connected characters. This is the raw material for the
   * relationship map: see src/data/relations.ts.
   */
  bonds?: string[];
}

/** A journey drawn as a dashed line through a sequence of places. */
export interface Journey {
  id: string;
  name: string;
  colour: string;
  /** Place ids, in order of travel. */
  places: string[];
}

export type Language = "en" | "de";

/** Which of the two views of the cast is on screen. */
export type ViewName = "map" | "relations";
