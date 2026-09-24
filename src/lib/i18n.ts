import type {
  Character, CharacterText, Language, PlaceGroup, PlaceLore, PlaceText,
} from "../types";
import { PLACES } from "../data/places";
import { PEOPLES } from "../data/peoples";
import { EN } from "../data/en";
import { PLACE_LORE_EN } from "../data/placeLoreEn";

/**
 * Place and region names as they appear on the drawn map. The map is authored
 * in German, so this table is consulted only when the language is English.
 */
const MAP_NAMES: Record<string, string> = {
 "Die Grauen Anfurten":"The Grey Havens","Graue Anfurten":"Grey Havens","Lindon":"Lindon",
 "Hobbingen und Beutelsend":"Hobbiton and Bag End","Hobbingen":"Hobbiton","Bockland":"Buckland",
 "Tuckborn":"Tuckborough","Der Alte Wald":"The Old Forest","Hügelgräberhöhen":"The Barrow-downs",
 "Hügelgräber":"Barrow-downs","Bree":"Bree","Wetterspitze":"Weathertop","Trollhöhen":"The Trollshaws",
 "Bruchtal":"Rivendell","Carn Dûm in Angmar":"Carn Dûm in Angmar","Carn Dûm":"Carn Dûm",
 "Gundabad":"Mount Gundabad","Der Hohe Pass":"The High Pass","Caradhras":"Caradhras",
 "Moria, Khazad-dûm":"Moria, Khazad-dûm","Moria":"Moria","Eregion":"Eregion","Lothlórien":"Lothlórien",
 "Der Carrock":"The Carrock","Die Schwertelfelder":"The Gladden Fields","Schwertelfelder":"Gladden Fields","Rhosgobel":"Rhosgobel","Das Waldlandreich":"The Woodland Realm",
 "Waldlandreich":"Woodland Realm","Dol Guldur":"Dol Guldur","Erebor, der Einsame Berg":"Erebor, the Lonely Mountain",
 "Erebor":"Erebor","Thal":"Dale","Esgaroth am See":"Esgaroth upon the Lake","Esgaroth":"Esgaroth",
 "Die Eisenberge":"The Iron Hills","Fangorn":"Fangorn","Isengart und Orthanc":"Isengard and Orthanc",
 "Isengart":"Isengard","Helms Klamm":"Helm's Deep","Edoras":"Edoras",
 "Dunharg und die Pfade der Toten":"Dunharrow and the Paths of the Dead","Dunharg":"Dunharrow",
 "Tharbad":"Tharbad","Dunland":"Dunland","Argonath":"The Argonath",
 "Amon Hen und die Rauros-Fälle":"Amon Hen and the Falls of Rauros","Amon Hen":"Amon Hen",
 "Emyn Muil":"Emyn Muil","Die Totensümpfe":"The Dead Marshes","Totensümpfe":"Dead Marshes",
 "Das Schwarze Tor":"The Black Gate","Der Schicksalsberg":"Mount Doom","Schicksalsberg":"Mount Doom",
 "Barad-dûr":"Barad-dûr","Minas Morgul":"Minas Morgul","Cirith Ungol":"Cirith Ungol",
 "Kankras Lauer":"Shelob's Lair",
 "Osgiliath":"Osgiliath","Minas Tirith":"Minas Tirith","Die Pelennor-Felder":"The Pelennor Fields",
 "Henneth Annûn in Ithilien":"Henneth Annûn in Ithilien","Henneth Annûn":"Henneth Annûn",
 "Pelargir":"Pelargir","Dol Amroth":"Dol Amroth","Das Meer von Rhûn":"The Sea of Rhûn","Harad":"Harad",
 "Annúminas":"Annúminas","Fornost":"Fornost","Sarn-Furt":"Sarn Ford","Lond Daer":"Lond Daer",
 "Ost-in-Edhil":"Ost-in-Edhil","Cair Andros":"Cair Andros","Aldburg":"Aldburg","Calembel":"Calembel",
 "Linhir":"Linhir","Umbar":"Umbar",
 "Das Nebelgebirge":"The Misty Mountains","Ered Luin":"Ered Luin","Das Graue Gebirge":"The Grey Mountains",
 "Das Weisse Gebirge":"The White Mountains",
 "Ephel Dúath":"Ephel Dúath","Ered Lithui":"Ered Lithui",
 "Der Düsterwald":"Mirkwood","Düsterwald":"Mirkwood","Ithilien":"Ithilien","Eryn Vorn":"Eryn Vorn",
 "Nenuial":"Lake Evendim","Der Lange See":"The Long Lake","Nurnen":"Núrnen",
 "Forodwaith":"Forodwaith","Eisbucht von Forochel":"Ice Bay of Forochel","Angmar":"Angmar",
 "Eriador":"Eriador","Das Auenland":"The Shire","Minhiriath":"Minhiriath","Enedwaith":"Enedwaith",
 "Rohan":"Rohan","Gondor":"Gondor","Anfalas":"Anfalas","Mordor":"Mordor","Nurn":"Nurn",
 "Rhûn":"Rhûn","Rhovanion":"Rhovanion","Das Anduintal":"The Vales of Anduin","Dagorlad":"Dagorlad",
 "Die Braunen Lande":"The Brown Lands","Belegaer":"Belegaer","Bucht von Belfalas":"Bay of Belfalas",
 "Golf von Lhûn":"Gulf of Lune","Dorwinion":"Dorwinion","Khand":"Khand","MEILEN":"MILES",
 "Bilbo und die Zwerge":"Bilbo and the Dwarves","Frodo und Sam":"Frodo and Sam",
 "Merry":"Merry","Pippin":"Pippin","Aragorn":"Aragorn","Legolas und Gimli":"Legolas and Gimli",
 "Gandalf der Graue":"Gandalf the Grey","Gandalf der Weisse":"Gandalf the White",
 "Sméagol und Gollum":"Sméagol and Gollum"
};

