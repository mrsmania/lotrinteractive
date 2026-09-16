import { PLACES } from "../data/places";
import { JOURNEYS } from "../data/journeys";
import {
  FORESTS,
  HILLS,
  LAKES,
  LAND,
  MINOR_PLACES,
  MORDOR,
  MOUNTAINS,
  REGIONS,
  RIVERS,
} from "../data/map";
import {
  compassRose,
  forest,
  hills,
  mountainRange,
  placeSymbol,
  scaleBar,
  seededRandom,
  smoothPath,
} from "./draw";

const FONT = "Inter, Segoe UI, Helvetica Neue, Helvetica, Arial, sans-serif";

/** Fixed seed, so the waves, trees and ash specks look the same on every visit. */
const SEED = 20260806;

/**
 * Gradients, patterns, clip paths and filters used by the map.
 * Language-independent and unchanging, so this is built once.
 */
export function buildDefs(): string {
  return (
    "<defs>" +
    '<radialGradient id="parchment" cx="45%" cy="38%" r="76%">' +
    '<stop offset="0%" stop-color="#f2e7cd"/><stop offset="65%" stop-color="#eaddbe"/><stop offset="100%" stop-color="#dbcaa6"/></radialGradient>' +
    '<radialGradient id="seaGradient" cx="30%" cy="35%" r="85%">' +
    '<stop offset="0%" stop-color="#d2d0b4"/><stop offset="100%" stop-color="#b9bb9f"/></radialGradient>' +
    '<pattern id="hatching" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(38)">' +
    '<path d="M0,0 V7" stroke="#6b5636" stroke-width=".7" opacity=".35"/></pattern>' +
    '<clipPath id="landClip"><path d="' + LAND + '"/></clipPath>' +
    '<clipPath id="mordorClip"><path d="' + MORDOR + '"/></clipPath>' +
    '<clipPath id="seaClip"><path clip-rule="evenodd" d="M-400,-400H1400V1360H-400Z ' + LAND + '"/></clipPath>' +
    // The circular portrait clip is not defined here: medallions appear outside
    // this SVG too, so it lives in the shared defs (components/SharedDefs.tsx).
    '<filter id="mapTone" x="-10%" y="-10%" width="120%" height="120%">' +
    '<feColorMatrix type="saturate" values="0.42"/>' +
    '<feComponentTransfer><feFuncR type="linear" slope=".95" intercept=".06"/>' +
    '<feFuncG type="linear" slope=".92" intercept=".05"/><feFuncB type="linear" slope=".82" intercept=".03"/></feComponentTransfer></filter>' +
    // The glow behind a highlighted marker is shared with the graph view, so
    // it lives in the shared defs too.
    "</defs>"
  );
}

/**
 * The drawn world: sea, land, Mordor, water, forests, mountains, captions,
 * journeys and place symbols.
 *
 * This returns markup rather than JSX on purpose. Nothing in here responds to
 * the user, it is several thousand static shapes, and running React's
 * reconciler over them on every hover would cost a great deal and buy nothing.
 * The parts that do respond to the user, the character markers, are ordinary
 * components in MapView.
 *
 * `mapName` translates the names the map is authored with.
 */
