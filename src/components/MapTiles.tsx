import { memo, useMemo } from "react";
import { levelFor, tilesIn, type Rect } from "../lib/tiles";

/** The part of the map on screen, in map units, spread as four numbers. */
interface Props extends Rect {
  /** Screen pixels per map unit at the current view. */
  density: number;
}

/**
 * The map image, as tiles.
 *
 * Every level from the coarsest up to the one the view deserves is drawn, one
 * over another. The whole map at its smallest is a single 28KB tile, so
 * something is on screen almost at once and sharpens as the better tiles
 * arrive; a level the eye has already passed through is in the browser's cache
 * by then, so the stack costs requests only the first time. It also means
 * there is never a hole to look at while a tile is in flight.
 */
export const MapTiles = memo(function MapTiles({ x0, y0, x1, y1, density }: Props) {
  const tiles = useMemo(() => {
    const top = levelFor(density);
    const out = [];
    for (let z = 0; z <= top; z++) out.push(...tilesIn(z, { x0, y0, x1, y1 }));
    return out;
  }, [density, x0, y0, x1, y1]);

  return (
    <g id="tiles">
      {tiles.map((t) => (
        <image
          key={t.key}
          href={t.href}
          x={t.x}
          y={t.y}
          width={t.w}
          height={t.h}
          preserveAspectRatio="none"
        />
      ))}
    </g>
  );
});
