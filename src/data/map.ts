/**
 * The drawn map itself: coastline, Mordor, mountain ranges, forests, rivers,
 * lakes, hills, minor places and region captions.
 *
 * All coordinates live in a fixed MAP_W x MAP_H space which the SVG viewBox
 * maps onto whatever the window happens to be.
 */

export interface MountainRange {
  points: [number, number][];
  size: number;
  name?: string;
  labelX: number;
  labelY: number;
  labelAngle: number;
}

export interface Forest {
  /** Circular clumps of trees: [x, y, radius]. */
  clumps: [number, number, number][];
  colour: string;
  name?: string;
  labelX: number;
  labelY: number;
}

export interface Lake {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  name: string;
}

/** A place that is drawn and labelled but has no character attached. */
export interface MinorPlace {
  name: string;
  x: number;
  y: number;
  kind: string;
}

/** A caption laid across a region of the map. */
export interface Region {
  x: number;
  y: number;
  text: string;
  size: number;
  colour?: string;
  italic?: number;
}

export const MAP_W = 1000;
export const MAP_H = 760;

export const LAND = "M196,28 C192,56 184,86 168,110 C160,122 162,133 174,128 C200,118 226,108 252,100 C268,95 284,92 300,90 C288,124 268,156 240,182 C214,208 192,240 176,272 L248,288 L168,306 C158,330 150,356 152,382 C158,412 170,442 186,470 C208,498 238,524 272,548 C306,570 344,592 376,608 C400,618 422,624 442,622 C452,620 454,612 448,604 C476,600 510,598 542,600 C556,604 564,614 566,626 C582,646 606,654 632,650 C640,648 646,644 650,640 C666,670 688,700 706,736 C712,750 716,756 720,760 L1000,760 L1000,28 Z";

export const MORDOR = "M662,446 C702,450 762,456 816,468 C828,502 830,554 818,600 C770,612 716,608 690,598 C676,550 654,492 662,446 Z";

export const MOUNTAINS: MountainRange[] = [
  {
    points: [
      [408, 142],
      [414, 180],
      [418, 218],
      [424, 254],
      [430, 290],
      [436, 326],
      [442, 362],
      [448, 396],
      [452, 428],
      [452, 458]
    ],
    size: 12,
    name: "Das Nebelgebirge",
    labelX: 400,
    labelY: 300,
    labelAngle: -82
  },
  {
    points: [[258, 140], [246, 176], [236, 212], [226, 248]],
    size: 10,
    name: "Ered Luin",
    labelX: 262,
    labelY: 198,
    labelAngle: -72
  },
  {
    points: [[206, 330], [212, 364], [220, 396]],
    size: 9,
    name: "",
    labelX: 0,
    labelY: 0,
    labelAngle: 0
  },
  {
    points: [[520, 110], [560, 96], [600, 90], [644, 94], [684, 106], [716, 124]],
    size: 11,
    name: "Das Graue Gebirge",
    labelX: 598,
    labelY: 72,
    labelAngle: 0
  },
  {
    points: [[744, 180], [780, 176], [816, 184]],
    size: 10,
    name: "Die Eisenberge",
    labelX: 824,
    labelY: 166,
    labelAngle: 0
  },
  {
    points: [[686, 166], [700, 158], [714, 168]],
    size: 16,
    name: "",
    labelX: 0,
    labelY: 0,
    labelAngle: 0
  },
  {
    points: [[288, 122], [320, 116], [352, 124]],
    size: 10,
    name: "",
    labelX: 0,
    labelY: 0,
    labelAngle: 0
  },
  {
    points: [[430, 512], [460, 528], [490, 540], [520, 546], [550, 550], [580, 552], [604, 554]],
    size: 12,
    name: "Das Weisse Gebirge",
    labelX: 486,
    labelY: 576,
    labelAngle: 8
  },
  {
    points: [[656, 446], [652, 478], [652, 510], [660, 542], [672, 572], [684, 598]],
    size: 11,
    name: "Ephel Dúath",
    labelX: 640,
    labelY: 520,
    labelAngle: -84
  },
  {
    points: [[662, 444], [700, 450], [740, 454], [780, 458], [812, 466]],
    size: 11,
    name: "Ered Lithui",
    labelX: 742,
    labelY: 430,
    labelAngle: 3
  }
];

