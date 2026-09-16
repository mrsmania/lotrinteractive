import type { ReactNode } from "react";
import type { Character } from "../types";
import { CHARACTER_BY_ID } from "../data/characters";
import { PEOPLES } from "../data/peoples";
import { JOURNEYS, journeyHas } from "../data/journeys";
import type { Translator } from "../lib/i18n";
import { Medallion } from "./Medallion";

interface Props {
  translator: Translator;
  character: Character | null;
  open: boolean;
  onClose: () => void;
  onSelect: (id: string) => void;
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

export function CharacterSheet({
  translator,
  character,
  open,
  onClose,
  onSelect,
  onShowOnMap,
}: Props) {
  const t = translator.t;

  // The panel stays mounted so it can slide out; it simply has no content
  // before anything has been picked.
  if (!character) {
    return <section className="sheet" aria-hidden="true" />;
  }

  const c = character;
  const f = <K extends Parameters<Translator["field"]>[1]>(key: K) => translator.field(c, key);
  const colour = PEOPLES[c.people]?.colour;

  const deeds = f("deeds");
  const notes = [f("note"), ...(f("notes") ?? [])].filter(Boolean) as string[];
  const bonds = (c.bonds ?? [])
    .map((id) => CHARACTER_BY_ID.get(id))
    .filter((x): x is Character => Boolean(x));
  const journeys = JOURNEYS.filter((j) => j.places.length > 0 && journeyHas(j.id, c.id));

  return (
    <section className={"sheet" + (open ? " open" : "")} aria-hidden={!open}>
      <div className="sheet-top">
        <button className="close" onClick={onClose} title={t("close")}>
          &times;
        </button>
        <Medallion id={c.id} />
        <h2>{f("name")}</h2>
        <p>{f("title")}</p>
      </div>

      <div className="sheet-body">
        <span className="tag" style={{ color: colour }}>
          {translator.peopleName(c.people)}
        </span>{" "}
        <span className="tag" style={{ color: "#a08d63" }}>
          {f("allegiance")}
        </span>

        <table className="facts">
          <tbody>
            <tr>
              <th>{t("home")}</th>
              <td>{translator.placeName(c.home)}</td>
            </tr>
            {f("lifespan") && (
              <tr>
                <th>{t("lifespan")}</th>
                <td>{f("lifespan")}</td>
              </tr>
            )}
            <tr>
              <th>{t("weapon")}</th>
              <td>{f("weapon")}</td>
            </tr>
            <tr>
              <th>{t("playedBy")}</th>
              <td>{f("actor")}</td>
            </tr>
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

        <Section title={t("whoTheyAre")}>
          <p className="prose">{f("bio")}</p>
        </Section>

        {f("descent") && (
          <Section title={t("descent")}>
            <p className="prose">{f("descent")}</p>
          </Section>
        )}

        {f("appearance") && (
          <Section title={t("appearance")}>
            <p className="prose">{f("appearance")}</p>
          </Section>
        )}

        {f("nature") && (
          <Section title={t("nature")}>
            <p className="prose">{f("nature")}</p>
          </Section>
        )}

        {deeds && deeds.length > 0 && (
          <Section title={t("milestones")}>
            <ul className="milestones">
              {deeds.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </Section>
        )}

        <Section title={t("whatBecomes")}>
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

        {bonds.length > 0 && (
          <Section title={t("connectedWith")}>
            <div className="bonds">
              {bonds.map((b) => (
                <button key={b.id} onClick={() => onSelect(b.id)}>
                  <Medallion id={b.id} />
                  {translator.field(b, "name").split(",")[0]}
                </button>
              ))}
            </div>
          </Section>
        )}

        {journeys.map((j) => (
          <Section title={t("journey")} key={j.id}>
            <p className="prose" style={{ color: j.colour }}>
              {translator.mapName(j.name)}:{" "}
              {j.places.map((p) => translator.placeName(p, true)).join(" → ")}
            </p>
          </Section>
        ))}
      </div>

      <div className="sheet-foot">
        <button className="button" onClick={onShowOnMap}>
          {t("showOnMap")}
        </button>
      </div>
    </section>
  );
}