export function buildWorld(mapName: (s: string) => string): string {
  const rnd = seededRandom(SEED);
  let out = "";

  out += '<rect x="-400" y="-400" width="1800" height="1560" fill="url(#seaGradient)"/>';

  // Wave lines in the sea
  let waves = '<g clip-path="url(#seaClip)" stroke="#7d9298" stroke-width=".7" fill="none" opacity=".55">';
  for (let i = 0; i < 120; i++) {
    const x = 20 + rnd() * 300;
    const y = 40 + rnd() * 690;
    waves += '<path d="M' + x + "," + y + ' q6,-4 12,0 q6,4 12,0"/>';
  }
  out += waves + "</g>";

  // The coastline, its inland glow and the shading out to sea
  out += '<path d="' + LAND + '" fill="url(#parchment)" stroke="#5a4830" stroke-width="1.3"/>';
  out +=
    '<g clip-path="url(#landClip)">' +
    '<path d="' + LAND + '" fill="none" stroke="#a89060" stroke-width="13" opacity=".18"/>' +
    '<path d="' + LAND + '" fill="none" stroke="#8a7448" stroke-width="3.5" opacity=".22"/></g>';
  out +=
    '<g clip-path="url(#seaClip)" fill="none" stroke="#7d9298" stroke-width=".8">' +
    '<path d="' + LAND + '" transform="translate(-5,3)" opacity=".7"/>' +
    '<path d="' + LAND + '" transform="translate(-11,7)" opacity=".45"/>' +
    '<path d="' + LAND + '" transform="translate(-18,12)" opacity=".28"/></g>';

  // Mordor as darkened, hatched land
  out += '<path d="' + MORDOR + '" fill="#7a6a54" opacity=".22"/>';
  out += '<path d="' + MORDOR + '" fill="url(#hatching)" opacity=".5"/>';
  out += '<path d="' + MORDOR + '" fill="none" stroke="#54432e" stroke-width="1" opacity=".7"/>';
  let ash = '<g clip-path="url(#mordorClip)" fill="#54432e" opacity=".4">';
  for (let i = 0; i < 180; i++) {
    ash +=
      '<circle cx="' + (650 + rnd() * 190).toFixed(0) +
      '" cy="' + (440 + rnd() * 170).toFixed(0) +
      '" r="' + (0.6 + rnd() * 1.1).toFixed(1) + '"/>';
  }
  out += ash + "</g>";

  // Rivers and lakes
  out += '<g fill="none" stroke="#6d8b90" stroke-width="1.5" stroke-linecap="round">';
  for (const river of RIVERS) out += '<path d="' + river + '"/>';
  out += "</g>";
  for (const lake of LAKES) {
    out +=
      '<ellipse cx="' + lake.cx + '" cy="' + lake.cy + '" rx="' + lake.rx + '" ry="' + lake.ry +
      '" fill="#c2cbc0" stroke="#6d8b90" stroke-width="1.1"/>';
    for (let q = 1; q <= 3; q++) {
      out +=
        '<ellipse cx="' + lake.cx + '" cy="' + lake.cy +
        '" rx="' + (lake.rx * (1 - q * 0.2)).toFixed(1) +
        '" ry="' + (lake.ry * (1 - q * 0.2)).toFixed(1) +
        '" fill="none" stroke="#6d8b90" stroke-width=".45" opacity=".4"/>';
    }
  }

  for (const wood of FORESTS) out += forest(wood, rnd);
  for (const range of MOUNTAINS) out += mountainRange(range, range.size, rnd);
  out += hills(HILLS);

  // Region captions, and the labels for ranges, forests and the larger lakes
  out += '<g id="regions" font-family="' + FONT + '" text-anchor="middle" fill="#5a4a2e">';
  for (const region of REGIONS) {
    out +=
      '<text x="' + region.x + '" y="' + region.y +
      '" font-size="' + region.size +
      '" letter-spacing="' + (region.size / 4).toFixed(1) +
      '" fill="' + (region.colour || "#5a4a2e") + '"' +
      (region.italic ? ' font-style="italic"' : "") +
      ' opacity=".85">' + mapName(region.text) + "</text>";
  }
  for (const range of MOUNTAINS) {
    if (!range.name) continue;
    out +=
      '<text x="' + range.labelX + '" y="' + range.labelY +
      '" font-size="11" letter-spacing="2" opacity=".8" transform="rotate(' +
      range.labelAngle + " " + range.labelX + " " + range.labelY + ')">' +
      mapName(range.name) + "</text>";
  }
  for (const wood of FORESTS) {
    if (!wood.name) continue;
    out +=
      '<text x="' + wood.labelX + '" y="' + wood.labelY +
      '" font-size="12" letter-spacing="2.4" fill="#2f4526" opacity=".9">' + mapName(wood.name) + "</text>";
  }
  for (const lake of LAKES) {
    if (lake.rx <= 20) continue;
    out +=
      '<text x="' + lake.cx + '" y="' + lake.cy +
      '" font-size="10" letter-spacing="1.6" fill="#4a6a72" font-style="italic" opacity=".95">' +
      mapName(lake.name) + "</text>";
  }
  out += "</g>";

  // Journeys
  out += '<g id="journeys" fill="none" stroke-linecap="round">';
  for (const journey of JOURNEYS) {
    out +=
      '<path class="journey-line" data-journey="' + journey.id +
      '" d="' + smoothPath(journey.places) +
      '" stroke="' + journey.colour +
      '" stroke-width="1.9" stroke-dasharray="6 7" opacity=".8"/>';
  }
  out += "</g>";

  // Place symbols
  out += '<g id="places">';
  for (const key of Object.keys(PLACES)) {
    const place = PLACES[key];
    if (place.kind !== "land") out += placeSymbol(place);
  }
  for (const place of MINOR_PLACES) out += placeSymbol(place);
  out += "</g>";

  // Place labels
  out += '<g id="place-labels" font-family="' + FONT + '" font-size="9" fill="#4a3823" letter-spacing="1.3">';
  for (const key of Object.keys(PLACES)) {
    const place = PLACES[key];
    if (place.kind === "land" || place.unlabelled) continue;
    out +=
      '<text x="' + place.x + '" y="' + (place.y + 15) +
      '" text-anchor="middle" opacity=".9">' + mapName(place.shortName || place.name) + "</text>";
  }
  for (const place of MINOR_PLACES) {
    out +=
      '<text x="' + place.x + '" y="' + (place.y + 15) +
      '" text-anchor="middle" opacity=".68" font-size="8.5">' + mapName(place.name) + "</text>";
  }
  out += "</g>";

  // Foxing on the paper
  let foxing = '<g opacity=".05">';
  for (let i = 0; i < 26; i++) {
    foxing +=
      '<ellipse cx="' + (rnd() * 1000).toFixed(0) + '" cy="' + (rnd() * 760).toFixed(0) +
      '" rx="' + (20 + rnd() * 90).toFixed(0) + '" ry="' + (16 + rnd() * 70).toFixed(0) +
      '" fill="#7a5a2a"/>';
  }
  out += foxing + "</g>";

  // Dunes of Harad
  let dunes = '<g clip-path="url(#landClip)" fill="none" stroke="#9c8a60" stroke-width=".7" opacity=".7">';
  for (let i = 0; i < 90; i++) {
    const dx = 700 + rnd() * 290;
    const dy = 616 + rnd() * 140;
    const b = 5 + rnd() * 6;
    dunes +=
      '<path d="M' + dx.toFixed(0) + "," + dy.toFixed(0) +
      " q" + b.toFixed(0) + ",-" + (b * 0.7).toFixed(0) + " " + (b * 2).toFixed(0) + ',0"/>';
  }
  out += dunes + "</g>";

  // Ice of the Forodwaith
  let ice = '<g clip-path="url(#landClip)" fill="none" stroke="#8a9496" stroke-width=".65" opacity=".6">';
  for (let i = 0; i < 70; i++) {
    const ex = 220 + rnd() * 760;
    const ey = 32 + rnd() * 58;
    const b = 3 + rnd() * 4;
    ice +=
      '<path d="M' + ex.toFixed(0) + "," + (ey + b).toFixed(0) +
      " L" + (ex + b).toFixed(0) + "," + (ey - b).toFixed(0) +
      " L" + (ex + b * 2.2).toFixed(0) + "," + (ey + b).toFixed(0) + ' Z"/>';
  }
  out += ice + "</g>";

  out += compassRose(120, 606, 34) + scaleBar(60, 700, mapName);
  return out;
}