/** Singular and plural for each people in English. */
const PEOPLES_EN: Record<string, [string, string]> = {
 hobbit:["Hobbit","Hobbits"],man:["Man","Men"],elf:["Elf","Elves"],dwarf:["Dwarf","Dwarves"],
 istar:["Istar","Istari"],orc:["Orc","Orcs and Uruks"],nazgul:["Nazgûl","Nazgûl"],
 maia:["Maia","Maiar"],ent:["Ent","Ents"],creature:["Creature","Creatures and Beasts"],
 dragon:["Dragon","Dragons"]
};

const UI = {
  en: {
    title: "The Map of Middle-earth",
    subtitle: "Characters of The Lord of the Rings and The Hobbit",
    characters: "Characters",
    search: "Search a character or place",
    journeys: "Journeys",
    journeysAll: "Draw every path",
    journeysNone: "Clear every path",
    random: "Random",
    language: "Deutsch",
    languageShort: "DE",
    languageTitle: "Auf Deutsch umschalten",
    peoples: "Peoples",
    places: "Places",
    whereItLies: "Where it lies",
    builtBy: "Built by",
    heldBy: "Held by",
    age: "Age",
    whatItIs: "What it is",
    whatYouSee: "What you would see",
    whatHappened: "What happened here",
    whatBecomesOfIt: "What becomes of it",
    whoIsFromHere: "Of this place",
    journeysThrough: "Journeys through here",
    groupEriador: "Eriador and the road east",
    groupRiddermark: "Anduin, Rohan and Gondor",
    groupMordor: "Mordor",
    groupWilderland: "Wilderland",
    groupAfter: "After",
    empty: "Nothing found. Try another spelling or clear the filters.",
    legendJourneys: "Journeys",
    legendMedallions: "Medallions",
    showOnMap: "Show on the map",
    close: "Close",
    closer: "Closer",
    further: "Further out",
    wholeMap: "Whole map",
    home: "Home",
    lifespan: "Lifespan",
    weapon: "Weapon",
    playedBy: "Played by",
    source: "Source",
    otherNames: "Other names",
    whoTheyAre: "Who they are",
    descent: "Descent",
    appearance: "Appearance",
    nature: "Character",
    milestones: "Milestones",
    whatBecomes: "What becomes of them",
    bookFilm: "Book and film",
    aside: "Aside",
    connectedWith: "Connected with",
    journey: "Journey",
    viewMap: "Map",
    viewConnections: "Connections",
    connections: "Connections",
    connectionCount: "connections",
    kindBond: "Bonds",
    kindJourney: "Fellow travellers",
    kindPlace: "Same home",
  },
  de: {
    title: "Die Karte von Mittelerde",
    subtitle: "Figuren aus Der Herr der Ringe und Der Hobbit",
    characters: "Figuren",
    search: "Figur oder Ort suchen",
    journeys: "Reisewege",
    journeysAll: "Alle Wege zeichnen",
    journeysNone: "Alle Wege löschen",
    random: "Zufall",
    language: "English",
    languageShort: "EN",
    languageTitle: "Switch to English",
    peoples: "Völker",
    places: "Orte",
    whereItLies: "Wo es liegt",
    builtBy: "Erbaut von",
    heldBy: "Gehalten von",
    age: "Alter",
    whatItIs: "Was es ist",
    whatYouSee: "Was man sieht",
    whatHappened: "Was hier geschah",
    whatBecomesOfIt: "Was daraus wird",
    whoIsFromHere: "Von hier",
    journeysThrough: "Wege hierdurch",
    groupEriador: "Eriador und die Strasse nach Osten",
    groupRiddermark: "Anduin, Rohan und Gondor",
    groupMordor: "Mordor",
    groupWilderland: "Wilderland",
    groupAfter: "Danach",
    empty: "Kein Eintrag gefunden. Andere Schreibweise versuchen oder Filter zurücksetzen.",
    legendJourneys: "Reisewege",
    legendMedallions: "Medaillons",
    showOnMap: "Auf der Karte zeigen",
    close: "Schliessen",
    closer: "Näher",
    further: "Weiter weg",
    wholeMap: "Ganze Karte",
    home: "Heimat",
    lifespan: "Lebenszeit",
    weapon: "Waffe",
    playedBy: "Darsteller",
    source: "Quelle",
    otherNames: "Weitere Namen",
    whoTheyAre: "Wer er ist",
    descent: "Abstammung",
    appearance: "Erscheinung",
    nature: "Wesen",
    milestones: "Stationen",
    whatBecomes: "Was aus ihm wird",
    bookFilm: "Buch und Film",
    aside: "Am Rande",
    connectedWith: "Verbunden mit",
    journey: "Reiseweg",
    viewMap: "Karte",
    viewConnections: "Verbindungen",
    connections: "Verbindungen",
    connectionCount: "Verbindungen",
    kindBond: "Bünde",
    kindJourney: "Weggefährten",
    kindPlace: "Gleiche Heimat",
  },
} satisfies Record<Language, Record<string, string>>;

