/** A place on the map. Keys of PLACES are used as ids throughout. */
export interface Place {
  /** Full name, as authored (German). */
  name: string;
  /** Shorter name, used where the full one would crowd the map. */
  shortName?: string;
  x: number;
  y: number;
  /**
   * Which way the medallions standing here are fanned out. Up by default,
   * which keeps them clear of the caption the map draws under a place. Down
   * where the map letters the place above it instead, as it does Fangorn.
   */
  fan?: "up" | "down";
}

/** A people: Hobbit, Elf, Dwarf and so on. Keys of PEOPLES are the ids. */
export interface People {
  /** Colour used for this people across map, chips and legend. */
  colour: string;
  /** Singular, as authored (German). */
  singular: string;
  /** Plural form, as authored (German). */
  plural: string;
}

/**
 * Portrait parameters for the procedurally drawn faces of the original
 * single-file version. The UI now shows a picture from
 * portrait-source/ or the shared placeholder instead, so nothing
 * reads these. They are kept with the data so drawn portraits could be
 * restored without re-authoring seventy-odd descriptions.
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
  /** Asides, shown as loose margin notes under the sheet's last section. */
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

/**
 * A point a route bends through that is not a place: the turn of a river, the
 * foot of a pass, a ford. In the same map units as Place.
 */
export type Bend = readonly [number, number];

/** One step of a route: a place id, or a bend between two places. */
export type Step = string | Bend;

/** A journey drawn as a line through a sequence of places and bends. */
export interface Journey {
  id: string;
  name: string;
  colour: string;
  /** Places and the bends between them, in order of travel. */
  route: Step[];
}

/** Whether a step names a place rather than being a bare bend. */
export function isPlaceStep(step: Step): step is string {
  return typeof step === "string";
}

/**
 * Text fields of a place that exist both as authored (German) and in EN, the
 * same arrangement as CharacterText.
 */
export interface PlaceText {
  /** One line of its own: "Der Zwergenbau", "Die Weisse Stadt". */
  title: string;
  /** Which book it belongs to, as a character's `source` does. */
  source: string;
  /** The region it lies in: Eriador, Rohan, Mordor. */
  region: string;
  /** What kind of thing it is: city, pass, forest, ruin, tower, marsh. */
  kind: string;
  /** Where it is in relation to what is around it, in one line. */
  location: string;
  /**
   * Sindarin, Quenya, Westron, Rohirric and Dwarvish forms. Places carry far
   * more names than people do, and which name is used says who is speaking.
   */
  otherNames?: string;
  /**
   * Who raised it. Half of Middle-earth's strong places were built by one
   * people and are held by another, and nothing else in the data shows that.
   */
  builtBy?: string;
  /** Who holds it during the War of the Ring. Nobody holds a marsh. */
  heldBy?: string;
  /** When it came to be, and when it fell. */
  age?: string;
  /** What it is. */
  bio: string;
  /** What you would see standing there. */
  appearance?: string;
  /**
   * What it is *like* — and only where that is a moral or unnatural quality:
   * the malice of Caradhras, the dread on the Barrow-downs, the pull of the
   * Dead Marshes. Left empty for places that are only places.
   */
  nature?: string;
  /** What becomes of it. */
  fate: string;
  /** What happened here, in order. */
  events?: string[];
  /**
   * Where the films depart. On a place sheet this is not an aside: it names
   * what the film shows, what the book says, and which one is the invention.
   */
  bookFilm?: string;
  /** Asides, shown as loose margin notes. */
  notes?: string[];
}

import type { PlaceIconName } from "./components/PlaceIcon";

/** Which part of the story a place belongs to, for grouping the list. */
export type PlaceGroup = "eriador" | "riddermark" | "mordor" | "wilderland" | "after";

/** A place with a sheet of its own. Not every entry in PLACES has one. */
export interface PlaceLore extends PlaceText {
  /** Key of PLACES. */
  id: string;
  group: PlaceGroup;
  /** Which symbol the map draws in its ring. */
  icon: PlaceIconName;
  /**
   * Where the ring sits, in map units from the place itself. Authored by eye
   * against the map image: the ring goes beside the name the map letters, near
   * enough to belong to it and clear enough not to cover it. There is no rule
   * that works for all of them, because the map letters some places above,
   * some below and some to one side.
   */
  mark: Bend;
}

/** Which pile the sidebar is showing. */
export type SidebarTab = "peoples" | "places";

export type Language = "en" | "de";

/** Which of the two views of the cast is on screen. */
export type ViewName = "map" | "relations";