export const FORESTS: Forest[] = [
  {
    clumps: [
      [580, 150, 34],
      [610, 180, 36],
      [624, 220, 34],
      [608, 260, 34],
      [586, 294, 30],
      [568, 320, 26],
      [642, 162, 26],
      [648, 252, 24]
    ],
    colour: "#3a5230",
    name: "Der Düsterwald",
    labelX: 614,
    labelY: 348
  },
  {
    clumps: [[520, 392, 26], [540, 406, 20], [506, 378, 18]],
    colour: "#7a7a2e",
    name: "",
    labelX: 0,
    labelY: 0
  },
  {
    clumps: [[478, 454, 28], [500, 438, 22], [464, 474, 22]],
    colour: "#37492c",
    name: "",
    labelX: 0,
    labelY: 0
  },
  { clumps: [[350, 326, 18], [338, 338, 13]], colour: "#3d4a2c", name: "", labelX: 0, labelY: 0 },
  { clumps: [[420, 278, 16]], colour: "#455233", name: "Trollhöhen", labelX: 400, labelY: 258 },
  {
    clumps: [[668, 578, 20], [658, 602, 15], [678, 554, 13]],
    colour: "#46603a",
    name: "Ithilien",
    labelX: 690,
    labelY: 616
  },
  { clumps: [[572, 532, 12]], colour: "#44553a", name: "", labelX: 0, labelY: 0 },
  {
    clumps: [[250, 500, 18], [236, 514, 13]],
    colour: "#3f4d30",
    name: "Eryn Vorn",
    labelX: 214,
    labelY: 486
  },
  { clumps: [[392, 282, 12]], colour: "#4a5a34", name: "", labelX: 0, labelY: 0 },
  { clumps: [[306, 310, 11]], colour: "#4a5a34", name: "", labelX: 0, labelY: 0 }
];

export const RIVERS: string[] = [
  "M276,162 C266,200 256,240 250,272 C246,282 244,286 248,288",
  "M470,146 C486,192 498,240 508,288 C514,322 518,356 520,390 C526,420 534,438 548,456 C564,476 580,490 590,502 C596,516 600,530 612,542 C624,552 634,560 640,574 C646,598 648,620 650,642",
  "M300,220 C310,248 320,276 318,306 C316,338 310,368 302,396 C294,428 284,458 274,486 C268,498 264,506 262,514",
  "M392,176 C386,222 380,268 372,310 C364,346 352,376 344,406 C330,444 312,476 296,504 C288,518 282,528 278,536",
  "M478,272 C466,280 452,288 440,296 C424,306 404,304 388,298",
  "M440,368 C424,378 404,388 386,396 C370,402 356,404 346,404",
  "M450,376 C466,382 486,386 506,388 C512,390 516,390 520,392",
  "M446,296 C464,300 486,298 506,292",
  "M446,448 C436,470 420,492 400,512 C378,534 372,566 376,600",
  "M488,542 C508,528 530,516 552,508 C570,502 584,508 596,520",
  "M582,152 C602,168 626,184 652,196 C670,204 686,210 692,212",
  "M700,232 C716,266 744,302 776,332 C800,354 822,370 838,378",
  "M674,552 C660,550 646,548 634,548",
  "M760,196 C756,230 752,264 756,292 C760,314 772,326 782,336"
];

