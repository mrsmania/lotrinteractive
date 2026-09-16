import { useMemo } from "react";
import type { Character } from "../types";
import { PEOPLES } from "../data/peoples";
import type { Translator } from "../lib/i18n";
import { Medallion } from "./Medallion";

interface Props {
  translator: Translator;
  /** Characters passing the current filters. */
  visible: Character[];
  activePeoples: ReadonlySet<string>;
  selectedId: string | null;
  open: boolean;
  onTogglePeople: (people: string) => void;
  onSelect: (id: string) => void;
}

export function Sidebar({
  translator,
  visible,
  activePeoples,
  selectedId,
  open,
  onTogglePeople,
  onSelect,
}: Props) {
  // Group the visible characters by people, keeping the authored order of
  // PEOPLES and sorting names within each group for the current language.
  const groups = useMemo(() => {
    return Object.keys(PEOPLES)
      .map((people) => ({
        people,
        members: visible
          .filter((c) => c.people === people)
          .sort((a, b) =>
            translator
              .field(a, "name")
              .localeCompare(translator.field(b, "name"), translator.language),
          ),
      }))
      .filter((g) => g.members.length > 0);
  }, [visible, translator]);

  return (
    <aside className={"sidebar" + (open ? " open" : "")}>
      <div className="sidebar-head">
        <h2>{translator.t("peoples")}</h2>
        <div className="chips">
          {Object.keys(PEOPLES).map((people) => (
            <button
              key={people}
              className="chip"
              aria-pressed={activePeoples.has(people)}
              style={{ ["--people" as string]: PEOPLES[people].colour }}
              onClick={() => onTogglePeople(people)}
            >
              {translator.peopleName(people, true)}
            </button>
          ))}
        </div>
      </div>

      <div className="list">
        {groups.length === 0 ? (
          <div className="empty">{translator.t("empty")}</div>
        ) : (
          groups.map((g) => (
            <div key={g.people}>
              <div className="group">
                {translator.peopleName(g.people, true)} ({g.members.length})
              </div>
              {g.members.map((c) => (
                <button
                  key={c.id}
                  className={"entry" + (c.id === selectedId ? " active" : "")}
                  onClick={() => onSelect(c.id)}
                >
                  <Medallion id={c.id} />
                  <span>
                    <b>{translator.field(c, "name")}</b>
                    <small>{translator.field(c, "title")}</small>
                  </span>
                </button>
              ))}
            </div>
          ))
        )}
      </div>
    </aside>
  );
}
