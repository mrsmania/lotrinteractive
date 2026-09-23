import type { PlaceLore } from "../../types";

/**
 * Eriador and the road east, from Bag End to the breaking of the Fellowship.
 *
 * One file per group of places: the whole pile runs to some thousands of words
 * and a single module would be a scroll. data/placeLore.ts puts them in order.
 */
export const ERIADOR = [
] = [
  {
    id: "hobbiton",
    mark: [8, -20],
    icon: "dwelling",
    group: "eriador",
    source: "Herr der Ringe",
    title: "Das Auenland, und ein Loch darin",
    region: "Eriador",
    kind: "Dorf und Höhle",
    location: "Am Wasser, im Westviertel des Auenlandes, unter dem Bühl",
    otherNames: "Beutelsend, Bag End; Hobbingen für das Dorf am Hang darunter",
    builtBy: "Bungo Beutlin grub Beutelsend für Belladonna Tuk",
    heldBy: "Frodo Beutlin, bis er verkauft; danach die Sackheim-Beutlins",
    age: "Das Auenland wird 1601 D.Z. besiedelt, Beutelsend um 2880 gegraben",
    bio: "Das gewöhnlichste Stück Land in ganz Mittelerde, und der Grund, warum der Krieg geführt wird. Sechzig Jahre lang liegt der Eine Ring in einer Schublade in Beutelsend, während sein Besitzer Bücher schreibt und Gäste bewirtet. Das Auenland hat keine Armee, kaum eine Regierung und keine Ahnung, dass Waldläufer seine Grenzen bewachen.",
    appearance: "Ein Hügel mit einer runden grünen Tür, Messing in der Mitte. Innen ein Gang mit getäfelten Wänden, Speisekammern, Garderoben, und Fenster, die nach Westen auf den Garten gehen.",
    fate: "Saruman nimmt es sich, während die Helden im Süden sind: Bäume gefällt, Mühlen aus Ziegel, Beutelsend als Quartier für seine Männer. Die vier zurückkehrenden Hobbits räumen auf. Sam pflanzt den Mallorn aus Galadriels Schachtel, und das Jahr 1420 wird das beste, an das sich jemand erinnert.",
    events: [
      "Bilbo bricht 2941 D.Z. ohne Taschentuch nach Osten auf",
      "Die Abschiedsfeier zum 111. Geburtstag; Bilbo verschwindet vor aller Augen",
      "Gandalf wirft den Ring ins Kaminfeuer und liest die Schrift, die erscheint",
      "Frodo verkauft Beutelsend und verlässt es siebzehn Jahre nach der Feier",
      "Die Schlacht von Bywater, das letzte Gefecht des Ringkriegs",
      "Saruman stirbt vor der Tür von Beutelsend, erstochen von Grima"
    ],
    bookFilm: "Im Film hetzt Gandalf Frodo binnen Tagen aus dem Auenland. Im Buch liegen zwischen Bilbos Feier und Frodos Aufbruch siebzehn Jahre — Frodo ist fünfzig, als er geht, nicht dreissig. Schwerer wiegt, was ganz fehlt: die Befreiung des Auenlandes. Bei Tolkien kommen die vier heim und finden ihr Land besetzt, die Bäume gefällt, Beutelsend geplündert, und müssen selbst eine Schlacht schlagen. Der Film schneidet das komplett und lässt sie in ein unversehrtes Auenland zurückkehren — und nimmt der Geschichte damit ihren eigentlichen Schluss, nämlich dass niemand unbeschädigt heimkommt.",
    notes: [
      "Der Ring liegt in einem Umschlag auf dem Kaminsims, als Gandalf ihn das erste Mal prüft.",
      "Beutelsend geht an die Sackheim-Beutlins, die Bilbo seit 2941 für tot erklärt haben wollten.",
      "Sam wird siebenmal zum Bürgermeister gewählt und wohnt am Ende selbst in Beutelsend."
    ]
  },
  {
    id: "barrowdowns",
    mark: [23, -3],
    icon: "barrow",
    group: "eriador",
    source: "Herr der Ringe",
    title: "Die Gräber eines Königreichs, das niemand mehr kennt",
    region: "Eriador",
    kind: "Hügelgräberfeld",
    location: "Östlich des Alten Waldes, zwischen Bockland und der Strasse nach Bree",
    otherNames: "Tyrn Gorthad auf Sindarin, die Hügelgräberhöhen",
    builtBy: "Die Väter der Edain im Ersten Zeitalter, später Könige von Cardolan",
    heldBy: "Grabunholde, vom Hexenkönig von Angmar dorthin geschickt",
    age: "Grabhügel seit dem Ersten Zeitalter; die Unholde kommen 1636 D.Z.",
    bio: "Ein Feld aus Grabhügeln auf kahlen Höhen, älter als jedes Königreich, das die Hobbits kennen. Die Toten liegen hier seit tausenden von Jahren, und seit der grosse Pesthauch Cardolan entvölkerte, liegt nicht nur das darin. Die Hobbits geraten hinein, weil sie einen Umweg um die Strasse machen, und wären dort geblieben.",
    appearance: "Grüne Kuppen mit Steinringen und einzelnen aufrecht stehenden Steinen, Nebel, der aus dem Boden steigt, und kein Laut.",
    nature: "Der Ort will Schlafende. Nebel, der die Richtung frisst, Kälte, die von innen kommt, und ein Singen aus dem Boden, das nicht aufhört. Wer sich hinlegt, steht nicht auf.",
    fate: "Tom Bombadil holt die vier heraus, treibt den Unhold mit einem Reim aus und legt den Schatz des Hügels ans Tageslicht, damit er niemanden mehr bindet. Die Höhen bleiben, was sie waren.",
    events: [
      "Der Hexenkönig schickt Geister in die Gräber, um das gefallene Cardolan zu entweihen",
      "Die vier Hobbits schlafen an einem Stein ein und erwachen im Nebel",
      "Frodo erwacht in einem Grab, neben den dreien, in Weiss gekleidet und mit einem Schwert quer über ihnen",
      "Frodo schlägt die Hand ab, die nach Sam greift, statt den Ring anzustecken und zu fliehen",
      "Bombadil bricht den Hügel auf und gibt jedem der vier eine Klinge aus dem Hort"
    ],
    bookFilm: "Im Film kommen die Hügelgräber nicht vor — die Hobbits gehen direkt von Bockland nach Bree, und Aragorn gibt ihnen in Bruchtal Schwerter. Das hat eine Folge, die der Film nie einholt: Merrys Dolch vom Hügelgrab ist eine Klinge aus Westernis, geschmiedet gegen Angmar. Genau deshalb löst sein Stich auf dem Pelennor den Bann, der den Hexenkönig zusammenhält, und erst dann kann Éowyns Streich treffen. Im Film sticht Merry mit irgendeinem Messer, und Éowyns Sieg ist ein Spruch ohne Grund.",
    notes: [
      "Von hier stammt Frodos erster mutiger Augenblick: Er läuft nicht weg.",
      "Die Klinge, die den Hexenkönig zerstört, liegt seit fast zweitausend Jahren in diesem Hügel."
    ]
  },
  {
    id: "bree",
    mark: [32, 3],
    icon: "town",
    group: "eriador",
    source: "Herr der Ringe",
    title: "Wo Menschen und Hobbits noch nebeneinander wohnen",
    region: "Eriador",
    kind: "Dorf an der Kreuzung",
    location: "Am Fuss des Breeberges, wo die Ost-West-Strasse die Grünstrasse kreuzt",
    otherNames: "Bree-land für die vier Dörfer, Staddel, Combe und Archet dazu",
    builtBy: "Männer, lange vor Arnor; Bree ist älter als jedes Königreich hier",
    heldBy: "Sich selbst, mit einem Wachmann am Tor",
    age: "Besiedelt schon im Zweiten Zeitalter und nie aufgegeben",
    bio: "Der einzige Ort in Mittelerde, an dem Grosse und Kleine im selben Dorf leben, im selben Wirtshaus trinken und dieselbe Sprache sprechen. Bree überdauert Arnor, Angmar und alles, was dazwischen kommt, indem es sich um nichts kümmert. Für Frodo ist es die erste fremde Welt; für Aragorn ein Ort, wo er sitzen und zuhören kann.",
    appearance: "Ein Graben und eine Hecke um den Berg, Häuser gegen den Hang gebaut, und das Wirtshaus Zum Tänzelnden Pony mit zwei Flügeln, einem für gewöhnliche Gäste und einem mit niedrigen Türen.",
    fate: "Übersteht auch den Ringkrieg, mit Verlusten: Räuber aus dem Süden fallen ein, es gibt Tote auf beiden Seiten. Unter König Elessar wird die Nordstrasse wieder sicher, und Bree wird wohlhabend.",
    events: [
      "Gandalf trifft hier Thorin Eichenschild und bringt ihn auf Beutelsend",
      "Frodo singt auf dem Tisch, fällt herunter und steckt den Ring an",
      "Streicher gibt sich im Salon zu erkennen und legt Gandalfs Brief vor",
      "Die Nazgûl stechen in der Nacht in leere Betten",
      "Die Ponys sind fort; Butterblume kauft Bill dem Ferkelbauern ab"
    ],
    bookFilm: "Im Buch hat Butterblume Gandalfs Brief drei Monate lang nicht abgeschickt — Frodo erfährt erst in Bree, dass Streicher ein Freund ist, und aus dem Brief, nicht aus Not. Der Film streicht den Brief und macht Aragorn zur bedrohlichen Gestalt, die die Hobbits gegen ihren Willen mitnimmt. Der Film erfindet ausserdem, dass die Nazgûl direkt vor den Hobbits ins Zimmer eindringen; im Buch sieht niemand den Überfall, man findet am Morgen nur die zerhauenen Betten.",
    notes: [
      "Der Name Unterberg, den Frodo hier benutzt, ist in Bree ein gewöhnlicher Familienname.",
      "Bill das Pony überlebt Moria, kehrt allein nach Bree zurück und wartet bei Butterblume auf Sam."
    ]
  },
  {
    id: "weathertop",
    mark: [18, -4],
    icon: "ruin",
    group: "eriador",
    source: "Herr der Ringe",
    title: "Der geköpfte Wachtturm des Nordens",
    region: "Eriador",
    kind: "Ruine auf einem Hügel",
    location: "Auf halbem Weg zwischen Bree und der Letzten Brücke, südlich der Strasse",
    otherNames: "Amon Sûl, der Windberg; die Wetterberge für den Höhenzug",
    builtBy: "Elendil, kurz nach der Gründung von Arnor",
    heldBy: "Niemand seit 1409 D.Z.",
    age: "Erbaut im Zweiten Zeitalter, niedergebrannt 1409 D.Z.",
    bio: "Nicht irgendein Turm, sondern der wichtigste des Nordreichs: hier stand der Haupt-Palantír des Nordens, und als Arnor in drei Reiche zerfiel, stritten sich alle drei um diesen einen Hügel. Angmar brannte ihn nieder. Übrig ist ein Kranz aus umgestürzten Steinen auf einer kahlen Kuppe, und ein Feuerplatz, an dem kurz vorher jemand gekämpft hat.",
    appearance: "Ein steiler, kahler Kegel mit einem Ring aus geborstenem Mauerwerk obenauf. Vom Gipfel sieht man die Strasse nach beiden Seiten, was der Sinn der Sache war — und was Feinde ebenso wissen.",
    fate: "Bleibt eine Ruine. Der Palantír von Amon Sûl geht mit Arvedui im Eis der Eisbucht von Forochel unter.",
    events: [
      "Elendil erwartet hier die Ankunft Gil-galads, sagt die Überlieferung",
      "Angmar nimmt und zerstört den Turm 1409 D.Z.",
      "Gandalf kämpft hier bei Nacht gegen mehrere Nazgûl und entkommt nach Norden",
      "Fünf Reiter greifen die Hobbits in der Senke unterhalb des Gipfels an",
      "Frodo wird von der Morgulklinge getroffen, die in der Wunde zerfällt"
    ],
    bookFilm: "Der Film lässt den Überfall oben in der Ruine stattfinden und Frodo hilflos mit dem Ring hantieren. Im Buch liegt das Lager in einer Senke unterhalb des Gipfels, und Frodo tut das Gegenteil von hilflos: Er ruft »O Elbereth! Gilthoniel!« und sticht dem Hexenkönig nach dem Fuss — der einzige Grund, warum der Stich ihn nicht sofort tötet. Der Film streicht ausserdem Gandalfs eigenes Gefecht auf diesem Gipfel wenige Tage zuvor, das die Hobbits an den Brandspuren ablesen.",
    notes: [
      "Aragorn gibt den Hobbits hier die Namen aus alten Liedern weiter, während sie warten.",
      "Die Splitter der Morgulklinge wandern siebzehn Tage lang auf Frodos Herz zu."
    ]
  },
  {
    id: "rivendell",
    mark: [-4, 19],
    icon: "refuge",
    group: "eriador",
    source: "Herr der Ringe",
    title: "Das Letzte Heimelige Haus östlich des Meeres",
    region: "Eriador",
    kind: "Zuflucht in einer Schlucht",
    location: "In einer verborgenen Schlucht des Bruinen, am Westfuss des Nebelgebirges",
    otherNames: "Imladris auf Sindarin, »Klufttal«; Karningul auf Westron",
    builtBy: "Elrond",
    heldBy: "Elrond Halbelb",
    age: "Gegründet 1697 Z.Z., als Eregion fiel; verlassen im Vierten Zeitalter",
    bio: "Kein Palast, sondern ein Versteck, das als Festung im Krieg gegen Sauron begann und dreitausend Jahre lang ein Archiv, ein Lazarett und ein Ruhehaus blieb. Hier wird der Ring zum ersten Mal vor Zeugen aus mehreren Völkern auf einen Tisch gelegt, und hier entscheidet ausgerechnet der Kleinste, dass er ihn trägt.",
    appearance: "Häuser mit Säulengängen an den Hang gebaut, Wasserfälle zu beiden Seiten, ein Feuer in der Halle und mehr Bücher als Waffen.",
    fate: "Hält bis zuletzt und überdauert den Krieg unbeschädigt. Elrond fährt 3021 D.Z. über das Meer, Bruchtal leert sich langsam, und Elronds Söhne bleiben noch eine Weile.",
    events: [
      "Gegründet als Zuflucht, nachdem Sauron Eregion vernichtet hat",
      "Die Furt des Bruinen ertränkt die Neun; Elrond befiehlt dem Fluss, Gandalf gibt ihm die Pferdegestalt",
      "Elrond schneidet die Splitter der Morgulklinge aus Frodos Schulter",
      "Der Rat von Elrond, wo der Ring zum ersten Mal offen besprochen wird",
      "Narsil wird neu geschmiedet und heisst Andúril",
      "Die Gemeinschaft bricht am 25. Dezember 3018 D.Z. zu neunt auf"
    ],
    bookFilm: "Ein Unterschied stiftet mehr Verwirrung als jeder andere: Im Buch wird Narsil hier in Bruchtal neu geschmiedet, und Aragorn zieht mit Andúril los. Im Film bleiben die Scherben auf ihrem Sockel liegen, und Elrond bringt das fertige Schwert erst in Dunharg nach Rohan. Wer Buch und Film mischt, bekommt zwangsläufig eine falsche Geschichte. Ausserdem: Im Buch ruft Frodo die Furt selbst gegen die Reiter an und fällt erst danach; im Film reitet Arwen mit ihm und beschwört den Fluss — Glorfindel, der diese Rolle im Buch hat, kommt gar nicht vor.",
    notes: [
      "Bilbo lebt hier siebzehn Jahre, schreibt und schläft in Ratsversammlungen ein.",
      "Vier der Neun sind keine Krieger: ein Hobbit-Gärtner und zwei Vettern gehen mit, weil sie darauf bestehen."
    ]
  },
  {
    id: "eregion",
    mark: [1, -18],
    icon: "ruin",
    group: "eriador",
    source: "Herr der Ringe",
    title: "Wo die Ringe der Macht gemacht wurden",
    region: "Eriador",
    kind: "Verlassenes Land",
    location: "Westlich des Nebelgebirges, unter Caradhras, zwischen Kiesel und Bruinen",
    otherNames: "Hollin auf Westron, nach den Stechpalmen; Eregion auf Sindarin",
    builtBy: "Celebrimbor und die Schmiede von Ost-in-Edhil",
    heldBy: "Niemand seit 1697 Z.Z.",
    age: "Gegründet 750 Z.Z., vernichtet 1697 Z.Z.",
    bio: "Das Land der grössten Handwerker, die Mittelerde je hatte, und der grössten Fehlentscheidung. Hier schmiedete Celebrimbor die Ringe der Macht — die Sieben und die Neun mit Saurons Rat und Anleitung, die Drei allein und ohne seine Hand darauf. Sauron vernichtete Eregion, als Celebrimbor sich weigerte, die Drei herauszugeben.",
    appearance: "Grasland mit Stechpalmen und alten Steinen unter der Grasnarbe. Sam merkt an, dass hier einmal Elben gewohnt haben und die Erde es noch weiss.",
    nature: "Nichts Böses, nur leer. Ein Land, das seit fünftausend Jahren still ist, mit der besten Strasse der Gegend darunter.",
    fate: "Bleibt leer. Die Gemeinschaft zieht ohne Aufenthalt hindurch, und die Krähen über ihr sind Sarumans.",
    events: [
      "Celebrimbor schmiedet die Ringe der Macht; die Drei zuletzt und allein",
      "Sauron schmiedet den Einen heimlich im Orodruin und verrät sich, als er ihn aufsetzt",
      "Sauron verwüstet Eregion 1697 Z.Z. und tötet Celebrimbor",
      "Die Gemeinschaft rastet hier, und Crebain aus Dunland überfliegen sie"
    ],
    bookFilm: "Im Film taucht Eregion nicht als Ort auf; die Ringe entstehen im Prolog ohne Ortsangabe. Die eine Sache, die man dabei nicht durcheinanderbringen darf: Der Eine Ring wurde nicht hier gemacht. Celebrimbor schmiedete hier die Drei, Sauron den Einen im Schicksalsberg — das ist der Grund, warum er auch nur dort zerstört werden kann.",
    notes: [
      "Die Drei sind nie von Saurons Hand berührt worden, und genau deshalb sind sie nicht verdorben.",
      "Das Westtor von Moria stammt aus der Zeit, als Eregion und Khazad-dûm Freunde waren; Narvi baute es, Celebrimbor zeichnete es."
    ]
  },
  {
    id: "caradhras",
    mark: [15, -12],
    icon: "mountain",
    group: "eriador",
    source: "Herr der Ringe",
    title: "Der Grausame",
    region: "Nebelgebirge",
    kind: "Berg und Pass",
    location: "Der südlichste der drei Berge über Moria, mit dem Rothornpass an der Flanke",
    otherNames: "Barazinbar auf Khuzdul, Caradhras auf Sindarin, der Rothornpass für den Weg",
    heldBy: "Sich selbst",
    age: "Älter als jede Erinnerung",
    bio: "Der Pass, den die Gemeinschaft nehmen wollte und nicht bekam. Ein Schneesturm aus heiterem Himmel treibt sie zurück, und keiner an dem Abend sagt sicher, woher er kam. Der Umweg führt sie nach Moria, und dort verlieren sie Gandalf — die ganze zweite Hälfte der Reise hängt an diesem einen Berg.",
    appearance: "Ein roter Gipfel über Schneefeldern, der Pass eine schmale Rinne an der Flanke, die in der Nacht zugeweht wird.",
    nature: "Gimli sagt, Caradhras werde der Grausame genannt und habe einen üblen Ruf, lange bevor Sauron etwas galt. Ob der Sturm vom Berg kommt oder von jemandem geschickt ist, klärt das Buch nie — und lässt es absichtlich offen.",
    fate: "Unverändert. Der Berg gewinnt und bleibt.",
    events: [
      "Die Gemeinschaft steigt bei klarem Wetter auf und wird nachts eingeschneit",
      "Boromir und Aragorn brechen eine Bahn durch den Schnee; Boromir trägt die Hobbits",
      "Die Gemeinschaft kehrt um und nimmt statt dessen den Weg unter dem Berg"
    ],
    bookFilm: "Der Film erklärt den Sturm: Saruman steht auf Orthanc und singt ihn herbei, und Gandalf ruft dagegen an. Das Buch weigert sich, die Frage zu beantworten — Gimli sagt, der Berg selbst sei bösartig, Gandalf lässt es dahingestellt, und niemand entscheidet. Die Ungewissheit ist Absicht; der Film nimmt sie weg.",
    notes: [
      "Die drei Berge über Moria heissen Caradhras, Celebdil und Fanuidhol — rot, silbern und grau.",
      "Auf Celebdil, dem Nachbarn, endet Gandalfs Kampf mit dem Balrog."
    ]
  },
  {
    id: "moria",
    mark: [-16, 13],
    icon: "delving",
    group: "eriador",
    source: "Herr der Ringe",
    title: "Der Zwergenbau, der grösste Bau der Zwerge",
    region: "Nebelgebirge",
    kind: "Unterirdisches Königreich",
    location: "Unter dem Nebelgebirge, Westtor bei Hollin, Osttor über dem Zwielichtigen See",
    otherNames: "Khazad-dûm auf Khuzdul, Hadhodrond und Casarrondo bei den Elben; Moria heisst »Schwarze Kluft« und ist als Beleidigung gemeint",
    builtBy: "Durin der Unsterbliche und seine Erben",
    heldBy: "Orks; Azogs Brut, unter dem Balrog",
    age: "Gegründet vor dem Ersten Zeitalter, aufgegeben 1981 D.Z.",
    bio: "Ein Königreich in einem Berg, das älter ist als jedes Reich der Elben in Mittelerde und einmal der reichste Ort der Welt war, weil nur hier Mithril gefunden wurde. Die Zwerge gruben zu tief und weckten etwas, das aus dem Ersten Zeitalter übriggeblieben war. Der Name Moria ist elbisch und heisst Schwarze Kluft; die Zwerge selbst nannten es nie so.",
    appearance: "Hallen mit Säulen aus schwarzem Stein, die im Fackelschein kein Ende zeigen; Treppen ohne Geländer, ein Schacht, in den man einen Stein wirft und lange nichts hört, und eine Brücke von fünfzig Fuss ohne Brüstung.",
    nature: "Dunkel, das älter ist als die Zwerge. Gandalf sagt, in den Tiefen nagen namenlose Dinge, von denen Sauron nichts weiss.",
    fate: "Balins Versuch der Rückbesiedlung endet nach fünf Jahren mit dem letzten Eintrag im Buch von Mazarbul. Erst im Vierten Zeitalter kehren die Zwerge unter Durin VII. zurück.",
    events: [
      "Durin erwacht und gründet Khazad-dûm, lange vor dem Ersten Zeitalter",
      "Die Zwerge graben nach Mithril und wecken 1980 D.Z. Durins Fluch",
      "Balin zieht 2989 D.Z. aus und wird fünf Jahre später am Spiegelsee erschossen",
      "Die Gemeinschaft löst das Westtor mit dem Wort mellon",
      "Gandalf stürzt mit dem Balrog von der Brücke von Khazad-dûm",
      "Der Kampf endet auf dem Gipfel des Celebdil; Gandalf stirbt und wird zurückgeschickt"
    ],
    bookFilm: "Der Film erfindet die einstürzende Treppe über dem Abgrund und macht aus dem Höhlentroll ein Bravourstück; im Buch ist es ein Fuss, der durch eine Tür kommt. Wichtiger ist eine Frage, die der Film beantwortet und das Buch nicht: ob der Balrog Flügel hat. Tolkiens Text ist an dieser Stelle absichtlich mehrdeutig — Schatten, die sich wie Flügel ausbreiten — und der Film entscheidet sich. Wer es als Tatsache behauptet, behauptet mehr, als dasteht.",
    notes: [
      "Ein Mithrilhemd aus Moria liegt in Bilbos Gepäck und rettet Frodo unter Tag.",
      "Das Westtor öffnet sich auf ein Wort, das die Elben für so selbstverständlich hielten, dass sie es hinschrieben.",
      "Gimlis Vater Glóin war mit Thorin hier vorbeigekommen; Gimli sieht Balins Grab als Erster."
    ]
  },
  {
    id: "lorien",
    mark: [8, -20],
    icon: "wood",
    group: "eriador",
    source: "Herr der Ringe",
    title: "Der Goldene Wald",
    region: "Rhovanion",
    kind: "Waldreich",
    location: "Zwischen Nebelgebirge und Anduin, wo Silberlauf und Anduin zusammenkommen",
    otherNames: "Lórien, Lothlórien »Traumblume«, der Goldene Wald; Dwimordene bei den Rohirrim, was Gespenstertal heisst; Laurelindórenan in Baumbarts altem Wort",
    builtBy: "Niemand; die Elben bauen hier in die Bäume statt auf den Boden",
    heldBy: "Galadriel und Celeborn",
    age: "Besiedelt seit dem Zweiten Zeitalter, verlassen im Vierten",
    bio: "Das letzte Reich, in dem noch etwas vom Ersten Zeitalter zu sehen ist, gehalten von Nenya, einem der Drei. Hier wachsen die Mallornbäume, deren Blätter im Herbst golden werden und erst im Frühling fallen. Die Rohirrim halten den Wald für verhext und reiten aussen herum.",
    appearance: "Graue Stämme, goldene Blätter, Treppen um die Bäume hinauf zu Plattformen ohne Geländer. Auf dem Cerin Amroth blühen Elanor und Niphredil.",
    nature: "Nicht unheimlich, sondern unverbraucht: ein Ort, an dem nichts fault und nichts altert. Boromir traut ihm nicht, Gimli geht als Feind hinein und kommt als Galadriels Anhänger heraus.",
    fate: "Wird während des Krieges dreimal von Dol Guldur angegriffen und hält. Danach zieht Galadriel über das Meer, Celeborn geht nach Ost-Lórien und später nach Bruchtal, und der Wald leert sich.",
    events: [
      "Die Gemeinschaft kommt aus Moria, und Frodo trägt Gandalfs Tod hierher",
      "Galadriels Spiegel zeigt Sam das Auenland unter Sarumans Hand",
      "Frodo bietet Galadriel den Ring an, und sie lehnt ab",
      "Die Gemeinschaft bekommt Boote, Lembas, Mäntel und Geschenke",
      "Dreimal greift Dol Guldur an, dreimal hält der Wald"
    ],
    bookFilm: "Zwei Dinge gehen im Film schief. Erstens vergeht in Lórien die Zeit nicht anders — Legolas erklärt ausdrücklich, dass sie gleich schnell läuft und die Elben nur die Jahre nicht zählen; die Gemeinschaft hat bloss die Übersicht verloren. Der Eindruck, dort stehe die Zeit still, ist Sams Eindruck, nicht der Befund. Zweitens regiert Celeborn mitregierend; der Film lässt ihn fast stumm neben Galadriel stehen und macht aus einem Fürstenpaar eine Einzelherrscherin.",
    notes: [
      "Gimli bittet um ein einziges Haar Galadriels und bekommt drei.",
      "Der Mallornbaum, den Sam später in Hobbingen pflanzt, ist der einzige westlich des Gebirges.",
      "Aragorn und Arwen verloben sich auf dem Cerin Amroth; Arwen stirbt dort viele Jahre später."
    ]
  },
  {
    id: "gladdenfields",
    mark: [0, -18],
    icon: "springs",
    group: "eriador",
    source: "Herr der Ringe",
    title: "Wo der Ring zweimal den Besitzer wechselte",
    region: "Rhovanion",
    kind: "Sumpfland an einer Flussmündung",
    location: "Wo der Ireborn in den Anduin mündet, östlich des Nebelgebirges",
    otherNames: "Loeg Ningloron auf Sindarin, »Teiche der goldenen Wasserblumen«",
    heldBy: "Niemand",
    age: "Die Katastrophe fällt auf das Jahr 2 des Dritten Zeitalters",
    bio: "Der Ort, an dem die ganze Geschichte anfängt. Zwei Jahre nach Saurons Sturz wird Isildur hier mit seiner Leibwache von Orks überfallen; er zieht den Ring an, geht in den Fluss, und der Ring rutscht ihm vom Finger. Zweieinhalbtausend Jahre später zieht ein Hobbit namens Déagol ihn beim Fischen aus dem Schlamm, und sein Vetter Sméagol erwürgt ihn dafür noch am selben Tag.",
    appearance: "Weite Schilfflächen und Teiche voller Schwertlilien, ohne festen Boden und ohne Weg.",
    fate: "Bleibt, was es ist. Der Ring hat es zweimal verlassen und kehrt nie zurück.",
    events: [
      "Isildur nimmt den Ring aus Saurons Hand und weigert sich, ihn zu vernichten",
      "Die Katastrophe an den Schwertelfeldern: Isildur und drei seiner Söhne fallen",
      "Der Ring verlässt Isildurs Finger im Wasser und liegt 2461 Jahre im Grund",
      "Déagol findet ihn beim Fischen an Sméagols Geburtstag",
      "Sméagol tötet Déagol und nennt den Ring sein Geburtstagsgeschenk"
    ],
    bookFilm: "Der Film zeigt beides im Prolog und erzählt es im Kern richtig. Er lässt allerdings offen, dass zwischen Isildurs Tod und Déagols Fund fast zweieinhalbtausend Jahre liegen, und macht aus Isildurs Untergang einen Hinterhalt ohne Namen — dass es sich um eine benannte Katastrophe handelt, bei der ein König und drei Prinzen fallen, kommt nicht vor.",
    notes: [
      "Isildurs Rüstzeug wird nie gefunden; nur der Elendilmir kommt viel später in Sarumans Kammern in Orthanc zum Vorschein.",
      "Sméagol ist an dem Tag noch ein Hobbit-artiges Wesen mit Namen, Familie und Geburtstag."
    ]
  }
] satisfies PlaceLore[];
