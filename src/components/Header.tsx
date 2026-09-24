import type { RelationKind } from "../data/relations";
import type { Translator } from "../lib/i18n";
import type { ViewName } from "../types";

interface Props {
  translator: Translator;
  view: ViewName;
  query: string;
  /** Whether any path is switched on at all; the button is the master switch. */
  anyJourney: boolean;
  activeKinds: ReadonlySet<RelationKind>;
  onViewChange: (view: ViewName) => void;
  onQueryChange: (q: string) => void;
  onToggleJourneys: () => void;
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
  anyJourney,
  activeKinds,
  onViewChange,
  onQueryChange,
  onToggleJourneys,
  onToggleKind,
  onRandom,
  onToggleLanguage,
  onToggleSidebar,
}: Props) {
  const t = translator.t;

  return (
    <header>
      {/* On a phone the sidebar is a drawer, and this opens it. */}
      <button
        className="button menu narrow-only"
        onClick={onToggleSidebar}
        title={t("characters")}
        aria-label={t("characters")}
      >
        <span aria-hidden="true">&#9776;</span>
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

        {/* On a phone the search moves into the drawer, beside the list it
            filters; see Sidebar. */}
        <SearchBox className="wide-only" translator={translator} query={query} onQueryChange={onQueryChange} />

        {/* Each view has its own layers to switch on and off. */}
        {view === "map" ? (
          <button
            className="button"
            aria-pressed={anyJourney}
            title={t(anyJourney ? "journeysNone" : "journeysAll")}
            onClick={onToggleJourneys}
          >
            {t("journeys")}
          </button>
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
      </div>

      {/* Kept apart from the tools so that on a phone it can stay on the
          title's line, as two letters, while the tools take a line of their
          own. */}
      <div className="head-quick">
        <button
          className="button"
          title={t("languageTitle")}
          aria-label={t("languageTitle")}
          onClick={onToggleLanguage}
        >
          <span className="wide-only">{t("language")}</span>
          <span className="narrow-only">{t("languageShort")}</span>
        </button>
      </div>
    </header>
  );
}

/** The search field, shared by the header and, on a phone, the drawer. */
export function SearchBox({
  translator,
  query,
  onQueryChange,
  className,
}: {
  translator: Translator;
  query: string;
  onQueryChange: (q: string) => void;
  className?: string;
}) {
  const t = translator.t;
  return (
    <div className={"search" + (className ? " " + className : "")}>
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
  );
}
