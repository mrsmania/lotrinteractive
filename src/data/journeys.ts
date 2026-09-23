import type { Bend, Journey, Step } from "../types";

/**
 * The journeys, drawn over the map as solid lines that draw themselves from
 * the first place to the last when the reader switches one on. All of them are
 * off until asked for.
 *
 * A route is places and bends in the order they were reached. A bend is a bare
 * point: the turn of a river, the foot of a pass, a ford — somewhere the road
 * goes but nobody stops. They are what lets a line follow what the map draws
 * rather than cut across it, so the Company comes down the Anduin along the
 * drawn river and the Road to Rivendell crosses the Hoarwell where the Last
 * Bridge is. Every one was read off the map image itself, in map units, the
 * same space PLACES is stated in.
 *
 * Stretches walked by more than one company are written once, below, and
 * spread into each route. That is not only to save repeating them: two routes
 * through the same point between the same neighbours get the same tangent
 * there, so sharing these arrays is what makes the lines run exactly parallel
 * for as long as the companies were together. See `offset` in lib/draw.
 */

/**
 * Hobbiton to Rivendell: Bywater, the Brandywine Bridge, Bree, Weathertop, the
 * Last Bridge over the Hoarwell, the Trollshaws, the Ford of Bruinen.
 */
const ROAD_EAST: Step[] = [
  "hobbiton",
  [596, 235], [610, 238], [626, 240], [648, 244],
  "bree",
  [694, 244], [710, 242],
  "weathertop",
  [738, 242], [750, 242], [762, 239], [776, 234], [790, 232], [802, 238],
  "rivendell",
];

/**
 * Rivendell south along the feet of the Misty Mountains, through Hollin to the
 * pass that turned them back, and down to the West-gate.
 */
const RIVENDELL_TO_MORIA: Step[] = [
  [810, 250], [803, 268], [797, 285],
  "eregion",
  // Up towards the Redhorn Gate, turned back by the mountain, and down again
  // to the Sirannon and the West-gate. The line doubles back because they did.
  [808, 300],
  "caradhras",
  [831, 295], [819, 303], [810, 313], [820, 322],
  "moria",
];

/** Out of the East-gate, down the Dimrill Dale along the Silverlode. */
const MORIA_TO_LORIEN: Step[] = [[842, 324], [858, 330], "lorien"];

/**
 * Lothlorien to Amon Hen, traced off the drawn Anduin. The Company went down
 * it in boats, so the line is in the river: every meander between the mouth of
 * the Silverlode and the island above the falls is one of these.
 */
const THE_ANDUIN: Step[] = [
  [890, 341], [895.5, 344], [896.5, 347.5], [898.5, 350], [902, 352], [905.5, 353.5],
  [907.5, 356], [908, 359], [907.5, 361], [909.5, 362.8], [913, 363.5], [916.5, 362.5],
  [920, 360.5], [923, 360.8], [926, 362.5], [929, 365], [930.8, 368], [931, 371],
  [929.8, 374], [929, 377], [930, 380], [933, 382], [937, 383], [941, 383.2],
  [945, 382.6], [949, 382], [952, 383], [954, 385.5], [955, 388], [954.5, 390.5],
  [952, 392.5], [948.8, 394.8], [946, 398], [945.3, 401], [946.5, 403], [949, 406],
  [950.4, 409.5], [950.8, 412], [950, 415], [948.6, 418], [946.5, 421.5], [944, 425],
  [942.4, 428.5], [941.2, 432], [940.4, 435],
  "argonath",
  [939, 441], [936, 445],
  "amonhen",
];

/** Amon Hen north-west across the East Emnet to the eaves of Fangorn. */
const EMNET_TO_FANGORN: Step[] = [[920, 441], [898, 424], [872, 408], "fangorn"];

/** Fangorn west along the forest edge to the ring of Isengard. */
const FANGORN_TO_ISENGARD: Step[] = [[830, 400], [808, 408], [786, 415], "isengard"];

