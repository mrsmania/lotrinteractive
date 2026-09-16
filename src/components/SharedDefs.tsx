/**
 * Definitions referenced from more than one SVG.
 *
 * Medallions appear inside the map SVG, inside the graph SVG and as standalone
 * SVGs in the sidebar and character sheet, and all of them clip their picture
 * to a circle. The glow behind a highlighted marker is likewise needed by both
 * views. An SVG `url(#id)` reference resolves anywhere in the document, so
 * these are defined once here, in a carrier that renders nothing.
 */
export function SharedDefs() {
  return (
    <svg className="sprites" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id="circleClip" clipPathUnits="objectBoundingBox">
          <circle cx=".5" cy=".5" r=".475" />
        </clipPath>
        <filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}
