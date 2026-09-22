/**
 * The map itself.
 *
 * The world is no longer drawn: it is a photograph of a drawn map of
 * Middle-earth, cut into tiles by scripts/make-tiles.mjs and served from
 * public/images/map/. Everything the app puts on top of it — journeys, place
 * symbols, labels, medallions — lives in a fixed MAP_W x MAP_H space which the
 * SVG viewBox maps onto whatever the window happens to be.
 *
 * That space is the image at a fifth of its pixel size less a little
 * (7680 / 4.8 = 1600), so a map coordinate is the pixel position on the image
 * divided by 4.8. The width is round because the furniture is sized against
 * it; the divisor falls out of that.
 */

/** The source image, as scripts/make-tiles.mjs last reported it. */
export const MAP_IMAGE_W = 7680;
export const MAP_IMAGE_H = 4386;

export const MAP_W = 1600;
/** 4386 / 4.8, so the map space has the image's proportions exactly. */
export const MAP_H = 913.75;

/**
 * How large a medallion is drawn, against the geometry in lib/markers.ts and
 * components/MapView.tsx.
 *
 * That geometry was authored for the app's first, drawn map, whose 1000-unit
 * width held Middle-earth alone; this map holds it in 1600, so keeping the
 * size the medallions had on screen would mean 1.6. But that map was drawn to
 * be written over, and this one is not: it letters and draws every place
 * itself, and medallions at 1.6 sat on top of it rather than in it. They are
 * drawn at well under half that, small enough to read the map through them.
 */
export const MARKER_SCALE = 0.7;

/**
 * The rim drawn round a medallion, in map units and deliberately not scaled
 * with the picture inside it.
 *
 * Everything that gives a medallion an edge of its own — the gold frame, its
 * dark contour — is drawn in the picture's 0..100 space, so at MARKER_SCALE
 * those strokes fall under a pixel and the medallion is lost against a map
 * that is itself full of ink. The rim is stated here instead, and keeps its
 * weight however small the face gets. components/MapView draws it;
 * lib/markers measures by it, so that two medallions never overlap.
 */
export const RIM_R = 9.3;
export const RIM_WIDTH = 1.9;
/** The rim's dark contour, drawn under it and a little wider either side. */
export const CONTOUR_WIDTH = RIM_WIDTH + 1.2;
/** Outer edge of a medallion, rim and contour included. */
export const MARKER_OUTER_R = RIM_R + CONTOUR_WIDTH / 2;