/** Fangorn south down the west bank of the Entwash to Edoras. */
const FANGORN_TO_EDORAS: Step[] = [[842, 420], [836, 448], [830, 470], "edoras"];

/** Edoras west along the feet of the White Mountains to the Deeping-coomb. */
const EDORAS_TO_HELM: Step[] = [[812, 483], [798, 478], "helmsdeep"];

/** The ride across Rohan and Anorien to the City. */
const TO_MINAS_TIRITH: Step[] = [
  [798, 440], [836, 463], [874, 482], [912, 494], [946, 508], [970, 532],
  "minastirith", "pelennor",
];

/** Up out of Anorien to the Black Gate, as the host of the West rode it. */
const TO_THE_BLACK_GATE: Step[] = [
  [1006, 530], [1012, 500], [1028, 474], [1055, 462], "morannon",
];

/** Amon Hen east into the Emyn Muil, then the Marshes and the Dagorlad. */
const MARSHES: Step[] = [
  [948, 442], [968, 432],
  "emynmuil",
  [996, 436],
  "deadmarshes",
  [1008, 458], [1030, 456], [1052, 458],
  "morannon",
];

/** Down through Ithilien from the Black Gate to Henneth Annun. */
const ITHILIEN: Step[] = [
  [1050, 458], [1030, 470], [1018, 495], [1014, 525], [1014, 558], "hennethannun",
];

/** Out of the lair, down into Gorgoroth and across to the Mountain. */
const GORGOROTH: Step[] = [[1062, 566], [1080, 548], [1100, 535], "orodruin"];

/** The whole road from Hobbiton to the breaking of the Fellowship. */
const FELLOWSHIP: Step[] = [
  ...ROAD_EAST,
  ...RIVENDELL_TO_MORIA,
  ...MORIA_TO_LORIEN,
  ...THE_ANDUIN,
];

/** Amon Hen to the Black Gate the long way round, by Erech and the sea. */
const PATHS_OF_THE_DEAD: Step[] = [
  ...EMNET_TO_FANGORN,
  ...FANGORN_TO_EDORAS,
  ...EDORAS_TO_HELM,
  [795, 485], [812, 495],
  "dunharrow",
  [820, 518], [838, 543], [862, 568], [890, 592], [915, 618],
  "pelargir",
  [958, 626], [968, 609], [974, 594], [980, 580], [987, 568],
  "pelennor",
  ...TO_THE_BLACK_GATE,
];