export const LAKES: Lake[] = [
  { cx: 296, cy: 206, rx: 24, ry: 13, name: "Nenuial" },
  { cx: 694, cy: 214, rx: 9, ry: 24, name: "Der Lange See" },
  { cx: 866, cy: 388, rx: 56, ry: 40, name: "Das Meer von Rhûn" },
  { cx: 744, cy: 570, rx: 32, ry: 20, name: "Nurnen" },
  { cx: 592, cy: 494, rx: 7, ry: 12, name: "" }
];

export const MINOR_PLACES: MinorPlace[] = [
  { name: "Annúminas", x: 300, y: 226, kind: "ruine" },
  { name: "Fornost", x: 374, y: 222, kind: "ruine" },
  { name: "Sarn-Furt", x: 312, y: 362, kind: "fels" },
  { name: "Lond Daer", x: 278, y: 542, kind: "ruine" },
  { name: "Ost-in-Edhil", x: 414, y: 350, kind: "ruine" },
  { name: "Cair Andros", x: 618, y: 526, kind: "fels" },
  { name: "Aldburg", x: 552, y: 500, kind: "halle" },
  { name: "Calembel", x: 542, y: 580, kind: "dorf" },
  { name: "Linhir", x: 600, y: 600, kind: "dorf" },
  { name: "Umbar", x: 766, y: 722, kind: "hafen" }
];

export const HILLS: [number, number][] = [
  [336, 226],
  [348, 222],
  [360, 228],
  [344, 234],
  [372, 232],
  [378, 262],
  [380, 276],
  [382, 290],
  [368, 250],
  [326, 322],
  [338, 324],
  [332, 332],
  [348, 328],
  [608, 482],
  [620, 490],
  [632, 480],
  [616, 498],
  [630, 470],
  [604, 494],
  [560, 440],
  [576, 436],
  [592, 444],
  [548, 448],
  [392, 352],
  [406, 344],
  [420, 350]
];

export const REGIONS: Region[] = [
  { x: 470, y: 56, text: "Forodwaith", size: 15 },
  { x: 252, y: 150, text: "Eisbucht von Forochel", size: 8, colour: "#5b7d86", italic: 1 },
  { x: 336, y: 112, text: "Angmar", size: 12 },
  { x: 196, y: 366, text: "Lindon", size: 11 },
  { x: 290, y: 410, text: "Eriador", size: 16 },
  { x: 312, y: 256, text: "Das Auenland", size: 12, colour: "#5d6b32" },
  { x: 330, y: 462, text: "Minhiriath", size: 12 },
  { x: 378, y: 472, text: "Enedwaith", size: 12 },
  { x: 424, y: 428, text: "Dunland", size: 11 },
  { x: 524, y: 472, text: "Rohan", size: 17, colour: "#6b5a22" },
  { x: 566, y: 594, text: "Gondor", size: 16, colour: "#5a5240" },
  { x: 492, y: 606, text: "Anfalas", size: 10 },
  { x: 732, y: 486, text: "Mordor", size: 20, colour: "#7a2418" },
  { x: 746, y: 604, text: "Nurn", size: 12, colour: "#6a3020" },
  { x: 852, y: 690, text: "Harad", size: 16 },
  { x: 912, y: 318, text: "Rhûn", size: 15 },
  { x: 800, y: 352, text: "Rhovanion", size: 13 },
  { x: 478, y: 236, text: "Das Anduintal", size: 10 },
  { x: 620, y: 442, text: "Dagorlad", size: 10 },
  { x: 554, y: 420, text: "Die Braunen Lande", size: 10 },
  { x: 824, y: 436, text: "Dorwinion", size: 11 },
  { x: 884, y: 620, text: "Khand", size: 12 },
  { x: 86, y: 452, text: "Belegaer", size: 16, colour: "#5b7d86", italic: 1 },
  { x: 502, y: 672, text: "Bucht von Belfalas", size: 13, colour: "#5b7d86", italic: 1 },
  { x: 214, y: 294, text: "Golf von Lhûn", size: 7, colour: "#5b7d86", italic: 1 }
];
