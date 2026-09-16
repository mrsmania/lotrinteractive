import { characterImageUrl } from "../lib/images";

/**
 * The one shared placeholder, drawn when a character has no picture in
 * public/images/characters/.
 *
 * Deliberately a single generic figure rather than anything
 * character-specific: a missing picture should look obviously missing, not
 * like a portrait of somebody.
 *
 * Self-contained, using flat colours and no external references, so the same
 * markup works inside the map SVG and in a standalone one.
 */
function Placeholder() {
  return (
    <>
      <circle cx="50" cy="50" r="47.5" fill="#d9c79e" />
      <circle cx="50" cy="43" r="13" fill="#4a3823" opacity=".45" />
      <path d="M24,86 C25,68 36,59 50,59 C64,59 75,68 76,86 Z" fill="#4a3823" opacity=".45" />
    </>
  );
}

/** The gold medallion frame from the original page. */
function Frame() {
  return (
    <>
      <circle cx="50" cy="50" r="47" fill="none" stroke="#1c1410" strokeWidth="4" />
      <circle cx="50" cy="50" r="46" fill="none" stroke="#c9a227" strokeWidth="2.4" />
      <circle cx="50" cy="50" r="42" fill="none" stroke="#c9a227" strokeWidth=".55" opacity=".5" />
    </>
  );
}

/**
 * Medallion contents in a 0..100 coordinate space, for use inside an existing
 * SVG. Callers position and scale it with a transform.
 */
export function MedallionContent({ id }: { id: string }) {
  const url = characterImageUrl(id);
  return (
    <>
      {url ? (
        <image
          href={url}
          x="0"
          y="0"
          width="100"
          height="100"
          clipPath="url(#circleClip)"
          preserveAspectRatio="xMidYMid slice"
        />
      ) : (
        <Placeholder />
      )}
      <Frame />
    </>
  );
}

/** A standalone medallion, for the sidebar list and the character sheet. */
export function Medallion({ id, className }: { id: string; className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <MedallionContent id={id} />
    </svg>
  );
}
