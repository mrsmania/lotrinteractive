import { useCallback, useEffect, useMemo, useState } from "react";
import type { Character, Language, ViewName } from "./types";
import { CHARACTERS, CHARACTER_BY_ID } from "./data/characters";
import type { RelationKind } from "./data/relations";
import { JOURNEYS } from "./data/journeys";
import { PLACES } from "./data/places";
import { createTranslator } from "./lib/i18n";
import type { Translator } from "./lib/i18n";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { MapView } from "./components/MapView";
import type { FocusRequest } from "./components/MapView";
import { RelationsView } from "./components/RelationsView";
import { CharacterSheet } from "./components/CharacterSheet";
import { SharedDefs } from "./components/SharedDefs";

/** Below this width the sidebar becomes a drawer; matches the CSS breakpoint. */
const NARROW = 880;

/** All three kinds of connection are shown until the reader turns one off. */
const ALL_KINDS: RelationKind[] = ["bond", "journey", "place"];

/** Everything a search looks through, in both languages. */
function haystack(c: Character, tr: Translator): string {
  return [
    c.name,
    c.title,
    c.weapon,
    c.actor,
    c.bio,
    PLACES[c.home]?.name,
    tr.field(c, "name"),
    tr.field(c, "title"),
    tr.field(c, "weapon"),
    tr.field(c, "bio"),
    tr.field(c, "otherNames"),
    tr.peopleName(c.people),
    tr.placeName(c.home),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

export default function App() {
  const [language, setLanguage] = useState<Language>("en");
  const [view, setView] = useState<ViewName>("map");
  const [query, setQuery] = useState("");
  const [activePeoples, setActivePeoples] = useState<ReadonlySet<string>>(new Set());
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // No path is drawn until it is asked for: seven at once is a thicket.
  const [activeJourneys, setActiveJourneys] = useState<ReadonlySet<string>>(() => new Set());
  const [focus, setFocus] = useState<FocusRequest | null>(null);
  const [activeKinds, setActiveKinds] = useState<ReadonlySet<RelationKind>>(
    () => new Set(ALL_KINDS),
  );

  const translator = useMemo(() => createTranslator(language), [language]);

  // Keep the document itself in step with the chosen language.
  useEffect(() => {
    document.documentElement.lang = language === "en" ? "en-GB" : "de-CH";
    document.title = translator.t("title");
  }, [language, translator]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CHARACTERS.filter((c) => {
      if (activePeoples.size > 0 && !activePeoples.has(c.people)) return false;
      if (!q) return true;
      return haystack(c, translator).includes(q);
    });
  }, [query, activePeoples, translator]);

  const visibleIds = useMemo(() => new Set(visible.map((c) => c.id)), [visible]);

  /** Open a character. `move` also brings the map to them. */
  const select = useCallback((id: string, move: boolean, scale = 2.4) => {
    setSelectedId(id);
    setSheetOpen(true);
    if (move) setFocus((prev) => ({ id, scale, nonce: (prev?.nonce ?? 0) + 1 }));
    if (window.innerWidth <= NARROW) setSidebarOpen(false);
  }, []);

  const toggleJourney = useCallback((id: string) => {
    setActiveJourneys((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  /** The header's one button: everything, or nothing. */
  const toggleAllJourneys = useCallback(() => {
    setActiveJourneys((prev) => (prev.size > 0 ? new Set() : new Set(JOURNEYS.map((j) => j.id))));
  }, []);

  const toggleKind = useCallback((kind: RelationKind) => {
    setActiveKinds((prev) => {
      const next = new Set(prev);
      if (next.has(kind)) next.delete(kind);
      else next.add(kind);
      return next;
    });
  }, []);

  const togglePeople = useCallback((people: string) => {
    setActivePeoples((prev) => {
      const next = new Set(prev);
      if (next.has(people)) next.delete(people);
      else next.add(people);
      return next;
    });
  }, []);

  const random = useCallback(() => {
    if (visible.length === 0) return;
    select(visible[Math.floor(Math.random() * visible.length)].id, true);
  }, [visible, select]);

  // Escape closes the character sheet.
  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") setSheetOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const selected = selectedId ? (CHARACTER_BY_ID.get(selectedId) ?? null) : null;

  return (
    <div className="book">
      <SharedDefs />

      <Header
        translator={translator}
        view={view}
        query={query}
        anyJourney={activeJourneys.size > 0}
        activeKinds={activeKinds}
        onViewChange={setView}
        onQueryChange={setQuery}
        onToggleJourneys={toggleAllJourneys}
        onToggleKind={toggleKind}
        onRandom={random}
        onToggleLanguage={() => setLanguage((l) => (l === "en" ? "de" : "en"))}
        onToggleSidebar={() => setSidebarOpen((v) => !v)}
      />

      <main>
        <Sidebar
          translator={translator}
          visible={visible}
          activePeoples={activePeoples}
          selectedId={selectedId}
          open={sidebarOpen}
          onTogglePeople={togglePeople}
          onSelect={(id) => select(id, true)}
        />

        {view === "map" ? (
          <MapView
            translator={translator}
            selectedId={sheetOpen ? selectedId : null}
            visibleIds={visibleIds}
            activeJourneys={activeJourneys}
            focus={focus}
            onToggleJourney={toggleJourney}
            onSelect={(id) => select(id, false)}
          />
        ) : (
          <RelationsView
            translator={translator}
            selectedId={sheetOpen ? selectedId : null}
            visibleIds={visibleIds}
            activeKinds={activeKinds}
            focusNonce={focus?.nonce ?? 0}
            onSelect={(id) => select(id, false)}
          />
        )}

        <CharacterSheet
          translator={translator}
          character={selected}
          open={sheetOpen}
          onClose={() => setSheetOpen(false)}
          onSelect={(id) => select(id, true)}
          onShowOnMap={() => selectedId && select(selectedId, true, 3)}
        />
      </main>
    </div>
  );
}
