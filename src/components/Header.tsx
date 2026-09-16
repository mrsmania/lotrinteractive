import type { RelationKind } from "../data/relations";
import type { Translator } from "../lib/i18n";
import type { ViewName } from "../types";

interface Props {
  translator: Translator;
  view: ViewName;
  query: string;
  showJourneys: boolean;
  showPlaceNames: boolean;
  activeKinds: ReadonlySet<RelationKind>;
  onViewChange: (view: ViewName) => void;
  onQueryChange: (q: string) => void;
  onToggleJourneys: () => void;
  onTogglePlaceNames: () => void;
  onToggleKind: (kind: RelationKind) => void;
  onRandom: () => void;
  onToggleLanguage: () => void;
  onToggleSidebar: () => void;
}

const KINDS: RelationKind[] = ["bond", "journey", "place"];
const KIND_LABEL = {
  bond: "kindBond",
  journey: "kindJourney",
  place: "kindPlace",
} as const;

export function Header({
  translator,
  view,
  query,
  showJourneys,
  showPlaceNames,
  activeKinds,
  onViewChange,
  onQueryChange,
  onToggleJourneys,
  onTogglePlaceNames,
  onToggleKind,
  onRandom,
  onToggleLanguage,
  onToggleSidebar,
}: Props) {
  const t = translator.t;

  return (
    <header>
      <button className="button narrow-only" onClick={onToggleSidebar}>
        {t("characters")}
      </button>

      <div className="title">
        <h1>{t("title")}</h1>
        <div className="inscription">{t("subtitle")}</div>
      </div>

      <div className="head-tools">
        <div className="views" role="group" aria-label={t("viewMap") + " / " + t("viewConnections")}>
          <button
            className="button"
            aria-pressed={view === "map"}
            onClick={() => onViewChange("map")}
          >
            {t("viewMap")}
          </button>
          <button
            className="button"
            aria-pressed={view === "relations"}
            onClick={() => onViewChange("relations")}
          >
            {t("viewConnections")}
          </button>
        </div>

        <div className="search">
          <span aria-hidden="true">&#9906;</span>
          <input
            type="search"
            value={query}
            placeholder={t("search")}
            autoComplete="off"
            aria-label={t("search")}
            onChange={(ev) => onQueryChange(ev.target.value)}
          />
        </div>

        {/* Each view has its own layers to switch on and off. */}
        {view === "map" ? (
          <>
            <button className="button" aria-pressed={showJourneys} onClick={onToggleJourneys}>
              {t("journeys")}
            </button>
            <button className="button" aria-pressed={showPlaceNames} onClick={onTogglePlaceNames}>
              {t("placeNames")}
            </button>
          </>
        ) : (
          KINDS.map((kind) => (
            <button
              key={kind}
              className="button"
              aria-pressed={activeKinds.has(kind)}
              onClick={() => onToggleKind(kind)}
            >
              {t(KIND_LABEL[kind])}
            </button>
          ))
        )}

        <button className="button" onClick={onRandom}>
          {t("random")}
        </button>
        <button className="button" title={t("languageTitle")} onClick={onToggleLanguage}>
          {t("language")}
        </button>
      </div>
    </header>
  );
}