export const JOURNEYS: Journey[] = [
  // ---- Der Hobbit ----
  {
    id: "dwarves",
    name: "Bilbo und die Zwerge",
    colour: "#77539b",
    // Bree is not named in the book; the East Road the Company took runs
    // through it, and the films put Gandalf and Thorin in its inn. Down from
    // the High Pass to the Anduin and the Carrock, then the Forest Road across
    // Mirkwood and the Forest River to the Long Lake.
    route: [
      "hobbiton",
      [596, 235], [610, 238], [626, 240], [648, 244],
      "bree",
      [694, 244], [712, 238], [730, 228], [752, 216], [772, 208],
      "trollshaws",
      [802, 216],
      "rivendell",
      [828, 228],
      "highpass",
      [858, 222], [872, 215], [885, 210], [898, 203],
      "carrock",
      [938, 202], [952, 197],
      "woodlandrealm",
      [985, 196], [1010, 205], [1030, 212], [1044, 218], [1056, 231],
      "esgaroth",
      [1072, 228],
      "dale",
      "erebor",
    ],
  },

  // ---- Der Herr der Ringe ----
  // No line for the Fellowship itself: it was the road every one of its
  // members walked, and each of them carries it now.
  {
    id: "ringbearers",
    name: "Frodo und Sam",
    colour: "#8e3b2c",
    route: [
      ...FELLOWSHIP,
      ...MARSHES,
      ...ITHILIEN,
      [1022, 582],
      "minasmorgul",
      "cirithungol",
      "torechungol",
      ...GORGOROTH,
    ],
  },
  {
    id: "boromir",
    name: "Boromir",
    colour: "#a8842e",
    // The only one who comes to Rivendell from the south: a hundred and ten
    // days up out of Gondor through the Gap of Rohan and Tharbad, and then the
    // Fellowship's road as far as Amon Hen, where he falls.
    route: [
      "minastirith",
      [955, 530], [915, 505], [875, 485], [838, 468], [800, 450], [760, 415], [720, 370],
      "tharbad",
      [700, 300], [730, 275], [765, 255], [790, 243],
      "rivendell",
      ...RIVENDELL_TO_MORIA,
      ...MORIA_TO_LORIEN,
      ...THE_ANDUIN,
    ],
  },
  {
    id: "merry",
    name: "Merry",
    colour: "#4a7a30",
    // Carried to Fangorn, on with the Ents to Isengard, back with Theoden
    // through Helm's Deep to Edoras and Dunharrow, and east with the Rohirrim
    // to the Pelennor. The Houses of Healing keep him from the Black Gate in
    // the book; the films take him along, and the line follows the films.
    route: [
      ...FELLOWSHIP,
      ...EMNET_TO_FANGORN,
      ...FANGORN_TO_ISENGARD,
      [772, 438], [778, 455],
      "helmsdeep",
      [798, 478], [812, 483],
      "edoras",
      "dunharrow",
      [866, 497], [900, 494], [934, 500], [962, 520], [978, 540],
      "pelennor",
      "minastirith",
      ...TO_THE_BLACK_GATE,
    ],
  },
  {
    id: "pippin",
    name: "Pippin",
    colour: "#8fa63a",
    // The same road until Isengard, where the palantir puts him on Shadowfax
    // and Gandalf rides with him straight for Minas Tirith.
    route: [
      ...FELLOWSHIP,
      ...EMNET_TO_FANGORN,
      ...FANGORN_TO_ISENGARD,
      ...TO_MINAS_TIRITH,
      ...TO_THE_BLACK_GATE,
    ],
  },
  {
    id: "aragorn",
    name: "Aragorn",
    colour: "#3f6f8c",
    // He is already at Bree when the story reaches him, so his line starts
    // there rather than in the Shire. At the end the Paths of the Dead take
    // him from Dunharrow to the Stone of Erech, down the vales to Pelargir,
    // and up the Anduin under the black sails.
    route: [
      "bree",
      [694, 244], [710, 242],
      "weathertop",
      [738, 242], [750, 242], [762, 239], [776, 234], [790, 232], [802, 238],
      "rivendell",
      ...RIVENDELL_TO_MORIA,
      ...MORIA_TO_LORIEN,
      ...THE_ANDUIN,
      ...PATHS_OF_THE_DEAD,
    ],
  },
  {
    id: "legolasgimli",
    name: "Legolas und Gimli",
    colour: "#9c3b6b",
    // They join at Rivendell, and from Amon Hen onward never leave Aragorn.
    route: [
      "rivendell",
      ...RIVENDELL_TO_MORIA,
      ...MORIA_TO_LORIEN,
      ...THE_ANDUIN,
      ...PATHS_OF_THE_DEAD,
    ],
  },
  {
    id: "gandalfgrey",
    name: "Gandalf der Graue",
    colour: "#4a4d54",
    // Down the Greenway to Isengard and the roof of Orthanc, carried thence to
    // Edoras, north to a Shire he reaches too late, and after the Ring as far
    // as the bridge of Khazad-dum. The rides south and north are drawn apart
    // on purpose: it is the same road twice, and one line over the other would
    // say he only went once.
    route: [
      "hobbiton",
      [606, 252], [640, 285],
      "tharbad",
      [712, 360], [740, 392],
      "isengard",
      [780, 440], [795, 462], [810, 478],
      "edoras",
      [806, 462], [782, 430], [750, 388], [712, 340], [672, 300], [636, 268],
      ...ROAD_EAST,
      ...RIVENDELL_TO_MORIA,
    ],
  },
  {
    id: "gandalfwhite",
    name: "Gandalf der Weisse",
    colour: "#7d8a99",
    // Sent back: Gwaihir carries him from the peak above Moria to Lothlorien,
    // and he comes to Fangorn the White. Then Edoras, Helm's Deep, the parley
    // at Isengard, and the ride with Pippin to the siege.
    route: [
      "moria",
      ...MORIA_TO_LORIEN,
      [868, 355], [860, 375],
      "fangorn",
      ...FANGORN_TO_EDORAS.slice(0, -1),
      "edoras",
      ...EDORAS_TO_HELM,
      [775, 452], [770, 436],
      "isengard",
      ...TO_MINAS_TIRITH,
      ...TO_THE_BLACK_GATE,
    ],
  },
  {
    id: "gollum",
    name: "Sméagol und Gollum",
    colour: "#2f8074",
    // Out of the goblin tunnels after the Ring, sixty years south down the
    // vales of Anduin into Mordor and the Dark Tower, dragged the length of
    // the map to the Wood-elves, and out through Moria onto the trail he never
    // leaves again.
    route: [
      "highpass",
      [866, 250], [888, 290], [905, 330], [925, 375], [950, 415], [990, 440], [1030, 455],
      "morannon",
      [1100, 480], [1130, 500],
      "baraddur",
      [1140, 470], [1100, 420], [1050, 350], [1010, 280], [985, 230],
      "woodlandrealm",
      [940, 200], [915, 215], [890, 240], [868, 275], [845, 300],
      "moria",
      ...MORIA_TO_LORIEN,
      ...THE_ANDUIN,
      ...MARSHES,
      ...ITHILIEN,
      [1026, 578],
      "cirithungol",
      "torechungol",
      ...GORGOROTH,
    ],
  },
];

