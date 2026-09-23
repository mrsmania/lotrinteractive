import { memo, useMemo } from "react";
import type { Character, PlaceGroup, SidebarTab } from "../types";
import { PEOPLES } from "../data/peoples";
import { PLACE_GROUPS, PLACE_LORE } from "../data/placeLore";
import type { Translator } from "../lib/i18n";
import { Medallion } from "./Medallion";
import { PlaceIcon } from "./PlaceIcon";

interface Props {
  translator: Translator;
  /** Characters passing the current filters. */
  visible: Character[];
  activePeoples: ReadonlySet<string>;
  selectedId: string | null;
  /** The place whose sheet is open, if it is a place rather than a character. */
  selectedPlaceId: string | null;
  tab: SidebarTab;
  open: boolean;
  onTabChange: (tab: SidebarTab) => void;
  onTogglePeople: (people: string) => void;
  onSelect: (id: string) => void;
  onSelectPlace: (id: string) => void;
}

export const Sidebar = memo(function Sidebar({
  translator,
  visible,
  activePeoples,
  selectedId,
  selectedPlaceId,
  tab,
  open,
  onTabChange,
  onTogglePeople,
  onSelect,
  onSelectPlace,
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

  // Places keep the authored order inside each group: it is the order of the
  // road, not the alphabet, and reads as the story does.
  const placeGroups = useMemo(() => {
    return PLACE_GROUPS.map((group: PlaceGroup) => ({
      group,
      members: PLACE_LORE.filter((p) => p.group === group),
    })).filter((g) => g.members.length > 0);
  }, []);

  return (
    <aside className={"sidebar" + (open ? " open" : "")}>
      <div className="sidebar-head">
        <div className="tabs" role="tablist">
          <button
            className="tab"
            role="tab"
            aria-selected={tab === "peoples"}
            onClick={() => onTabChange("peoples")}
          >
            {translator.t("peoples")}
          </button>
          <button
            className="tab"
            role="tab"
            aria-selected={tab === "places"}
            onClick={() => onTabChange("places")}
          >
            {translator.t("places")}
          </button>
        </div>

        {tab === "peoples" && (
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
        )}
      </div>

      {tab === "peoples" ? (
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
      ) : (
        <div className="list">
          {placeGroups.map((g) => (
            <div key={g.group}>
              <div className="group">
                {translator.placeGroupName(g.group)} ({g.members.length})
              </div>
              {g.members.map((p) => (
                <button
                  key={p.id}
                  className={"entry place" + (p.id === selectedPlaceId ? " active" : "")}
                  onClick={() => onSelectPlace(p.id)}
                >
                  {/* The same ring the map layer draws, so a place looks the
                      same in the list as it does on the map. */}
                  <svg className="place-pip" viewBox="0 0 100 100" aria-hidden="true">
                    <circle className="place-face" cx="50" cy="50" r="47.5" />
                    <PlaceIcon name={p.icon} />
                    <circle cx="50" cy="50" r="47" fill="none" stroke="#1c1410" strokeWidth="4" />
                    <circle className="place-rim" cx="50" cy="50" r="46" fill="none" strokeWidth="2.4" />
                  </svg>
                  <span>
                    <b>{translator.placeName(p.id)}</b>
                    <small>{translator.placeField(p, "title")}</small>
                  </span>
                </button>
              ))}
            </div>
          ))}
        </div>
      )}
    </aside>
  );
});
