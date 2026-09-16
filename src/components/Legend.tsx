import { JOURNEYS } from "../data/journeys";
import { PEOPLES } from "../data/peoples";
import type { Translator } from "../lib/i18n";

/** The peoples shown in the medallion key, in the original page's order. */
const KEY_PEOPLES = ["Hobbit", "Elb", "Mensch", "Zwerg", "Ork"];

export function Legend({ translator }: { translator: Translator }) {
  return (
    <div className="legend">
      <h3>{translator.t("legendJourneys")}</h3>
      {JOURNEYS.map((j) => (
        <div className="path-key" key={j.id}>
          <i style={{ borderColor: j.colour }} />
          {translator.mapName(j.name)}
        </div>
      ))}

      <h3 style={{ marginTop: 9 }}>{translator.t("legendMedallions")}</h3>
      {KEY_PEOPLES.map((p) => (
        <div key={p}>
          <i style={{ background: PEOPLES[p]?.colour }} />
          {translator.peopleName(p, true)}
        </div>
      ))}
    </div>
  );
}
