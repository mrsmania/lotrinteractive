import type { Translator } from "../lib/i18n";

interface Props {
  translator: Translator;
  query: string;
  showJourneys: boolean;
  showPlaceNames: boolean;
  onQueryChange: (q: string) => void;
  onToggleJourneys: () => void;
  onTogglePlaceNames: () => void;
  onRandom: () => void;
  onToggleLanguage: () => void;
  onToggleSidebar: () => void;
}

export function Header({
  translator,
  query,
  showJourneys,
  showPlaceNames,
  onQueryChange,
  onToggleJourneys,
  onTogglePlaceNames,
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

        <button className="button" aria-pressed={showJourneys} onClick={onToggleJourneys}>
          {t("journeys")}
        </button>
        <button className="button" aria-pressed={showPlaceNames} onClick={onTogglePlaceNames}>
          {t("placeNames")}
        </button>
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
