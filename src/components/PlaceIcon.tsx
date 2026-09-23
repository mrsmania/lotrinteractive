import type { ReactElement } from "react";

/**
 * The symbols drawn inside a place's ring.
 *
 * These are Lucide icons (lucide.dev), ISC licensed, copied in as path data
 * rather than pulled from the package: this machine cannot reach the npm
 * registry, and a handful of paths is a smaller thing to carry than a
 * dependency that would be tree-shaken down to exactly this anyway. Each entry
 * is the untouched inner markup of the icon of that name, at Lucide's own 24x24
 * scale; the group around them moves that into the medallion's 0..100 space.
 *
 * The names on the left are the map's, not Lucide's, because a place is a
 * delving or a barrow rather than a pickaxe or a pyramid. Where two of the
 * map's kinds want the same drawing — a ruined tower and a ruined city are both
 * ruins — they share it.
 */

/** What a place is, as far as the map can draw it in a circle. */
export type PlaceIconName =
  | "dwelling"
  | "town"
  | "city"
  | "tower"
  | "refuge"
  | "ruin"
  | "barrow"
  | "forest"
  | "wood"
  | "mountain"
  | "peak"
  | "delving"
  | "marsh"
  | "springs"
  | "fire"
  | "eye"
  | "battle"
  | "boat"
  | "ship"
  | "haven"
  | "gate"
  | "crown";

const ICONS: Record<PlaceIconName, ReactElement> = {
  // house
  dwelling: (
    <>
      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
      <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </>
  ),
  // houses
  town: (
    <>
      <path d="m12.681 4.24.834-.715a1.45 1.45 0 011.88 0l5.09 4.364A1.45 1.45 0 0121 9v6.546a1.45 1.45 0 01-1 1.381" />
      <path d="M15.485 11.889A1.45 1.45 0 0116 13v6.546A1.454 1.454 0 0114.546 21H4.364a1.454 1.454 0 01-1.454-1.454V13a1.45 1.45 0 01.515-1.111l5.09-4.364a1.45 1.45 0 011.88 0z" />
      <path d="M7.41 20.546v-4a1 1 0 011-1h2a1 1 0 011 1v4" />
    </>
  ),
  // castle
  city: (
    <>
      <path d="M10 5V3" />
      <path d="M14 5V3" />
      <path d="M15 21v-3a3 3 0 0 0-6 0v3" />
      <path d="M18 3v8" />
      <path d="M18 5H6" />
      <path d="M22 11H2" />
      <path d="M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9" />
      <path d="M6 3v8" />
    </>
  ),
  // tower-control
  tower: (
    <>
      <path d="M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z" />
      <path d="M8 13v9" />
      <path d="M16 22v-9" />
      <path d="m9 6 1 7" />
      <path d="m15 6-1 7" />
      <path d="M12 6V2" />
      <path d="M13 2h-2" />
    </>
  ),
  // tent-tree
  refuge: (
    <>
      <circle cx="4" cy="4" r="2" />
      <path d="m14 5 3-3 3 3" />
      <path d="m14 10 3-3 3 3" />
      <path d="M17 14V2" />
      <path d="M17 14H7l-5 8h20Z" />
      <path d="M8 14v8" />
      <path d="m9 14 5 8" />
    </>
  ),
  // landmark
  ruin: (
    <>
      <path d="M10 18v-7" />
      <path d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z" />
      <path d="M14 18v-7" />
      <path d="M18 18v-7" />
      <path d="M3 22h18" />
      <path d="M6 18v-7" />
    </>
  ),
  // pyramid
  barrow: (
    <>
      <path d="M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z" />
      <path d="M12 2v20" />
    </>
  ),
  // trees
  forest: (
    <>
      <path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" />
      <path d="M7 16v6" />
      <path d="M13 19v3" />
      <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" />
    </>
  ),
  // tree-deciduous
  wood: (
    <>
      <path d="M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z" />
      <path d="M12 19v3" />
    </>
  ),
  // mountain-snow
  mountain: (
    <>
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      <path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" />
    </>
  ),
  // mountain
  peak: <path d="m8 3 4 8 5-5 5 15H2L8 3z" />,
  // pickaxe
  delving: (
    <>
      <path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999" />
      <path d="M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024" />
      <path d="M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069" />
      <path d="M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z" />
    </>
  ),
  // waves
  marsh: (
    <>
      <path d="M2 12q2.5 2 5 0t5 0 5 0 5 0" />
      <path d="M2 19q2.5 2 5 0t5 0 5 0 5 0" />
      <path d="M2 5q2.5 2 5 0t5 0 5 0 5 0" />
    </>
  ),
  // droplets
  springs: (
    <>
      <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
      <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
    </>
  ),
  // flame
  fire: (
    <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" />
  ),
  // eye
  eye: (
    <>
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  // swords
  battle: (
    <>
      <path d="m13 19 6-6" />
      <path d="M14.5 17.5 3.586 6.586A2 2 0 013 5.172V3h2.172a2 2 0 011.414.586L17.5 14.5" />
      <path d="m14.828 6.172 2.586-2.586A2 2 0 0118.828 3H21v2.172a2 2 0 01-.586 1.414l-2.586 2.586" />
      <path d="m16 16 4 4" />
      <path d="m19 21 2-2" />
      <path d="m5 14 4 4" />
      <path d="m5 21-2-2" />
      <path d="M7.5 16.5 4 20" />
    </>
  ),
  // sailboat
  boat: (
    <>
      <path d="M10 2v15" />
      <path d="M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z" />
      <path d="M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z" />
    </>
  ),
  // ship
  ship: (
    <>
      <path d="M12 2v2" />
      <path d="M12 9.189V13" />
      <path d="M19 12V6a2 2 0 00-2-2H7a2 2 0 00-2 2v6" />
      <path d="M19.38 19A11.6 11.6 0 0021 13l-8.188-3.639a2 2 0 00-1.624 0L3 13.001a11.6 11.6 0 002.81 7.76" />
      <path d="M2 20c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    </>
  ),
  // anchor
  haven: (
    <>
      <path d="M12 6v16" />
      <path d="m19 13 2-1a9 9 0 0 1-18 0l2 1" />
      <path d="M9 11h6" />
      <circle cx="12" cy="4" r="2" />
    </>
  ),
  // door-closed
  gate: (
    <>
      <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" />
      <path d="M2 21h20" />
      <path d="M9 12h.01" />
    </>
  ),
  // crown
  crown: (
    <>
      <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
      <path d="M5 21h14" />
    </>
  ),
};

/** How much of the ring's width the symbol takes. */
const SPAN = 52;

/**
 * One symbol, drawn in the 0..100 space the medallion picture uses, so it can
 * be dropped into the same transform.
 */
export function PlaceIcon({ name }: { name: PlaceIconName }) {
  const k = SPAN / 24;
  return (
    <g
      transform={`translate(${(100 - SPAN) / 2},${(100 - SPAN) / 2}) scale(${k})`}
      fill="none"
      stroke="#3a2a18"
      strokeWidth={2.1}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {ICONS[name]}
    </g>
  );
}
