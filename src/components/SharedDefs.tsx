/**
 * Definitions referenced from more than one SVG.
 *
 * Medallions appear inside the map SVG and as standalone SVGs in the sidebar
 * and the character sheet, and all of them clip their picture to a circle. An
 * SVG `url(#id)` reference resolves anywhere in the document, so the clip path
 * is defined once here, in a carrier that renders nothing.
 */
export function SharedDefs() {
  return (
    <svg className="sprites" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id="circleClip" clipPathUnits="objectBoundingBox">
          <circle cx=".5" cy=".5" r=".475" />
        </clipPath>
      </defs>
    </svg>
  );
}
