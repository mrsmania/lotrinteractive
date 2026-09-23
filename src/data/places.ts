import type { Place } from "../types";

/**
 * Places on the map, keyed by id.
 *
 * Nothing is drawn for a place any more: the map letters and draws them all
 * itself. These are where a character's medallion stands, where a journey
 * turns, and where the map goes when you ask to be shown someone.
 *
 * Coordinates are in the fixed MAP_W x MAP_H space of `data/map.ts`, which is
 * the map image at a 4.8th of its pixel size. The map names nearly all of
 * these itself, so each one was read off the image: from its caption where
 * there is one, and otherwise from the rivers, passes and mountain feet around
 * it. Rivendell, Bree, Weathertop, Moria, Erebor, Mount Doom and the rest sit
 * on the very symbol the map draws for them.
 */
export const PLACES: Record<string, Place> = {
  greyhavens: { name: "Die Grauen Anfurten", shortName: "Graue Anfurten", x: 484.4, y: 236.5 },
  lindon: { name: "Lindon", x: 416.7, y: 239.6 },
  hobbiton: { name: "Hobbingen und Beutelsend", shortName: "Hobbingen", x: 574, y: 230.2 },
  buckland: { name: "Bockland", x: 631.2, y: 258.3 },
  tuckborough: { name: "Tuckborn", x: 581.2, y: 257.3 },
  oldforest: { name: "Der Alte Wald", x: 647.9, y: 253.1 },
  barrowdowns: { name: "Hügelgräberhöhen", shortName: "Hügelgräber", x: 666.7, y: 265 },
  bree: { name: "Bree", x: 674, y: 239.6 },
  weathertop: { name: "Wetterspitze", x: 724, y: 236.5 },
  trollshaws: { name: "Trollhöhen", x: 791.7, y: 203.1 },
  rivendell: { name: "Bruchtal", x: 815.6, y: 233.3 },
  carndum: { name: "Carn Dûm in Angmar", shortName: "Carn Dûm", x: 677.1, y: 74 },
  gundabad: { name: "Gundabad", x: 822.9, y: 89.6 },
  highpass: { name: "Der Hohe Pass", x: 843.8, y: 227.1 },
  caradhras: { name: "Caradhras", x: 822.9, y: 308.3 },
  moria: { name: "Moria, Khazad-dûm", shortName: "Moria", x: 828.1, y: 318.8 },
  eregion: { name: "Eregion", x: 793.8, y: 300.4 },
  lorien: { name: "Lothlórien", x: 872.9, y: 337.5 },
  carrock: { name: "Der Carrock", x: 920.8, y: 205.2 },
  // Where the Ireborn meets the Anduin. The map letters it; nothing stood
  // here, which is why it had no entry until it got a page of its own.
  gladdenfields: { name: "Die Schwertelfelder", shortName: "Schwertelfelder", x: 893, y: 288 },
  rhosgobel: { name: "Rhosgobel", x: 916.7, y: 252.1 },
  woodlandrealm: { name: "Das Waldlandreich", shortName: "Waldlandreich", x: 962.5, y: 187.5 },
  // The forest itself, which is not the Woodland Realm: the spiders and the
  // enchanted stream are a long way from the throne room.
  mirkwood: { name: "Der Düsterwald", shortName: "Düsterwald", x: 955, y: 235 },
  dolguldur: { name: "Dol Guldur", x: 968.8, y: 328.8 },
  erebor: { name: "Erebor, der Einsame Berg", shortName: "Erebor", x: 1069.6, y: 192.7 },
  dale: { name: "Thal", x: 1076, y: 212.5 },
  esgaroth: { name: "Esgaroth am See", shortName: "Esgaroth", x: 1066.7, y: 239.6 },
  ironhills: { name: "Die Eisenberge", x: 1270.8, y: 166.7 },
  // Under the forest's own lettering rather than over it, so the medallions
  // fan downwards from here and leave the name to be read.
  fangorn: { name: "Fangorn", x: 852, y: 414, fan: "down" },
  // On the tower itself, not the ring of hills west of it.
  isengard: { name: "Isengart und Orthanc", shortName: "Isengart", x: 780, y: 423 },
  helmsdeep: { name: "Helms Klamm", x: 782.3, y: 471.2 },
  edoras: { name: "Edoras", x: 825.8, y: 487.5 },
  // The Paths of the Dead run under the mountains, and their king belongs in
  // them rather than above the dale, where he read as another man of Edoras.
  dunharrow: {
    name: "Dunharg und die Pfade der Toten", shortName: "Dunharg",
    x: 835.4, y: 504.2, fan: "down",
  },
  tharbad: { name: "Tharbad", x: 683.3, y: 327.1 },
  dunland: { name: "Dunland", x: 752.1, y: 384.4 },
  argonath: { name: "Argonath", x: 937.5, y: 437.5 },
  amonhen: { name: "Amon Hen und die Rauros-Fälle", shortName: "Amon Hen", x: 932.9, y: 449 },
  emynmuil: { name: "Emyn Muil", x: 987.5, y: 420.8 },
  deadmarshes: { name: "Die Totensümpfe", shortName: "Totensümpfe", x: 988.5, y: 456.2 },
  morannon: { name: "Das Schwarze Tor", x: 1080.2, y: 461.5 },
  orodruin: { name: "Der Schicksalsberg", shortName: "Schicksalsberg", x: 1126, y: 525 },
  baraddur: { name: "Barad-dûr", x: 1166.7, y: 518.8 },
  minasmorgul: { name: "Minas Morgul", x: 1028.1, y: 565.6 },
  cirithungol: { name: "Cirith Ungol", x: 1039.6, y: 576 },
  // The map does not name it. It sits in the pass, between the stair out of
  // Minas Morgul and the tower above it.
  torechungol: { name: "Kankras Lauer", x: 1050.5, y: 582 },
  // Ten map units from Minas Tirith, so its medallion has to go the other
  // way or it stands in the outermost of the City's five.
  osgiliath: { name: "Osgiliath", x: 1003.1, y: 556.7, fan: "down" },
  minastirith: { name: "Minas Tirith", x: 981.7, y: 552.5 },
  pelennor: { name: "Die Pelennor-Felder", x: 991.7, y: 555.2 },
  hennethannun: { name: "Henneth Annûn in Ithilien", shortName: "Henneth Annûn", x: 1016.7, y: 593.8 },
  pelargir: { name: "Pelargir", x: 940, y: 633.3 },
  dolamroth: { name: "Dol Amroth", x: 770.8, y: 605.2 },
  rhun: { name: "Das Meer von Rhûn", x: 1285.4, y: 360.4 },
  harad: { name: "Harad", x: 1083.3, y: 770.8 }
};
