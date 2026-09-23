import { memo } from "react";
import type { CSSProperties } from "react";
import { JOURNEYS } from "../data/journeys";
import { PEOPLES } from "../data/peoples";
import type { Translator } from "../lib/i18n";

/** The peoples shown in the medallion key, in the original page's order. */
const KEY_PEOPLES = ["hobbit", "elf", "man", "dwarf", "orc"];

interface Props {
  translator: Translator;
  /** Ids of the journeys currently switched on. */
  activeJourneys: ReadonlySet<string>;
  onToggleJourney: (id: string) => void;
}

/**
 * The key, and for the journeys the switch as well: each line in the key is
 * the button that draws that path across the map, which puts the control on
 * the thing it controls rather than behind a menu somewhere else.
 */
export const Legend = memo(function Legend({ translator, activeJourneys, onToggleJourney }: Props) {
  return (
    <div className="legend">
      <h3>{translator.t("legendJourneys")}</h3>
      {JOURNEYS.map((j) => {
        const on = activeJourneys.has(j.id);
        return (
          <button
            key={j.id}
            type="button"
            className={"path-key" + (on ? " on" : "")}
            aria-pressed={on}
            style={{ "--path-colour": j.colour } as CSSProperties}
            onClick={() => onToggleJourney(j.id)}
          >
            <i />
            {translator.mapName(j.name)}
          </button>
        );
      })}

      <h3 style={{ marginTop: 9 }}>{translator.t("legendMedallions")}</h3>
      {KEY_PEOPLES.map((p) => (
        <div key={p}>
          <i style={{ background: PEOPLES[p]?.colour }} />
          {translator.peopleName(p, true)}
        </div>
      ))}
    </div>
  );
});
