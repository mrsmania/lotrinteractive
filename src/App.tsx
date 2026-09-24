import { Suspense, lazy, useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Character, Language, SidebarTab, ViewName } from "./types";
import { CHARACTERS, CHARACTER_BY_ID } from "./data/characters";
import type { RelationKind } from "./data/relations";
import { JOURNEYS } from "./data/journeys";
import { PLACES } from "./data/places";
import { PLACE_LORE, PLACE_LORE_BY_ID } from "./data/placeLore";
import { createTranslator } from "./lib/i18n";
import type { Translator } from "./lib/i18n";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { MapView } from "./components/MapView";
import type { FocusRequest } from "./components/MapView";
import { CharacterSheet } from "./components/CharacterSheet";
import { PlaceSheet } from "./components/PlaceSheet";
import { SharedDefs } from "./components/SharedDefs";

// The connections view lays its graph out when it is first imported, which is
// a few hundred passes over every pair of characters. Loaded on demand, that
// is paid by whoever opens it and not by everybody who only came for the map.
const RelationsView = lazy(() =>
  import("./components/RelationsView").then((m) => ({ default: m.RelationsView })),
);

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
  // On a phone the sheet covers everything, so two things stand in for it
  // there. "Show on the map" closes the sheet but leaves its subject lit on the
  // map (lingering); and in the connections view a pick opens a small card over
  // the foot of the graph (peek), with the full sheet a tap further on.
  const [lingering, setLingering] = useState(false);
  const [peek, setPeek] = useState(false);
  const viewRef = useRef(view);
  viewRef.current = view;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarTab, setSidebarTab] = useState<SidebarTab>("peoples");
  // Which place's sheet is open. A place and a character never show at once:
  // there is one panel, and the last thing asked for wins.
  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null);
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

  // Built once per language rather than once per character per keystroke.
  const haystacks = useMemo(
    () => new Map(CHARACTERS.map((c) => [c.id, haystack(c, translator)])),
    [translator],
  );

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CHARACTERS.filter((c) => {
      if (activePeoples.size > 0 && !activePeoples.has(c.people)) return false;
      if (!q) return true;
      return haystacks.get(c.id)!.includes(q);
    });
  }, [query, activePeoples, haystacks]);

  const visibleIds = useMemo(() => new Set(visible.map((c) => c.id)), [visible]);

  /** Open a character. `move` also brings the map to them. */
  const select = useCallback((id: string, move: boolean, scale = 2.4) => {
    const compact = window.innerWidth <= NARROW && viewRef.current === "relations";
    setSelectedId(id);
    setSelectedPlaceId(null);
    setSidebarTab("peoples");
    setLingering(false);
    setPeek(compact);
    // In the phone's connections view a pick opens the card, not the sheet;
    // but a sheet already open, followed from one of its own links, stays.
    setSheetOpen((open) => (compact ? open : true));
    if (move) setFocus((prev) => ({ id, scale, nonce: (prev?.nonce ?? 0) + 1 }));
    if (window.innerWidth <= NARROW) setSidebarOpen(false);
  }, []);

  /** Open a place. `move` also brings the map to it. */
  const selectPlace = useCallback((id: string, move: boolean, scale = 2.8) => {
    if (!PLACE_LORE_BY_ID.has(id)) return;
    setSelectedPlaceId(id);
    setSelectedId(null);
    setSidebarTab("places");
    setLingering(false);
    setPeek(false);
    setSheetOpen(true);
    if (move) setFocus((prev) => ({ id, place: true, scale, nonce: (prev?.nonce ?? 0) + 1 }));
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

  /**
   * Somebody, or somewhere, at random: whichever the sidebar is showing. A
   * character is drawn from those the filters leave, a place from every place
   * with a sheet. The one already open is left out, so the button always
   * moves.
   */
  const random = useCallback(() => {
    const pick = (ids: string[], current: string | null) => {
      const pool = ids.length > 1 ? ids.filter((id) => id !== current) : ids;
      return pool.length ? pool[Math.floor(Math.random() * pool.length)] : null;
    };
    if (sidebarTab === "places") {
      const id = pick(PLACE_LORE.map((p) => p.id), selectedPlaceId);
      if (id) selectPlace(id, true);
    } else {
      const id = pick(visible.map((c) => c.id), selectedId);
      if (id) select(id, true);
    }
  }, [sidebarTab, visible, selectedId, selectedPlaceId, select, selectPlace]);

  // Stable, so the memoised layers below are not re-rendered for nothing.
  const selectAndMove = useCallback((id: string) => select(id, true), [select]);
  const selectInPlace = useCallback((id: string) => select(id, false), [select]);

  /** On a phone, closes the sheet so the map it has just moved can be seen. */
  const revealMap = useCallback(() => {
    if (window.innerWidth > NARROW) return;
    setSheetOpen(false);
    setLingering(true);
  }, []);

  const closeSheet = useCallback(() => {
    setSheetOpen(false);
    setLingering(false);
  }, []);

  /** A tap on the open map or graph lets go of whatever was left lit. */
  const clearHighlight = useCallback(() => {
    setLingering(false);
    setPeek(false);
  }, []);

  const changeView = useCallback((next: ViewName) => {
    setView(next);
    setPeek(false);
  }, []);

  /** Whether the selection is lit on the map or graph. */
  const shown = sheetOpen || lingering || peek;
  const selectPlaceAndMove = useCallback((id: string) => selectPlace(id, true), [selectPlace]);
  const selectPlaceInPlace = useCallback((id: string) => selectPlace(id, false), [selectPlace]);

  // Escape closes the character sheet, and the drawer on a phone.
  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key !== "Escape") return;
      setSheetOpen(false);
      setSidebarOpen(false);
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
        onViewChange={changeView}
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
          selectedPlaceId={sheetOpen ? selectedPlaceId : null}
          tab={sidebarTab}
          open={sidebarOpen}
          query={query}
          onQueryChange={setQuery}
          onTabChange={setSidebarTab}
          onTogglePeople={togglePeople}
          onSelect={selectAndMove}
          onSelectPlace={selectPlaceAndMove}
        />

        {/* On a phone the open drawer dims the map, and a tap there closes it. */}
        <div
          className={"scrim" + (sidebarOpen ? " on" : "")}
          aria-hidden="true"
          onClick={() => setSidebarOpen(false)}
        />

        {view === "map" ? (
          <MapView
            translator={translator}
            selectedId={shown ? selectedId : null}
            visibleIds={visibleIds}
            activeJourneys={activeJourneys}
            focus={focus}
            showPlaces={sidebarTab === "places"}
            selectedPlaceId={shown ? selectedPlaceId : null}
            onBackgroundTap={clearHighlight}
            onToggleJourney={toggleJourney}
            onSelect={selectInPlace}
            onSelectPlace={selectPlaceInPlace}
          />
        ) : (
          <Suspense fallback={<div className="map-field graph-field" />}>
            <RelationsView
              translator={translator}
              selectedId={shown ? selectedId : null}
              peek={peek && !sheetOpen}
              onExpand={() => setSheetOpen(true)}
              onClosePeek={clearHighlight}
              visibleIds={visibleIds}
              activeKinds={activeKinds}
              focusNonce={focus?.nonce ?? 0}
              onSelect={selectInPlace}
              onBackgroundTap={clearHighlight}
            />
          </Suspense>
        )}

        {selectedPlaceId ? (
          <PlaceSheet
            translator={translator}
            place={PLACE_LORE_BY_ID.get(selectedPlaceId) ?? null}
            open={sheetOpen}
            onClose={closeSheet}
            onSelectCharacter={(id) => select(id, true)}
            onShowOnMap={() => {
              selectPlace(selectedPlaceId, true, 3.4);
              revealMap();
            }}
          />
        ) : (
          <CharacterSheet
            translator={translator}
            character={selected}
            open={sheetOpen}
            onClose={closeSheet}
            onSelect={(id) => select(id, true)}
            onShowOnMap={() => {
              if (!selectedId) return;
              select(selectedId, true, 3);
              revealMap();
            }}
          />
        )}
      </main>
    </div>
  );
}