export type UiKey = keyof typeof UI.en;

/** Which label names each group of places. */
const GROUP_LABEL = {
  eriador: "groupEriador",
  riddermark: "groupRiddermark",
  mordor: "groupMordor",
  wilderland: "groupWilderland",
  after: "groupAfter",
} as const satisfies Record<PlaceGroup, UiKey>;

/**
 * Everything language-dependent, gathered into one object built per language.
 *
 * The original page kept the current language in a module-level variable and
 * re-rendered the document by hand after every switch. Here the language is
 * React state and this is a pure function of it, so nothing can drift.
 */
export interface Translator {
  language: Language;
  /** A UI label by key. */
  t(key: UiKey): string;
  /** Translate a name that is authored in German on the map. */
  mapName(name: string): string;
  /** Name of a people, singular or plural. */
  peopleName(people: string, plural?: boolean): string;
  /** Name of a place; `short` picks the shortened form where one exists. */
  placeName(id: string, short?: boolean): string;
  /** A field of a character, English where available, authored text otherwise. */
  field<K extends keyof CharacterText>(c: Character, key: K): CharacterText[K];
  /** A field of a place, the same way. */
  placeField<K extends keyof PlaceText>(p: PlaceLore, key: K): PlaceText[K];
  /** The name of one of the groups the places are listed in. */
  placeGroupName(group: PlaceGroup): string;
}

export function createTranslator(language: Language): Translator {
  const mapName = (name: string) =>
    language === "en" && MAP_NAMES[name] ? MAP_NAMES[name] : name;

  return {
    language,
    t: (key) => UI[language][key],
    mapName,
    peopleName(people, plural = false) {
      if (language === "en" && PEOPLES_EN[people]) return PEOPLES_EN[people][plural ? 1 : 0];
      const p = PEOPLES[people];
      if (!p) return people;
      return plural ? p.plural : p.singular;
    },
    placeName(id, short = false) {
      const place = PLACES[id];
      if (!place) return id;
      return mapName(short ? (place.shortName ?? place.name) : place.name);
    },
    field(c, key) {
      const english = EN[c.id];
      if (language === "en" && english && english[key] !== undefined) return english[key] as never;
      return c[key];
    },
    placeField(p, key) {
      const english = PLACE_LORE_EN[p.id];
      if (language === "en" && english && english[key] !== undefined) return english[key] as never;
      return p[key];
    },
    placeGroupName(group) {
      return UI[language][GROUP_LABEL[group]];
    },
  };
}
