import type { ReactNode } from "react";
import type { Character, PlaceLore } from "../types";
import { CHARACTERS } from "../data/characters";
import { JOURNEYS, journeyStations } from "../data/journeys";
import type { Translator } from "../lib/i18n";
import { Medallion } from "./Medallion";

interface Props {
  translator: Translator;
  place: PlaceLore | null;
  open: boolean;
  onClose: () => void;
  onSelectCharacter: (id: string) => void;
  onShowOnMap: () => void;
}

/** A labelled block of prose, rendered only when there is something to say. */
function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <div className="section">{title}</div>
      {children}
    </>
  );
}

/**
 * The sheet for a place, built to read as a sibling of the character sheet.
 *
 * Two of its sections are not authored anywhere: who lives here comes from
 * `home` on the cast, which is already what puts the medallions on the map, and
 * the journeys come from the routes. A place that nobody calls home and that no
 * company passed through simply shows neither.
 */
export function PlaceSheet({
  translator,
  place,
  open,
  onClose,
  onSelectCharacter,
  onShowOnMap,
}: Props) {
  const t = translator.t;

  if (!place) {
    return <section className="sheet" aria-hidden="true" />;
  }

  const p = place;
  const f = <K extends Parameters<Translator["placeField"]>[1]>(key: K) =>
    translator.placeField(p, key);

  const events = f("events");
  const notes = f("notes") ?? [];
  const locals: Character[] = CHARACTERS.filter((c) => c.home === p.id);
  const journeys = JOURNEYS.filter((j) => journeyStations(j).includes(p.id));

  return (
    <section className={"sheet" + (open ? " open" : "")} aria-hidden={!open}>
      <div className="sheet-top">
        <button className="close" onClick={onClose} title={t("close")}>
          &times;
        </button>
        <h2>{translator.placeName(p.id)}</h2>
        <p>{f("title")}</p>
      </div>

      <div className="sheet-body">
        <span className="tag" style={{ color: "#c9a227" }}>{f("kind")}</span>{" "}
        <span className="tag" style={{ color: "#a08d63" }}>{f("region")}</span>

        <table className="facts">
          <tbody>
            <tr>
              <th>{t("whereItLies")}</th>
              <td>{f("location")}</td>
            </tr>
            {f("builtBy") && (
              <tr>
                <th>{t("builtBy")}</th>
                <td>{f("builtBy")}</td>
              </tr>
            )}
            {f("heldBy") && (
              <tr>
                <th>{t("heldBy")}</th>
                <td>{f("heldBy")}</td>
              </tr>
            )}
            {f("age") && (
              <tr>
                <th>{t("age")}</th>
                <td>{f("age")}</td>
              </tr>
            )}
            <tr>
              <th>{t("source")}</th>
              <td>{f("source")}</td>
            </tr>
          </tbody>
        </table>

        {f("otherNames") && (
          <Section title={t("otherNames")}>
            <p className="prose">{f("otherNames")}</p>
          </Section>
        )}

        <Section title={t("whatItIs")}>
          <p className="prose">{f("bio")}</p>
        </Section>

        {f("appearance") && (
          <Section title={t("whatYouSee")}>
            <p className="prose">{f("appearance")}</p>
          </Section>
        )}

        {f("nature") && (
          <Section title={t("nature")}>
            <p className="prose">{f("nature")}</p>
          </Section>
        )}

        {events && events.length > 0 && (
          <Section title={t("whatHappened")}>
            <ul className="milestones">
              {events.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </Section>
        )}

        <Section title={t("whatBecomesOfIt")}>
          <p className="prose">{f("fate")}</p>
        </Section>

        {f("bookFilm") && (
          <Section title={t("bookFilm")}>
            <p className="prose">{f("bookFilm")}</p>
          </Section>
        )}

        {notes.length > 0 && (
          <Section title={t("aside")}>
            {notes.map((n, i) => (
              <p className="margin-note" key={i}>
                {n}
              </p>
            ))}
          </Section>
        )}

        {locals.length > 0 && (
          <Section title={t("whoIsFromHere")}>
            <div className="bonds">
              {locals.map((c) => (
                <button key={c.id} onClick={() => onSelectCharacter(c.id)}>
                  <Medallion id={c.id} />
                  {translator.field(c, "name").split(",")[0]}
                </button>
              ))}
            </div>
          </Section>
        )}

        {journeys.length > 0 && (
          <Section title={t("journeysThrough")}>
            {journeys.map((j) => (
              <p className="prose" key={j.id} style={{ color: j.colour }}>
                {translator.mapName(j.name)}
              </p>
            ))}
          </Section>
        )}
      </div>

      <div className="sheet-foot">
        <button className="button" onClick={onShowOnMap}>
          {t("showOnMap")}
        </button>
      </div>
    </section>
  );
}
