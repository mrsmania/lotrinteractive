import type { Character } from "../types";

/**
 * The cast. German is the authored language; English wording lives in
 * src/data/en.ts and is looked up per field, falling back to these.
 *
 * The original page built this in four passes (a base record plus three layers
 * of detail merged with Object.assign). Those layers are flattened here.
 */
export const CHARACTERS: Character[] = [
  {
    id: "frodo",
    name: "Frodo Beutlin",
    title: "Der Ringträger",
    people: "Hobbit",
    allegiance: "Freie Völker",
    home: "beutelsend",
    weapon: "Stich und das Mithrilhemd",
    actor: "Elijah Wood",
    source: "Herr der Ringe",
    lifespan: "geboren 2968 D.Z., verlässt Mittelerde 3021",
    bio: "Bilbos Erbe und Träger des Einen Ringes. Er nimmt in Bruchtal die Last auf sich, die kein Heer und kein König tragen kann, und geht als einziger Weg nach Osten den Weg der Verzweiflung.",
    fate: "Er erreicht den Schicksalsberg, doch am Ende beansprucht er den Ring für sich. Später segelt er von den Grauen Anfurten in den Westen.",
    otherNames: "Herr Unterberg als Deckname in Bree, der Neunfingrige, auf Sindarin Iorhael",
    descent: "Sohn von Drogo Beutlin und Primula Brandybock, die beide 2980 im Brandywein ertranken. Von Bilbo im Jahr 3001 als Erbe eingesetzt.",
    appearance: "Gut 1,20 Meter, dunkles lockiges Haar, hellere Haut als die meisten Hobbits, ein wacher und zunehmend müder Blick.",
    nature: "Eher Gelehrter als Abenteurer, sprachbegabt, still. Unter der Last des Ringes wird er hart gegen sich selbst und sanft gegen Gollum.",
    bookFilm: "Im Buch ist Frodo beim Aufbruch fünfzig Jahre alt und wartet siebzehn Jahre nach Bilbos Fest ab. Der Film macht daraus wenige Wochen und einen jungen Frodo.",
    deeds: [
      "2980 verwaist, als die Eltern im Brandywein ertrinken, und in Brandyschloss aufgezogen",
      "2989 von Bilbo nach Beutelsend geholt",
      "Erbt am 22. September 3001 Haus und Ring",
      "Bricht am 23. September 3018 mit Sam, Merry und Pippin auf",
      "Wird auf der Wetterspitze von einer Morgulklinge getroffen",
      "Nimmt am 25. Oktober 3018 beim Rat von Elrond die Bürde an",
      "Trennt sich am 26. Februar 3019 am Amon Hen von der Gemeinschaft",
      "Nimmt Gollum als Führer an und überquert die Totensümpfe",
      "Wird in Cirith Ungol gefangen und von Sam befreit",
      "Beansprucht am 25. März 3019 in den Sammath Naur den Ring für sich"
    ],
    notes: [
      "Sein Elbenname Iorhael bedeutet Altweise, Sams Perhael bedeutet Halbweise.",
      "Die Wunde von der Wetterspitze schmerzt danach jedes Jahr am 13. Oktober.",
      "Bilbo und Frodo feiern am selben Tag Geburtstag, dem 22. September.",
      "Im Roten Buch schreibt er die Reise selbst auf und lässt die letzten Seiten für Sam frei."
    ],
    bonds: ["sam", "bilbo", "gollum", "gandalf", "faramir", "shelob"],
    portrait: {
      skin: "#f2d3ac",
      hair: "#3a2a1c",
      hairstyle: "locken",
      beard: "keine",
      eyes: "#4d8ec2",
      cloak: "#5e6b48",
      ears: "rund"
    }
  },
  {
    id: "sam",
    name: "Samweis Gamdschie",
    title: "Der treue Gärtner",
    people: "Hobbit",
    allegiance: "Freie Völker",
    home: "beutelsend",
    weapon: "Kurzschwert, Seil und Bratpfanne",
    actor: "Sean Astin",
    source: "Herr der Ringe",
    lifespan: "geboren 2980 D.Z.",
    bio: "Gärtner in Beutelsend, der nur durch ein offenes Fenster in die Geschichte gerät und sie dann trägt. Er kocht, packt, tröstet und schleppt am Ende Frodo den Berg hinauf.",
    fate: "Er kehrt heim, heiratet Rosie und wird siebenmal Bürgermeister des Auenlandes.",
    otherNames: "Auf Sindarin Perhael, später Samweis der Beherzte, Bürgermeister von Michelbinge",
    descent: "Sohn von Hamfast Gamdschie, genannt der Ohm, Gärtner in Beutelsend seit zwei Generationen.",
    appearance: "Untersetzt, rundes Gesicht, sandbraune Locken, breite Gärtnerhände, immer mit zu schwerem Gepäck.",
    nature: "Treu bis zur Sturheit, praktisch veranlagt und heimlich Dichter. Seine Schwäche ist Misstrauen, seine Stärke die Weigerung aufzugeben.",
    bookFilm: "Im Buch widersteht Sam als Ringträger der Vision vom Garten, der ganz Mittelerde bedeckt. Der Film lässt diese Prüfung weg.",
    deeds: [
      "Belauscht Gandalf am Fenster von Beutelsend und wird zum Begleiter bestimmt",
      "Sieht in Galadriels Spiegel das zerstörte Auenland",
      "Bindet die Boote von Lórien los und zwingt Frodo, ihn mitzunehmen",
      "Kämpft Kankra mit Stich und dem Sternenglas nieder",
      "Trägt den Ring zwei Tage lang und gibt ihn freiwillig zurück",
      "Stürmt allein den Turm von Cirith Ungol",
      "Trägt Frodo den letzten Hang des Orodruin hinauf",
      "Pflanzt nach dem Krieg mit Galadriels Erde die Bäume des Auenlandes neu"
    ],
    notes: [
      "Sein Lied im Turm von Cirith Ungol verrät Frodo, dass er in der Nähe ist.",
      "Nach Rosies Tod fährt er der Überlieferung nach als letzter Ringträger über das Meer."
    ],
    bonds: ["frodo", "rosie", "galadriel", "gollum", "shelob"],
    portrait: {
      skin: "#f3d2a4",
      hair: "#c8863c",
      hairstyle: "locken",
      beard: "keine",
      eyes: "#5e8f5a",
      cloak: "#7d6a45",
      ears: "rund"
    }
  },
  {
    id: "merry",
    name: "Meriadoc Brandybock",
    title: "Ritter der Mark",
    people: "Hobbit",
    allegiance: "Freie Völker",
    home: "bockland",
    weapon: "Dolch aus den Hügelgräbern",
    actor: "Dominic Monaghan",
    source: "Herr der Ringe",
    lifespan: "geboren 2982 D.Z.",
    bio: "Der klügste Planer unter den jungen Hobbits. In Rohan schwört er Théoden die Treue und reitet heimlich mit Éowyn in die Schlacht.",
    fate: "Sein Klingenstoss bricht den Zauber des Hexenkönigs. Später wird er Herr von Bockland.",
    otherNames: "Meriadoc der Prächtige, Holdwine der Mark, Herr von Bockland",
    descent: "Sohn von Saradoc Brandybock, dem Herrn von Bockland, und Esmeralda Tuk.",
    appearance: "Kräftig für einen Hobbit, braunes Haar, aufmerksamer Blick, meist der Bestvorbereitete der Gruppe.",
    nature: "Der Planer und Kartenleser. Neugierig auf Sprachen und Kräuter, nüchtern in Gefahr, verletzt von Zurückweisung.",
    bookFilm: "Im Buch weiss Merry lange vor Frodo über den Ring Bescheid und organisiert die Verschwörung. Der Film lässt ihn eher hineinstolpern.",
    deeds: [
      "Organisiert mit Pippin und Sam die Verschwörung, die Frodos Plan durchschaut",
      "Führt die Hobbits durch den Alten Wald und wird von der Alten Weide verschluckt",
      "Wird aus einem Hügelgrab gerettet und nimmt dort die Númenorklinge an sich",
      "Wird mit Pippin von Uruk-hai verschleppt und entkommt in den Fangorn",
      "Weckt mit Pippin die Ents und erlebt den Fall Isengarts",
      "Schwört Théoden in Edoras die Treue als Knappe",
      "Reitet verborgen mit Éowyn zur Schlacht auf dem Pelennor",
      "Sticht dem Hexenkönig in die Kniekehle und bricht damit seinen Zauber",
      "Kämpft in der Befreiung des Auenlandes an vorderster Stelle"
    ],
    notes: [
      "Sein Dolch aus dem Hügelgrab war eigens gegen den Hexenkönig geschmiedet und zerfällt nach dem Stoss.",
      "Er erhält den Titel Holdwine, Rohirrisch für treuer Freund.",
      "Er schreibt später über Kräuter, Pfeifenkraut und die Zeitrechnung des Auenlandes.",
      "Er und Pippin werden in Rohan beigesetzt, an Éomers Seite."
    ],
    bonds: ["pippin", "eowyn", "theoden", "treebeard", "frodo"],
    portrait: {
      skin: "#f1d0a6",
      hair: "#8a5a2b",
      hairstyle: "kurz",
      beard: "keine",
      eyes: "#7a6a3c",
      cloak: "#4f5f6b",
      ears: "rund"
    }
  },
  {
    id: "pippin",
    name: "Peregrin Tuk",
    title: "Wächter der Zitadelle",
    people: "Hobbit",
    allegiance: "Freie Völker",
    home: "tuckborn",
    weapon: "Schwert aus den Hügelgräbern",
    actor: "Billy Boyd",
    source: "Herr der Ringe",
    lifespan: "geboren 2990 D.Z.",
    bio: "Der jüngste der vier Hobbits, neugierig bis zur Torheit. Sein Blick in den Palantír verrät Sauron viel und rettet zugleich Faramirs Leben.",
    fate: "Er wird Wächter der Zitadelle von Minas Tirith und später Thain des Auenlandes.",
    otherNames: "Peregrin I., Thain des Auenlandes, Wächter der Zitadelle",
    descent: "Sohn von Paladin Tuk II. und Erbe des Thains, damit von Geburt an ein kleiner Fürst.",
    appearance: "Der jüngste und schlankste der vier, helles Haar, offenes Gesicht, nach dem Krieg ungewöhnlich gross.",
    nature: "Vorlaut, neugierig, schnell im Kopf, wenn es darauf ankommt. Sein Leichtsinn richtet Schaden an und rettet zugleich Leben.",
    bookFilm: "Im Buch ist Pippin mit 28 nach Hobbitmass noch unmündig. Sein Lied vor Denethor stammt aus dem Film, im Buch singt er nicht.",
    deeds: [
      "Schliesst sich der Verschwörung an, obwohl er der Jüngste ist",
      "Wirft in Moria einen Stein in den Brunnen und weckt die Trommeln",
      "Wird mit Merry verschleppt und lässt die Brosche als Zeichen fallen",
      "Blickt in den Palantír von Orthanc und wird dabei von Sauron gesehen",
      "Reitet mit Gandalf auf Schattenfell nach Minas Tirith",
      "Tritt in Denethors Dienst und wird Wächter der Zitadelle",
      "Holt Gandalf, als Denethor Faramir verbrennen will",
      "Erschlägt vor dem Schwarzen Tor einen Bergtroll und wird darunter begraben"
    ],
    notes: [
      "Er und Merry wachsen durch das Entwasser zu den grössten Hobbits aller Zeiten.",
      "Der Palantír-Vorfall ist Saurons grösster Irrtum: er hält Pippin für den Ringträger in Isengart.",
      "Als Thain wird er später einer der drei mächtigsten Hobbits des Auenlandes."
    ],
    bonds: ["merry", "gandalf", "denethor", "faramir", "beregond"],
    portrait: {
      skin: "#f4d6ad",
      hair: "#d2a95e",
      hairstyle: "locken",
      beard: "keine",
      eyes: "#6fa0c4",
      cloak: "#6b5340",
      ears: "rund"
    }
  },
  {
    id: "bilbo",
    name: "Bilbo Beutlin",
    title: "Der Finder des Ringes",
    people: "Hobbit",
    allegiance: "Freie Völker",
    home: "bruchtal",
    weapon: "Stich",
    actor: "Ian Holm und Martin Freeman",
    source: "Der Hobbit, Herr der Ringe",
    lifespan: "2890 bis nach 3021 D.Z., 131 Jahre in Mittelerde",
    bio: "Er fand den Ring in den Tiefen des Nebelgebirges und trug ihn sechzig Jahre wie ein Erbstück. Sein Buch über die Reise nach Erebor beginnt alles.",
    fate: "Er verlässt das Auenland an seinem 111. Geburtstag, lebt in Bruchtal und fährt mit Frodo über das Meer.",
    otherNames: "Der Meisterdieb, Fassreiter, Rätselmeister, Elbenfreund, Glückspilz",
    descent: "Sohn von Bungo Beutlin und Belladonna Tuk. Die beiden Hälften seiner Familie ziehen ihn zeitlebens in verschiedene Richtungen.",
    appearance: "Klein und rundlich, im Alter erstaunlich unverändert, bis der Ring von ihm ablässt und alle Jahre auf einmal kommen.",
    nature: "Gastfreundlich, sammelwütig, eitel auf seine Verse. Der einzige Ringträger, der den Ring aus freiem Willen weitergibt.",
    bookFilm: "Die erste Fassung des Hobbit von 1937 erzählt die Ringfindung freundlicher: Gollum will den Ring als Preis verschenken. Tolkien schrieb das Kapitel 1951 um.",
    deeds: [
      "Wird 2941 von Gandalf und dreizehn Zwergen aus seiner Behaglichkeit gerissen",
      "Rettet die Gesellschaft aus den Kerkern der Waldelben in Fässern",
      "Spricht als erster Sterblicher seit langem mit einem Drachen und überlebt",
      "Stiehlt den Arkenstein und gibt ihn den Feinden, um Krieg zu verhindern",
      "Verschläft den grössten Teil der Schlacht der Fünf Heere",
      "Feiert 3001 sein Fest mit 111 Jahren und verschwindet vor aller Augen",
      "Gibt als Erster überhaupt den Ring freiwillig weiter, wenn auch erst nach Gandalfs Zorn",
      "Lebt zwanzig Jahre in Bruchtal und übersetzt Elbenbücher",
      "Schenkt Frodo in Bruchtal Stich und das Mithrilhemd"
    ],
    notes: [
      "Sein Buch heisst Hin und zurück und ist Frodos einzige Quelle über Erebor.",
      "Er ist der erste Hobbit, der ein Elbenlied auf Sindarin dichtet, das Lied von Eärendil.",
      "Beim Rat von Elrond bietet er ernsthaft an, den Ring selbst nach Mordor zu tragen.",
      "Als er Frodo in Bruchtal das Mithrilhemd zeigt, weiss er nicht, dass es ein Königslösegeld wert ist."
    ],
    bonds: ["frodo", "gandalf", "thorin", "gollum", "balin", "elrond"],
    portrait: {
      skin: "#eecfa8",
      hair: "#cfc6b4",
      hairstyle: "locken",
      beard: "keine",
      eyes: "#6d8f6a",
      cloak: "#8a6a3e",
      ears: "rund"
    }
  },
  {
    id: "rosie",
    name: "Rosie Kattun",
    title: "Wirtin im Grünen Drachen",
    people: "Hobbit",
    allegiance: "Freie Völker",
    home: "beutelsend",
    weapon: "Bierkrug",
    actor: "Sarah McLeod",
    source: "Herr der Ringe",
    lifespan: "geboren 2984 D.Z.",
    bio: "Sie bleibt im Auenland, während die Welt draussen brennt, und ist der Grund, weshalb Sam überhaupt zurückkehren will.",
    fate: "Sie heiratet Sam und bekommt dreizehn Kinder.",
    otherNames: "Rose Gamdschie, geborene Kattun",
    descent: "Tochter des Bauern Tolman Kattun aus Wasserau.",
    appearance: "Rotbraunes Haar, kräftig, an Arbeit gewöhnt.",
    nature: "Nüchtern, schlagfertig, hält von grossen Reisen wenig und von Pünktlichkeit viel.",
    bookFilm: "Im Buch bekommt sie mit Sam dreizehn Kinder; im Film bleibt sie eine kurze Randfigur.",
    deeds: [
      "Führt mit ihrem Vater den Hof in Wasserau, während die vier fort sind",
      "Begrüsst Sam bei der Rückkehr mit dem Vorwurf, er sei ein Jahr zu spät",
      "Heiratet Sam im Frühjahr 3020 und zieht mit ihm nach Beutelsend"
    ],
    notes: [
      "Elanor, ihr erstes Kind, wird nach der goldenen Blume von Lothlórien benannt.",
      "Von den dreizehn Kindern tragen mehrere Namen aus Gondor und Rohan.",
      "Sie stirbt im Jahr 61 des Vierten Zeitalters, danach verlässt Sam das Auenland."
    ],
    bonds: ["sam", "frodo"],
    portrait: {
      skin: "#f6d9b0",
      hair: "#a9662c",
      hairstyle: "lang",
      beard: "keine",
      eyes: "#7d6a3a",
      cloak: "#9c5a4a",
      ears: "rund"
    }
  },
  {
    id: "gandalf",
    name: "Gandalf",
    title: "Mithrandir, der Graue und der Weisse",
    people: "Istar",
    allegiance: "Freie Völker",
    home: "minastirith",
    weapon: "Glamdring, Stab und Narya",
    actor: "Ian McKellen",
    source: "Der Hobbit, Herr der Ringe",
    lifespan: "kommt um 1000 D.Z. nach Mittelerde, fährt 3021 in den Westen",
    bio: "Ein Maia in Menschengestalt, seit zweitausend Jahren als Wanderer in Mittelerde unterwegs. Er stellt die Gefährten zusammen und hält sie zusammen.",
    fate: "Er fällt mit dem Balrog in die Tiefe, kehrt als Gandalf der Weisse zurück und führt die Verteidigung von Minas Tirith.",
    otherNames: "Mithrandir bei den Elben, Tharkûn bei den Zwergen, Incánus im Süden, Olórin in Valinor, Graurock, Sturmkrähe",
    descent: "Ein Maia aus dem Gefolge Nienna und Manwës, um das Jahr 1000 des Dritten Zeitalters mit den Istari nach Mittelerde gesandt.",
    appearance: "Alter Mann mit langem grauem Bart, spitzem Hut, Stab und buschigen Brauen; als Gandalf der Weisse blendend hell und schwer anzusehen.",
    nature: "Ungeduldig, spöttisch, tief mitfühlend. Er lehnt den Ring ab, weil er weiss, dass er ihn aus Mitleid nehmen würde und aus Mitleid Schreckliches täte.",
    bookFilm: "Im Buch ist sein Sturz in Moria und der Kampf auf dem Zirakzigil nur ein knapper Bericht. Der Film zeigt ihn als Bildsequenz.",
    deeds: [
      "Kommt um 1000 D.Z. als einer von fünf Istari über das Meer",
      "Empfängt von Círdan den Feuerring Narya",
      "Erkundet 2850 Dol Guldur und erkennt den Nekromanten als Sauron",
      "Bringt 2941 Thorin und Bilbo zusammen und löst damit den Fall Smaugs aus",
      "Vertreibt mit dem Weissen Rat den Nekromanten aus Dol Guldur",
      "Beweist 3018 in den Archiven von Minas Tirith die Natur des Ringes",
      "Entkommt Sarumans Gefangenschaft auf Orthanc durch Gwaihir",
      "Fällt am 15. Januar 3019 mit dem Balrog von der Brücke von Khazad-dûm",
      "Kehrt nach dem Kampf auf dem Zirakzigil als Gandalf der Weisse zurück",
      "Heilt Théoden, verhandelt mit Saruman und führt die Verteidigung von Minas Tirith"
    ],
    notes: [
      "Olórin war in Valinor der weiseste der Maiar und lernte bei Nienna das Mitleid.",
      "Sein Pferd Schattenfell versteht Menschenrede und duldet weder Sattel noch Zaum.",
      "Sein Feuerwerk beim Fest ist in ganz Bree und im Auenland sprichwörtlich.",
      "Er stirbt in Moria tatsächlich und wird zurückgesandt, nicht geheilt."
    ],
    bonds: ["frodo", "aragorn", "saruman", "shadowfax", "balrog", "bilbo", "cirdan"],
    portrait: {
      skin: "#e9c9a4",
      hair: "#e8e4dc",
      hairstyle: "lang",
      beard: "lang",
      eyes: "#8fa8c4",
      cloak: "#cfcac0",
      headwear: "hut",
      ears: "rund"
    }
  },
  {
    id: "saruman",
    name: "Saruman",
    title: "Der Weisse, dann der Vielfarbige",
    people: "Istar",
    allegiance: "Isengart",
    home: "isengart",
    weapon: "Stab und Palantír",
    actor: "Christopher Lee",
    source: "Herr der Ringe",
    lifespan: "kommt um 1000 D.Z. nach Mittelerde, stirbt 3019",
    bio: "Oberhaupt des Weissen Rates und grösster Kenner der Ringkunst. Sein Wissen wird ihm zur Falle: über den Palantír bindet Sauron ihn an sich.",
    fate: "Baumbart nimmt ihm Isengart, Gandalf zerbricht seinen Stab. Er endet im Auenland durch die Hand Grímas.",
    otherNames: "Curunír bei den Elben, Sharkû bei den Orks, später Scharrer im Auenland, der Weisse, der Vielfarbige",
    descent: "Maia aus dem Gefolge Aulës, des Schmiedes. Erster der Istari, die nach Mittelerde kamen, und Oberhaupt ihres Ordens.",
    appearance: "Gross, dunkle Augen, weisses Haar, tiefe Stimme, mit der er Zuhörer für sich einnimmt.",
    nature: "Ordnungsliebend bis zur Tyrannei. Er studiert das Böse so lange, bis er dessen Methoden für Werkzeuge hält.",
    bookFilm: "Das Buch lässt ihn im Auenland sterben, das die Hobbits selbst befreien müssen. Der Film streicht die Befreiung des Auenlandes und lässt ihn in Isengart enden.",
    deeds: [
      "Kommt um 1000 D.Z. als erster der Istari nach Mittelerde",
      "Reist Jahrhunderte im Osten und kehrt als Kenner der Ringkunst zurück",
      "Erhält 2759 Isengart von Gondor und macht Orthanc zu seinem Sitz",
      "Verhindert im Weissen Rat lange den Angriff auf Dol Guldur, weil er dort selbst sucht",
      "Findet über den Palantír Kontakt zu Sauron und wird dessen Werkzeug",
      "Züchtet die Uruk-hai und fällt die Bäume rings um Isengart",
      "Nimmt Gandalf 3018 gefangen und verliert ihn an die Adler",
      "Verliert Isengart an die Ents und den Stab an Gandalf",
      "Nimmt das Auenland als Scharrer in Besitz und lässt Bäume und Mühlen zerstören"
    ],
    notes: [
      "Curunír heisst Mann der Kunstfertigkeit, Sharkû ist Orkisch für alter Mann.",
      "Sein weisser Mantel schillert in allen Farben, sobald man ihn bewegt.",
      "Die Stimme Sarumans ist im Buch eine eigene Waffe mit einem eigenen Kapitel.",
      "Sein Rauch über Isengart wird von Baumbart als erstes Zeichen des Verrats gedeutet."
    ],
    bonds: ["gandalf", "grima", "theoden", "ugluk", "lurtz", "treebeard"],
    portrait: {
      skin: "#e2c6a6",
      hair: "#f2f0ec",
      hairstyle: "lang",
      beard: "lang",
      eyes: "#7d7a72",
      cloak: "#efeae2",
      ears: "rund"
    }
  },
  {
    id: "radagast",
    name: "Radagast",
    title: "Der Braune, Freund der Tiere",
    people: "Istar",
    allegiance: "Freie Völker",
    home: "rhosgobel",
    weapon: "Stab und Kräuter",
    actor: "Sylvester McCoy",
    source: "Der Hobbit",
    lifespan: "kommt mit den anderen Istari nach Mittelerde",
    bio: "Der Istar, der sich um Vögel und Getier kümmert statt um Reiche. Er lebt am Südrand des Düsterwaldes, nah am Schatten von Dol Guldur.",
    fate: "Er warnt vor der Rückkehr des Nekromanten und ruft die Adler, wenn niemand sonst mehr helfen kann.",
    otherNames: "Aiwendil, der Vogelfreund, der Braune",
    descent: "Maia aus dem Gefolge Yavannas, der Herrin der wachsenden Dinge. Mit Gandalf und Saruman gesandt.",
    appearance: "Braune Kleidung, Blätter und Vogeldreck im Bart, ständig in Begleitung von Tieren.",
    nature: "Gutmütig, zerstreut, den Tieren näher als den Völkern. Seine Harmlosigkeit ist genau der Grund, warum Saruman ihn benutzen kann.",
    bookFilm: "Im Buch tritt er nur indirekt auf und wird zweimal erwähnt. Die Hobbit-Filme bauen ihn zu einer eigenständigen Figur mit Kaninchenschlitten aus.",
    deeds: [
      "Wird von Yavanna gebeten, die wachsenden Dinge zu schützen",
      "Lässt sich in Rhosgobel am Südrand des Düsterwaldes nieder",
      "Wird von Saruman als Bote nach Bree geschickt und warnt damit unwissentlich Gandalf",
      "Sendet Vögel und Adler als Kundschafter nach Isengart"
    ],
    notes: [
      "Er ist mit Beorn bekannt, was Gandalf in Der Hobbit ausnutzt.",
      "Tolkien lässt offen, ob er seinen Auftrag erfüllt oder in der Wildnis vergessen hat."
    ],
    bonds: ["gandalf", "gwaihir", "saruman", "beorn"],
    portrait: {
      skin: "#d9b489",
      hair: "#8a6b45",
      hairstyle: "wild",
      beard: "voll",
      eyes: "#6b8f4a",
      cloak: "#6a5230",
      headwear: "hut",
      ears: "rund"
    }
  },
  {
    id: "aragorn",
    name: "Aragorn",
    title: "Streicher, Elessar, König von Gondor und Arnor",
    people: "Mensch",
    allegiance: "Freie Völker",
    home: "minastirith",
    weapon: "Andúril, die Flamme des Westens",
    actor: "Viggo Mortensen",
    source: "Herr der Ringe",
    lifespan: "1. März 2931 bis 1. März 120 V.Z., 210 Jahre",
    bio: "Isildurs Erbe, aufgewachsen in Bruchtal, achtzig Jahre lang Waldläufer im Norden. Er verbirgt seinen Anspruch, bis Gondor ihn braucht.",
    fate: "Er geht die Pfade der Toten, gewinnt die Schlacht auf dem Pelennor und wird als Elessar gekrönt.",
    otherNames: "Streicher, Estel als Kind in Bruchtal, Thorongil in Rohan und Gondor, Elessar der Elbenstein, Telcontar, Erbe Isildurs, Dúnadan",
    descent: "Sohn von Arathorn II. und Gilraen, 39. Erbe Isildurs in gerader Linie. Nach dem Tod des Vaters mit zwei Jahren von Elrond aufgezogen.",
    appearance: "Über 1,95 Meter, dunkles Haar mit grauen Strähnen, graue Augen, wettergegerbt. Als Waldläufer verwahrlost, gekrönt von königlicher Erscheinung.",
    nature: "Geduldig bis zur Selbstverleugnung, achtzig Jahre lang im Verborgenen tätig. Heiler und Anführer, ständig im Zweifel über die eigene Entscheidung.",
    bookFilm: "Im Buch strebt Aragorn die Krone von Anfang an bewusst an und zweifelt nie an seinem Anspruch. Der Film macht daraus einen Zögernden, der das Erbe fürchtet.",
    deeds: [
      "Wird 2933 nach dem Tod des Vaters als Estel nach Bruchtal gebracht",
      "Erfährt mit zwanzig seine Herkunft und erhält die Bruchstücke von Narsil",
      "Begegnet noch am selben Tag Arwen und verliebt sich in sie",
      "Dient unter dem Namen Thorongil in Rohan und Gondor, auch gegen die Korsaren von Umbar",
      "Fängt 3017 Gollum im Totensumpf und bringt ihn zu Thranduil",
      "Führt die Hobbits von Bree über die Wetterspitze nach Bruchtal",
      "Übernimmt nach Gandalfs Sturz die Führung der Gemeinschaft",
      "Nimmt in Helms Klamm und im Fangorn den Kampf um Rohan an",
      "Stellt sich Sauron über den Palantír von Orthanc und zeigt sich ihm offen",
      "Geht die Pfade der Toten und befreit mit dem Eidbrecherheer Pelargir",
      "Heilt Faramir, Éowyn und Merry in den Häusern der Heilung",
      "Zieht als Köder vor das Schwarze Tor und wird am 1. Mai 3019 gekrönt"
    ],
    notes: [
      "Die Herrscher, denen er unerkannt dient, sind Thengel von Rohan und Ecthelion von Gondor.",
      "Estel bedeutet Hoffnung, Thorongil Adler des Sterns, Elessar Elbenstein.",
      "Er regiert 122 Jahre und legt sein Leben am Ende freiwillig nieder, nach Númenorbrauch.",
      "Seine Heilkunst gilt in Gondor als Beweis der Königswürde: die Hände des Königs heilen.",
      "Elrond verlangt vor der Heirat, dass er König beider Reiche wird, nichts Geringeres.",
      "Er ist 87 Jahre alt, als er in Bree auf die Hobbits trifft, und gilt damit als junger Mann."
    ],
    bonds: ["arwen", "elrond", "gandalf", "eomer", "boromir", "kingofthedead", "gollum"],
    portrait: {
      skin: "#d8ac81",
      hair: "#3b2c20",
      hairstyle: "lang",
      beard: "kurz",
      eyes: "#6d8a76",
      cloak: "#4a4034",
      headwear: "krone",
      ears: "rund"
    }
  },
  {
    id: "legolas",
    name: "Legolas",
    title: "Prinz des Waldlandreichs",
    people: "Elb",
    allegiance: "Freie Völker",
    home: "duesterwald",
    weapon: "Bogen und zwei weisse Messer",
    actor: "Orlando Bloom",
    source: "Herr der Ringe",
    lifespan: "Alter unbekannt, mindestens einige Jahrhunderte",
    bio: "Sohn Thranduils, als Bote seines Vaters in Bruchtal und dann Mitglied der Gemeinschaft. Seine Augen reichen weiter als die aller anderen.",
    fate: "Aus der alten Feindschaft mit den Zwergen wird eine Freundschaft mit Gimli. Am Ende segeln beide gemeinsam in den Westen.",
    otherNames: "Grünblatt, Legolas Thranduilion",
    descent: "Sohn Thranduils, Prinz des Waldlandreichs, aus dem Volk der Sindar, das über die Waldelben herrscht.",
    appearance: "Schlank, hellhaarig, unermüdlich. Er geht über frischen Schnee, ohne einzusinken, und sieht auf fünf Meilen Entfernung Reiter zählen.",
    nature: "Heiter, neugierig, mit einer Leichtigkeit, die den Menschen unheimlich ist. Nach dem Meer fällt diese Leichtigkeit von ihm ab.",
    bookFilm: "Der Film gibt ihm zahlreiche Kunststücke und eine Rolle in den Hobbit-Filmen, in denen er im Buch überhaupt nicht vorkommt.",
    deeds: [
      "Bringt dem Rat von Elrond die Nachricht, dass Gollum den Waldelben entkommen ist",
      "Erlegt im Nachtflug ein geflügeltes Reittier der Nazgûl über dem Anduin",
      "Zählt mit Gimli in Helms Klamm die Gefallenen und verliert knapp",
      "Reitet mit Aragorn und Gimli die Pfade der Toten",
      "Erblickt in Pelargir zum ersten Mal das Meer und wird von der Sehnsucht ergriffen",
      "Gründet nach dem Krieg eine Elbensiedlung in Ithilien"
    ],
    notes: [
      "Er schläft mit offenen Augen.",
      "Sein Bogen aus Lórien ist ein Geschenk Galadriels und weiter tragend als sein alter.",
      "Nach Aragorns Tod baut er ein Schiff und fährt mit Gimli in den Westen."
    ],
    bonds: ["gimli", "thranduil", "aragorn", "galadriel"],
    portrait: {
      skin: "#f0dcc2",
      hair: "#e0cf9a",
      hairstyle: "lang",
      beard: "keine",
      eyes: "#7fb7c9",
      cloak: "#5d6f52",
      ears: "spitz"
    }
  },
  {
    id: "gimli",
    name: "Gimli",
    title: "Sohn Glóins, Herr der Glitzernden Grotten",
    people: "Zwerg",
    allegiance: "Freie Völker",
    home: "erebor",
    weapon: "Streitaxt",
    actor: "John Rhys-Davies",
    source: "Herr der Ringe",
    lifespan: "2879 bis 120 V.Z.",
    bio: "Er kommt als Gesandter Erebors nach Bruchtal und bleibt als einer der Neun. Aus Trotz gegen Elben wird ehrliche Bewunderung für Galadriel.",
    fate: "Er führt Zwerge nach Helms Klamm zurück und gründet dort eine Siedlung in den Glitzernden Grotten.",
    otherNames: "Elbenfreund, Herr der Glitzernden Grotten, Gimli Glóinssohn, Lockenträger",
    descent: "Sohn Glóins, der mit Thorin nach Erebor zog. Aus dem Haus Durins, damit Verwandter Balins und Dáins.",
    appearance: "Breit, rotbraunes Haar und Bart, Kettenhemd und Kapuze, trägt seine Axt auch bei Tisch.",
    nature: "Aufbrausend, ehrpusselig, unter der rauen Schale erstaunlich empfindsam. Von Galadriel verwandelt ihn eine einzige Begegnung.",
    bookFilm: "Im Buch ist Gimli keine komische Figur, sondern ein würdiger Gesandter. Der Film macht aus ihm den Auflockerer der Gruppe.",
    deeds: [
      "Kommt als Gesandter Erebors zum Rat von Elrond",
      "Versucht in Bruchtal, den Ring mit der Axt zu zerschlagen, und verliert dabei die Klinge",
      "Führt die Gefährten zum Osttor von Moria und findet Balins Grab",
      "Erbittet als einziger Zwerg von Galadriel eine Strähne ihres Haares",
      "Erblickt in Helms Klamm die Glitzernden Grotten von Aglarond",
      "Kämpft auf dem Pelennor und zieht vor das Schwarze Tor",
      "Gründet in Aglarond eine Zwergensiedlung und wird ihr Herr"
    ],
    notes: [
      "Feanor erbat Galadriels Haar dreimal vergeblich, Gimli erhält drei Strähnen auf eine Bitte.",
      "Er ist der einzige Zwerg, von dem berichtet wird, dass er nach Aman fuhr, und das nur als Legolas' Begleiter.",
      "Sein Vater Glóin gehörte zu den dreizehn Zwergen aus Der Hobbit.",
      "Die Glitzernden Grotten beschreibt er in einer der wenigen lyrischen Reden eines Zwerges."
    ],
    bonds: ["legolas", "galadriel", "balin", "aragorn", "dain"],
    portrait: {
      skin: "#e0ae7f",
      hair: "#b5451f",
      hairstyle: "wild",
      beard: "zopfbart",
      eyes: "#6a5a3a",
      cloak: "#7a4a2a",
      headwear: "helm",
      ears: "rund"
    }
  },
  {
    id: "boromir",
    name: "Boromir",
    title: "Hauptmann des Weissen Turms",
    people: "Mensch",
    allegiance: "Freie Völker",
    home: "amonhen",
    weapon: "Schwert, Schild und das Horn von Gondor",
    actor: "Sean Bean",
    source: "Herr der Ringe",
    lifespan: "2978 bis 26. Februar 3019 D.Z.",
    bio: "Ältester Sohn Denethors, der beste Krieger Gondors und der einzige der Gefährten, der die Bürde des Ringes offen begehrt.",
    fate: "Er versucht Frodo den Ring zu nehmen, fällt kurz darauf bei der Verteidigung von Merry und Pippin und stirbt versöhnt.",
    otherNames: "Hauptmann des Weissen Turms, Hoher Hauptmann von Gondor",
    descent: "Ältester Sohn Denethors II. und Finduilas' von Dol Amroth, fünf Jahre älter als Faramir.",
    appearance: "Gross, kräftig, dunkles Haar, ein Mann des Feldlagers. Trägt das grosse Horn aus dem Horn eines wilden Ochsen.",
    nature: "Stolz, tapfer, ungeduldig mit Beratungen. Er denkt in Heeren und Verteidigungslinien und hält Verzicht für Feigheit.",
    bookFilm: "Buch und Film stimmen hier weitgehend überein; der Film gibt ihm mehr Szenen mit den Hobbits, was seinen Tod schwerer macht.",
    deeds: [
      "Verteidigt Osgiliath, als die Brücke bricht, und hält die Westseite",
      "Reitet nach einem Traum 110 Tage lang von Minas Tirith nach Bruchtal",
      "Erzwingt am Caradhras den Versuch über den Pass und rettet die Hobbits im Schnee",
      "Bläst in Moria und am Amon Hen das Horn von Gondor",
      "Versucht Frodo den Ring abzunehmen und kommt sofort zur Besinnung",
      "Fällt bei der Verteidigung von Merry und Pippin, von vielen Pfeilen getroffen"
    ],
    notes: [
      "Der Traum vom zerbrochenen Schwert kommt Faramir mehrfach und Boromir nur einmal.",
      "Sein Horn wird in zwei Teilen aus dem Anduin gefischt und erreicht Denethor.",
      "Er ist der einzige der Gemeinschaft, der offen ausspricht, was alle denken: benutzt den Ring.",
      "Sein Totenboot mit den Waffen der Feinde treibt über die Rauros-Fälle, ohne zu kentern, und Faramir sieht es Tage später."
    ],
    bonds: ["faramir", "denethor", "aragorn", "lurtz", "merry", "pippin"],
    portrait: {
      skin: "#d9ab7d",
      hair: "#6d4a2a",
      hairstyle: "lang",
      beard: "kurz",
      eyes: "#7a8a6a",
      cloak: "#5b4a3a",
      ears: "rund"
    }
  },
  {
    id: "faramir",
    name: "Faramir",
    title: "Hauptmann von Ithilien, Truchsess",
    people: "Mensch",
    allegiance: "Freie Völker",
    home: "hennethannun",
    weapon: "Bogen und Schwert",
    actor: "David Wenham",
    source: "Herr der Ringe",
    lifespan: "2983 bis 82 V.Z.",
    bio: "Denethors jüngerer Sohn, Schüler Gandalfs, geliebt von seinen Männern und ungeliebt von seinem Vater. Er führt die Waldläufer in Ithilien.",
    fate: "Er lässt Frodo und Sam ziehen, überlebt knapp den Wahn seines Vaters und heiratet Éowyn.",
    otherNames: "Hauptmann von Ithilien, Fürst von Ithilien, Truchsess von Gondor",
    descent: "Jüngerer Sohn Denethors II. Seine Mutter starb, als er fünf war. Schüler Gandalfs, was sein Vater ihm nie verzieh.",
    appearance: "Schlank, dunkelhaarig, ruhig in der Bewegung, mit dem Blick, den Denethor als träumerisch verachtet.",
    nature: "Gelehrt, gerecht, ohne Gier nach Ruhm. Er liebt das Schwert nicht, sondern das, was es schützen soll.",
    bookFilm: "Der grösste Eingriff der Verfilmung: im Buch lehnt Faramir den Ring sofort und selbstverständlich ab. Der Film lässt ihn erst schwanken und die Hobbits nach Osgiliath schleppen.",
    deeds: [
      "Führt die Waldläufer von Ithilien aus dem Versteck Henneth Annûn",
      "Überfällt eine Kolonne der Haradrim und beobachtet den Fall eines Olifanten",
      "Nimmt Frodo und Sam gefangen und lässt sie nach kurzer Prüfung ziehen",
      "Sieht Boromirs Totenboot auf dem Anduin vorbeitreiben",
      "Hält Osgiliath, deckt den Rückzug und wird von einem Pfeil niedergestreckt",
      "Wird von seinem Vater für tot gehalten und beinahe verbrannt",
      "Wird von Aragorn in den Häusern der Heilung zurückgeholt",
      "Wird Fürst von Ithilien und Truchsess unter König Elessar"
    ],
    notes: [
      "Er und Éowyn finden im Garten der Heilenden zusammen, während das Heer vor Mordor steht.",
      "Er ist der letzte, der den alten Brauch der stillen Blickwendung nach Westen vor dem Essen pflegt."
    ],
    bonds: ["boromir", "denethor", "eowyn", "gandalf", "frodo", "sam"],
    portrait: {
      skin: "#d9ad82",
      hair: "#5a4230",
      hairstyle: "lang",
      beard: "stoppel",
      eyes: "#7a8f7a",
      cloak: "#4a5240",
      ears: "rund"
    }
  },
  {
    id: "denethor",
    name: "Denethor II.",
    title: "Truchsess von Gondor",
    people: "Mensch",
    allegiance: "Freie Völker",
    home: "minastirith",
    weapon: "Palantír",
    actor: "John Noble",
    source: "Herr der Ringe",
    lifespan: "2930 bis 15. März 3019 D.Z.",
    bio: "Ein scharfsinniger Herrscher, der zu lange in den Sehenden Stein blickt. Sauron zeigt ihm nur, was ihn zerbricht.",
    fate: "Er verliert Boromir, verzweifelt an Faramir und verbrennt sich auf dem Scheiterhaufen der Truchsessen.",
    otherNames: "Denethor II., Truchsess von Gondor, Herr der Stadt",
    descent: "Sohn Ecthelions II., aus dem Haus Húrin, das Gondor seit fast tausend Jahren stellvertretend regiert.",
    appearance: "Hochgewachsen, königlicher als sein Sohn, mit dem Blick eines Menschen, der zu wenig schläft.",
    nature: "Scharfsinnig und hellsichtig, aber ohne Hoffnung. Er liebt Gondor mehr als seine Söhne und Boromir mehr als Faramir.",
    bookFilm: "Im Buch ist Denethor ein würdiger, wenn auch verbitterter Herrscher, der erst am Ende zerbricht. Der Film zeichnet ihn von Anfang an als haltlos.",
    deeds: [
      "Wird 2984 nach Ecthelions Tod Truchsess von Gondor",
      "Nimmt heimlich den Palantír von Minas Tirith in Gebrauch",
      "Schickt Boromir statt Faramir nach Bruchtal, obwohl der Traum Faramir gehörte",
      "Befiehlt Faramir die aussichtslose Verteidigung von Osgiliath",
      "Verliert unter Saurons Einfluss jede Hoffnung und lässt den Scheiterhaufen richten",
      "Verbrennt sich mit dem Palantír in den Händen"
    ],
    notes: [
      "Er erkennt Thorongil Jahrzehnte später als Aragorn wieder und sieht darin einen Rivalen.",
      "Sein Palantírduell mit Sauron dauert Jahre und lässt ihn vorzeitig altern.",
      "Nach seinem Tod zeigt der Stein nur noch zwei brennende Hände.",
      "Sein Amtsstab wird von Aragorn nicht abgeschafft, sondern an Faramir weitergegeben."
    ],
    bonds: ["boromir", "faramir", "gandalf", "pippin", "imrahil"],
    portrait: {
      skin: "#d3ab86",
      hair: "#cfc4b2",
      hairstyle: "lang",
      beard: "lang",
      eyes: "#6e6a5a",
      cloak: "#2f2a26",
      ears: "rund"
    }
  },
  {
    id: "beregond",
    name: "Beregond",
    title: "Wächter der Zitadelle",
    people: "Mensch",
    allegiance: "Freie Völker",
    home: "minastirith",
    weapon: "Schwert der Wache",
    actor: "nur im Buch",
    source: "Herr der Ringe",
    lifespan: "Wache der Zitadelle im Jahr 3019",
    bio: "Ein einfacher Soldat der Turmwache, der Pippin die Stadt zeigt und ihm ihre Bräuche erklärt.",
    fate: "Er verlässt seinen Posten, um Faramir vor dem Feuer zu retten, und wird dafür in Faramirs Dienst versetzt.",
    otherNames: "Beregond, Sohn Baranors, Hauptmann der Weissen Schar",
    descent: "Einfacher Soldat der Turmwache von Minas Tirith, Vater eines Sohnes namens Bergil.",
    appearance: "Mittleren Alters, in Schwarz und Silber der Zitadellenwache.",
    nature: "Pflichtbewusst und zugleich bereit, die Pflicht zu brechen, wenn sie einen Menschen tötet.",
    bookFilm: "Er fehlt in den Filmen vollständig; einige seiner Aufgaben übernimmt dort Pippin oder Gandalf.",
    deeds: [
      "Führt Pippin durch Minas Tirith und erklärt ihm Wache und Bräuche",
      "Nimmt den Dienst an der Tür der Truchsessen wahr",
      "Verlässt den Posten, tötet den Torwächter und hält den Scheiterhaufen auf"
    ],
    notes: [
      "Sein Sohn Bergil führt Pippin durch die Stadt, während die Väter Dienst tun.",
      "Aragorn verurteilt ihn formal und belohnt ihn faktisch mit einem besseren Posten."
    ],
    bonds: ["pippin", "faramir", "denethor"],
    portrait: {
      skin: "#dbb187",
      hair: "#4a3524",
      hairstyle: "kurz",
      beard: "stoppel",
      eyes: "#6a7a6a",
      cloak: "#3a4048",
      headwear: "helm",
      ears: "rund"
    }
  },
  {
    id: "elrond",
    name: "Elrond",
    title: "Herr von Bruchtal, Träger von Vilya",
    people: "Elb",
    allegiance: "Freie Völker",
    home: "bruchtal",
    weapon: "Hadhafang und der Ring Vilya",
    actor: "Hugo Weaving",
    source: "Der Hobbit, Herr der Ringe",
    lifespan: "geboren 532 im Ersten Zeitalter, fährt 3021 D.Z. in den Westen",
    bio: "Halbelb, Heiler, Chronist und Gastgeber. Er stand schon im Letzten Bündnis am Schicksalsberg und weiss, wie teuer Isildurs Zögern war.",
    fate: "Er beruft den Rat, der die Gemeinschaft schickt, gibt Arwen frei und segelt am Ende in den Westen.",
    otherNames: "Elrond Halbelb, Peredhel, Herr von Imladris, Träger von Vilya",
    descent: "Sohn Eärendils und Elwings, Urenkel von Beren und Lúthien, Bruder von Elros, dem ersten König von Númenor. Vater von Elladan, Elrohir und Arwen.",
    appearance: "Weder jung noch alt, dunkles Haar, graue Augen wie ein klarer Abend, ein Gesicht wie eine Erinnerung an viele Zeitalter.",
    nature: "Bewahrer und Chronist, vorsichtig aus Erfahrung. Er hat Isildur am Feuer stehen sehen und erwartet vom Menschengeschlecht wenig.",
    bookFilm: "Im Buch ist Elrond herzlicher und väterlicher. Der Film macht ihn kühler und lässt ihn Arwens Schicksal aktiv bekämpfen.",
    deeds: [
      "Überlebt als Kind den Überfall auf die Häfen von Sirion",
      "Steht als Herold Gil-galads im Letzten Bündnis am Schicksalsberg",
      "Sieht Isildur am Feuerspalt scheitern und kann ihn nicht umstimmen",
      "Gründet 1697 Z.Z. Imladris als Zuflucht",
      "Bewahrt Vilya, den Ring der Luft, und hält Bruchtal aus der Zeit heraus",
      "Erzieht die Erben Isildurs, zuletzt Aragorn",
      "Heilt Frodo von der Morgulwunde und schickt die Flut gegen die Nazgûl",
      "Beruft den Rat, der die Gemeinschaft bestimmt",
      "Gibt Arwen frei und fährt 3021 mit dem letzten Schiff"
    ],
    notes: [
      "Über Elros' Linie ist Aragorn ein sehr entfernter Neffe seines Bruders.",
      "Seine Söhne Elladan und Elrohir reiten mit den Grauen Schar nach Süden.",
      "Die Flut an der Furt nimmt im Buch die Form weisser Reiterpferde an."
    ],
    bonds: ["arwen", "aragorn", "gandalf", "gilgalad", "isildur", "bilbo"],
    portrait: {
      skin: "#eeddc4",
      hair: "#2b2620",
      hairstyle: "lang",
      beard: "keine",
      eyes: "#8fa3a8",
      cloak: "#6b5a4a",
      headwear: "reif",
      ears: "spitz"
    }
  },
  {
    id: "arwen",
    name: "Arwen Undómiel",
    title: "Abendstern ihres Volkes",
    people: "Elb",
    allegiance: "Freie Völker",
    home: "bruchtal",
    weapon: "Elbenschwert und Reitkunst",
    actor: "Liv Tyler",
    source: "Herr der Ringe",
    lifespan: "geboren 241 D.Z., stirbt 121 V.Z.",
    bio: "Elronds Tochter, die Aragorn liebt und dafür die Unsterblichkeit aufgibt. In den Filmen rettet sie Frodo an der Furt des Bruinen.",
    fate: "Sie bleibt in Mittelerde, wird Königin von Gondor und schenkt Frodo ihren Platz auf dem Schiff in den Westen.",
    otherNames: "Undómiel, der Abendstern, Herrin von Imladris, später Königin Arwen",
    descent: "Tochter Elronds und Celebríans, Enkelin Galadriels. Ihre Mutter fuhr nach einem Überfall der Orks in den Westen.",
    appearance: "Dunkles Haar, graue Augen, der Sage nach das Ebenbild Lúthiens, die zweitausend Jahre vor ihr lebte.",
    nature: "Entschieden und still. Ihre Wahl ist keine romantische Laune, sondern die Aufgabe der Unsterblichkeit und ihrer ganzen Familie.",
    bookFilm: "Im Buch erscheint Arwen kaum und ihre Geschichte steht im Anhang. Der Film zieht sie nach vorn und gibt ihr die Flucht zur Furt, die im Buch Glorfindel gehört.",
    deeds: [
      "Wächst zwischen Bruchtal und Lothlórien auf",
      "Begegnet Aragorn 2951 in den Wäldern von Imladris",
      "Verlobt sich 2980 auf dem Cerin Amroth in Lórien mit ihm",
      "Webt das Banner mit dem Weissen Baum und den sieben Sternen",
      "Schickt es mit ihren Brüdern zu Aragorn nach Rohan",
      "Wird am Mittsommertag 3019 in Minas Tirith Königin",
      "Gibt Frodo ihren Platz auf dem Schiff in den Westen"
    ],
    notes: [
      "Nach Aragorns Tod legt sie sich auf dem Cerin Amroth nieder und stirbt dort."
    ],
    bonds: ["elrond", "aragorn", "galadriel", "celeborn"],
    portrait: {
      skin: "#f2ddc4",
      hair: "#231d18",
      hairstyle: "lang",
      beard: "keine",
      eyes: "#7ea8b8",
      cloak: "#6a3a4a",
      headwear: "reif",
      ears: "spitz"
    }
  },
  {
    id: "glorfindel",
    name: "Glorfindel",
    title: "Der Herr aus Bruchtal",
    people: "Elb",
    allegiance: "Freie Völker",
    home: "bruchtal",
    weapon: "Elbenschwert und Asfaloth",
    actor: "nicht in den Filmen",
    source: "Herr der Ringe",
    lifespan: "gefallen im Ersten Zeitalter, zurückgesandt im Zweiten",
    bio: "Ein Elbenfürst aus dem Ersten Zeitalter, der einst einen Balrog erschlug und dafür sein Leben gab. Nach Mittelerde zurückgesandt, reitet er den Nazgûl entgegen.",
    fate: "Im Buch trägt er Frodo zur Furt. Von ihm stammt die Weissagung, dass kein Mann den Hexenkönig fällen wird.",
    otherNames: "Glorfindel von Gondolin, der Goldhaarige",
    descent: "Elbenfürst aus Gondolin im Ersten Zeitalter, nach seinem Tod in Mandos' Hallen neu nach Mittelerde gesandt.",
    appearance: "Goldenes Haar, ein Wesen, das zugleich in der sichtbaren und der unsichtbaren Welt steht und den Nazgûl darum schrecklich erscheint.",
    nature: "Furchtlos und heiter, einer der wenigen in Mittelerde, vor denen die Ringgeister offen weichen.",
    bookFilm: "Er fehlt in den Filmen; Arwen übernimmt seinen Ritt zur Furt des Bruinen.",
    deeds: [
      "Erschlägt beim Fall von Gondolin einen Balrog und stirbt dabei",
      "Kehrt aus Mandos' Hallen nach Mittelerde zurück",
      "Schlägt 1975 D.Z. mit Eärnur das Heer Angmars",
      "Weissagt, dass der Hexenkönig nicht von der Hand eines Mannes fallen wird",
      "Findet 3018 die Hobbits auf der Strasse und setzt Frodo auf Asfaloth"
    ],
    notes: [
      "Sein Pferd Asfaloth trägt kein Zaumzeug, nur ein Kopfgeschirr aus Silber.",
      "Tolkien hat lange geschwankt, ob es zwei Glorfindel gibt oder einen zurückgesandten."
    ],
    bonds: ["elrond", "frodo", "witchking"],
    portrait: {
      skin: "#f4e2c8",
      hair: "#f2cf58",
      hairstyle: "lang",
      beard: "keine",
      eyes: "#9fc8d4",
      cloak: "#c8b478",
      ears: "spitz"
    }
  },
  {
    id: "galadriel",
    name: "Galadriel",
    title: "Herrin des Goldenen Waldes, Trägerin von Nenya",
    people: "Elb",
    allegiance: "Freie Völker",
    home: "lorien",
    weapon: "Nenya, der Ring aus Mithril",
    actor: "Cate Blanchett",
    source: "Der Hobbit, Herr der Ringe",
    lifespan: "geboren im Ersten Zeitalter in Aman, fährt 3021 D.Z. heim",
    bio: "Eine der ältesten und mächtigsten Elben Mittelerdes, mit einem Spiegel, der zeigt, was war, was ist und was sein könnte.",
    fate: "Sie widersteht Frodos Angebot des Ringes, bricht mit dem Weissen Rat Dol Guldur und segelt in den Westen.",
    otherNames: "Herrin des Goldenen Waldes, Herrin von Lórien, Nerwen, Artanis, Galadhriel",
    descent: "Tochter Finarfins aus dem Haus der Noldor, in Valinor geboren, Schwester Finrods. Gemahlin Celeborns, Mutter Celebríans, Grossmutter Arwens.",
    appearance: "Sehr gross, Haar wie Gold mit Silberschimmer, das Feanor dreimal vergeblich erbat.",
    nature: "Stolz und herrschsüchtig in jungen Jahren, geläutert durch Jahrtausende. Ihre Ablehnung des Ringes ist die Prüfung, auf die ihr ganzes Leben zuläuft.",
    bookFilm: "Der Film zeigt ihre Versuchung als schaurige Verwandlung. Im Buch ist die Szene leiser und dadurch beklemmender.",
    deeds: [
      "Verlässt gegen den Willen der Valar Aman und zieht nach Mittelerde",
      "Lebt in Doriath und lernt bei Melian",
      "Weist Annatar, den Herrn der Geschenke, von Anfang an zurück",
      "Empfängt Nenya, den Ring aus Mithril, von Celebrimbor",
      "Beruft und leitet zeitweise den Weissen Rat",
      "Prüft die Gefährten in Lórien und rüstet sie mit Mänteln, Booten und Lembas aus",
      "Widersteht Frodos Angebot des Ringes und bleibt Galadriel",
      "Schleift mit Celeborn dreimal die Heere von Dol Guldur und reisst die Festung nieder"
    ],
    notes: [
      "Ihr Bann, nach Aman zurückzukehren, wird erst nach der Ablehnung des Ringes aufgehoben.",
      "Der Spiegel zeigt Vergangenes, Gegenwärtiges und Mögliches, ohne zu sagen, welches davon.",
      "Ihre Gaben entscheiden später mehrfach über Leben und Tod: Glas, Seil, Erde, Bogen."
    ],
    bonds: ["celeborn", "arwen", "frodo", "gimli", "gandalf", "sam"],
    portrait: {
      skin: "#f6e6d0",
      hair: "#f2e2a8",
      hairstyle: "lang",
      beard: "keine",
      eyes: "#a8d4de",
      cloak: "#efe6d2",
      headwear: "reif",
      ears: "spitz"
    }
  },
  {
    id: "celeborn",
    name: "Celeborn",
    title: "Herr von Lothlórien",
    people: "Elb",
    allegiance: "Freie Völker",
    home: "lorien",
    weapon: "Schwert und Rat",
    actor: "Marton Csokas",
    source: "Herr der Ringe",
    lifespan: "Herr von Lórien im Dritten Zeitalter",
    bio: "Galadriels Gemahl, Herr über Caras Galadhon. Er empfängt die Gefährten und gibt ihnen Boote, Lembas und Mäntel mit.",
    fate: "Er führt die Elben Lóriens gegen Dol Guldur und bleibt noch eine Weile in Mittelerde.",
    otherNames: "Celeborn der Weise, Herr von Lórien, Silberbaum",
    descent: "Sinda aus Doriath, Verwandter Thingols. Gemahl Galadriels.",
    appearance: "Silbernes Haar, sehr gross, in Grau und Weiss gekleidet.",
    nature: "Besonnen, gastfrei, gelegentlich schroff gegen Fremde, die Unglück bringen.",
    bookFilm: "Im Film bleibt er stumme Nebenfigur; im Buch ist er es, der die Gefährten ausrüstet und berät.",
    deeds: [
      "Lebt in Doriath, ehe es fällt, und zieht mit Galadriel nach Osten",
      "Herrscht in Caras Galadhon über die Galadhrim",
      "Empfängt die Gefährten und schenkt ihnen Boote und graue Mäntel",
      "Führt die Elben Lóriens dreimal gegen Dol Guldur",
      "Überquert nach dem Sieg den Anduin und nimmt die Festung ein"
    ],
    notes: [
      "Er nennt Moria beim Namen Khazad-dûm und rügt Gimli erst, ehe Galadriel einlenkt.",
      "Nach Galadriels Abfahrt bleibt er noch eine Weile in Mittelerde und zieht dann nach Bruchtal zu seinen Enkeln."
    ],
    bonds: ["galadriel", "haldir", "arwen"],
    portrait: {
      skin: "#f0dfc6",
      hair: "#eceae4",
      hairstyle: "lang",
      beard: "keine",
      eyes: "#9dc2cc",
      cloak: "#aab6bc",
      ears: "spitz"
    }
  },
  {
    id: "haldir",
    name: "Haldir",
    title: "Grenzwächter von Lórien",
    people: "Elb",
    allegiance: "Freie Völker",
    home: "lorien",
    weapon: "Bogen",
    actor: "Craig Parker",
    source: "Herr der Ringe",
    lifespan: "Grenzwächter im Jahr 3019",
    bio: "Er hält mit seinen Brüdern die Grenzen des Goldenen Waldes und führt die Gefährten mit verbundenen Augen nach Caras Galadhon.",
    fate: "Im Film bringt er ein Bündnis von Bogenschützen nach Helms Klamm und fällt dort.",
    otherNames: "Haldir von Lórien, Grenzwächter",
    descent: "Waldelb aus Lothlórien, mit den Brüdern Rúmil und Orophin im Grenzdienst.",
    appearance: "Graumantel, Bogen, in den Bäumen kaum zu entdecken.",
    nature: "Förmlich, misstrauisch gegen Zwerge, am Ende aber gastfreundlich.",
    bookFilm: "Sein Tod in Helms Klamm ist eine Erfindung des Films; im Buch überlebt er und kein Elbenheer kommt zur Klamm.",
    deeds: [
      "Hält mit den Brüdern Rúmil und Orophin die Nordgrenze Lóriens",
      "Nimmt die Gefährten auf und verlangt für Gimli die Augenbinde",
      "Geleitet sie nach Caras Galadhon und später zum Anduin"
    ],
    notes: [
      "Er spricht als einer von wenigen Grenzwächtern die Gemeinsame Sprache.",
      "Die Augenbinde wird am Ende allen angelegt, damit Gimli nicht allein gedemütigt wird."
    ],
    bonds: ["celeborn", "galadriel", "gimli"],
    portrait: {
      skin: "#eedcc0",
      hair: "#a8834a",
      hairstyle: "kurz",
      beard: "keine",
      eyes: "#86b4c2",
      cloak: "#5d6d4a",
      ears: "spitz"
    }
  },
  {
    id: "thranduil",
    name: "Thranduil",
    title: "König des Waldlandreichs",
    people: "Elb",
    allegiance: "Freie Völker",
    home: "duesterwald",
    weapon: "Zwei Schwerter und ein Elch",
    actor: "Lee Pace",
    source: "Der Hobbit, Herr der Ringe",
    lifespan: "seit dem Zweiten Zeitalter König im Norden",
    bio: "Legolas' Vater, ein stolzer und misstrauischer Herrscher, der sein Volk hinter Toren aus Stein schützt und Gold liebt.",
    fate: "Er belagert Erebor, kämpft in der Schlacht der Fünf Heere und verteidigt später den Wald gegen die Heere Dol Guldurs.",
    otherNames: "Der Elbenkönig, König des Waldlandreichs, Thranduil Oropherion",
    descent: "Sohn Orophers, der im Letzten Bündnis fiel. Vater von Legolas. Sinda, der über Waldelben herrscht.",
    appearance: "Hochgewachsen, hellhaarig, mit einer Krone aus Beeren und roten Blättern im Herbst.",
    nature: "Stolz, misstrauisch, mit einer Schwäche für Schätze, die Tolkien ausdrücklich erwähnt. Für sein Volk zäh und unnachgiebig.",
    bookFilm: "Die Hobbit-Filme geben ihm einen Elch, eine Narbe und eine Vorgeschichte; im Buch hat er nicht einmal einen Namen und heisst nur der Elbenkönig.",
    deeds: [
      "Folgt seinem Vater Oropher, der im Letzten Bündnis fällt",
      "Baut die Hallen unter dem Berg nach dem Vorbild Menegroths",
      "Sperrt 2941 Thorins Gesellschaft ein, weil sie ihm keine Auskunft gibt",
      "Zieht mit einem Heer zum Einsamen Berg und fordert seinen Anteil",
      "Kämpft in der Schlacht der Fünf Heere",
      "Hält den Norden des Düsterwaldes im Ringkrieg gegen die Heere Dol Guldurs"
    ],
    notes: [
      "Der Wald heisst nach dem Sieg Eryn Lasgalen, Wald der grünen Blätter.",
      "Seine Schwäche gilt besonders weissen Edelsteinen.",
      "Bei der Teilung Düsterwalds erhält er den Norden, Celeborn den Süden."
    ],
    bonds: ["legolas", "bard", "thorin", "celeborn"],
    portrait: {
      skin: "#f2e0c6",
      hair: "#e9dca6",
      hairstyle: "lang",
      beard: "keine",
      eyes: "#9dcdd6",
      cloak: "#8a6a4a",
      headwear: "krone",
      ears: "spitz"
    }
  },
  {
    id: "cirdan",
    name: "Círdan",
    title: "Der Schiffbauer",
    people: "Elb",
    allegiance: "Freie Völker",
    home: "grauhafen",
    weapon: "Narya, bis er ihn Gandalf gibt",
    actor: "nur im Buch",
    source: "Herr der Ringe, Anhänge",
    lifespan: "seit dem Ersten Zeitalter in Mittelerde",
    bio: "Der älteste Elb Mittelerdes, Herr der Grauen Anfurten. Er baut die Schiffe, die über das Meer fahren, und wartet als Letzter.",
    fate: "Er gibt Gandalf den Feuerring Narya und geleitet die Ringträger auf ihr letztes Schiff.",
    otherNames: "Círdan der Schiffbauer, Nowë",
    descent: "Teleri aus dem Ersten Zeitalter, Herr der Falathrim, seit mehr als siebentausend Jahren am Meer.",
    appearance: "Der einzige Elb mit Bart, weiss und lang, die Augen scharf wie die eines Sternsehers.",
    nature: "Geduldig über jedes Mass. Er gibt Macht weiter, statt sie zu behalten, und wartet, bis der Letzte gefahren ist.",
    bookFilm: "Er kommt in den Filmen nicht vor; in einer Fassung des Abspanns ist er am Hafen kurz zu sehen.",
    deeds: [
      "Führt die Falathrim an den Häfen des Ersten Zeitalters",
      "Baut das Schiff, mit dem Eärendil nach Valinor fährt",
      "Übergibt Narya an Gandalf, statt ihn selbst zu tragen",
      "Nimmt die Flüchtlinge aus Arnor auf und hält die Häfen offen",
      "Rüstet jedes Schiff aus, das in den Westen fährt"
    ],
    notes: [
      "Er erkannte in Gandalf sofort den Grössten der Istari, obwohl der als letzter kam."
    ],
    bonds: ["gandalf", "gilgalad", "elrond"],
    portrait: {
      skin: "#efe0cc",
      hair: "#e6e4de",
      hairstyle: "lang",
      beard: "lang",
      eyes: "#8fb6c4",
      cloak: "#5a6a7a",
      ears: "spitz"
    }
  },
  {
    id: "gilgalad",
    name: "Gil-galad",
    title: "Letzter Hochkönig der Noldor",
    people: "Elb",
    allegiance: "Freie Völker",
    home: "grauhafen",
    weapon: "Der Speer Aeglos",
    actor: "Mark Ferguson",
    source: "Silmarillion, Anhänge",
    lifespan: "gefallen 3441 im Zweiten Zeitalter",
    bio: "Er schmiedete mit Elendil das Letzte Bündnis von Elben und Menschen und führte die Heere vor die Tore Mordors.",
    fate: "Er fiel im Zweikampf gegen Sauron am Hang des Orodruin, kurz bevor der Ring abgeschlagen wurde.",
    otherNames: "Ereinion, Sternenglanz, Hochkönig der Noldor",
    descent: "Letzter Hochkönig der Noldor in Mittelerde, Sohn Fingons. Er hinterliess keinen Erben.",
    appearance: "In Silber und Blau, mit dem Speer Aeglos, dessen Spitze wie Eis glänzte.",
    nature: "Vorsichtig gegenüber Sauron von Anfang an; er nahm keinen der Ringe an und empfing Annatar nie.",
    bookFilm: "Im Filmprolog steht er kurz neben Elendil, ohne genannt zu werden.",
    deeds: [
      "Wird nach Turgons Tod letzter Hochkönig der Noldor",
      "Weist Annatar ab und lässt ihn nicht in seine Länder",
      "Schmiedet mit Elendil das Letzte Bündnis von Elben und Menschen",
      "Siegt auf der Dagorlad und belagert sieben Jahre Barad-dûr",
      "Fällt gemeinsam mit Elendil im Zweikampf gegen Sauron"
    ],
    notes: [
      "Sein Speer Aeglos heisst Schneedorn und wird nach ihm nie wieder geführt.",
      "Bilbos Lied vom Fall Gil-galads ist eines der wenigen elbischen Lieder im Roten Buch."
    ],
    bonds: ["elendil", "elrond", "cirdan", "sauron"],
    portrait: {
      skin: "#f0dfc8",
      hair: "#3a3028",
      hairstyle: "lang",
      beard: "keine",
      eyes: "#a6d0da",
      cloak: "#9aa8b8",
      headwear: "helm",
      ears: "spitz"
    }
  },
  {
    id: "theoden",
    name: "Théoden",
    title: "König der Mark",
    people: "Mensch",
    allegiance: "Freie Völker",
    home: "edoras",
    weapon: "Herugrim",
    actor: "Bernard Hill",
    source: "Herr der Ringe",
    lifespan: "2948 bis 15. März 3019 D.Z.",
    bio: "Rohans siebzehnter König, von Grímas Flüstern und Sarumans Kunst zum Greis gemacht. Gandalf gibt ihm sein Reich und seinen Willen zurück.",
    fate: "Er reitet Helms Klamm zu Hilfe und führt die Rohirrim auf das Pelennor, wo er unter seinem Pferd stirbt.",
    otherNames: "Théoden König, Théoden Ednew der Erneuerte, Sohn Thengels",
    descent: "Siebzehnter König der Mark, Sohn Thengels und der Gondorianerin Morwen. Vater Théodreds, Onkel von Éomer und Éowyn.",
    appearance: "Zuerst gebeugt und greisenhaft, danach aufrecht, mit weissem Haar unter goldenem Helm.",
    nature: "Gutmütig und leicht zu beeinflussen, aber mit einem Kern aus Stolz, der beim ersten Sonnenlicht wieder trägt.",
    bookFilm: "Im Buch ist Théoden schlicht alt und mutlos geredet. Der Film zeigt eine körperliche Besessenheit, die Gandalf austreibt.",
    deeds: [
      "Wird 2980 siebzehnter König der Mark",
      "Verliert unter Grímas Einfluss den Willen zur Verteidigung",
      "Verliert seinen Sohn Théodred an den Furten des Isen",
      "Wird von Gandalf befreit und führt sein Volk nach Helms Klamm",
      "Reitet bei Sonnenaufgang aus dem Hornburgtor in die Feinde",
      "Verhandelt mit Saruman vor Orthanc und lehnt Frieden ab",
      "Sammelt die Heerschau in Dunharg und reitet 500 Meilen in fünf Tagen",
      "Führt den Angriff auf dem Pelennor und bricht die Reihen der Belagerer",
      "Stirbt unter seinem Pferd Schneemähne"
    ],
    notes: [
      "Mit Théodreds Tod wird Éomer sein Erbe.",
      "Ednew bedeutet der Erneuerte, weil er zurückkam, als niemand mehr damit rechnete.",
      "Die Wilden Männer des Druadan-Waldes zeigen ihm den Weg um die Feinde herum.",
      "Er nimmt Merry entgegen aller Vernunft als Knappe an und behandelt ihn wie einen Sohn.",
      "Sein Grab ist der achte Hügel der zweiten Königsreihe von Edoras."
    ],
    bonds: ["eowyn", "eomer", "grima", "merry", "gandalf", "saruman"],
    portrait: {
      skin: "#dcb68e",
      hair: "#d8cdb8",
      hairstyle: "lang",
      beard: "voll",
      eyes: "#7a8a7a",
      cloak: "#6a5a3a",
      headwear: "krone",
      ears: "rund"
    }
  },
  {
    id: "eowyn",
    name: "Éowyn",
    title: "Die Weisse Frau von Rohan",
    people: "Mensch",
    allegiance: "Freie Völker",
    home: "edoras",
    weapon: "Schwert und Schild",
    actor: "Miranda Otto",
    source: "Herr der Ringe",
    lifespan: "geboren 2995 D.Z.",
    bio: "Théodens Nichte, die den Käfig der Halle mehr fürchtet als den Tod. Sie reitet als Dernhelm verkleidet mit dem Heer.",
    fate: "Sie erschlägt den Hexenkönig, überlebt schwer verletzt und findet in den Häusern der Heilung zu Faramir.",
    otherNames: "Die Weisse Frau von Rohan, Dernhelm, Herrin von Ithilien, Schildmaid",
    descent: "Tochter Éomunds und Théodwyns, mit sieben Jahren Waise, von Théoden aufgezogen. Schwester Éomers.",
    appearance: "Gross, schlank, hellblondes Haar, kalt und schön wie ein Morgen im Frühling, sagt Aragorn.",
    nature: "Ehrgeizig und verzweifelt zugleich. Sie fürchtet nicht den Tod, sondern einen Käfig und ein Leben ohne Bedeutung.",
    bookFilm: "Ihre Heilung und die Begegnung mit Faramir stehen im Buch ausführlich; die Kinofassung streicht sie fast vollständig und holt sie nur in der langen Fassung nach.",
    deeds: [
      "Wird mit sieben Jahren Waise und wächst an Théodens Hof auf",
      "Pflegt den verfallenden König und erträgt Grímas Nachstellungen",
      "Wird zur Führerin des Volkes bestimmt, als die Männer nach Helms Klamm ziehen",
      "Bittet Aragorn vergeblich, sie mitzunehmen, und wird abgewiesen",
      "Reitet als Dernhelm verkleidet mit Merry im Heer",
      "Stellt sich dem Hexenkönig über dem Leib des Königs",
      "Erschlägt ihn, nachdem Merry den Zauber gebrochen hat",
      "Erwacht in den Häusern der Heilung und legt dort das Schwert ab"
    ],
    notes: [
      "Dernhelm bedeutet verborgener Helm.",
      "Ihr Schwertarm bricht beim Schlag gegen den Hexenkönig."
    ],
    bonds: ["theoden", "eomer", "faramir", "merry", "aragorn", "witchking"],
    portrait: {
      skin: "#f0d3ab",
      hair: "#ecd48e",
      hairstyle: "lang",
      beard: "keine",
      eyes: "#8aa8c4",
      cloak: "#e4dcc8",
      ears: "rund"
    }
  },
  {
    id: "eomer",
    name: "Éomer",
    title: "Dritter Marschall der Mark",
    people: "Mensch",
    allegiance: "Freie Völker",
    home: "edoras",
    weapon: "Schwert und Speer",
    actor: "Karl Urban",
    source: "Herr der Ringe",
    lifespan: "2991 bis 63 V.Z.",
    bio: "Théodens Neffe, der gegen Grímas Befehl Orks jagt und dafür verbannt wird. Er trifft Aragorn, Legolas und Gimli in der Steppe.",
    fate: "Er führt die Reiterei auf dem Pelennor und wird nach Théodens Tod König der Mark.",
    otherNames: "Éomer Éadig der Glückliche, Dritter Marschall der Mark, später achtzehnter König",
    descent: "Sohn Éomunds und Théodwyns, Neffe Théodens. Heiratet Lothíriel von Dol Amroth.",
    appearance: "Gross, blond, breit in den Schultern, Rosshaarbusch am Helm.",
    nature: "Aufbrausend, ehrlich, schnell im Urteil über Menschen und meist richtig.",
    bookFilm: "Im Buch wird Éomer von Gríma inhaftiert; der Film verbannt ihn stattdessen, damit er später überraschend eintreffen kann.",
    deeds: [
      "Wird Dritter Marschall der Mark und hält die Ostmark",
      "Jagt gegen Grímas Befehl den Uruk-Trupp und vernichtet ihn",
      "Leiht Aragorn, Legolas und Gimli Pferde und riskiert damit seinen Kopf",
      "Wird eingekerkert und von Gandalf befreit",
      "Kämpft in Helms Klamm und reitet mit nach Gondor",
      "Wird auf dem Pelennor beinahe eingeschlossen und von Imrahils Ankunft gerettet",
      "Wird als achtzehnter König der Mark ausgerufen"
    ],
    notes: [
      "Er nennt Galadriel zunächst gefährlich und muss sich das von Gimli anhören.",
      "Seine Freundschaft mit Aragorn und Gimli wird zu einem Bündnis, das auch die Erben halten."
    ],
    bonds: ["theoden", "eowyn", "aragorn", "imrahil", "gimli"],
    portrait: {
      skin: "#dcb086",
      hair: "#c8a05a",
      hairstyle: "lang",
      beard: "stoppel",
      eyes: "#7fa0c0",
      cloak: "#5a5040",
      headwear: "helm",
      ears: "rund"
    }
  },
  {
    id: "grima",
    name: "Gríma Schlangenzunge",
    title: "Ratgeber und Verräter",
    people: "Mensch",
    allegiance: "Isengart",
    home: "isengart",
    weapon: "Worte und ein Dolch",
    actor: "Brad Dourif",
    source: "Herr der Ringe",
    lifespan: "gestorben 3019 D.Z. in Hobbingen",
    bio: "Sarumans Ohr in Edoras. Er schwächt Théoden, isoliert Éomer und begehrt Éowyn.",
    fate: "Aus Meduseld vertrieben, dient er Saruman bis zum letzten Tag und tötet ihn schliesslich im Auenland.",
    otherNames: "Schlangenzunge, Gríma Gálmódssohn, im Auenland Wurm genannt",
    descent: "Sohn Gálmóds, Rohirrim von Geburt, Ratgeber am Hof von Meduseld.",
    appearance: "Blass, schwarz gekleidet, gebeugt, mit ständig nassen Lippen und flinken Augen.",
    nature: "Feige, klug, gedemütigt. Seine Gier nach Éowyn macht ihn erpressbar und seine Angst hält ihn bei Saruman.",
    bookFilm: "Der Film lässt ihn Saruman von der Turmspitze stossen. Im Buch schneidet er ihm vor Beutelsend die Kehle durch und wird von Hobbits erschossen.",
    deeds: [
      "Wird Ratgeber am Hof von Meduseld",
      "Erhält von Saruman Gold und das Versprechen auf Éowyn",
      "Schwächt Théoden über Jahre mit Worten und Gift",
      "Lässt Éomer einkerkern und Rohans Verteidigung schleifen",
      "Flieht nach Isengart und wirft in Panik den Palantír aus dem Turm",
      "Folgt Saruman ins Auenland und erträgt dort täglich Demütigungen",
      "Schneidet Saruman vor Beutelsend die Kehle durch"
    ],
    notes: [
      "Den Palantír wirft er in dem Versuch, Gandalf zu treffen, und übergibt ihm damit den Stein.",
      "Gandalf nennt ihn Sarumans Schlange und bietet ihm zweimal einen Ausweg an."
    ],
    bonds: ["saruman", "theoden", "eowyn", "gandalf"],
    portrait: {
      skin: "#d8ccbc",
      hair: "#221c18",
      hairstyle: "lang",
      beard: "keine",
      eyes: "#8c8a80",
      cloak: "#221f22",
      ears: "rund"
    }
  },
  {
    id: "imrahil",
    name: "Imrahil",
    title: "Fürst von Dol Amroth",
    people: "Mensch",
    allegiance: "Freie Völker",
    home: "dolamroth",
    weapon: "Lanze und Schwanenritter",
    actor: "nur im Buch",
    source: "Herr der Ringe",
    lifespan: "Fürst von Dol Amroth im Jahr 3019",
    bio: "Der edelste Fürst Gondors, mit elbischem Blut in der Ahnenreihe. Er bringt die Schwanenritter nach Minas Tirith.",
    fate: "Nach der Schlacht führt er die Stadt gemeinsam mit Éomer und Gandalf, bis Aragorn den Thron besteigt.",
    otherNames: "Fürst von Dol Amroth, Hauptmann der Schwanenritter",
    descent: "22. Fürst von Dol Amroth, Bruder Finduilas' und damit Onkel von Boromir und Faramir. Elbenblut in der Ahnenreihe.",
    appearance: "Hoch aufgerichtet, silberne Rüstung, Banner mit Schiff und Silberschwan.",
    nature: "Ritterlich im alten Sinn, höflich auch zu Halblingen, klarsichtig im Rat.",
    bookFilm: "Er fehlt in den Filmen; sein Auftritt bei der Verteidigung geht an Gandalf und Éomer über.",
    deeds: [
      "Führt die Schwanenritter von Dol Amroth nach Minas Tirith",
      "Bricht mit seinem Vorstoss den Ring der Belagerer auf dem Pelennor",
      "Findet Éowyn unter den Toten und bemerkt, dass sie noch atmet",
      "Übernimmt gemeinsam mit Éomer und Gandalf den Befehl über die Stadt",
      "Zieht mit dem Heer vor das Schwarze Tor"
    ],
    notes: [
      "Seine Tochter Lothíriel wird Königin von Rohan."
    ],
    bonds: ["faramir", "aragorn", "eomer", "denethor"],
    portrait: {
      skin: "#dcb48c",
      hair: "#2e2620",
      hairstyle: "lang",
      beard: "kurz",
      eyes: "#7fa0b8",
      cloak: "#3f5a7a",
      headwear: "helm",
      ears: "rund"
    }
  },
  {
    id: "butterbur",
    name: "Gerstenmann Butterblum",
    title: "Wirt zum Tänzelnden Pony",
    people: "Mensch",
    allegiance: "Unabhängig",
    home: "bree",
    weapon: "Zapfhahn und ein gutes Gedächtnis, meistens",
    actor: "David Weatherley",
    source: "Herr der Ringe",
    lifespan: "Wirt in Bree im Jahr 3018",
    bio: "Der Wirt von Bree, freundlich, vielbeschäftigt und vergesslich. Sein liegengebliebener Brief kostet die Hobbits beinahe alles.",
    fate: "Er beherbergt die Hobbits in der Nacht, in der die Ringgeister Bree überfallen, und übersteht auch das.",
    otherNames: "Gerstenmann Butterblum, Wirt zum Tänzelnden Pony",
    descent: "Mensch aus Bree, Gastwirt in dritter oder vierter Generation.",
    appearance: "Dick, rotgesichtig, immer ausser Atem, mit einer Schürze voller Bierflecken.",
    nature: "Gutmütig, geschwätzig, überfordert. Sein Gedächtnis ist so löchrig wie sein Gasthaus voll.",
    bookFilm: "Im Buch erklärt er ausführlich, warum der Brief liegen blieb; der Film kürzt ihn auf wenige Sätze.",
    deeds: [
      "Führt das Tänzelnde Pony in Bree",
      "Nimmt Gandalfs Brief für Frodo an und vergisst ihn ein halbes Jahr",
      "Beherbergt die Hobbits in der Nacht, in der die Ringgeister zuschlagen",
      "Verkauft ihnen Bill, das abgemagerte Pony Farmer Ferkelbeins"
    ],
    notes: [
      "Sein Brief hätte den Hobbits Monate und einige Wunden erspart.",
      "Bill das Pony findet allein den Weg zurück nach Bree.",
      "Er erkennt Streicher nur als zwielichtigen Waldläufer, nicht als künftigen König."
    ],
    bonds: ["frodo", "gandalf", "aragorn", "merry"],
    portrait: {
      skin: "#e2b489",
      hair: "#8a6a44",
      hairstyle: "kurz",
      beard: "voll",
      eyes: "#7a6a4a",
      cloak: "#7a5a34",
      ears: "rund"
    }
  },
  {
    id: "bard",
    name: "Bard der Bogenschütze",
    title: "König von Thal",
    people: "Mensch",
    allegiance: "Freie Völker",
    home: "esgaroth",
    weapon: "Der Schwarze Pfeil",
    actor: "Luke Evans",
    source: "Der Hobbit",
    lifespan: "Erbe der Herren von Thal",
    bio: "Ein Bootsmann aus Esgaroth, Nachfahre der Herren von Thal. Ihm sagt die Drossel, wo Smaugs Schuppen fehlen.",
    fate: "Er erlegt Smaug, führt die Überlebenden und baut Thal als König wieder auf.",
    otherNames: "Bard der Bogenschütze, Bard I., König von Thal, Drachentöter",
    descent: "Nachfahre Girions, des letzten Herrn von Thal. Grimmig und wortkarg unter den Leuten der Seestadt.",
    appearance: "Dunkelhaarig, düsteres Gesicht, Hauptmann der Bogenschützen von Esgaroth.",
    nature: "Nüchtern, gerecht, ohne Hunger nach Gold, aber mit klarem Sinn für das, was seiner Stadt zusteht.",
    bookFilm: "Im Buch ist Bard erst kurz vor Smaugs Tod überhaupt eingeführt; die Filme geben ihm eine Familie und eine lange Vorgeschichte.",
    deeds: [
      "Befehligt die Bogenschützen von Esgaroth",
      "Erfährt von der Drossel von der fehlenden Schuppe an Smaugs Brust",
      "Erlegt Smaug mit dem letzten schwarzen Pfeil seines Hauses",
      "Organisiert die Überlebenden der brennenden Stadt",
      "Fordert von Thorin einen Anteil am Hort und belagert den Berg",
      "Kämpft in der Schlacht der Fünf Heere und wird König von Thal"
    ],
    notes: [
      "Der letzte schwarze Pfeil stammt aus der Schmiede von Girion, kehrte immer zurück und wurde in seinem Haus über Generationen aufbewahrt.",
      "Sein Enkel Brand fällt im Ringkrieg an Dáins Seite vor Erebor."
    ],
    bonds: ["thorin", "thranduil", "smaug", "dain"],
    portrait: {
      skin: "#d8ab80",
      hair: "#33281e",
      hairstyle: "lang",
      beard: "stoppel",
      eyes: "#6a7a6a",
      cloak: "#3f4a52",
      ears: "rund"
    }
  },
  {
    id: "beorn",
    name: "Beorn",
    title: "Der Wechselhäuter",
    people: "Wesen",
    allegiance: "Freie Völker",
    home: "carrock",
    weapon: "Bärengestalt und eine grosse Axt",
    actor: "Mikael Persbrandt",
    source: "Der Hobbit",
    lifespan: "lebt am Anduin nahe dem Carrock",
    bio: "Ein Mann, der sich in einen gewaltigen Bären verwandelt. Er hasst Orks, liebt seine Tiere und traut Fremden nur knapp.",
    fate: "In der Schlacht der Fünf Heere trägt er den verwundeten Thorin aus dem Getümmel und bricht die Reihen der Orks.",
    otherNames: "Beorn der Wechselhäuter, Herr des Carrock",
    descent: "Letzter eines Volkes, das einst in den Bergen lebte. Seine Herkunft bleibt ausdrücklich ungeklärt.",
    appearance: "Riesenhaft, schwarzbärtig, in Bärengestalt grösser als jedes natürliche Tier.",
    nature: "Barsch, gastfreundlich nach eigenem Mass, tierlieb und menschenfeindlich, unversöhnlich gegen Orks.",
    bookFilm: "Der Film macht ihn zum Fluchopfer Azogs; im Buch ist seine Verwandlung schlicht Teil seines Wesens.",
    deeds: [
      "Nimmt Thorins Gesellschaft in zwei Gruppen auf, um sie zu prüfen",
      "Bestätigt ihre Geschichte, indem er den Spuren nach Norden folgt",
      "Rüstet sie mit Vorräten und Ponys für den Düsterwald aus",
      "Erscheint spät in der Schlacht der Fünf Heere in Bärengestalt",
      "Trägt Thorin verwundet aus dem Getümmel und zerbricht die Leibwache Bolgs"
    ],
    notes: [
      "Seine Tiere sprechen nicht, verstehen ihn aber und bedienen bei Tisch.",
      "Seine Nachkommen, die Beorninger, halten später den Hohen Pass für Reisende offen.",
      "Er isst kein Fleisch und hält sich Bienen von der Grösse eines Daumens."
    ],
    bonds: ["thorin", "bilbo", "gandalf", "radagast"],
    portrait: {
      skin: "#c98f5e",
      hair: "#3a2a18",
      hairstyle: "wild",
      beard: "voll",
      eyes: "#5a4a30",
      cloak: "#5a3f22",
      ears: "rund"
    }
  },
  {
    id: "thorin",
    name: "Thorin Eichenschild",
    title: "König unter dem Berg",
    people: "Zwerg",
    allegiance: "Freie Völker",
    home: "erebor",
    weapon: "Orcrist und ein Eichenschild",
    actor: "Richard Armitage",
    source: "Der Hobbit",
    lifespan: "2746 bis 2941 D.Z.",
    bio: "Erbe Durins, im Exil geboren nachdem Smaug Erebor nahm. Er führt dreizehn Zwerge und einen Hobbit zurück zum Berg.",
    fate: "Der Goldrausch der Drachenkrankheit ergreift ihn. Er findet sich wieder und fällt in der Schlacht der Fünf Heere.",
    otherNames: "Eichenschild, Thorin II., König unter dem Berg, Thráinssohn",
    descent: "Sohn Thráins II., Enkel Thrórs, aus dem Haus Durins. Nach dem Fall Erebors 24 Jahre alt.",
    appearance: "Stattlich, mit silberdurchzogenem schwarzem Bart, goldener Kette und einem Blick, der Widerspruch nicht duldet.",
    nature: "Stolz, nachtragend, ein guter Redner und ein schlechter Zuhörer. Die Drachenkrankheit findet in ihm bereits vorbereiteten Boden.",
    bookFilm: "Die Filme machen ihn jünger, kämpferischer und geben ihm mit Azog einen persönlichen Erzfeind, der im Buch längst tot ist.",
    deeds: [
      "Überlebt 2770 als Vierundzwanzigjähriger den Fall Erebors",
      "Kämpft 2799 in der Schlacht von Azanulbizar und führt den Eichenast als Schild",
      "Arbeitet jahrzehntelang als Schmied im Exil in den Blauen Bergen",
      "Trifft 2941 in Bree auf Gandalf, der ihm Bilbo aufdrängt",
      "Wird von den Waldelben gefangen und in Fässern hinausgeschmuggelt",
      "Erreicht den Berg und findet durch Bilbo die geheime Tür",
      "Verfällt nach Smaugs Tod der Drachenkrankheit und verweigert jeden Anteil",
      "Verbannt Bilbo, nachdem dieser den Arkenstein weitergegeben hat",
      "Bricht in der Schlacht aus dem Tor und fällt tödlich verwundet",
      "Versöhnt sich sterbend mit Bilbo"
    ],
    notes: [
      "Der Arkenstein wird ihm mit ins Grab gelegt, dazu Orcrist auf die Brust.",
      "Sein Beiname stammt von einem Eichenast, den er vor Moria als Schild benutzte.",
      "Sein Vater Thráin starb wahnsinnig in den Kerkern von Dol Guldur.",
      "Die Karte und der Schlüssel kommen über Gandalf zu ihm, der beides von Thráin hatte."
    ],
    bonds: ["bilbo", "balin", "dain", "smaug", "thranduil", "gandalf", "azog"],
    portrait: {
      skin: "#dda87c",
      hair: "#2b2622",
      hairstyle: "lang",
      beard: "lang",
      eyes: "#6a8ab0",
      cloak: "#3f4a5a",
      ears: "rund"
    }
  },
  {
    id: "balin",
    name: "Balin",
    title: "Herr von Moria",
    people: "Zwerg",
    allegiance: "Freie Völker",
    home: "moria",
    weapon: "Axt",
    actor: "Ken Stott",
    source: "Der Hobbit, Herr der Ringe",
    lifespan: "2763 bis 2994 D.Z.",
    bio: "Der freundlichste von Thorins Gefährten und Bilbos ältester Zwergenfreund. Später führt er eine Kolonie zurück nach Khazad-dûm.",
    fate: "Die Kolonie wird ausgelöscht. Die Gefährten finden sein Grab in der Kammer von Mazarbul.",
    otherNames: "Balin, Sohn Fundins, Herr von Moria",
    descent: "Aus dem Haus Durins, Bruder Dwalins, Verwandter Gimlis. Einer der dreizehn von Erebor.",
    appearance: "Weisser Bart, rote Kapuze, das freundlichste Gesicht der Gesellschaft.",
    nature: "Höflich, umsichtig, der einzige Zwerg, der Bilbo von Anfang an ernst nimmt. Sein Ehrgeiz, Moria zurückzugewinnen, wird ihm zum Verhängnis.",
    bookFilm: "Sein Grab in Moria ist in Buch und Film gleich; das Buch zitiert dazu ausführlich aus dem zerfetzten Buch von Mazarbul.",
    deeds: [
      "Entkommt als junger Zwerg dem Fall Erebors",
      "Zieht mit Thorin nach Erebor und erkundet als Späher die Lage",
      "Ist der erste, der Bilbo bei der Rückkehr durch die geheime Tür erwartet",
      "Besucht Bilbo 2949 mit Gandalf im Auenland",
      "Führt 2989 eine Kolonie zurück nach Khazad-dûm",
      "Wird Herr von Moria und hält die Ostgrube fünf Jahre lang",
      "Fällt 2994 am Spiegelsee durch einen Orkpfeil"
    ],
    notes: [
      "Sein Grabmal in der Kammer von Mazarbul ist die einzige Zwergeninschrift, die die Gefährten lesen.",
      "Das Buch von Mazarbul endet mit dem Satz, sie kommen."
    ],
    bonds: ["thorin", "gimli", "bilbo", "gandalf"],
    portrait: {
      skin: "#e6b98c",
      hair: "#e8e2d6",
      hairstyle: "lang",
      beard: "lang",
      eyes: "#7a6a4a",
      cloak: "#7a3a34",
      ears: "rund"
    }
  },
  {
    id: "dain",
    name: "Dáin II. Eisenfuss",
    title: "König unter dem Berg",
    people: "Zwerg",
    allegiance: "Freie Völker",
    home: "eisenberge",
    weapon: "Streithammer",
    actor: "Billy Connolly",
    source: "Der Hobbit, Anhänge",
    lifespan: "2767 bis 3019 D.Z.",
    bio: "Herr der Eisenberge, Thorins Vetter, der mit fünfhundert Kriegern zum Berg zieht, als der Streit ums Gold beginnt.",
    fate: "Nach Thorins Tod wird er König unter dem Berg und fällt im Ringkrieg vor den Toren Erebors.",
    otherNames: "Dáin II. Eisenfuss, König unter dem Berg, Herr der Eisenberge",
    descent: "Sohn Náins, Vetter Thorins, aus dem Haus Durins.",
    appearance: "Rotbärtig, in Eisenschuhen, auch mit über zweihundert Jahren noch ein Kämpfer.",
    nature: "Nüchtern, zäh, klug genug, Verhandlungen dem Gemetzel vorzuziehen, aber nicht bereit, sich erpressen zu lassen.",
    bookFilm: "Im Hobbit-Film reitet er auf einem Kriegseber und liefert derben Humor; das Buch gibt ihm Würde und wenige Worte.",
    deeds: [
      "Erschlägt 2799 als Zweiunddreissigjähriger vor dem Osttor Morias den Ork Azog",
      "Warnt als erster davor, Khazad-dûm zu betreten, weil dort Durins Fluch lauert",
      "Führt 2941 fünfhundert Krieger aus den Eisenbergen zum Einsamen Berg",
      "Verhandelt und kämpft in der Schlacht der Fünf Heere",
      "Wird nach Thorins Tod König unter dem Berg",
      "Weist 3018 Saurons Boten ab, die nach Bilbo und dem Ring fragen",
      "Fällt 3019 vor dem Tor Erebors über dem Leichnam König Brands"
    ],
    notes: [
      "Er ist der einzige Zwerg, der einen Blick in Morias Osttor warf und sagte, was er dort sah.",
      "Saurons Bote versprach ihm drei Zwergenringe für Auskunft über den Ringträger.",
      "Er stirbt mit 252 Jahren, was selbst für Zwerge ungewöhnlich ist."
    ],
    bonds: ["thorin", "thranduil", "azog", "bard"],
    portrait: {
      skin: "#e0a878",
      hair: "#a8452a",
      hairstyle: "wild",
      beard: "zopfbart",
      eyes: "#6a5a3a",
      cloak: "#6a4a2a",
      headwear: "helm",
      ears: "rund"
    }
  },
  {
    id: "smaug",
    name: "Smaug",
    title: "Der Goldene, die grösste Plage seines Zeitalters",
    people: "Drache",
    allegiance: "Unabhängig",
    home: "erebor",
    weapon: "Feuer, Panzer und List",
    actor: "Benedict Cumberbatch",
    source: "Der Hobbit",
    lifespan: "nimmt Erebor 2770, stirbt 2941 D.Z.",
    bio: "Der letzte grosse Feuerdrache. Er nahm Erebor, vertrieb Thrórs Volk und schlief zweihundert Jahre auf dem Hort.",
    fate: "Eine einzige schuppenlose Stelle an der Brust wird ihm zum Verhängnis: Bards Pfeil über Esgaroth.",
    otherNames: "Smaug der Goldene, der Prächtige, der Schreckliche, Wurm von Erebor",
    descent: "Feuerdrache aus dem Norden, vermutlich aus dem Geschlecht der Drachen Morgoths im Ersten Zeitalter.",
    appearance: "Riesig, rotgolden, der Bauch mit Edelsteinen und Goldscherben gepanzert, die Augen wie glühende Schlitze.",
    nature: "Eitel, misstrauisch, sprachgewandt. Er lockt Schmeichler in die Falle und fällt ausgerechnet über die eigene Prahlerei.",
    bookFilm: "Buch und Film stimmen im Ablauf überein; der Film verlängert die Jagd durch den Berg um eine lange erfundene Verfolgung.",
    deeds: [
      "Kommt 2770 aus dem Norden und nimmt Erebor in einem einzigen Angriff",
      "Verwüstet Thal und tötet oder vertreibt die Bewohner",
      "Schläft 171 Jahre auf dem Hort und panzert seinen Bauch mit Edelsteinen",
      "Bemerkt sofort den Diebstahl eines einzigen Bechers",
      "Rätselt mit Bilbo und verrät dabei seine ungeschützte Stelle",
      "Fliegt nach Esgaroth und brennt die Stadt nieder",
      "Fällt durch Bards schwarzen Pfeil in den Langen See"
    ],
    notes: [
      "Sein Gespräch mit Bilbo gilt als eine der wenigen Szenen, in denen jemand einen Drachen überlistet.",
      "Die Drachenkrankheit ist ansteckend: sie ergreift Thorin, obwohl Smaug längst tot ist.",
      "Er spricht die Gemeinsame Sprache mit ausgesuchter Höflichkeit, ehe er tötet.",
      "Sein Kadaver liegt danach für immer im Seegrund über den Schätzen der Stadt."
    ],
    bonds: ["bilbo", "thorin", "bard"],
    portrait: {
      special: "drache"
    }
  },
  {
    id: "treebeard",
    name: "Baumbart",
    title: "Fangorn, der älteste Ent",
    people: "Ent",
    allegiance: "Freie Völker",
    home: "fangorn",
    weapon: "Wurzeln, Steine und Geduld",
    actor: "John Rhys-Davies",
    source: "Herr der Ringe",
    lifespan: "ältestes lebendes Wesen Mittelerdes",
    bio: "Hirte der Bäume und ältestes lebendes Wesen Mittelerdes. Er redet langsam, weil nichts, was schnell gesagt ist, es wert ist.",
    fate: "Der Entthing beschliesst den Krieg. Die Ents reissen Isengart nieder und ertränken den Ring aus Stein.",
    otherNames: "Fangorn, Baumbart, der Hirte der Bäume, ältester der Ents",
    descent: "Ent aus der Zeit vor den Elben. Yavanna erbat die Ents als Schutz für die wachsenden Dinge.",
    appearance: "Etwa vier Meter hoch, rindenartige Haut, Moosbart, Augen wie tiefe Brunnen mit grünem Grund.",
    nature: "Bedächtig bis zur Unerträglichkeit, misstrauisch gegen Eile. Einmal in Bewegung gesetzt, ist er nicht mehr aufzuhalten.",
    bookFilm: "Im Buch entscheidet der Entthing selbst den Krieg. Der Film lässt die Ents zögern, bis Pippin sie zu den gefällten Bäumen lotst.",
    deeds: [
      "Hütet den Fangorn, seit die Elben die Ents das Sprechen lehrten",
      "Findet Merry und Pippin am Fuss eines Hügels und trägt sie fort",
      "Beruft den Entthing, der drei Tage lang berät",
      "Führt die Ents und Huorne nach Isengart und reisst die Mauern nieder",
      "Ertränkt den Ring von Isengart mit dem umgeleiteten Isen",
      "Bewacht Saruman in Orthanc und lässt ihn schliesslich ziehen",
      "Verspricht Aragorn, den Fangorn zu hüten, und erhält das Land zurück"
    ],
    notes: [
      "Er nennt sein Volk in einer Liste, die ausdrücklich keine Hobbits enthält, und ergänzt sie.",
      "Die Entfrauen verschwanden im Zweiten Zeitalter; die Ents suchen sie seither, und es gibt keine Entkinder mehr.",
      "Das Entwasser lässt Merry und Pippin zu den grössten Hobbits der Geschichte wachsen.",
      "Sein Name in der eigenen Sprache wäre zu lang für ein Buch, sagt er selbst."
    ],
    bonds: ["merry", "pippin", "saruman", "gandalf"],
    portrait: {
      special: "ent"
    }
  },
  {
    id: "bombadil",
    name: "Tom Bombadil",
    title: "Der Älteste und Herr ohne Herrschaft",
    people: "Wesen",
    allegiance: "Unabhängig",
    home: "alterwald",
    weapon: "Lieder",
    actor: "nicht in den Filmen",
    source: "Herr der Ringe",
    lifespan: "war da, ehe der Fluss und die Bäume waren",
    bio: "Ein Rätsel selbst für den Weissen Rat. Er war da, ehe der Fluss und die Bäume waren, und der Eine Ring hat keine Macht über ihn.",
    fate: "Er rettet die Hobbits zweimal, vor der Alten Weide und aus den Hügelgräbern, und bleibt danach in seinem kleinen Land.",
    otherNames: "Tom Bombadil, Iarwain Ben-adar der Älteste und Vaterlose, Forn bei den Zwergen, Orald bei den Menschen",
    descent: "Ungeklärt. Tolkien selbst nannte ihn bewusst ein Rätsel, das in der Geschichte stehenbleiben soll.",
    appearance: "Kleiner Mann mit blauem Rock, gelben Stiefeln und einer Feder am Hut, das Gesicht rot wie ein Apfel.",
    nature: "Fröhlich, singend, ohne jedes Machtstreben. Der Ring hat keine Wirkung auf ihn, weil er nichts besitzen will.",
    bookFilm: "Er fehlt in allen Verfilmungen. Der Rat von Elrond erwägt im Buch, ihm den Ring anzuvertrauen, und verwirft es: er würde ihn verlieren.",
    deeds: [
      "Befreit Merry und Pippin aus dem Spalt der Alten Weide",
      "Beherbergt die Hobbits zwei Nächte und schickt sie ausgeruht weiter",
      "Holt sie aus dem Hügelgrab und vertreibt den Grabunhold",
      "Wählt für jeden der vier eine Klinge aus dem Grabschatz",
      "Ruft das Pony Fatty Lumpkin und findet die verlorenen Ponys wieder"
    ],
    notes: [
      "Er setzt den Ring auf und wird nicht unsichtbar, dann lässt er ihn verschwinden und gibt ihn zurück.",
      "Die Klingen aus dem Hügelgrab entscheiden später die Schlacht auf dem Pelennor.",
      "Er stammt aus einem Gedicht, das Tolkien lange vor dem Hobbit schrieb."
    ],
    bonds: ["goldberry", "frodo", "merry", "pippin"],
    portrait: {
      skin: "#e8b98a",
      hair: "#8a5a2a",
      hairstyle: "wild",
      beard: "voll",
      eyes: "#5a8ac4",
      cloak: "#3a6a4a",
      headwear: "hut",
      ears: "rund"
    }
  },
  {
    id: "goldberry",
    name: "Goldbeere",
    title: "Tochter des Flusses",
    people: "Wesen",
    allegiance: "Unabhängig",
    home: "alterwald",
    weapon: "Wasser und Lied",
    actor: "nicht in den Filmen",
    source: "Herr der Ringe",
    lifespan: "Tochter des Withywindle",
    bio: "Toms Gefährtin, die im Haus am Withywindle den Regen macht und die Nacht freundlich hält.",
    fate: "Sie entlässt die Hobbits mit klarem Rat und den ersten warmen Betten ihrer Reise.",
    otherNames: "Goldbeere, die Flusstochter",
    descent: "Tochter des Withywindle, ein Wesen des Wassers, das Tom aus dem Fluss holte.",
    appearance: "Goldenes Haar, grünes Kleid mit Silber, immer von leiser Bewegung wie von Wasser umgeben.",
    nature: "Heiter und klar, sie spricht wenig und beruhigt damit mehr als lange Erklärungen.",
    bookFilm: "Fehlt in den Filmen ebenso wie Tom Bombadil.",
    deeds: [
      "Nimmt die Hobbits im Haus am Withywindle auf",
      "Erklärt ihnen, dass Tom niemandem gehört und über nichts herrscht",
      "Verabschiedet sie am zweiten Morgen mit klarem Rat"
    ],
    notes: [
      "Der Herbstregen gilt in ihrem Haus als ihr Waschtag."
    ],
    bonds: ["bombadil", "frodo"],
    portrait: {
      skin: "#f6dcbc",
      hair: "#efd07a",
      hairstyle: "lang",
      beard: "keine",
      eyes: "#6fb0a8",
      cloak: "#7fb0a0",
      ears: "rund"
    }
  },
  {
    id: "gollum",
    name: "Gollum, Sméagol",
    title: "Der alte Ringträger",
    people: "Wesen",
    allegiance: "Unabhängig",
    home: "emynmuil",
    weapon: "Zähne, Finger und Schleichkunst",
    actor: "Andy Serkis",
    source: "Der Hobbit, Herr der Ringe",
    lifespan: "um 2430 D.Z. geboren, stirbt 25. März 3019",
    bio: "Einst ein Flusshobbit namens Sméagol, der für den Ring mordete. Fünfhundert Jahre unter dem Nebelgebirge machten ihn zu zwei Stimmen in einem Körper.",
    fate: "Er führt Frodo nach Mordor, verrät ihn an Kankra und bringt am Rand des Feuers ungewollt die Zerstörung des Ringes zustande.",
    otherNames: "Sméagol, Gollum, Schleicher, Stinker, der Ringträger vor Bilbo",
    descent: "Ein Flusshobbit vom Stamm der Starrs, um 2430 des Dritten Zeitalters am Irrbach geboren. Der Ring kam am Geburtstag zu ihm.",
    appearance: "Ausgemergelt, fahle Haut, dünne Haarsträhnen, grosse fahle Augen, breite Füsse, sechs verbliebene Zähne.",
    nature: "Zwei Stimmen in einem Körper: der gedemütigte Sméagol und der besitzgierige Gollum. Sams Misstrauen entscheidet, welche gewinnt.",
    bookFilm: "Die Filme zeigen den inneren Streit als Wechselgespräch mit sich selbst. Im Buch belauscht Sam ihn dabei, was die Szene noch unheimlicher macht.",
    deeds: [
      "Ermordet um 2463 seinen Vetter Déagol am Irrbach für den Ring",
      "Wird von seiner Sippe vertrieben und flieht ins Nebelgebirge",
      "Lebt 478 Jahre allein auf einer Insel im unterirdischen See",
      "Verliert 2941 den Ring an Bilbo und verlässt Jahre später die Berge",
      "Wird in Mordor gefoltert und verrät die Wörter Auenland und Beutlin",
      "Wird von Aragorn gefangen und den Waldelben übergeben, entkommt aber",
      "Führt Frodo und Sam über die Totensümpfe zum Schwarzen Tor",
      "Führt sie nach Cirith Ungol und liefert sie Kankra aus",
      "Beisst Frodo am Feuerspalt den Finger ab und stürzt mit dem Ring in die Glut"
    ],
    notes: [
      "Sein Geburtstagsgeschenk an sich selbst ist der Mord an Déagol.",
      "Der Name Gollum kommt von dem Geräusch, das er mit der Kehle macht.",
      "Am Treppenabsatz von Cirith Ungol ist er einen Moment lang fast wieder Sméagol, bis Sam ihn anfährt.",
      "Ohne ihn wäre die Aufgabe gescheitert, das sagt Gandalf schon zu Beginn voraus."
    ],
    bonds: ["frodo", "sam", "bilbo", "shelob", "aragorn", "sauron"],
    portrait: {
      special: "gollum"
    }
  },
  {
    id: "sauron",
    name: "Sauron",
    title: "Der Dunkle Herrscher, Herr der Ringe",
    people: "Maia",
    allegiance: "Mordor",
    home: "baraddur",
    weapon: "Der Eine Ring und ein Streitkolben",
    actor: "Sala Baker",
    source: "Der Hobbit, Herr der Ringe",
    lifespan: "Maia der Urzeit, entmachtet am 25. März 3019 D.Z.",
    bio: "Einst Diener Morgoths, dann Schmied der Ringe. Ohne seinen Ring ist er ein Wille und ein Auge, das die Länder absucht.",
    fate: "Mit der Vernichtung des Ringes im Feuer des Orodruin verliert er alles und wird zu einem machtlosen Schatten.",
    otherNames: "Mairon der Bewundernswerte, Annatar der Herr der Geschenke, Gorthaur der Grausame, der Nekromant, das Grosse Auge, der Dunkle Herrscher",
    descent: "Maia aus dem Gefolge Aulës, im Ersten Zeitalter Leutnant Morgoths, danach eigenständiger Dunkler Herrscher.",
    appearance: "Einst von blendender Schönheit, nach dem Untergang Númenors zu keiner freundlichen Gestalt mehr fähig. Zuletzt eine schwarze Gestalt mit einer brennenden Hand.",
    nature: "Ordnungswahn ins Absolute getrieben. Er kann sich nicht vorstellen, dass jemand Macht freiwillig vernichtet, und verliert genau daran.",
    bookFilm: "Der Film macht ihn zu einem körperlosen flammenden Auge auf dem Turm. Im Buch ist das Auge ein Bild für seine Wahrnehmung, er selbst hat eine Gestalt.",
    deeds: [
      "Dient Morgoth im Ersten Zeitalter als mächtigster seiner Leutnants",
      "Erscheint um 1500 Z.Z. als Annatar bei den Elbenschmieden von Eregion",
      "Schmiedet heimlich den Einen Ring im Feuer des Orodruin",
      "Verwüstet Eregion und tötet Celebrimbor",
      "Verführt Númenor von innen und stürzt es ins Verderben",
      "Verliert Ring und Gestalt 3441 Z.Z. gegen das Letzte Bündnis",
      "Kehrt als Nekromant von Dol Guldur zurück und wird vom Weissen Rat vertrieben",
      "Baut Barad-dûr ab 2951 wieder auf und nimmt Mordor offen in Besitz",
      "Verliert alles, als der Ring am 25. März 3019 ins Feuer fällt"
    ],
    notes: [
      "Die neun Ringe der Menschen wirkten schneller als die sieben der Zwerge, die nur Gier weckten."
    ],
    bonds: ["witchking", "saruman", "isildur", "mouthofsauron", "gilgalad", "gollum"],
    portrait: {
      special: "sauron"
    }
  },
  {
    id: "witchking",
    name: "Der Hexenkönig von Angmar",
    title: "Herr der Nazgûl",
    people: "Nazgûl",
    allegiance: "Mordor",
    home: "minasmorgul",
    weapon: "Morgulklinge, Streitkolben und Fluggeflügel",
    actor: "Lawrence Makoare",
    source: "Herr der Ringe",
    lifespan: "nimmt um 1500 Z.Z. einen Ring, stirbt 15. März 3019",
    bio: "Einst ein König der Menschen, jetzt der erste der Neun. Er zerstörte das Nordreich Arnor und nahm Minas Ithil.",
    fate: "Kein Mann kann ihn fällen. Merry und Éowyn tun es gemeinsam auf dem Pelennor.",
    otherNames: "Der Hexenkönig von Angmar, Herr der Nazgûl, der Schwarze Hauptmann, der Morgulherr",
    descent: "Einst ein König der Menschen, vermutlich aus Númenor, der einen der Neun Ringe annahm.",
    appearance: "Eine leere Krone über einem unsichtbaren Kopf, ein Mantel ohne Körper darin, ein Schwert mit blassem Feuer.",
    nature: "Reiner Wille ohne Rest von Person. Seine stärkste Waffe ist nicht die Klinge, sondern die Furcht, die ihm vorausgeht.",
    bookFilm: "Der Film zerbricht Gandalfs Stab am Tor von Minas Tirith. Diese Szene steht nur in der langen Fassung und in keiner Buchstelle.",
    deeds: [
      "Nimmt um 1500 Z.Z. einen der Neun Ringe an",
      "Gründet um 1300 D.Z. das Reich Angmar im Norden",
      "Zerstört Arnor und nimmt 1974 Fornost ein",
      "Wird 1975 von Eärnur und Glorfindel geschlagen und verschwindet aus dem Norden",
      "Nimmt 2002 Minas Ithil und macht daraus Minas Morgul",
      "Sticht 3018 Frodo auf der Wetterspitze mit der Morgulklinge",
      "Bricht 3019 mit dem Rammbock Grond das Tor von Minas Tirith",
      "Fällt auf dem Pelennor durch Merry und Éowyn"
    ],
    notes: [
      "Die Weissagung Glorfindels erfüllt sich wörtlich: es sind eine Frau und ein Hobbit.",
      "Sein Streitross ist geflügelt, aber kein Drache, sondern ein Wesen aus früherer Zeit.",
      "Er fordert Eärnur zweimal zum Zweikampf und dieser verschwindet beim zweiten Mal spurlos.",
      "Die Klinge, die ihn trifft, wurde eigens gegen Angmar geschmiedet.",
      "Nach seinem Tod bleibt nur die Krone im Staub liegen."
    ],
    bonds: ["sauron", "nazgul", "eowyn", "merry", "frodo", "glorfindel"],
    portrait: {
      special: "nazgul"
    }
  },
  {
    id: "nazgul",
    name: "Die Nazgûl",
    title: "Die Neun Ringgeister",
    people: "Nazgûl",
    allegiance: "Mordor",
    home: "dolguldur",
    weapon: "Morgulklingen und geflügelte Reittiere",
    actor: "diverse",
    source: "Herr der Ringe",
    lifespan: "seit dem Zweiten Zeitalter gebunden",
    bio: "Neun Menschenkönige, die Ringe annahmen und darüber verschwanden. Sie besitzen keine eigene Gestalt mehr, nur Willen und Schrecken.",
    fate: "Sie jagen den Ring von Bree bis nach Mordor und vergehen in dem Augenblick, in dem er im Feuer zerfällt.",
    otherNames: "Die Neun, Ringgeister, Úlairi, Schwarze Reiter, Die Schrecklichen Neun",
    descent: "Neun Menschenkönige und Fürsten, die im Zweiten Zeitalter Ringe von Sauron annahmen und darüber verschwanden.",
    appearance: "Schwarze Mäntel und Kapuzen ohne sichtbaren Träger. Wer den Ring trägt, sieht darunter graue Greisengestalten mit farblosen Augen.",
    nature: "Kein eigener Wille mehr. Sie handeln als Verlängerung Saurons und spüren den Ring stärker als sie sehen.",
    bookFilm: "Im Buch reiten sie zunächst gewöhnliche Pferde und verlieren diese an der Furt; erst danach bekommen sie die geflügelten Reittiere.",
    deeds: [
      "Nehmen im Zweiten Zeitalter Ringe an und verlieren darüber ihre Gestalt",
      "Erscheinen um 2251 Z.Z. zum ersten Mal als Ringgeister",
      "Nehmen 2002 D.Z. Minas Ithil und den Palantír darin",
      "Besetzen 2951 erneut Dol Guldur",
      "Reiten 3018 in schwarzen Mänteln ins Auenland",
      "Werden an der Furt des Bruinen von der Flut fortgerissen",
      "Kehren auf geflügelten Reittieren zurück und tragen den Schrecken über die Heere"
    ],
    notes: [
      "Drei von ihnen waren einst Fürsten von Númenor.",
      "Nur zwei tragen Namen: der Hexenkönig und Khamûl, der Schatten des Ostens.",
      "Ihr Schrei macht Menschen kampfunfähig, ohne dass ein Schwert gezogen wird."
    ],
    bonds: ["witchking", "sauron", "frodo"],
    portrait: {
      special: "nazgul"
    }
  },
  {
    id: "mouthofsauron",
    name: "Der Mund Saurons",
    title: "Bote des Schwarzen Landes",
    people: "Mensch",
    allegiance: "Mordor",
    home: "morannon",
    weapon: "Verhandlung und Hohn",
    actor: "Bruce Spence",
    source: "Herr der Ringe",
    lifespan: "Bote im Jahr 3019",
    bio: "Ein Schwarzer Númenórer, so lange in Saurons Dienst, dass er seinen eigenen Namen vergessen hat.",
    fate: "Vor dem Schwarzen Tor zeigt er Frodos Mithrilhemd, um das Heer des Westens zu brechen.",
    otherNames: "Der Mund Saurons, Leutnant von Barad-dûr",
    descent: "Ein Schwarzer Númenórer, Nachfahre jener Menschen, die sich früh Sauron anschlossen.",
    appearance: "Ein lebender Mensch, kein Geist, in schwarzer Rüstung mit hohem Helm, das Gesicht kaum sichtbar.",
    nature: "Hochmütig, redegewandt, grausam im Detail. Er geniesst die Verzweiflung, die seine Nachrichten auslösen.",
    bookFilm: "Er kommt nur in der langen Fassung der Filme vor und wird dort sofort von Aragorn enthauptet. Im Buch reitet er unversehrt zurück.",
    deeds: [
      "Steigt im Dienst Barad-dûrs zum Leutnant auf",
      "Verhandelt vor dem Schwarzen Tor mit dem Heer des Westens",
      "Legt Mithrilhemd, grauen Mantel und Schwert als Beweise vor",
      "Fordert Rückzug und Unterwerfung Gondors als Preis"
    ],
    bonds: ["sauron", "aragorn", "gandalf"],
    portrait: {
      skin: "#c8b49a",
      hair: "#1a1614",
      hairstyle: "kahl",
      beard: "keine",
      eyes: "#c94a2a",
      cloak: "#1e1a18",
      headwear: "helm",
      ears: "rund"
    }
  },
  {
    id: "lurtz",
    name: "Lurtz",
    title: "Erster der Uruk-hai",
    people: "Ork",
    allegiance: "Isengart",
    home: "amonhen",
    weapon: "Schwert und Bogen",
    actor: "Lawrence Makoare",
    source: "Herr der Ringe (Film)",
    lifespan: "Figur der Verfilmung, 3019",
    bio: "Aus dem Schlamm unter Isengart gezogen, gezüchtet um bei Tag zu laufen und keine Furcht zu kennen.",
    fate: "Er schiesst Boromir nieder und wird von Aragorn erschlagen.",
    otherNames: "Lurtz, erster der Uruk-hai",
    descent: "Erfindung der Verfilmung. Er wird auf der Leinwand aus dem Schlamm unter Isengart gezogen.",
    appearance: "Sehr gross, schwarze Haut mit weisser Handmarke, Reisszähne, gelbe Augen.",
    nature: "Neu geschaffen und bereits ohne Furcht, gezüchtet auf Tageslicht und Gehorsam.",
    bookFilm: "In keinem Buch vorhanden. Seine Aufgabe, Boromirs Tod ein Gesicht zu geben, übernehmen dort namenlose Orkbogenschützen.",
    deeds: [
      "Wird in den Gruben unter Isengart gezüchtet",
      "Führt den Trupp, der die Gemeinschaft am Amon Hen stellt",
      "Streckt Boromir mit drei Pfeilen nieder",
      "Wird von Aragorn im Zweikampf erschlagen"
    ],
    notes: [
      "Die weisse Hand auf seiner Stirn ist Sarumans Zeichen."
    ],
    bonds: ["saruman", "boromir", "aragorn"],
    portrait: {
      special: "uruk"
    }
  },
  {
    id: "ugluk",
    name: "Uglúk",
    title: "Hauptmann der Uruk-hai",
    people: "Ork",
    allegiance: "Isengart",
    home: "fangorn",
    weapon: "Krummschwert",
    actor: "Nathaniel Lees",
    source: "Herr der Ringe",
    lifespan: "gefallen 3019 D.Z. am Fangorn",
    bio: "Er führt den Trupp, der Merry und Pippin quer durch Rohan schleppt, und hält seine streitenden Orks mit Gewalt zusammen.",
    fate: "Éomers Reiter stellen die Uruks am Rand des Fangorn und vernichten sie.",
    otherNames: "Uglúk von Isengart, Hauptmann der Uruk-hai",
    descent: "Uruk aus Sarumans Zucht, Anführer des Trupps, der die Hobbits verschleppt.",
    appearance: "Breit, krummbeinig, mit einer weissen Hand auf Helm und Schild.",
    nature: "Brutal und diszipliniert. Er hält seine Gruppe mit Drohungen zusammen und verachtet die Orks aus Mordor offen.",
    bookFilm: "Im Buch gibt es einen langen Streit zwischen Isengart, Mordor und den Nordorks. Der Film kürzt ihn auf wenige Sätze zusammen.",
    deeds: [
      "Führt den Isengart-Trupp, der Merry und Pippin verschleppt",
      "Setzt sich im Streit mit Grishnákh aus Mordor gewaltsam durch",
      "Treibt die Gefangenen ohne Rast quer durch Rohan",
      "Wird an der Waldgrenze von Éomers Reitern gestellt und getötet"
    ],
    notes: [
      "Der Streit zwischen Isengart, Mordor und den Nordorks rettet den Hobbits das Leben.",
      "Er verabreicht Merry und Pippin den Orktrank, der Wunden schliesst und brennt."
    ],
    bonds: ["saruman", "merry", "pippin", "eomer"],
    portrait: {
      special: "uruk"
    }
  },
  {
    id: "gothmog",
    name: "Gothmog",
    title: "Hauptmann von Minas Morgul",
    people: "Ork",
    allegiance: "Mordor",
    home: "osgiliath",
    weapon: "Streitkolben",
    actor: "Lawrence Makoare",
    source: "Herr der Ringe (Film)",
    lifespan: "Hauptmann im Jahr 3019",
    bio: "Der verwachsene Orkführer, der die Belagerung von Minas Tirith leitet und die Katapulte ausrichtet.",
    fate: "Er fällt auf dem Pelennor unter den Klingen von Aragorn und Gimli.",
    otherNames: "Gothmog, Hauptmann von Minas Morgul",
    descent: "Im Buch nur einmal genannt, Art unklar. Der Film macht daraus einen verwachsenen Ork.",
    appearance: "Im Film schief gewachsen, entstelltes Gesicht, schwere Rüstung.",
    nature: "Kalt und methodisch, ein Belagerungsführer, kein Draufgänger.",
    bookFilm: "Das Buch nennt nur seinen Namen und seinen Rang. Alles Weitere stammt vom Film.",
    deeds: [
      "Führt die Belagerung von Minas Tirith",
      "Lässt die Köpfe der Gefallenen in die Stadt schleudern",
      "Übernimmt den Befehl, nachdem der Hexenkönig gefallen ist"
    ],
    notes: [
      "Sein Name stammt vom Balrogfürsten des Ersten Zeitalters.",
      "Ob er Ork, Mensch oder etwas anderes ist, bleibt offen."
    ],
    bonds: ["witchking", "sauron"],
    portrait: {
      special: "ork"
    }
  },
  {
    id: "shagrat",
    name: "Shagrat",
    title: "Befehlshaber von Cirith Ungol",
    people: "Ork",
    allegiance: "Mordor",
    home: "cirithungol",
    weapon: "Krummsäbel",
    actor: "Peter Tait",
    source: "Herr der Ringe",
    lifespan: "Befehlshaber im Jahr 3019",
    bio: "Er findet Frodo betäubt vor Kankras Lager und streitet sich mit Gorbag um das Mithrilhemd.",
    fate: "Der Streit wird zum Gemetzel im Turm, das Sam die Tür öffnet.",
    otherNames: "Shagrat, Hauptmann des Turms von Cirith Ungol",
    descent: "Uruk aus Mordor, befehligt die Wache des Passturms.",
    appearance: "Gross für einen Ork, breite Hände, Narben aus alten Kämpfen.",
    nature: "Gerissen, pflichtbewusst gegenüber Befehlen, sofort gierig, sobald Beute im Spiel ist.",
    bookFilm: "Der lange Streit mit Gorbag, der den ganzen Turm entvölkert, wird im Film nur angedeutet.",
    deeds: [
      "Befehligt die Wache des Turms von Cirith Ungol",
      "Findet Frodo betäubt in Kankras Netz",
      "Streitet mit Gorbag aus Minas Morgul um das Mithrilhemd",
      "Entkommt dem Gemetzel im Turm und bringt die Beute nach Barad-dûr"
    ],
    notes: [
      "Von rund zweihundert Orks des Turms überleben den Streit nur zwei.",
      "Sein Gespräch mit Gorbag verrät Sam, dass Frodo noch lebt.",
      "Orks reden über Vorgesetzte genauso wie Soldaten überall, das war Tolkien wichtig."
    ],
    bonds: ["shelob", "sauron", "frodo", "sam"],
    portrait: {
      special: "ork"
    }
  },
  {
    id: "shelob",
    name: "Kankra",
    title: "Ungoliants letztes Kind",
    people: "Wesen",
    allegiance: "Unabhängig",
    home: "cirithungol",
    weapon: "Gift und Netze",
    actor: "Riesenspinne im Film",
    source: "Herr der Ringe",
    lifespan: "seit dem Ersten Zeitalter im Gebirge",
    bio: "Eine uralte Spinne im Pass über Minas Morgul, älter als Sauron in diesem Land. Sie dient niemandem und frisst alles.",
    fate: "Sam vertreibt sie mit Stich und dem Licht Eärendils. Sie zieht sich schwer verwundet in ihr Loch zurück.",
    otherNames: "Kankra, Shelob, die Grosse Spinne, Ungoliants letztes Kind",
    descent: "Nachkommin Ungoliants, die im Ersten Zeitalter die Zwei Bäume tötete. Sie lebt seit Jahrtausenden im Gebirge.",
    appearance: "Grösser als jedes Tier, schwarzer aufgedunsener Leib, gebündelte Augen, Stachel am Hinterleib.",
    nature: "Gefrässig und einsam. Sie dient niemandem, auch Sauron nicht, und frisst seine Diener ebenso wie seine Feinde.",
    bookFilm: "Der Film verschiebt die Begegnung mit Kankra in den dritten Teil; im Buch steht sie am Ende des zweiten Bandes.",
    deeds: [
      "Entkommt als Kind Ungoliants dem Untergang des Nordens",
      "Nistet sich vor dem Zweiten Zeitalter im Pass über Minas Ithil ein",
      "Frisst Elben, Menschen und Orks, die Sauron ihr zutreibt",
      "Lähmt Frodo mit ihrem Stachel",
      "Wird von Sam mit Stich und dem Sternenglas Galadriels verwundet",
      "Zieht sich schwer verletzt in ihr Loch zurück"
    ],
    notes: [
      "Sauron nennt sie seine Katze und duldet sie als Wachhund am Pass.",
      "Das Licht Eärendils im Glas ist das einzige, vor dem sie weicht.",
      "Ihr Netz ist so zäh, dass gewöhnliche Klingen daran abgleiten.",
      "Ihr weiteres Schicksal bleibt offen, Tolkien lässt sie nicht sterben."
    ],
    bonds: ["gollum", "sam", "sauron", "frodo", "shagrat"],
    portrait: {
      special: "spinne"
    }
  },
  {
    id: "balrog",
    name: "Durins Fluch",
    title: "Ein Balrog von Morgoth",
    people: "Maia",
    allegiance: "Unabhängig",
    home: "moria",
    weapon: "Feuerpeitsche und Flammenschwert",
    actor: "Kreatur im Film",
    source: "Herr der Ringe",
    lifespan: "geweckt 1980 D.Z., gefallen 25. Januar 3019",
    bio: "Ein Dämon aus dem Ersten Zeitalter, den die Zwerge beim Graben nach Mithril weckten. Er vertrieb ein ganzes Volk aus seinem Reich.",
    fate: "Auf der Brücke von Khazad-dûm stellt Gandalf sich ihm. Beide stürzen, beide sterben, einer kehrt zurück.",
    otherNames: "Durins Fluch, der Balrog von Moria, Valaraukar",
    descent: "Maia, von Morgoth im Ersten Zeitalter verführt. Nach dessen Sturz tief unter dem Nebelgebirge verborgen.",
    appearance: "Eine Gestalt aus Schatten mit einem Kern aus Feuer, Hörnern, Flammenschwert und Peitsche.",
    nature: "Kein Verhandeln, kein Sprechen. Reine zerstörerische Gegenwart, vor der selbst Orks fliehen.",
    bookFilm: "Ob Balrogs Flügel haben, ist eine der ältesten Streitfragen unter Lesern. Der Film entscheidet sich für Flügel.",
    deeds: [
      "Kämpft im Ersten Zeitalter als Diener Morgoths",
      "Verbirgt sich nach dessen Sturz tief unter dem Nebelgebirge",
      "Wird 1980 D.Z. von den Zwergen beim Graben nach Mithril geweckt",
      "Tötet Durin VI. und dessen Sohn Náin",
      "Vertreibt das gesamte Volk aus Khazad-dûm",
      "Stellt sich Gandalf auf der Brücke und zieht ihn mit in die Tiefe",
      "Wird nach dem Sturz die Endlose Treppe hinauf verfolgt und auf dem Zirakzigil erschlagen"
    ],
    notes: [
      "Die Zwerge nennen ihn nur Durins Fluch und sprechen den Namen ungern aus.",
      "Der Kampf dauert der Erzählung nach zehn Tage und endet über den Wolken.",
      "Die Orks Morias fürchten ihn so sehr, dass sie ihn nur den Schrecken nennen."
    ],
    bonds: ["gandalf", "balin", "gimli"],
    portrait: {
      special: "balrog"
    }
  },
  {
    id: "azog",
    name: "Azog",
    title: "Der Schänder",
    people: "Ork",
    allegiance: "Mordor",
    home: "gundabad",
    weapon: "Eisenklaue",
    actor: "Manu Bennett",
    source: "Der Hobbit",
    lifespan: "gefallen 2799 D.Z. vor Moria",
    bio: "Orkfürst von Moria, der Thrór enthauptete und damit den Krieg zwischen Zwergen und Orks entfachte.",
    fate: "In der Schlacht der Fünf Heere trifft er zum letzten Mal auf Thorin. Keiner der beiden überlebt.",
    otherNames: "Azog der Schänder, Ork von Moria",
    descent: "Orkhäuptling, der Moria nach dem Balrog besetzte.",
    appearance: "Im Buch riesig und schwarz; der Film macht ihn bleich mit einer Eisenklaue am Arm.",
    nature: "Grausam mit Sinn für Demütigung. Er brandmarkt Thrórs Kopf und wirft die Almosen vor die Zwerge.",
    bookFilm: "Im Buch stirbt Azog bereits 2799 durch Dáin. Die Filme halten ihn 140 Jahre länger am Leben, damit Thorin einen Gegenspieler hat.",
    deeds: [
      "Nimmt Moria nach der Flucht der Zwerge in Besitz",
      "Enthauptet 2790 König Thrór und brandmarkt den Kopf",
      "Entfacht damit den Krieg zwischen Zwergen und Orks",
      "Fällt 2799 in der Schlacht von Azanulbizar durch Dáin Eisenfuss"
    ],
    notes: [
      "Sein Sohn Bolg führt die Orks in der Schlacht der Fünf Heere.",
      "Der Zwergenkrieg um seinen Kopf dauerte sechs Jahre und kostete beide Seiten alles."
    ],
    bonds: ["thorin", "dain", "smaug"],
    portrait: {
      special: "ork"
    }
  },
  {
    id: "gwaihir",
    name: "Gwaihir",
    title: "Herr der Winde",
    people: "Wesen",
    allegiance: "Freie Völker",
    home: "hohepass",
    weapon: "Klauen und Schwingen",
    actor: "Adler im Film",
    source: "Der Hobbit, Herr der Ringe",
    lifespan: "Herr der Adler des Nordens",
    bio: "Der grösste der Adler des Nordens, ein alter Schuldner Gandalfs. Er beobachtet die Länder von den Gipfeln des Nebelgebirges aus.",
    fate: "Er trägt Gandalf von Orthanc, von Zirakzigil und holt Frodo und Sam vom Hang des Schicksalsberges.",
    otherNames: "Gwaihir der Windherr, Herr der Adler",
    descent: "Nachfahre Thorondors, des grössten Adlers des Ersten Zeitalters. Die Adler gelten als Boten Manwës.",
    appearance: "Flügelspannweite von vielen Metern, goldenes Gefieder am Hals.",
    nature: "Stolz und eigenwillig. Die Adler sind kein Fuhrpark, sie helfen nach eigenem Ermessen.",
    bookFilm: "Die beliebte Frage, warum die Adler den Ring nicht einfach fortgetragen haben, beantwortet Tolkien nie im Text; die Adler stehen unter keinem Befehl.",
    deeds: [
      "Trägt Gandalf 3018 vom Dach des Orthanc",
      "Holt ihn nach dem Kampf mit dem Balrog vom Gipfel des Zirakzigil",
      "Bringt ihn mit den Adlern zur Schlacht vor dem Schwarzen Tor",
      "Trägt Frodo und Sam vom Hang des Schicksalsberges"
    ],
    notes: [
      "Thorondors Flügelspannweite gibt die Überlieferung mit dreissig Metern an.",
      "Gandalf heilte einst seinen Vorfahren von einem Pfeilschuss, daher die alte Schuld.",
      "Er trägt Gandalf dreimal, und jedes Mal sagt Gandalf, es sei das letzte Mal."
    ],
    bonds: ["gandalf", "radagast", "frodo", "sam"],
    portrait: {
      special: "adler"
    }
  },
  {
    id: "shadowfax",
    name: "Schattenfell",
    title: "Fürst aller Pferde",
    people: "Wesen",
    allegiance: "Freie Völker",
    home: "edoras",
    weapon: "Geschwindigkeit",
    actor: "Pferd im Film",
    source: "Herr der Ringe",
    lifespan: "Mearas aus der Herde der Könige",
    bio: "Ein Mearas aus der Herde der Könige von Rohan, den nur Gandalf reiten darf. Er trägt weder Sattel noch Zaum.",
    fate: "Er bringt Gandalf schneller nach Minas Tirith als jede Nachricht und hält vor den Nazgûl stand.",
    otherNames: "Schattenfell, Fürst aller Pferde, Sindarin Arod der Schnelle",
    descent: "Mearas, aus der Herde, die nur die Könige von Rohan reiten dürfen. Die Mearas stammen der Sage nach von Béma selbst.",
    appearance: "Silbergrau, glänzend bei Tag, kaum sichtbar bei Nacht.",
    nature: "Eigensinnig, versteht Menschenrede, duldet nur Gandalf.",
    bookFilm: "Im Buch braucht Gandalf mehrere Anläufe, bis Schattenfell ihn überhaupt trägt. Der Film überspringt das.",
    deeds: [
      "Läuft frei in den Herden der Mearas in Rohan",
      "Lässt sich von Gandalf nach mehreren Anläufen reiten",
      "Trägt ihn in drei Tagen von Rohan nach Minas Tirith",
      "Steht vor dem Tor der Stadt als einziges Pferd dem Hexenkönig stand"
    ],
    notes: [
      "Théoden schenkt ihn Gandalf erst nach der Heilung, vorher war es eine Leihgabe im Zorn.",
      "Nach dem Krieg fährt er nicht mit, sondern bleibt in Mittelerde."
    ],
    bonds: ["gandalf", "theoden"],
    portrait: {
      special: "pferd"
    }
  },
  {
    id: "kingofthedead",
    name: "Der König der Toten",
    title: "Anführer des Eidbrecherheeres",
    people: "Wesen",
    allegiance: "Unabhängig",
    home: "dunharg",
    weapon: "Gespensterschwert",
    actor: "Paul Norell",
    source: "Herr der Ringe",
    lifespan: "Eid gebrochen 3434 Z.Z., erlöst 3019 D.Z.",
    bio: "Ein Herrscher der Bergmenschen, der Isildur die Treue schwor und den Eid brach. Sein Volk fand darum keinen Tod.",
    fate: "Aragorn ruft den Eid ein. Nach der Schlacht bei Pelargir werden die Toten endlich entlassen.",
    otherNames: "Der König der Toten, Herr der Eidbrecher, König der Bergmenschen",
    descent: "Herrscher der Menschen des Weissen Gebirges, die einst Sauron dienten und Isildur dennoch Treue schworen.",
    appearance: "Eine grünlich schimmernde Gestalt mit Krone, durch die man hindurchsieht.",
    nature: "Stumm, ruhelos, an ein Wort gebunden, das seit dreitausend Jahren nicht eingelöst ist.",
    bookFilm: "Im Buch stürmt das Totenheer nicht über den Pelennor; es vertreibt nur die Besatzungen der Korsarenschiffe, und Menschen aus Lebennin schlagen die Schlacht.",
    deeds: [
      "Schwört Isildur am Stein von Erech Gefolgschaft",
      "Bricht den Eid, weil sein Volk Sauron gedient hatte",
      "Wird verflucht, keine Ruhe zu finden, bis der Eid erfüllt ist",
      "Hält sein Volk dreitausend Jahre in den Bergen unter Dunharg",
      "Folgt Aragorn, der als Isildurs Erbe den Eid einfordert",
      "Vertreibt bei Pelargir die Besatzungen der Korsarenflotte"
    ],
    notes: [
      "Der Stein von Erech kam mit Isildur aus Númenor und steht seither auf dem Hügel.",
      "Die Toten kämpfen nicht, sie versetzen die Lebenden in Todesangst.",
      "Nach der Entlassung vergehen sie an Ort und Stelle wie Nebel im Wind."
    ],
    bonds: ["aragorn", "isildur", "legolas", "gimli"],
    portrait: {
      special: "geist"
    }
  },
  {
    id: "isildur",
    name: "Isildur",
    title: "Hoher König, der den Ring nahm",
    people: "Mensch",
    allegiance: "Freie Völker",
    home: "orodruin",
    weapon: "Narsil, zum Bruchstück geworden",
    actor: "Harry Sinclair",
    source: "Herr der Ringe",
    lifespan: "3209 Z.Z. bis 2 D.Z.",
    bio: "Elendils Sohn, der Sauron mit dem Stumpf von Narsil den Ring von der Hand schlug und ihn dann nicht ins Feuer werfen wollte.",
    fate: "An den Schwertelfeldern überfallen ihn Orks. Der Ring gleitet ihm vom Finger, und er stirbt im Anduin.",
    otherNames: "Isildur, Hoher König von Arnor und Gondor, Erbauer von Minas Ithil",
    descent: "Ältester Sohn Elendils, Bruder Anárions. Vater von vier Söhnen, von denen nur Valandil überlebt.",
    appearance: "Gross wie alle Númenórer, dunkelhaarig, mit der Narbe an der Hand, an der er den Ring abschnitt.",
    nature: "Tapfer und pflichtbewusst, aber empfänglich für Trauer und Besitz. Der Ring nennt ihn Herr und er glaubt es.",
    bookFilm: "Der Film zeigt im Prolog, wie er Elronds Rat ausschlägt. Im Buch berichtet Elrond es nur nachträglich, und Isildur bereut es in einer Schriftrolle.",
    deeds: [
      "Stiehlt vor dem Untergang Númenors eine Frucht des Weissen Baumes",
      "Entkommt mit seinem Vater und gründet Gondor gemeinsam mit Anárion",
      "Erbaut Minas Ithil und pflanzt dort den Weissen Baum",
      "Kämpft im Letzten Bündnis auf der Dagorlad und bei der Belagerung",
      "Schlägt Sauron mit dem Stumpf von Narsil den Ring von der Hand",
      "Verweigert Elronds Rat, den Ring zu vernichten",
      "Schreibt in Gondor eine Beschreibung des Ringes nieder",
      "Fällt an den Schwertelfeldern, als der Ring ihm vom Finger gleitet"
    ],
    notes: [
      "Er nennt den Ring das Kleinod seines Hauses und das Wergeld für Vater und Bruder.",
      "Die Schriftrolle mit der Beschreibung des Ringes findet Gandalf 3018 im Archiv.",
      "Valandil überlebt nur, weil er in Bruchtal zurückblieb.",
      "Der Ring verrät ihn, weil er ihn in Not von einer Seite zur anderen wechselt."
    ],
    bonds: ["elendil", "sauron", "aragorn", "elrond", "kingofthedead"],
    portrait: {
      skin: "#d8ac82",
      hair: "#33281e",
      hairstyle: "lang",
      beard: "kurz",
      eyes: "#7a8a9a",
      cloak: "#8a8f9a",
      headwear: "helm",
      ears: "rund"
    }
  },
  {
    id: "elendil",
    name: "Elendil",
    title: "Der Grosse, König von Arnor und Gondor",
    people: "Mensch",
    allegiance: "Freie Völker",
    home: "morannon",
    weapon: "Narsil",
    actor: "Peter McKenzie",
    source: "Silmarillion, Anhänge",
    lifespan: "3119 bis 3441 im Zweiten Zeitalter",
    bio: "Er entkam dem Untergang Númenors mit neun Schiffen und gründete die Reiche in Exil. Mit Gil-galad schloss er das Letzte Bündnis.",
    fate: "Er starb im Zweikampf mit Sauron, und Narsil zerbrach unter ihm. Aus den Scherben wurde Andúril.",
    otherNames: "Elendil der Lange, der Getreue, Hoher König von Arnor und Gondor",
    descent: "Sohn Amandils, Herr von Andúnië, Führer der Getreuen von Númenor. Vater von Isildur und Anárion.",
    appearance: "Der grösste Mensch seiner Zeit, in den Überlieferungen mit fast zweieinhalb Metern angegeben.",
    nature: "Standhaft, fromm im alten Sinn, ein Anführer, der Bündnisse hält statt sie zu nutzen.",
    bookFilm: "Der Filmprolog zeigt seinen Tod als kurzen Sturz. Die Überlieferung sagt, Sauron habe ihn niedergeworfen, wobei Narsil unter ihm zerbrach.",
    deeds: [
      "Führt die Getreuen von Númenor, die den alten Bräuchen treu bleiben",
      "Entkommt dem Untergang mit neun Schiffen und den sieben Palantíri",
      "Gründet Arnor im Norden und mit seinen Söhnen Gondor im Süden",
      "Schliesst mit Gil-galad das Letzte Bündnis",
      "Siegt auf der Dagorlad und belagert sieben Jahre lang Barad-dûr",
      "Fällt im Ringen mit Sauron, wobei Narsil unter ihm zerbricht"
    ],
    notes: [
      "Sein Name bedeutet Elbenfreund oder Sternenfreund.",
      "Andúril wird erst dreitausend Jahre später aus den Scherben geschmiedet.",
      "Sein Grab auf dem Halifirien blieb bis in Cirions Zeit ein Staatsgeheimnis."
    ],
    bonds: ["isildur", "gilgalad", "aragorn", "sauron"],
    portrait: {
      skin: "#dbb086",
      hair: "#2f2822",
      hairstyle: "lang",
      beard: "voll",
      eyes: "#8a9aa8",
      cloak: "#93a0ae",
      headwear: "krone",
      ears: "rund"
    }
  }
];

export const CHARACTER_BY_ID: ReadonlyMap<string, Character> = new Map(
  CHARACTERS.map((c) => [c.id, c]),
);

export function character(id: string): Character | undefined {
  return CHARACTER_BY_ID.get(id);
}