/**
 * Who walked each journey, and which companies count as having travelled
 * together.
 *
 * Not every entry is drawn. `fellowship`, `hobbits` and `threehunters` have no line,
 * their roads being carried by the members' own journeys, but the nine of the
 * Fellowship, the two hobbits and the three hunters did travel together, and
 * the connections view is built from this table rather than from what is on
 * the map.
 */
export const JOURNEY_MEMBERS: Record<string, string[]> = {
  dwarves: [
    "bilbo", "gandalf", "thorin", "balin", "dwalin", "fili", "kili", "oin", "gloin",
    "dori", "nori", "ori", "bifur", "bofur", "bombur",
  ],
  fellowship: ["frodo", "sam", "merry", "pippin", "gandalf", "aragorn", "legolas", "gimli", "boromir"],
  hobbits: ["merry", "pippin"],
  threehunters: ["aragorn", "legolas", "gimli"],
  ringbearers: ["frodo", "sam", "gollum"],
  boromir: ["boromir"],
  merry: ["merry"],
  pippin: ["pippin"],
  aragorn: ["aragorn"],
  legolasgimli: ["legolas", "gimli"],
  gandalfgrey: ["gandalf"],
  gandalfwhite: ["gandalf"],
  gollum: ["gollum"],
};

/** Whether a character belongs to a journey. */
export function journeyHas(journeyId: string, characterId: string): boolean {
  return (JOURNEY_MEMBERS[journeyId] ?? []).includes(characterId);
}

/**
 * The named places of a route, in order, for saying in words where a journey
 * went. The bends are left out: they are how the line is drawn, not where
 * anybody went.
 */
export function journeyStations(journey: Journey): string[] {
  return journey.route.filter((step): step is string => typeof step === "string");
}

export type { Bend };
