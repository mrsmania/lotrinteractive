import type { CharacterText } from "../types";

/**
 * English (UK) text, keyed by character id. Anything missing here falls back
 * to the German field on the character, which is why every field is optional.
 */
export const EN: Record<string, Partial<CharacterText>> = {
  frodo: {
    name: "Frodo Baggins",
    title: "The Ring-bearer",
    allegiance: "Free Peoples",
    weapon: "Sting and the mithril shirt",
    actor: "Elijah Wood",
    source: "The Lord of the Rings",
    bio: "Bilbo's heir and bearer of the One Ring. At the Council of Elrond he takes up a burden no army and no king can carry, and walks east on the one road that offers no hope.",
    fate: "He reaches Mount Doom, but at the last claims the Ring for himself. Years later he sails from the Grey Havens into the West.",
    lifespan: "born 2968 T.A., leaves Middle-earth in 3021",
    otherNames: "Mr Underhill as a cover name in Bree, the Nine-fingered, Iorhael in Sindarin",
    descent: "Son of Drogo Baggins and Primula Brandybuck, both drowned in the Brandywine in 2980. Adopted as heir by Bilbo in 3001.",
    appearance: "A little over four feet, dark curling hair, fairer skin than most hobbits, a bright and increasingly weary look.",
    nature: "A scholar rather than an adventurer, gifted with languages, quiet. Under the weight of the Ring he grows hard on himself and gentle towards Gollum.",
    bookFilm: "In the book Frodo is fifty when he sets out and waits seventeen years after Bilbo's party. The film compresses this into a few weeks and a young Frodo.",
    deeds: [
      "Orphaned in 2980 when his parents drown, and raised at Brandy Hall",
      "Taken in by Bilbo at Bag End in 2989",
      "Inherits house and Ring on 22 September 3001",
      "Leaves the Shire on 23 September 3018 with Sam, Merry and Pippin",
      "Struck on Weathertop by a Morgul blade",
      "Takes up the burden at the Council of Elrond on 25 October 3018",
      "Parts from the Company at Amon Hen on 26 February 3019",
      "Accepts Gollum as a guide and crosses the Dead Marshes",
      "Is taken prisoner in Cirith Ungol and freed by Sam",
      "Claims the Ring for himself in the Sammath Naur on 25 March 3019"
    ],
    notes: [
      "His Elvish name Iorhael means old-wise, Sam's Perhael means half-wise.",
      "The Weathertop wound aches every year afterwards on 13 October.",
      "Bilbo and Frodo share a birthday, the 22nd of September.",
      "In the Red Book he writes the tale himself and leaves the last pages for Sam."
    ]
  },
  sam: {
    name: "Samwise Gamgee",
    title: "The faithful gardener",
    allegiance: "Free Peoples",
    weapon: "A short sword, rope and a frying pan",
    actor: "Sean Astin",
    source: "The Lord of the Rings",
    bio: "A gardener at Bag End who falls into the story through an open window and then carries it. He cooks, packs, comforts, and in the end carries Frodo up the mountain.",
    fate: "He returns home, marries Rosie and is elected Mayor of the Shire seven times.",
    lifespan: "born 2980 T.A.",
    otherNames: "Perhael in Sindarin, later Samwise the Stouthearted, Mayor of Michel Delving",
    descent: "Son of Hamfast Gamgee, the Gaffer, gardener at Bag End for two generations.",
    appearance: "Stocky, round-faced, sandy curls, broad gardener's hands, always carrying more than his share.",
    nature: "Loyal to the point of stubbornness, practical, and secretly a poet. His weakness is suspicion, his strength a refusal to stop.",
    bookFilm: "In the book Sam, as Ring-bearer, resists a vision of a garden covering all Middle-earth. The film leaves that trial out.",
    deeds: [
      "Caught listening at the window of Bag End and sentenced to go along",
      "Sees the ruined Shire in Galadriel's Mirror",
      "Unties the boats of Lórien and forces Frodo to take him",
      "Drives off Shelob with Sting and the Phial of Galadriel",
      "Bears the Ring for two days and gives it back freely",
      "Storms the tower of Cirith Ungol alone",
      "Carries Frodo up the last slope of Orodruin",
      "Replants the Shire after the war with Galadriel's soil"
    ],
    notes: [
      "His song in the tower of Cirith Ungol tells Frodo that help is near.",
      "Tradition says that after Rosie's death he sails as the last of the Ring-bearers."
    ]
  },
  merry: {
    name: "Meriadoc Brandybuck",
    title: "Knight of the Mark",
    allegiance: "Free Peoples",
    weapon: "A dagger from the Barrow-downs",
    actor: "Dominic Monaghan",
    source: "The Lord of the Rings",
    bio: "The best planner among the young hobbits. In Rohan he swears service to Théoden and rides secretly to battle with Éowyn.",
    fate: "His blade breaks the spell of the Witch-king. Later he becomes Master of Buckland.",
    lifespan: "born 2982 T.A.",
    otherNames: "Meriadoc the Magnificent, Holdwine of the Mark, Master of Buckland",
    descent: "Son of Saradoc Brandybuck, Master of Buckland, and Esmeralda Took.",
    appearance: "Sturdy for a hobbit, brown-haired, watchful, usually the best prepared of the four.",
    nature: "The planner and map-reader. Curious about languages and herbs, level-headed in danger, easily hurt by being left out.",
    bookFilm: "In the book Merry knows about the Ring long before Frodo admits anything and runs the conspiracy. The film has him stumble into it.",
    deeds: [
      "Runs the conspiracy that already knows Frodo's plan",
      "Leads the hobbits through the Old Forest and is swallowed by Old Man Willow",
      "Rescued from a barrow and takes a Númenórean blade from it",
      "Carried off by Uruk-hai with Pippin and escapes into Fangorn",
      "Rouses the Ents with Pippin and sees Isengard fall",
      "Swears service to Théoden at Edoras as his esquire",
      "Rides hidden with Éowyn to the Pelennor",
      "Stabs the Witch-king behind the knee and breaks his spell",
      "Fights in the front rank at the Scouring of the Shire"
    ],
    notes: [
      "His barrow-blade was forged against Angmar and crumbles after the blow.",
      "Holdwine is Rohirric for faithful friend.",
      "He writes on herbs, pipe-weed and the reckoning of years in the Shire.",
      "He and Pippin are laid to rest in Rohan, beside Éomer."
    ]
  },
  pippin: {
    name: "Peregrin Took",
    title: "Guard of the Citadel",
    allegiance: "Free Peoples",
    weapon: "A sword from the Barrow-downs",
    actor: "Billy Boyd",
    source: "The Lord of the Rings",
    bio: "The youngest of the four hobbits, curious to the point of folly. His look into the palantír tells Sauron a great deal and at the same time saves Faramir's life.",
    fate: "He becomes a Guard of the Citadel of Minas Tirith and later Thain of the Shire.",
    lifespan: "born 2990 T.A.",
    otherNames: "Peregrin I, Thain of the Shire, Guard of the Citadel",
    descent: "Son of Paladin Took II and heir to the Thainship, which makes him a small lord by birth.",
    appearance: "The youngest and slightest of the four, fair-haired, open-faced, unusually tall after the war.",
    nature: "Forward, inquisitive, quick-witted when it matters. His recklessness does damage and saves lives in equal measure.",
    bookFilm: "In the book he is twenty-eight and still a minor by hobbit reckoning. His song before Denethor is the film's invention.",
    deeds: [
      "Joins the conspiracy although he is the youngest",
      "Drops a stone down the well in Moria and wakes the drums",
      "Carried off with Merry and drops his brooch as a sign",
      "Looks into the palantír of Orthanc and is seen by Sauron",
      "Rides to Minas Tirith with Gandalf on Shadowfax",
      "Enters Denethor's service and becomes a Guard of the Citadel",
      "Fetches Gandalf when Denethor prepares to burn Faramir",
      "Kills a hill-troll before the Black Gate and is buried beneath it"
    ],
    notes: [
      "He and Merry grow into the tallest hobbits on record, thanks to the ent-draughts.",
      "The palantír is Sauron's greatest error: he takes Pippin for the Ring-bearer held in Isengard.",
      "As Thain he becomes one of the three most powerful hobbits in the Shire."
    ]
  },
  bilbo: {
    name: "Bilbo Baggins",
    title: "The finder of the Ring",
    allegiance: "Free Peoples",
    weapon: "Sting",
    actor: "Ian Holm and Martin Freeman",
    source: "The Hobbit, The Lord of the Rings",
    bio: "He found the Ring in the deep places under the Misty Mountains and carried it for sixty years like an heirloom. His book about the road to Erebor begins everything.",
    fate: "He leaves the Shire on his eleventy-first birthday, lives in Rivendell and sails West with Frodo.",
    lifespan: "2890 to after 3021 T.A., 131 years in Middle-earth",
    otherNames: "The Burglar, Barrel-rider, Riddle-maker, Elf-friend, Luckwearer",
    descent: "Son of Bungo Baggins and Belladonna Took. The two halves of his family pull him in opposite directions all his life.",
    appearance: "Small and round, oddly unchanged by age until the Ring lets go of him and all the years arrive at once.",
    nature: "Hospitable, a hoarder of small things, vain about his verses. The only bearer to give up the Ring of his own accord, though only after Gandalf's anger.",
    bookFilm: "The 1937 edition of The Hobbit tells the finding of the Ring far more amiably, with Gollum offering it as a prize. Tolkien rewrote the chapter in 1951.",
    deeds: [
      "Pulled out of his comfort in 2941 by Gandalf and thirteen dwarves",
      "Gets the company out of the Elvenking's cells in barrels",
      "Speaks with a dragon and survives, the first mortal to do so in an age",
      "Steals the Arkenstone and gives it to the enemy to prevent a war",
      "Sleeps through most of the Battle of Five Armies",
      "Holds his party in 3001 at the age of 111 and vanishes before the guests",
      "Becomes the first ever to give up the Ring willingly",
      "Lives twenty years in Rivendell translating Elvish books",
      "Gives Frodo Sting and the mithril shirt"
    ],
    notes: [
      "His book is called There and Back Again, and it is Frodo's only source for Erebor.",
      "He is the first hobbit to compose an Elvish lay, the song of Eärendil.",
      "At the Council he seriously offers to finish the task himself.",
      "When he shows Frodo the mithril shirt he does not know it is worth more than the Shire."
    ]
  },
  rosie: {
    name: "Rosie Cotton",
    title: "Of the Green Dragon",
    allegiance: "Free Peoples",
    weapon: "An ale mug",
    actor: "Sarah McLeod",
    source: "The Lord of the Rings",
    bio: "She stays in the Shire while the world outside burns, and she is the reason Sam wants to come back at all.",
    fate: "She marries Sam and has thirteen children.",
    lifespan: "born 2984 T.A.",
    otherNames: "Rose Gamgee, born Cotton",
    descent: "Daughter of farmer Tolman Cotton of Bywater.",
    appearance: "Auburn hair, strong, used to work.",
    nature: "Plain-spoken and quick with an answer, with little patience for long journeys and a great deal for punctuality.",
    bookFilm: "In the book she and Sam have thirteen children; the film leaves her a brief background figure.",
    deeds: [
      "Keeps the farm at Bywater with her father while the four are away",
      "Greets Sam on his return by telling him he is a year late",
      "Marries Sam in the spring of 3020 and moves into Bag End"
    ],
    notes: [
      "Elanor is named for the golden flower of Lothlórien.",
      "Several of the thirteen children carry names from Gondor and Rohan.",
      "She dies in the year 61 of the Fourth Age, and Sam leaves the Shire afterwards."
    ]
  },
  gandalf: {
    name: "Gandalf",
    title: "Mithrandir, the Grey and the White",
    allegiance: "Free Peoples",
    weapon: "Glamdring, his staff and Narya",
    actor: "Ian McKellen",
    source: "The Hobbit, The Lord of the Rings",
    bio: "A Maia in the shape of an old man, walking Middle-earth for two thousand years. He assembles the Company and holds it together.",
    fate: "He falls with the Balrog into the deep, returns as Gandalf the White and leads the defence of Minas Tirith.",
    lifespan: "arrives about 1000 T.A., sails West in 3021",
    otherNames: "Mithrandir among the Elves, Tharkûn among the Dwarves, Incánus in the South, Olórin in Valinor, Greyhame, Stormcrow",
    descent: "A Maia of the household of Nienna and Manwë, sent over the Sea with the Istari about the year 1000 of the Third Age.",
    appearance: "An old man with a long grey beard, pointed hat, staff and bristling brows; as the White he is hard to look at directly.",
    nature: "Impatient, dry, deeply compassionate. He refuses the Ring because he knows he would take it out of pity, and out of pity do dreadful things.",
    bookFilm: "In the book the fall in Moria and the fight on Zirakzigil are reported in a few sentences. The film shows them.",
    deeds: [
      "Comes over the Sea about 1000 T.A. as one of five Istari",
      "Receives Narya, the Ring of Fire, from Círdan",
      "Enters Dol Guldur in 2850 and knows the Necromancer for Sauron",
      "Brings Thorin and Bilbo together in 2941 and so brings down Smaug",
      "Drives the Necromancer from Dol Guldur with the White Council",
      "Proves the nature of the Ring in the archives of Minas Tirith in 3018",
      "Escapes Saruman's prison on Orthanc by way of Gwaihir",
      "Falls with the Balrog from the Bridge of Khazad-dûm on 15 January 3019",
      "Returns as Gandalf the White after the fight on Zirakzigil",
      "Heals Théoden, parleys with Saruman and directs the defence of Minas Tirith"
    ],
    notes: [
      "Olórin was the wisest of the Maiar in Valinor and learned pity from Nienna.",
      "Shadowfax understands the speech of Men and suffers neither saddle nor bridle.",
      "His fireworks are proverbial from the Shire to Bree.",
      "He truly dies in Moria and is sent back, not healed."
    ]
  },
  saruman: {
    name: "Saruman",
    title: "The White, then of Many Colours",
    allegiance: "Isengard",
    weapon: "The staff of Orthanc and a palantír",
    actor: "Christopher Lee",
    source: "The Lord of the Rings",
    bio: "Head of the White Council and the greatest student of ring-lore. His knowledge becomes his trap: through the palantír Sauron binds him.",
    fate: "Treebeard takes Isengard from him, Gandalf breaks his staff, and he ends in the Shire at Gríma's hand.",
    lifespan: "arrives about 1000 T.A., dies in 3019",
    otherNames: "Curunír among the Elves, Sharkû among the Orcs, later Sharkey in the Shire, the White, of Many Colours",
    descent: "A Maia of the household of Aulë the Smith. First of the Istari to arrive and head of their order.",
    appearance: "Tall, dark-eyed, white-haired, with a deep voice that takes hold of any listener.",
    nature: "Orderly to the point of tyranny. He studies evil until he mistakes its methods for tools.",
    bookFilm: "The book kills him in the Shire, which the hobbits must free themselves. The film cuts the Scouring of the Shire and ends him at Isengard.",
    deeds: [
      "Arrives about 1000 T.A. as the first of the Istari",
      "Travels in the East for centuries and returns a master of ring-lore",
      "Receives Isengard from Gondor in 2759 and takes Orthanc for his seat",
      "Long delays the Council's attack on Dol Guldur because he is searching there himself",
      "Finds Sauron through the palantír and becomes his instrument",
      "Breeds the Uruk-hai and fells the trees around Isengard",
      "Takes Gandalf prisoner in 3018 and loses him to the Eagles",
      "Loses Isengard to the Ents and his staff to Gandalf",
      "Seizes the Shire as Sharkey and has trees and mills torn down"
    ],
    notes: [
      "Curunír means man of skill, Sharkû is Orkish for old man.",
      "His white robe shimmers in every colour as soon as he moves.",
      "The Voice of Saruman is a weapon in its own right, and has its own chapter.",
      "Treebeard reads the smoke over Isengard as the first sign of his treason."
    ]
  },
  radagast: {
    name: "Radagast",
    title: "The Brown, friend of beasts",
    allegiance: "Free Peoples",
    weapon: "A staff and herbs",
    actor: "Sylvester McCoy",
    source: "The Hobbit",
    bio: "The Istar who cares for birds and beasts rather than for realms. He lives at the southern edge of Mirkwood, close to the shadow of Dol Guldur.",
    fate: "He warns of the Necromancer's return and calls the Eagles when nothing else can help.",
    lifespan: "arrives with the other Istari",
    otherNames: "Aiwendil, the bird-friend, the Brown",
    descent: "A Maia of the household of Yavanna, Lady of growing things, sent with Gandalf and Saruman.",
    appearance: "Brown robes, leaves and bird droppings in his beard, never without animals about him.",
    nature: "Kind, scattered, closer to beasts than to peoples. His harmlessness is exactly what allows Saruman to use him.",
    bookFilm: "In the book he appears only indirectly and is mentioned twice. The Hobbit films build him into a full character with a sled drawn by rabbits.",
    deeds: [
      "Asked by Yavanna to guard the growing things",
      "Settles at Rhosgobel on the southern eaves of Mirkwood",
      "Sent by Saruman as a messenger to Bree, and so warns Gandalf without meaning to",
      "Sends birds and Eagles as scouts to Isengard"
    ],
    notes: [
      "He is known to Beorn, which Gandalf exploits in The Hobbit.",
      "Tolkien leaves open whether he completes his errand or forgets it in the wild."
    ]
  },
  aragorn: {
    name: "Aragorn",
    title: "Strider, Elessar, King of Gondor and Arnor",
    allegiance: "Free Peoples",
    weapon: "Andúril, the Flame of the West",
    actor: "Viggo Mortensen",
    source: "The Lord of the Rings",
    bio: "Isildur's heir, raised in Rivendell, a Ranger of the North for eighty years. He hides his claim until Gondor has need of it.",
    fate: "He walks the Paths of the Dead, wins the field of the Pelennor and is crowned as Elessar.",
    lifespan: "1 March 2931 to 1 March 120 F.A., 210 years",
    otherNames: "Strider, Estel as a child in Rivendell, Thorongil in Rohan and Gondor, Elessar the Elfstone, Telcontar, the Dúnadan",
    descent: "Son of Arathorn II and Gilraen, thirty-ninth in direct descent from Isildur. Fostered by Elrond from the age of two.",
    appearance: "Well over six feet, dark hair going grey at the temples, grey eyes, weather-beaten. Shabby as a Ranger, kingly once crowned.",
    nature: "Patient to the point of self-denial, working unseen for eighty years. A healer as much as a commander, and never free of doubt.",
    bookFilm: "In the book Aragorn pursues the crown deliberately and never doubts his right. The film turns him into a man who fears his inheritance.",
    deeds: [
      "Brought to Rivendell as Estel in 2933 after his father's death",
      "Learns his descent at twenty and receives the shards of Narsil",
      "Meets Arwen the same day and loves her from then on",
      "Serves as Thorongil in Rohan and Gondor, and against the corsairs of Umbar",
      "Captures Gollum in the Dead Marshes in 3017 and delivers him to Thranduil",
      "Leads the hobbits from Bree over Weathertop to Rivendell",
      "Takes command of the Company after Gandalf's fall",
      "Fights for Rohan at Helm's Deep and before Fangorn",
      "Challenges Sauron openly in the palantír of Orthanc",
      "Walks the Paths of the Dead and frees Pelargir with the Oathbreakers",
      "Heals Faramir, Éowyn and Merry in the Houses of Healing",
      "Marches on the Black Gate as bait and is crowned on 1 May 3019"
    ],
    notes: [
      "The rulers he serves unrecognised are Thengel of Rohan and Ecthelion of Gondor.",
      "Estel means hope, Thorongil eagle of the star, Elessar elfstone.",
      "He reigns 122 years and lays down his life of his own will, in the Númenórean manner.",
      "His healing is taken in Gondor as proof of kingship: the hands of the king are the hands of a healer.",
      "Elrond demands that he be king of both realms before the marriage, and nothing less.",
      "He is eighty-seven when he meets the hobbits in Bree, and counted a young man."
    ]
  },
  legolas: {
    name: "Legolas",
    title: "Prince of the Woodland Realm",
    allegiance: "Free Peoples",
    weapon: "A bow and two white knives",
    actor: "Orlando Bloom",
    source: "The Lord of the Rings",
    bio: "Son of Thranduil, sent to Rivendell as his father's messenger and kept there as one of the Nine. His eyes reach further than anyone else's.",
    fate: "The old enmity with the Dwarves turns into friendship with Gimli. In the end the two sail West together.",
    lifespan: "age unknown, at least several centuries",
    otherNames: "Greenleaf, Legolas Thranduilion",
    descent: "Son of Thranduil, prince of the Woodland Realm, of the Sindar who rule over the Silvan Elves.",
    appearance: "Slender, fair-haired, tireless. He walks on fresh snow without sinking and can count riders five miles off.",
    nature: "Light-hearted and curious, with an ease that unsettles mortals. After the Sea that lightness leaves him.",
    bookFilm: "The film gives him a great many acrobatics and a part in The Hobbit, where the book does not mention him at all.",
    deeds: [
      "Brings the Council of Elrond word that Gollum has escaped the Wood-elves",
      "Shoots a winged steed of the Nazgûl out of the night sky above Anduin",
      "Counts the slain at Helm's Deep with Gimli and loses by one",
      "Rides the Paths of the Dead with Aragorn and Gimli",
      "Sees the Sea for the first time at Pelargir and is seized by longing",
      "Founds an Elvish settlement in Ithilien after the war"
    ],
    notes: [
      "He sleeps with his eyes open.",
      "His Lórien bow, a gift of Galadriel, outranges the one he brought from home.",
      "After Aragorn's death he builds a ship and sails West with Gimli."
    ]
  },
  gimli: {
    name: "Gimli",
    title: "Son of Glóin, Lord of the Glittering Caves",
    allegiance: "Free Peoples",
    weapon: "A battle axe",
    actor: "John Rhys-Davies",
    source: "The Lord of the Rings",
    bio: "He comes to Rivendell as an envoy of Erebor and stays as one of the Nine. Spite against Elves turns into open admiration for Galadriel.",
    fate: "He brings Dwarves back to Helm's Deep and founds a settlement in the Glittering Caves.",
    lifespan: "2879 to 120 F.A.",
    otherNames: "Elf-friend, Lord of the Glittering Caves, Gimli son of Glóin, Lockbearer",
    descent: "Son of Glóin, who went to Erebor with Thorin. Of the house of Durin, and so kin to Balin and Dáin.",
    appearance: "Broad, red-brown hair and beard, mail and hood, carrying his axe even at table.",
    nature: "Quick to anger, prickly about honour, and under the rough shell surprisingly tender. One meeting with Galadriel changes him entirely.",
    bookFilm: "In the book Gimli is no comic figure but a dignified envoy. The film makes him the company's relief.",
    deeds: [
      "Comes to the Council of Elrond as the envoy of Erebor",
      "Tries to break the Ring with his axe and loses the blade",
      "Leads the Company to the East-gate of Moria and finds Balin's tomb",
      "Alone among Dwarves stands before Galadriel and asks for a strand of her hair",
      "Sees the Glittering Caves of Aglarond at Helm's Deep",
      "Fights on the Pelennor and marches to the Black Gate",
      "Founds a dwarf colony in Aglarond and becomes its lord"
    ],
    notes: [
      "Fëanor asked three times for a strand of Galadriel's hair and was refused; Gimli receives three on one asking.",
      "He is the only Dwarf recorded as sailing to Aman, and only as Legolas's companion.",
      "His father Glóin was one of the thirteen of The Hobbit.",
      "His description of the Glittering Caves is one of the few lyrical speeches by any Dwarf."
    ]
  },
  boromir: {
    name: "Boromir",
    title: "Captain of the White Tower",
    allegiance: "Free Peoples",
    weapon: "Sword, shield and the Horn of Gondor",
    actor: "Sean Bean",
    source: "The Lord of the Rings",
    bio: "Denethor's eldest son, the finest warrior of Gondor, and the only member of the Company to desire the Ring openly.",
    fate: "He tries to take the Ring from Frodo, falls soon after defending Merry and Pippin, and dies reconciled.",
    lifespan: "2978 to 26 February 3019 T.A.",
    otherNames: "Captain of the White Tower, High Warden of Gondor",
    descent: "Elder son of Denethor II and Finduilas of Dol Amroth, five years older than Faramir.",
    appearance: "Tall, heavy-set, dark-haired, a man of the camp. He carries the great horn cut from the horn of a wild ox.",
    nature: "Proud, brave, impatient with councils. He thinks in armies and defensive lines and takes renunciation for cowardice.",
    bookFilm: "Book and film agree closely here; the film gives him more scenes with the hobbits, which makes his death heavier.",
    deeds: [
      "Holds the western side of Osgiliath when the bridge falls",
      "Rides 110 days from Minas Tirith to Rivendell after a dream",
      "Forces the attempt over Caradhras and saves the hobbits in the snow",
      "Sounds the Horn of Gondor in Moria and at Amon Hen",
      "Tries to take the Ring and comes to himself at once",
      "Falls defending Merry and Pippin, pierced by many arrows"
    ],
    notes: [
      "The dream of the broken sword comes to Faramir many times and to Boromir only once.",
      "His horn is fished from the Anduin in two pieces and reaches Denethor.",
      "He is the only one of the Company to say aloud what everyone thinks: use the Ring.",
      "His funeral boat, carrying the weapons of his enemies, goes over the Falls of Rauros without capsizing, and Faramir sees it days later."
    ]
  },
  faramir: {
    name: "Faramir",
    title: "Captain of Ithilien, Steward of Gondor",
    allegiance: "Free Peoples",
    weapon: "Bow and sword",
    actor: "David Wenham",
    source: "The Lord of the Rings",
    bio: "Denethor's younger son, pupil of Gandalf, loved by his men and unloved by his father. He leads the Rangers of Ithilien.",
    fate: "He lets Frodo and Sam go, barely survives his father's madness, and marries Éowyn.",
    lifespan: "2983 to 82 F.A.",
    otherNames: "Captain of Ithilien, Prince of Ithilien, Steward of Gondor",
    descent: "Younger son of Denethor II. His mother died when he was five. A pupil of Gandalf, which his father never forgave.",
    appearance: "Slim, dark-haired, quiet in movement, with the look Denethor dismisses as dreamy.",
    nature: "Learned, just, without hunger for glory. He does not love the sword, but what it is meant to protect.",
    bookFilm: "The largest change in the films: in the book Faramir refuses the Ring at once and as a matter of course. The film has him waver and drag the hobbits to Osgiliath.",
    deeds: [
      "Leads the Rangers of Ithilien from the hidden refuge of Henneth Annûn",
      "Ambushes a column of Haradrim and watches a mûmak fall",
      "Takes Frodo and Sam captive and lets them go after a brief testing",
      "Sees Boromir's funeral boat pass on the Anduin",
      "Holds Osgiliath, covers the retreat and is felled by a dart",
      "Is given up for dead by his father and nearly burned alive",
      "Is called back by Aragorn in the Houses of Healing",
      "Becomes Prince of Ithilien and Steward under King Elessar"
    ],
    notes: [
      "He and Éowyn come together in the Houses of Healing while the host stands before Mordor.",
      "He is the last to keep the old custom of the silent look westward before eating."
    ]
  },
  denethor: {
    name: "Denethor II",
    title: "Steward of Gondor",
    allegiance: "Free Peoples",
    weapon: "A palantír",
    actor: "John Noble",
    source: "The Lord of the Rings",
    bio: "A sharp-sighted ruler who looks into the Seeing Stone for too long. Sauron shows him only what will break him.",
    fate: "He loses Boromir, despairs of Faramir, and burns himself on the pyre of the Stewards.",
    lifespan: "2930 to 15 March 3019 T.A.",
    otherNames: "Denethor II, Steward of Gondor, Lord of the City",
    descent: "Son of Ecthelion II, of the House of Húrin, which has governed Gondor in trust for almost a thousand years.",
    appearance: "Tall, more kingly than his son, with the look of a man who sleeps too little.",
    nature: "Keen-sighted and without hope. He loves Gondor more than his sons, and Boromir more than Faramir.",
    bookFilm: "In the book Denethor is a worthy if embittered ruler who breaks only at the end. The film shows him unsteady from the first.",
    deeds: [
      "Becomes Steward of Gondor in 2984 after Ecthelion's death",
      "Takes the palantír of Minas Tirith secretly into use",
      "Sends Boromir instead of Faramir to Rivendell, though the dream was Faramir's",
      "Orders Faramir to hold Osgiliath against all sense",
      "Loses all hope under Sauron's influence and has the pyre prepared",
      "Burns himself with the palantír in his hands"
    ],
    notes: [
      "He knew Thorongil and recognised him again decades later as a rival.",
      "His contest with Sauron in the Stone lasts years and ages him before his time.",
      "After his death the Stone shows nothing but two burning hands.",
      "Aragorn does not abolish the office of Steward but passes it to Faramir."
    ]
  },
  beregond: {
    name: "Beregond",
    title: "Guard of the Citadel",
    allegiance: "Free Peoples",
    weapon: "The sword of the Guard",
    actor: "not in the films",
    source: "The Lord of the Rings",
    bio: "A common soldier of the Tower Guard who shows Pippin the city and explains its customs to him.",
    fate: "He leaves his post to save Faramir from the fire and is transferred into Faramir's service for it.",
    lifespan: "of the Tower Guard in 3019",
    otherNames: "Beregond son of Baranor, Captain of the White Company",
    descent: "A soldier of the Guard of Minas Tirith, father of a son named Bergil.",
    appearance: "Middle-aged, in the black and silver of the Citadel.",
    nature: "Dutiful, and at the same time ready to break duty when it would kill a man.",
    bookFilm: "He is absent from the films entirely; some of his part falls to Pippin or Gandalf.",
    deeds: [
      "Guides Pippin through Minas Tirith and explains the watch and its customs",
      "Keeps the door of the Stewards",
      "Abandons his post, kills the porter and halts the pyre"
    ],
    notes: [
      "His son Bergil guides Pippin through the city while the fathers are on duty.",
      "Aragorn sentences him formally and in practice gives him a better command."
    ]
  },
  elrond: {
    name: "Elrond",
    title: "Lord of Rivendell, bearer of Vilya",
    allegiance: "Free Peoples",
    weapon: "Hadhafang and the Ring Vilya",
    actor: "Hugo Weaving",
    source: "The Hobbit, The Lord of the Rings",
    bio: "Half-elven, healer, chronicler and host. He stood at the Last Alliance below Mount Doom and knows what Isildur's hesitation cost.",
    fate: "He calls the Council that sends out the Company, gives Arwen up, and sails West at the end.",
    lifespan: "born 532 in the First Age, sails West in 3021 T.A.",
    otherNames: "Elrond Half-elven, Peredhel, Master of Imladris, bearer of Vilya",
    descent: "Son of Eärendil and Elwing, great-grandson of Beren and Lúthien, brother of Elros, first King of Númenor. Father of Elladan, Elrohir and Arwen.",
    appearance: "Neither young nor old, dark-haired, eyes grey as a clear evening, a face like the memory of many ages.",
    nature: "A keeper and a chronicler, cautious from experience. He watched Isildur stand at the fire and expects little of Men.",
    bookFilm: "In the book Elrond is warmer and more fatherly. The film makes him cooler and has him fight Arwen's choice.",
    deeds: [
      "Survives the sack of the Havens of Sirion as a child",
      "Stands as herald of Gil-galad at the Last Alliance below Mount Doom",
      "Sees Isildur fail at the Cracks of Doom and cannot move him",
      "Founds Imladris in 1697 S.A. as a refuge",
      "Keeps Vilya, the Ring of Air, and holds Rivendell out of time",
      "Fosters the heirs of Isildur, last of them Aragorn",
      "Heals Frodo of the Morgul wound and looses the flood on the Nazgûl",
      "Calls the Council that determines the Company",
      "Releases Arwen and sails on the last ship in 3021"
    ],
    notes: [
      "Through the line of Elros, Aragorn is a very distant nephew of his brother.",
      "His sons Elladan and Elrohir ride south with the Grey Company.",
      "In the book the flood at the Ford takes the shape of white riding horses."
    ]
  },
  arwen: {
    name: "Arwen Undómiel",
    title: "Evenstar of her people",
    allegiance: "Free Peoples",
    weapon: "An Elvish sword and horsemanship",
    actor: "Liv Tyler",
    source: "The Lord of the Rings",
    bio: "Elrond's daughter, who loves Aragorn and gives up immortality for him. In the films she saves Frodo at the Ford of Bruinen.",
    fate: "She stays in Middle-earth, becomes Queen of Gondor and gives Frodo her place on the ship into the West.",
    lifespan: "born 241 T.A., dies in 121 F.A.",
    otherNames: "Undómiel, the Evenstar, Lady of Imladris, later Queen Arwen",
    descent: "Daughter of Elrond and Celebrían, granddaughter of Galadriel. Her mother sailed West after an orc ambush.",
    appearance: "Dark-haired, grey-eyed, said to be the very likeness of Lúthien, who lived two thousand years before her.",
    nature: "Decided and quiet. Her choice is no romantic whim but the surrender of immortality and of her whole family.",
    bookFilm: "In the book Arwen barely appears and her story stands in the appendices. The film brings her forward and gives her the ride to the Ford, which belongs to Glorfindel.",
    deeds: [
      "Grows up between Rivendell and Lothlórien",
      "Meets Aragorn in the woods of Imladris in 2951",
      "Plights her troth to him on Cerin Amroth in Lórien in 2980",
      "Weaves the banner with the White Tree and the seven stars",
      "Sends it to Aragorn in Rohan by her brothers",
      "Becomes Queen in Minas Tirith at Midsummer 3019",
      "Gives Frodo her place on the ship into the West"
    ],
    notes: [
      "After Aragorn's death she lies down on Cerin Amroth and dies there."
    ]
  },
  glorfindel: {
    name: "Glorfindel",
    title: "The lord out of Rivendell",
    allegiance: "Free Peoples",
    weapon: "An Elvish sword and Asfaloth",
    actor: "not in the films",
    source: "The Lord of the Rings",
    bio: "An Elf-lord of the First Age who once killed a Balrog and gave his life for it. Sent back to Middle-earth, he rides out against the Nazgûl.",
    fate: "In the book he carries Frodo to the Ford. From him comes the prophecy that no man shall fell the Witch-king.",
    lifespan: "slain in the First Age, sent back in the Second",
    otherNames: "Glorfindel of Gondolin, the golden-haired",
    descent: "An Elf-lord of Gondolin in the First Age, returned to Middle-earth from the Halls of Mandos after his death.",
    appearance: "Golden hair, and a being who stands at once in the seen and the unseen world, which makes him terrible to the Ringwraiths.",
    nature: "Fearless and bright, one of the few in Middle-earth before whom the Nazgûl openly give way.",
    bookFilm: "He is absent from the films; Arwen takes his ride to the Ford of Bruinen.",
    deeds: [
      "Kills a Balrog at the fall of Gondolin and dies in the doing",
      "Returns to Middle-earth out of the Halls of Mandos",
      "Breaks the host of Angmar in 1975 T.A. with Eärnur",
      "Prophesies that the Witch-king will not fall by the hand of man",
      "Finds the hobbits on the road in 3018 and sets Frodo on Asfaloth"
    ],
    notes: [
      "Asfaloth wears no bit, only a headstall of silver.",
      "Tolkien long hesitated over whether there are two Glorfindels or one returned."
    ]
  },
  galadriel: {
    name: "Galadriel",
    title: "Lady of the Golden Wood, bearer of Nenya",
    allegiance: "Free Peoples",
    weapon: "Nenya, the ring of mithril",
    actor: "Cate Blanchett",
    source: "The Hobbit, The Lord of the Rings",
    bio: "One of the oldest and mightiest Elves in Middle-earth, with a mirror that shows what was, what is and what may yet be.",
    fate: "She refuses Frodo's offer of the Ring, breaks Dol Guldur with the White Council, and sails into the West.",
    lifespan: "born in the First Age in Aman, sails home in 3021 T.A.",
    otherNames: "Lady of the Golden Wood, Lady of Lórien, Nerwen, Artanis, Galadhriel",
    descent: "Daughter of Finarfin of the house of the Noldor, born in Valinor, sister of Finrod. Wife of Celeborn, mother of Celebrían, grandmother of Arwen.",
    appearance: "Very tall, hair of gold shot with silver, which Fëanor asked for three times in vain.",
    nature: "Proud and hungry for rule in her youth, tempered by millennia. Her refusal of the Ring is the test her whole life has run towards.",
    bookFilm: "The film shows her temptation as a lurid transformation. In the book the scene is quieter and the more disquieting for it.",
    deeds: [
      "Leaves Aman against the will of the Valar and goes to Middle-earth",
      "Lives in Doriath and learns from Melian",
      "Rejects Annatar, the Lord of Gifts, from the first",
      "Receives Nenya, the ring of mithril, from Celebrimbor",
      "Calls and for a time leads the White Council",
      "Tests the Company in Lórien and equips them with cloaks, boats and lembas",
      "Refuses Frodo's offer of the Ring and remains Galadriel",
      "Throws down the hosts of Dol Guldur three times with Celeborn"
    ],
    notes: [
      "The ban on her return to Aman is lifted only after she refuses the Ring.",
      "The Mirror shows past, present and possible things without saying which is which.",
      "Her gifts decide life and death more than once: phial, rope, soil, bow."
    ]
  },
  celeborn: {
    name: "Celeborn",
    title: "Lord of Lothlórien",
    allegiance: "Free Peoples",
    weapon: "Sword and counsel",
    actor: "Marton Csokas",
    source: "The Lord of the Rings",
    bio: "Galadriel's husband, lord of Caras Galadhon. He receives the Company and gives them boats, lembas and cloaks.",
    fate: "He leads the Elves of Lórien against Dol Guldur and stays a while longer in Middle-earth.",
    lifespan: "Lord of Lórien in the Third Age",
    otherNames: "Celeborn the Wise, Lord of Lórien, silver tree",
    descent: "A Sinda of Doriath, kinsman of Thingol. Husband of Galadriel.",
    appearance: "Silver-haired, very tall, clad in grey and white.",
    nature: "Measured, hospitable, occasionally sharp with strangers who bring ill fortune.",
    bookFilm: "In the film he is a silent extra; in the book it is he who equips and advises the Company.",
    deeds: [
      "Lives in Doriath before its fall and goes east with Galadriel",
      "Rules the Galadhrim in Caras Galadhon",
      "Receives the Company and gives them boats and grey cloaks",
      "Leads the Elves of Lórien three times against Dol Guldur",
      "Crosses the Anduin after the victory and takes the fortress"
    ],
    notes: [
      "He names Moria by its old name Khazad-dûm and rebukes Gimli before Galadriel intervenes.",
      "After Galadriel sails he stays a while in Middle-earth and then goes to Rivendell to his grandsons."
    ]
  },
  haldir: {
    name: "Haldir",
    title: "March-warden of Lórien",
    allegiance: "Free Peoples",
    weapon: "A bow",
    actor: "Craig Parker",
    source: "The Lord of the Rings",
    bio: "He keeps the borders of the Golden Wood with his brothers and leads the Company blindfolded to Caras Galadhon.",
    fate: "In the film he brings an alliance of archers to Helm's Deep and falls there.",
    lifespan: "march-warden in the year 3019",
    otherNames: "Haldir of Lórien, march-warden",
    descent: "A Silvan Elf of Lothlórien, on border duty with his brothers Rúmil and Orophin.",
    appearance: "Grey-cloaked, bow in hand, nearly invisible among the trees.",
    nature: "Formal, wary of Dwarves, and hospitable in the end.",
    bookFilm: "His death at Helm's Deep is the film's invention; in the book he survives and no Elvish host comes to the Deep.",
    deeds: [
      "Keeps the northern march of Lórien with Rúmil and Orophin",
      "Receives the Company and demands the blindfold for Gimli",
      "Leads them to Caras Galadhon and later to the Anduin"
    ],
    notes: [
      "He is one of the few march-wardens who speak the Common Speech.",
      "In the end all are blindfolded, so that Gimli is not singled out."
    ]
  },
  thranduil: {
    name: "Thranduil",
    title: "King of the Woodland Realm",
    allegiance: "Free Peoples",
    weapon: "Two swords and an elk",
    actor: "Lee Pace",
    source: "The Hobbit, The Lord of the Rings",
    bio: "Legolas's father, a proud and mistrustful ruler who shelters his people behind gates of stone and loves gold.",
    fate: "He besieges Erebor, fights in the Battle of Five Armies, and later holds the wood against the hosts of Dol Guldur.",
    lifespan: "king in the North since the Second Age",
    otherNames: "The Elvenking, King of the Woodland Realm, Thranduil Oropherion",
    descent: "Son of Oropher, who fell in the Last Alliance. Father of Legolas. A Sinda ruling over Silvan Elves.",
    appearance: "Tall, fair-haired, crowned with berries and red leaves in autumn.",
    nature: "Proud, suspicious, with a weakness for treasure that Tolkien names outright. Hard and unyielding for his people's sake.",
    bookFilm: "The Hobbit films give him an elk, a scar and a back-story; in the book he has no name at all and is simply the Elvenking.",
    deeds: [
      "Follows his father Oropher, who falls in the Last Alliance",
      "Builds his halls under the hill after the manner of Menegroth",
      "Imprisons Thorin's company in 2941 because they will not answer him",
      "Marches on the Lonely Mountain with an army and claims his share",
      "Fights in the Battle of Five Armies",
      "Holds northern Mirkwood against the hosts of Dol Guldur in the War of the Ring"
    ],
    notes: [
      "After the victory the wood is renamed Eryn Lasgalen, the Wood of Greenleaves.",
      "His weakness runs above all to white gems.",
      "At the partition of Mirkwood he receives the north and Celeborn the south."
    ]
  },
  tauriel: {
    name: "Tauriel",
    title: "Captain of the Woodland Guard",
    allegiance: "Free Peoples",
    weapon: "Bow and two long knives",
    actor: "Evangeline Lilly",
    source: "The Hobbit (films only)",
    bio: "Leads the guard of the Woodland Realm and thinks Thranduil's shutting of the gate a kind of cowardice.",
    fate: "Loses Kíli on Ravenhill and is left with a grief none of the films resolves.",
    otherNames: "Daughter of the forest, which is what her name means",
    descent: "A Silvan elf of no royal line, which Thranduil occasionally reminds her of.",
    appearance: "Red hair, green guard's dress, and a bow she draws faster than Legolas.",
    nature: "Wilful and impatient with borders. She goes after the evil rather than closing the gate on it.",
    bookFilm: "She does not appear in the book. The films invent her to give the Woodland Realm a voice and Kíli a story.",
    deeds: [
      "Leads the guard against the spiders of Mirkwood",
      "Defies Thranduil's order and pursues the orcs",
      "Heals Kíli of a Morgul wound in Esgaroth with athelas",
      "Fights Bolg on Ravenhill",
      "Stays with Kíli as he dies"
    ],
    notes: [
      "Her name means daughter of the forest.",
      "Thranduil banishes her; Legolas goes north on her account, where decades later he meets Aragorn."
    ]
  },
  cirdan: {
    name: "Círdan",
    title: "The Shipwright",
    allegiance: "Free Peoples",
    weapon: "Narya, until he gives it to Gandalf",
    actor: "not in the films",
    source: "The Lord of the Rings, Appendices",
    bio: "The oldest Elf in Middle-earth, lord of the Grey Havens. He builds the ships that sail over the Sea, and waits as the last of them all.",
    fate: "He gives Gandalf the Ring of Fire, Narya, and sees the Ring-bearers onto their last ship.",
    lifespan: "in Middle-earth since the First Age",
    otherNames: "Círdan the Shipwright, Nowë",
    descent: "A Teler of the First Age, lord of the Falathrim, dwelling by the Sea for more than seven thousand years.",
    appearance: "The only Elf with a beard, white and long, his eyes keen as a star-watcher's.",
    nature: "Patient beyond measure. He hands on power instead of keeping it, and waits until the last has gone.",
    bookFilm: "He does not appear in the films; one cut of the credits shows him briefly at the quay.",
    deeds: [
      "Leads the Falathrim at the havens of the First Age",
      "Builds the ship in which Eärendil sails to Valinor",
      "Gives Narya to Gandalf rather than bear it himself",
      "Takes in the refugees of Arnor and keeps the havens open",
      "Fits out every ship that sails into the West"
    ],
    notes: [
      "He knew Gandalf at once for the greatest of the Istari, though he came last."
    ]
  },
  gilgalad: {
    name: "Gil-galad",
    title: "Last High King of the Noldor",
    allegiance: "Free Peoples",
    weapon: "The spear Aeglos",
    actor: "Mark Ferguson",
    source: "The Silmarillion, Appendices",
    bio: "He forged the Last Alliance of Elves and Men with Elendil and led the hosts to the gates of Mordor.",
    fate: "He fell in single combat with Sauron on the slopes of Orodruin, moments before the Ring was cut away.",
    lifespan: "fell in 3441 of the Second Age",
    otherNames: "Ereinion, star of radiance, High King of the Noldor",
    descent: "Last High King of the Noldor in Middle-earth, son of Fingon. He left no heir.",
    appearance: "In silver and blue, bearing the spear Aeglos, whose point glittered like ice.",
    nature: "Wary of Sauron from the beginning; he took none of the Rings and never received Annatar.",
    bookFilm: "In the film's prologue he stands briefly beside Elendil without being named.",
    deeds: [
      "Becomes the last High King of the Noldor after Turgon's death",
      "Refuses Annatar and keeps him out of his lands",
      "Forges the Last Alliance of Elves and Men with Elendil",
      "Wins on the Dagorlad and besieges Barad-dûr for seven years",
      "Falls together with Elendil in combat with Sauron"
    ],
    notes: [
      "Aeglos means snow-point, and is never borne again after him.",
      "Bilbo's lay of the fall of Gil-galad is one of the few Elvish songs in the Red Book."
    ]
  },
  theoden: {
    name: "Théoden",
    title: "King of the Mark",
    allegiance: "Free Peoples",
    weapon: "Herugrim",
    actor: "Bernard Hill",
    source: "The Lord of the Rings",
    bio: "Rohan's seventeenth king, made an old man by Gríma's whispering and Saruman's craft. Gandalf gives him back his realm and his will.",
    fate: "He rides to the relief of Helm's Deep and leads the Rohirrim onto the Pelennor, where he dies beneath his horse.",
    lifespan: "2948 to 15 March 3019 T.A.",
    otherNames: "Théoden King, Théoden Ednew the Renewed, son of Thengel",
    descent: "Seventeenth King of the Mark, son of Thengel and the Gondorian Morwen. Father of Théodred, uncle of Éomer and Éowyn.",
    appearance: "At first bent and aged, afterwards upright, white hair beneath a golden helm.",
    nature: "Kindly and easily swayed, with a core of pride that carries him again at the first light.",
    bookFilm: "In the book Théoden is simply old and talked out of hope. The film shows a bodily possession that Gandalf drives out.",
    deeds: [
      "Becomes seventeenth King of the Mark in 2980",
      "Loses the will to defend his land under Gríma's influence",
      "Loses his son Théodred at the Fords of Isen",
      "Is freed by Gandalf and leads his people to Helm's Deep",
      "Rides out of the gate of the Hornburg at sunrise",
      "Parleys with Saruman before Orthanc and refuses peace",
      "Musters at Dunharrow and rides five hundred miles in five days",
      "Leads the charge on the Pelennor and breaks the besiegers' line",
      "Dies beneath his horse Snowmane"
    ],
    notes: [
      "Théodred's death makes Éomer his heir.",
      "Ednew means the renewed, because he came back when no one expected it.",
      "The Wild Men of the Drúadan Forest show him the way around the enemy.",
      "Against all sense he takes Merry as his esquire and treats him like a son.",
      "His barrow is the eighth mound of the second line of kings at Edoras."
    ]
  },
  eowyn: {
    name: "Éowyn",
    title: "The White Lady of Rohan",
    allegiance: "Free Peoples",
    weapon: "Sword and shield",
    actor: "Miranda Otto",
    source: "The Lord of the Rings",
    bio: "Théoden's niece, who fears the cage of the hall more than death. She rides with the host disguised as Dernhelm.",
    fate: "She kills the Witch-king, survives grievously wounded, and finds Faramir in the Houses of Healing.",
    lifespan: "born 2995 T.A.",
    otherNames: "The White Lady of Rohan, Dernhelm, Lady of Ithilien, shieldmaiden",
    descent: "Daughter of Éomund and Théodwyn, orphaned at seven and raised by Théoden. Sister of Éomer.",
    appearance: "Tall, slender, pale gold hair, cold and fair as a morning of spring, as Aragorn says.",
    nature: "Ambitious and desperate at once. She does not fear death but a cage, and a life without meaning.",
    bookFilm: "Her healing and the meeting with Faramir are told at length in the book; the cinema cut removes almost all of it and the extended version restores only part.",
    deeds: [
      "Orphaned at seven and raised at Théoden's court",
      "Nurses the failing king and endures Gríma's attentions",
      "Is named leader of the people when the men ride to Helm's Deep",
      "Asks Aragorn in vain to take her with him",
      "Rides with the host disguised as Dernhelm, with Merry before her",
      "Faces the Witch-king over the body of the king",
      "Kills him after Merry has broken the spell",
      "Wakes in the Houses of Healing and lays down the sword there"
    ],
    notes: [
      "Dernhelm means hidden helm.",
      "Her sword arm breaks with the blow against the Witch-king."
    ]
  },
  eomer: {
    name: "Éomer",
    title: "Third Marshal of the Mark",
    allegiance: "Free Peoples",
    weapon: "Sword and spear",
    actor: "Karl Urban",
    source: "The Lord of the Rings",
    bio: "Théoden's nephew, who hunts orcs against Gríma's orders and is punished for it. He meets Aragorn, Legolas and Gimli on the open plain.",
    fate: "He leads the cavalry on the Pelennor and becomes King of the Mark after Théoden's death.",
    lifespan: "2991 to 63 F.A.",
    otherNames: "Éomer Éadig the Blessed, Third Marshal of the Mark, later eighteenth king",
    descent: "Son of Éomund and Théodwyn, nephew of Théoden. Marries Lothíriel of Dol Amroth.",
    appearance: "Tall, fair, broad in the shoulder, a horsehair crest on his helm.",
    nature: "Hot-tempered, honest, quick to judge men and usually right.",
    bookFilm: "In the book Éomer is imprisoned by Gríma; the film banishes him instead, so that he can arrive unexpectedly later.",
    deeds: [
      "Becomes Third Marshal of the Mark and holds the East-mark",
      "Destroys the Uruk company against Gríma's orders",
      "Lends Aragorn, Legolas and Gimli horses and risks his head for it",
      "Is thrown into prison and freed by Gandalf",
      "Fights at Helm's Deep and rides south to Gondor",
      "Is nearly surrounded on the Pelennor and saved by Imrahil's arrival",
      "Is proclaimed eighteenth King of the Mark"
    ],
    notes: [
      "He calls Galadriel perilous and has to hear about it from Gimli.",
      "His friendship with Aragorn and Gimli becomes a treaty their heirs are to keep."
    ]
  },
  grima: {
    name: "Gríma Wormtongue",
    title: "Counsellor and traitor",
    allegiance: "Isengard",
    weapon: "Words and a knife",
    actor: "Brad Dourif",
    source: "The Lord of the Rings",
    bio: "Saruman's ear in Edoras. He weakens Théoden, isolates Éomer, and desires Éowyn.",
    fate: "Driven from Meduseld, he serves Saruman to the last day and finally kills him in the Shire.",
    lifespan: "died in 3019 T.A. at Hobbiton",
    otherNames: "Wormtongue, Gríma son of Gálmód, called Worm in the Shire",
    descent: "Son of Gálmód, a man of Rohan by birth, counsellor at the court of Meduseld.",
    appearance: "Pale, dressed in black, stooped, with wet lips and darting eyes.",
    nature: "Cowardly, clever, humiliated. His greed for Éowyn makes him easy to blackmail and his fear keeps him at Saruman's heel.",
    bookFilm: "The film has him push Saruman from the tower. In the book he cuts his throat outside Bag End and is shot down by hobbits.",
    deeds: [
      "Becomes counsellor at the court of Meduseld",
      "Takes gold from Saruman and the promise of Éowyn",
      "Weakens Théoden over years with words and poison",
      "Has Éomer imprisoned and lets Rohan's defence decay",
      "Flees to Isengard and in panic throws the palantír from the tower",
      "Follows Saruman to the Shire and endures daily humiliation",
      "Cuts Saruman's throat outside Bag End"
    ],
    notes: [
      "He throws the palantír trying to hit Gandalf and thereby hands it to him.",
      "Gandalf calls him Saruman's snake and offers him a way out twice."
    ]
  },
  imrahil: {
    name: "Imrahil",
    title: "Prince of Dol Amroth",
    allegiance: "Free Peoples",
    weapon: "Lance and the Swan Knights",
    actor: "not in the films",
    source: "The Lord of the Rings",
    bio: "The noblest prince of Gondor, with Elvish blood in his line. He brings the Swan Knights to Minas Tirith.",
    fate: "After the battle he governs the city with Éomer and Gandalf until Aragorn takes the throne.",
    lifespan: "Prince of Dol Amroth in 3019",
    otherNames: "Prince of Dol Amroth, Captain of the Swan Knights",
    descent: "Twenty-second Prince of Dol Amroth, brother of Finduilas and so uncle to Boromir and Faramir. Elvish blood in his ancestry.",
    appearance: "Upright, in silver mail, his banner bearing ship and silver swan.",
    nature: "Chivalrous in the old sense, courteous even to halflings, clear-sighted in council.",
    bookFilm: "He is absent from the films; his part in the defence passes to Gandalf and Éomer.",
    deeds: [
      "Brings the Swan Knights of Dol Amroth to Minas Tirith",
      "Breaks the ring of besiegers on the Pelennor with his charge",
      "Finds Éowyn among the dead and notices that she still breathes",
      "Takes joint command of the city with Éomer and Gandalf",
      "Marches with the host to the Black Gate"
    ],
    notes: [
      "His daughter Lothíriel becomes Queen of Rohan."
    ]
  },
  butterbur: {
    name: "Barliman Butterbur",
    title: "Landlord of The Prancing Pony",
    allegiance: "Independent",
    weapon: "A tap and, usually, a memory",
    actor: "David Weatherley",
    source: "The Lord of the Rings",
    bio: "The innkeeper of Bree: friendly, overworked and forgetful. His mislaid letter nearly costs the hobbits everything.",
    fate: "He shelters the hobbits on the night the Ringwraiths break into Bree, and survives that too.",
    lifespan: "innkeeper at Bree in 3018",
    otherNames: "Barliman Butterbur, landlord of The Prancing Pony",
    descent: "A Man of Bree, an innkeeper in the third or fourth generation.",
    appearance: "Stout, red-faced, always out of breath, in an apron marked with beer.",
    nature: "Good-natured, talkative, out of his depth. His memory is as full of holes as his inn is of guests.",
    bookFilm: "In the book he explains at length why the letter was never sent; the film cuts him to a few lines.",
    deeds: [
      "Keeps The Prancing Pony at Bree",
      "Takes Gandalf's letter for Frodo and forgets it for half a year",
      "Shelters the hobbits on the night the Ringwraiths strike",
      "Sells them Bill, the half-starved pony of Bill Ferny"
    ],
    notes: [
      "His letter would have spared the hobbits months and several wounds.",
      "Bill the pony finds his own way back to Bree.",
      "He takes Strider for a shady Ranger, not a future king."
    ]
  },
  bard: {
    name: "Bard the Bowman",
    title: "King of Dale",
    allegiance: "Free Peoples",
    weapon: "The Black Arrow",
    actor: "Luke Evans",
    source: "The Hobbit",
    bio: "A bargeman of Esgaroth, descended from the lords of Dale. A thrush tells him where Smaug's scales are missing.",
    fate: "He kills Smaug, leads the survivors, and rebuilds Dale as its king.",
    lifespan: "heir of the lords of Dale",
    otherNames: "Bard the Bowman, Bard I, King of Dale, Dragon-slayer",
    descent: "Descendant of Girion, last lord of Dale. Grim and few-spoken among the Lake-men.",
    appearance: "Dark-haired, sombre-faced, captain of the archers of Esgaroth.",
    nature: "Sober, just, without hunger for gold, but with a clear sense of what is owed to his town.",
    bookFilm: "In the book Bard is introduced only shortly before Smaug's death; the films give him a family and a long back-story.",
    deeds: [
      "Commands the archers of Esgaroth",
      "Learns from the thrush of the bare patch on Smaug's breast",
      "Kills Smaug with the last black arrow of his house",
      "Organises the survivors of the burning town",
      "Demands a share of the hoard from Thorin and besieges the Mountain",
      "Fights in the Battle of Five Armies and becomes King of Dale"
    ],
    notes: [
      "The last black arrow came from Girion's forge, always returned to the hand, and had been kept in his house for generations.",
      "His grandson Brand falls in the War of the Ring beside Dáin before Erebor."
    ]
  },
  master: {
    name: "The Master of Esgaroth",
    title: "Lord of Lake-town",
    allegiance: "Free Peoples",
    weapon: "The key to the town treasury",
    actor: "Stephen Fry",
    source: "The Hobbit",
    bio: "Elected lord of Esgaroth, a calculator without courage, who sees in the returning dwarves chiefly a piece of business.",
    fate: "Takes the gold meant for rebuilding and starves with it in the waste. The films let the dragon have him instead.",
    otherNames: "The Master, the mayor of Lake-town",
    descent: "Of no descent worth the mention, as Bard occasionally points out.",
    appearance: "Well fed, richly dressed, and always a step behind his own eloquence.",
    nature: "Calculating, cowardly, a fine speaker before a crowd and nobody at all when it matters.",
    bookFilm: "In the book he outlives the dragon and dies of his own greed; in the films Smaug takes him along with his barge of gold.",
    deeds: [
      "Receives Thorin as King under the Mountain because it is good for trade",
      "Outfits the company without believing in the Mountain",
      "Flees when Smaug comes over the town",
      "Puts the blame on the dwarves, in the book",
      "Embezzles the gold meant for rebuilding and dies in the waste"
    ],
    notes: [
      "Esgaroth elects its masters rather than inheriting them, and is proud of it.",
      "After him Bard becomes lord of Dale, not of Lake-town."
    ]
  },
  beorn: {
    name: "Beorn",
    title: "The skin-changer",
    allegiance: "Free Peoples",
    weapon: "The shape of a bear and a great axe",
    actor: "Mikael Persbrandt",
    source: "The Hobbit",
    bio: "A man who turns into a huge bear. He hates orcs, loves his beasts, and barely tolerates strangers.",
    fate: "In the Battle of Five Armies he carries the wounded Thorin out of the press and breaks the orc ranks.",
    lifespan: "dwells by the Anduin near the Carrock",
    otherNames: "Beorn the skin-changer, lord of the Carrock",
    descent: "The last of a people who once lived in the mountains. His origin is left deliberately unexplained.",
    appearance: "Enormous, black-bearded, and in bear shape larger than any natural beast.",
    nature: "Gruff, hospitable on his own terms, fond of beasts and short with men, unforgiving towards orcs.",
    bookFilm: "The film makes him the victim of a curse laid by Azog; in the book the change is simply part of what he is.",
    deeds: [
      "Takes in Thorin's company in two groups in order to test them",
      "Confirms their tale by following the tracks north himself",
      "Fits them out with food and ponies for Mirkwood",
      "Appears late in the Battle of Five Armies in bear shape",
      "Carries the wounded Thorin out and shatters Bolg's bodyguard"
    ],
    notes: [
      "His animals do not speak but understand him and wait at table.",
      "His descendants, the Beornings, later keep the High Pass open for travellers.",
      "He eats no meat and keeps bees the size of a thumb."
    ]
  },
  thorin: {
    name: "Thorin Oakenshield",
    title: "King under the Mountain",
    allegiance: "Free Peoples",
    weapon: "Orcrist and an oaken shield",
    actor: "Richard Armitage",
    source: "The Hobbit",
    bio: "Heir of Durin, born into exile after Smaug took Erebor. He leads thirteen dwarves and one hobbit back to the Mountain.",
    fate: "The gold-sickness of the dragon takes hold of him. He finds himself again and falls in the Battle of Five Armies.",
    lifespan: "2746 to 2941 T.A.",
    otherNames: "Oakenshield, Thorin II, King under the Mountain, son of Thráin",
    descent: "Son of Thráin II, grandson of Thrór, of the house of Durin. Twenty-four years old at the fall of Erebor.",
    appearance: "Stately, black beard shot with silver, a gold chain, and a look that brooks no argument.",
    nature: "Proud, unforgiving, a good speaker and a poor listener. The dragon-sickness finds ground already prepared in him.",
    bookFilm: "The films make him younger and more warlike and give him a personal enemy in Azog, who in the book is long dead.",
    deeds: [
      "Survives the fall of Erebor in 2770 at the age of twenty-four",
      "Fights in 2799 at Azanulbizar and carries an oak branch as a shield",
      "Works for decades as a smith in exile in the Blue Mountains",
      "Meets Gandalf at Bree in 2941, who presses Bilbo upon him",
      "Is captured by the Wood-elves and smuggled out in barrels",
      "Reaches the Mountain and finds the secret door through Bilbo",
      "Falls to the dragon-sickness after Smaug's death and refuses every share",
      "Banishes Bilbo for giving away the Arkenstone",
      "Breaks out of the gate in the battle and falls mortally wounded",
      "Is reconciled with Bilbo as he dies"
    ],
    notes: [
      "The Arkenstone is laid in his tomb, and Orcrist upon his breast.",
      "His by-name comes from the oak branch he used as a shield before Moria.",
      "His father Thráin died mad in the pits of Dol Guldur.",
      "Map and key came to him through Gandalf, who had both from Thráin."
    ]
  },
  balin: {
    name: "Balin",
    title: "Lord of Moria",
    allegiance: "Free Peoples",
    weapon: "An axe",
    actor: "Ken Stott",
    source: "The Hobbit, The Lord of the Rings",
    bio: "The kindliest of Thorin's company and Bilbo's oldest dwarf friend. Years later he leads a colony back to Khazad-dûm.",
    fate: "The colony is destroyed. The Company finds his tomb in the Chamber of Mazarbul.",
    lifespan: "2763 to 2994 T.A.",
    otherNames: "Balin, son of Fundin, Lord of Moria",
    descent: "Of the house of Durin, brother of Dwalin, kinsman of Gimli. One of the thirteen of Erebor.",
    appearance: "White beard, red hood, the friendliest face in the company.",
    nature: "Courteous, careful, the only dwarf who takes Bilbo seriously from the first. His ambition to retake Moria destroys him.",
    bookFilm: "His tomb in Moria is the same in book and film; the book quotes at length from the torn Book of Mazarbul.",
    deeds: [
      "Escapes the fall of Erebor as a young dwarf",
      "Goes to Erebor with Thorin and scouts the land ahead",
      "Is the first to wait for Bilbo at the secret door on his return",
      "Visits Bilbo in the Shire with Gandalf in 2949",
      "Leads a colony back to Khazad-dûm in 2989",
      "Becomes Lord of Moria and holds the East-deeps for five years",
      "Falls in 2994 by an orc arrow at Mirrormere"
    ],
    notes: [
      "His tomb is the only dwarvish inscription the Company can read.",
      "The Book of Mazarbul ends with the words, they are coming."
    ]
  },
  dain: {
    name: "Dáin II Ironfoot",
    title: "King under the Mountain",
    allegiance: "Free Peoples",
    weapon: "A war hammer",
    actor: "Billy Connolly",
    source: "The Hobbit, Appendices",
    bio: "Lord of the Iron Hills, Thorin's cousin, who marches to the Mountain with five hundred warriors when the quarrel over the gold begins.",
    fate: "After Thorin's death he becomes King under the Mountain and falls in the War of the Ring before the gates of Erebor.",
    lifespan: "2767 to 3019 T.A.",
    otherNames: "Dáin II Ironfoot, King under the Mountain, Lord of the Iron Hills",
    descent: "Son of Náin, cousin of Thorin, of the house of Durin.",
    appearance: "Red-bearded, in iron shoes, still a fighter at over two hundred years.",
    nature: "Sober, tough, clever enough to prefer talk to slaughter, and not willing to be extorted.",
    bookFilm: "In The Hobbit film he rides a war-pig and delivers broad comedy; the book gives him dignity and few words.",
    deeds: [
      "Kills the orc Azog before the East-gate of Moria in 2799 at the age of thirty-two",
      "Is the first to warn against entering Khazad-dûm, because Durin's Bane waits there",
      "Leads five hundred warriors from the Iron Hills to the Lonely Mountain in 2941",
      "Negotiates and fights in the Battle of Five Armies",
      "Becomes King under the Mountain after Thorin's death",
      "Turns away Sauron's messengers in 3018 who ask after Bilbo and the Ring",
      "Falls in 3019 before the gate of Erebor over the body of King Brand"
    ],
    notes: [
      "He is the only Dwarf who looked in at Moria's East-gate and said what he saw there.",
      "Sauron's messenger offered him three dwarf-rings for word of the Ring-bearer.",
      "He dies at 252, which is old even for a Dwarf."
    ]
  },
  dwalin: {
    name: "Dwalin",
    title: "Thorin's staunchest companion",
    allegiance: "Free Peoples",
    weapon: "Two war axes, Grasper and Keeper",
    actor: "Graham McTavish",
    source: "The Hobbit",
    lifespan: "2772 T.A. to 91 F.A.",
    bio: "The first to knock at Bilbo's door, and the last to doubt Thorin. A warrior with no use for preamble.",
    fate: "Survives the battle, stays in the Mountain, and dies the last of the thirteen at three hundred and forty.",
    otherNames: "Dwalin, son of Fundin",
    descent: "Brother of Balin, of the house of Durin. Born in exile after the fall of Erebor.",
    appearance: "A dark green hood in the book; in the films a tattooed bald head and two axes across his back.",
    nature: "Grim, short of words, with no patience for courtesies. Where Balin smooths, Dwalin goes first.",
    bookFilm: "The book gives him little beyond a hood and a viol; the films make him Thorin's bodyguard.",
    deeds: [
      "Is the first dwarf to knock at the door of Bag End",
      "Fights beside Thorin at Azanulbizar in 2799",
      "Goes east to Erebor in 2941 and stands by him to the end",
      "Searches Ravenhill with Thorin for Azog",
      "Stays under the Mountain after the battle and serves Dáin",
      "Alone of the company lives to see the Fourth Age"
    ],
    notes: [
      "His axes are named in the films; in the book he carries none.",
      "He outlives Balin by nearly a hundred and twenty years."
    ]
  },
  fili: {
    name: "Fíli",
    title: "Thorin's heir",
    allegiance: "Free Peoples",
    weapon: "Two swords and more hidden knives than anyone cares to count",
    actor: "Dean O'Gorman",
    source: "The Hobbit",
    lifespan: "2859 to 2941 T.A.",
    bio: "The elder of Thorin's nephews and so the next heir of Durin. Young enough still to take the thing for an adventure.",
    fate: "Falls on Ravenhill covering his uncle.",
    otherNames: "Fíli, son of Dís",
    descent: "Son of Dís, Thorin's sister, and elder brother of Kíli. Of the house of Durin.",
    appearance: "Fair hair and a fair beard, both braided; the only blond in the company.",
    nature: "Dependable, graver than his brother, conscious of his inheritance and therefore poor at saying no.",
    bookFilm: "Book and film end the same way: Fíli and Kíli fall because they put themselves in front of Thorin.",
    deeds: [
      "Sets out from the Blue Mountains with thirteen others in 2941",
      "Is taken with the company by the Wood-elves",
      "Stays behind in Esgaroth with Kíli, Óin and Bofur when Kíli is wounded",
      "Falls on Ravenhill before Thorin and Kíli"
    ],
    notes: [
      "With him and Kíli the direct line of Thráin ends.",
      "The two are buried with Thorin under the Mountain."
    ]
  },
  kili: {
    name: "Kíli",
    title: "The youngest of the company",
    allegiance: "Free Peoples",
    weapon: "Bow and sword",
    actor: "Aidan Turner",
    source: "The Hobbit",
    lifespan: "2864 to 2941 T.A.",
    bio: "Thorin's younger nephew, seventy-seven years old and so barely grown as dwarves reckon it.",
    fate: "Falls on Ravenhill beside his brother.",
    otherNames: "Kíli, son of Dís",
    descent: "Son of Dís, younger brother of Fíli, of the house of Durin.",
    appearance: "Dark-haired and all but beardless, which earns him mockery among dwarves.",
    nature: "Quick, forward, the only one of the company who handles a bow like an elf, which he does not like being told.",
    bookFilm: "The films give him a Morgul wound, a recovery in Esgaroth and a love for Tauriel. None of it is in the book.",
    deeds: [
      "Goes east with the company in 2941",
      "Is struck by a Morgul arrow in the films and nursed in Esgaroth",
      "Fights in the Battle of Five Armies on Ravenhill",
      "Falls coming to Thorin's aid"
    ],
    notes: [
      "In the book both brothers die shielding Thorin with body and shield.",
      "The films invent Tauriel for this story alone."
    ]
  },
  gloin: {
    name: "Glóin",
    title: "Gimli's father",
    allegiance: "Free Peoples",
    weapon: "Axe",
    actor: "Peter Hambleton",
    source: "The Hobbit, The Lord of the Rings",
    lifespan: "2783 T.A. to 15 F.A.",
    bio: "The fire-maker of the company, and the only one of the thirteen to appear in both stories.",
    fate: "Survives the battle, grows rich under the Mountain, and sits at the Council of Elrond seventy-seven years later.",
    otherNames: "Glóin, son of Gróin",
    descent: "Brother of Óin, of the house of Durin. Father of Gimli, born in 2879.",
    appearance: "A white beard that reaches his belt in old age, and a white hood.",
    nature: "Fond of reckoning, fonder of talking about his son, and able to raise a fire in the rain.",
    bookFilm: "In the book he brings word of Sauron's messenger to Rivendell; the films leave the scene out.",
    deeds: [
      "Goes to Erebor with the company in 2941",
      "Stays in the Kingdom under the Mountain after the battle",
      "Travels to the Council of Elrond in 3018 as Dáin's envoy",
      "Reports there of Sauron's messenger, who asks after Bilbo and the Ring",
      "Lives to see the Mountain restored and dies in the Fourth Age"
    ],
    notes: [
      "The two stories of the book hang together through him.",
      "His brother Óin goes to Moria with Balin and does not come back."
    ]
  },
  oin: {
    name: "Óin",
    title: "The company's healer",
    allegiance: "Free Peoples",
    weapon: "Staff and axe",
    actor: "John Callen",
    source: "The Hobbit",
    lifespan: "2774 to 2994 T.A.",
    bio: "Eldest of Glóin's brothers, half deaf and carrying an ear trumpet. He knows wounds, and he knows tinder.",
    fate: "Goes to Moria with Balin and is taken by the Watcher in the Water at the west gate.",
    otherNames: "Óin, son of Gróin",
    descent: "Brother of Glóin, of the house of Durin. Uncle to Gimli.",
    appearance: "A grey beard flaring wide, and an ear trumpet he holds like a weapon.",
    nature: "Deliberate, stubborn, and the one who stays behind in Esgaroth to nurse Kíli.",
    bookFilm: "The book records his end in a line of the Book of Mazarbul; the films give him a healer's part in Esgaroth.",
    deeds: [
      "Goes east with the company in 2941",
      "Stays behind in Esgaroth with Fíli, Kíli and Bofur",
      "Follows Balin into the recolonising of Moria in 2989",
      "Is seized by the Watcher in the Water before the west gate in 2994"
    ],
    notes: [
      "The Book of Mazarbul records his end, and the Fellowship reads it there.",
      "He and Glóin are the only brothers of the company besides Balin and Dwalin."
    ]
  },
  ori: {
    name: "Ori",
    title: "The scribe",
    allegiance: "Free Peoples",
    weapon: "A slingshot, later an axe",
    actor: "Adam Brown",
    source: "The Hobbit",
    lifespan: "2793 to 2994 T.A.",
    bio: "The youngest of the three brothers and the shyest of the company. He keeps the record, even when there is no one left to report to.",
    fate: "Falls in the Chamber of Mazarbul. The Fellowship find his bones over the book he kept to its last line.",
    otherNames: "Ori, brother of Dori and Nori",
    descent: "Youngest of the three brothers Dori, Nori and Ori, distantly of Durin's kin.",
    appearance: "Dressed in grey, in a knitted waistcoat, with ink on his fingers.",
    nature: "Polite to the point of embarrassment, braver than he looks, and the only one who writes down what happens.",
    bookFilm: "The last line of his book is the same in book and film, and in both it is all that is left of Balin's colony.",
    deeds: [
      "Goes east in 2941 as the youngest scribe of the company",
      "Follows Balin to Khazad-dûm in 2989",
      "Keeps the Book of Mazarbul to the end",
      "Writes last that they are coming, and falls at the chamber door"
    ],
    notes: [
      "The Book of Mazarbul is the only writing the Fellowship find in Moria.",
      "Gandalf reads from it aloud, before the drums start in the deep."
    ]
  },
  bofur: {
    name: "Bofur",
    title: "Musician and toymaker",
    allegiance: "Free Peoples",
    weapon: "A mattock",
    actor: "James Nesbitt",
    source: "The Hobbit",
    bio: "The warmest of the thirteen, and the first to treat Bilbo as though he belonged.",
    fate: "Survives the battle and stays in the restored Kingdom under the Mountain.",
    otherNames: "Bofur, brother of Bombur",
    descent: "Brother of Bombur and cousin of Bifur. Not of Durin's house but of the dwarves of Moria.",
    appearance: "A fur hat with the flaps pulled down, and a moustache that turns up at both ends.",
    nature: "Good-natured, talkative, sings at any excuse and never means harm by it.",
    bookFilm: "In the book he is barely more than a name in a list; the films make him the kindest voice in the company.",
    deeds: [
      "Goes to Erebor with the company in 2941",
      "Stays behind in Esgaroth with Óin, Fíli and Kíli",
      "Fights in the Battle of Five Armies",
      "Stays under the Mountain after the victory"
    ],
    notes: [
      "He and Bombur arrive at Bag End last, with Bifur and Gandalf.",
      "His people once worked the mines of Moria."
    ]
  },
  bombur: {
    name: "Bombur",
    title: "The heaviest of the company",
    allegiance: "Free Peoples",
    weapon: "A ladle, and at need a cudgel",
    actor: "Stephen Hunter",
    source: "The Hobbit",
    bio: "The fattest dwarf anyone ever put into a barrel, and the company's cook.",
    fate: "Survives, and grows so heavy in the Mountain that six dwarves are needed to carry him to table.",
    otherNames: "Bombur, brother of Bofur",
    descent: "Brother of Bofur and cousin of Bifur, of the dwarves of Moria.",
    appearance: "A red braided beard he winds about his belt, and a girth that makes doors a problem.",
    nature: "Good-natured and reliably hungry. Where others worry, he thinks about supper.",
    bookFilm: "The enchanted stream in Mirkwood throws him into the same days-long sleep in book and film.",
    deeds: [
      "Falls into the enchanted stream in Mirkwood and sleeps for days",
      "Is carried by the others through half the forest",
      "Comes out of the Woodland Realm in a barrel",
      "Fights in the Battle of Five Armies and survives"
    ],
    notes: [
      "In his sleep he dreams of a Wood-elf feast, which is really happening.",
      "The book claims he ends so fat that he cannot rise unaided."
    ]
  },
  bifur: {
    name: "Bifur",
    title: "The one with the axe in his head",
    allegiance: "Free Peoples",
    weapon: "A boar spear",
    actor: "William Kircher",
    source: "The Hobbit",
    bio: "Carries the splinter of an orc axe in his forehead, from a fight he no longer speaks of.",
    fate: "Survives the battle and stays with his cousins under the Mountain.",
    otherNames: "Bifur, cousin of Bofur and Bombur",
    descent: "Cousin of Bofur and Bombur, of the dwarves of Moria and not of Durin's house.",
    appearance: "Wild grey hair and a rusted axe splinter standing out of his skull between the eyes.",
    nature: "Hard to read, quick to anger, and devoted to his two cousins.",
    bookFilm: "The axe in the head is the films' invention, as is his speaking nothing but Khuzdul.",
    deeds: [
      "Arrives at Bag End last, with Gandalf",
      "Goes east with the company in 2941",
      "Fights in the Battle of Five Armies",
      "Stays afterwards in the Kingdom under the Mountain"
    ],
    notes: [
      "His people worked in Moria before the Balrog woke.",
      "In the films hardly anyone but Bofur understands him."
    ]
  },
  dori: {
    name: "Dori",
    title: "The strongest of the company",
    allegiance: "Free Peoples",
    weapon: "A sword he is reluctant to draw",
    actor: "Mark Hadlow",
    source: "The Hobbit",
    lifespan: "born 2765 T.A.",
    bio: "The strongest of the thirteen, and the one Bilbo is most often tied to the back of.",
    fate: "Survives the battle and stays under the Mountain.",
    otherNames: "Dori, brother of Nori and Ori",
    descent: "Eldest of the three brothers Dori, Nori and Ori.",
    appearance: "A purple hood, silver hair, and the broadest shoulders in the company.",
    nature: "Elaborately polite, easily offended, and for all that the one who carries Bilbo when there is haste.",
    bookFilm: "In the book he carries Bilbo out of Goblin-town and drops him doing it, which neither of them ever quite settles.",
    deeds: [
      "Carries Bilbo in the flight through the Misty Mountains",
      "Is caught up by the eagles together with Bilbo",
      "Goes to Erebor with the company",
      "Survives the Battle of Five Armies"
    ],
    notes: [
      "He considers himself the most genteel of the thirteen and says so.",
      "His brothers Nori and Ori have little patience with it."
    ]
  },
  nori: {
    name: "Nori",
    title: "The one with the quick fingers",
    allegiance: "Free Peoples",
    weapon: "A mace and whatever is lying about",
    actor: "Jed Brophy",
    source: "The Hobbit",
    lifespan: "born 2774 T.A.",
    bio: "The middle of the three brothers, with hair like a star and pockets that fill along the way.",
    fate: "Survives the battle and stays in the Kingdom under the Mountain.",
    otherNames: "Nori, brother of Dori and Ori",
    descent: "Middle of the three brothers Dori, Nori and Ori.",
    appearance: "A beard pinned into three points and a head of hair going in three directions.",
    nature: "Quick with his hands, slow with explanations. What goes missing at Bag End does not go missing by chance.",
    bookFilm: "The book names him only in a list; the films make him a thief with the best of intentions.",
    deeds: [
      "Goes to Erebor with the company in 2941",
      "Escapes with the others from Goblin-town and from the Woodland Realm",
      "Fights in the Battle of Five Armies",
      "Stays under the Mountain after the victory"
    ],
    notes: [
      "Of the three brothers he is the only one who survives the quest and does not go to Moria."
    ]
  },
  thrain: {
    name: "Thráin II",
    title: "King in exile",
    allegiance: "Free Peoples",
    weapon: "A map and a key, which he gives up to no one until the end",
    actor: "Antony Sher",
    source: "The Hobbit",
    lifespan: "2644 to 2850 T.A.",
    bio: "Thorin's father. He loses the Mountain to Smaug, his father to Azog, and at last his mind in the pits of Dol Guldur.",
    fate: "Dies in Dol Guldur after Sauron takes from him the last of the Seven Rings. Gandalf finds him there dying.",
    otherNames: "Thráin the Second, son of Thrór, King under the Mountain in exile",
    descent: "Son of Thrór, father of Thorin, Frerin and Dís. Of the house of Durin.",
    appearance: "At the end a blind and broken prisoner who no longer knows his own name.",
    nature: "Tough and vengeful. The war against the orcs is his doing, and he presses it for six years.",
    bookFilm: "In the book he is long dead when the journey begins, and only the map speaks for him. The extended second film lets him meet Thorin once more.",
    deeds: [
      "Flees Erebor with his father before Smaug in 2770",
      "Leads the War of the Dwarves and Orcs after Thrór's death",
      "Fights at Azanulbizar in 2799, where he loses an eye",
      "Sets out alone in 2841 to win back Erebor",
      "Is taken and imprisoned in Dol Guldur",
      "Gives Gandalf the map and key in 2850 before he dies"
    ],
    notes: [
      "The whole journey comes about only through that map and key.",
      "Gandalf took Thráin for a nameless prisoner until it was too late."
    ]
  },
  thror: {
    name: "Thrór",
    title: "The last King under the Mountain",
    allegiance: "Free Peoples",
    weapon: "The Arkenstone as a token, and no sword",
    actor: "Jeffrey Thomas",
    source: "The Hobbit",
    lifespan: "2542 to 2790 T.A.",
    bio: "Thorin's grandfather, under whom Erebor grew so rich that a dragon heard of it.",
    fate: "Goes to Moria an old man and is cut down and branded by Azog in the gate. His death begins the War of the Dwarves and Orcs.",
    otherNames: "Thrór, King under the Mountain, Lord of Erebor",
    descent: "Son of Dáin I, father of Thráin II, grandfather of Thorin. Of the house of Durin.",
    appearance: "At his height a king in gold; at the end an old man with a wandering eye.",
    nature: "The dragon-sickness takes him long before the dragon does. By the end his mind is not his own.",
    bookFilm: "The films open on him: the gold, the doom and the loss of the Mountain in a single sequence.",
    deeds: [
      "Makes Erebor the richest kingdom in the north",
      "Finds the Arkenstone in the heart of the Mountain",
      "Loses the Mountain to Smaug in 2770 and escapes by a secret door",
      "Gives Thráin the last of the Seven Rings",
      "Goes to Moria in 2790 and is killed by Azog",
      "His defiled body sets off a six-year war"
    ],
    notes: [
      "Azog had his name cut into the dead king's brow.",
      "The Arkenstone he found drives his grandson mad a century and a half later."
    ]
  },
  smaug: {
    name: "Smaug",
    title: "The Golden, greatest calamity of his age",
    allegiance: "Independent",
    weapon: "Fire, armour and cunning",
    actor: "Benedict Cumberbatch",
    source: "The Hobbit",
    bio: "The last of the great fire-drakes. He took Erebor, drove out Thrór's people and slept for two hundred years upon the hoard.",
    fate: "A single bare patch on his breast undoes him: Bard's arrow above Esgaroth.",
    lifespan: "takes Erebor in 2770, dies in 2941 T.A.",
    otherNames: "Smaug the Golden, the Magnificent, the Terrible, Worm of Erebor",
    descent: "A fire-drake out of the North, most likely of the brood of the dragons of Morgoth in the First Age.",
    appearance: "Vast, red-gold, his belly armoured with gems and shards of gold, his eyes like burning slits.",
    nature: "Vain, suspicious, dangerously articulate. He draws flatterers into his trap and is undone by his own boasting.",
    bookFilm: "Book and film agree on the course of events; the film adds a long invented chase through the Mountain.",
    deeds: [
      "Comes out of the North in 2770 and takes Erebor in a single assault",
      "Lays waste to Dale and kills or drives out its people",
      "Sleeps 171 years on the hoard, armouring his belly with gems",
      "Notices at once the theft of a single cup",
      "Trades riddles with Bilbo and betrays his unarmoured patch",
      "Flies to Esgaroth and burns the town",
      "Falls into the Long Lake to Bard's black arrow"
    ],
    notes: [
      "His conversation with Bilbo is one of the few scenes in which anyone outwits a dragon.",
      "The dragon-sickness is catching: it takes Thorin long after Smaug is dead.",
      "He speaks the Common Speech with great courtesy, right up to the killing.",
      "His carcass lies for ever in the lake bed above the town's treasure."
    ]
  },
  treebeard: {
    name: "Treebeard",
    title: "Fangorn, eldest of the Ents",
    allegiance: "Free Peoples",
    weapon: "Roots, stones and patience",
    actor: "John Rhys-Davies",
    source: "The Lord of the Rings",
    bio: "Shepherd of the trees and the oldest living thing in Middle-earth. He speaks slowly, because nothing worth saying is said quickly.",
    fate: "The Entmoot decides for war. The Ents tear down Isengard and drown its ring of stone.",
    lifespan: "the oldest living thing in Middle-earth",
    otherNames: "Fangorn, Treebeard, herder of trees, eldest of the Ents",
    descent: "An Ent from before the Elves. Yavanna asked for the Ents as guardians of the growing things.",
    appearance: "Some fourteen feet tall, bark-like skin, a mossy beard, eyes like deep wells with green at the bottom.",
    nature: "Deliberate past endurance, suspicious of haste. Once set in motion he cannot be stopped.",
    bookFilm: "In the book the Entmoot decides the matter on its own. The film has the Ents refuse until Pippin steers them to the felled trees.",
    deeds: [
      "Herds the Fangorn since the Elves taught the Ents to speak",
      "Finds Merry and Pippin at the foot of a hill and carries them off",
      "Calls the Entmoot, which debates for three days",
      "Leads Ents and Huorns to Isengard and tears down its walls",
      "Drowns the ring of Isengard with the diverted Isen",
      "Guards Saruman in Orthanc and finally lets him go",
      "Promises Aragorn to keep Fangorn and receives the land back"
    ],
    notes: [
      "He recites a list of the free peoples that pointedly lacks hobbits, and then amends it.",
      "The Entwives vanished in the Second Age; the Ents have searched for them ever since, and there have been no Entings.",
      "The ent-draughts make Merry and Pippin the tallest hobbits in history.",
      "His own name in his own language would be too long for a book, he says."
    ]
  },
  bombadil: {
    name: "Tom Bombadil",
    title: "Eldest, and master of no one",
    allegiance: "Independent",
    weapon: "Songs",
    actor: "not in the films",
    source: "The Lord of the Rings",
    bio: "A riddle even to the White Council. He was there before the river and the trees, and the One Ring has no power over him.",
    fate: "He saves the hobbits twice, from Old Man Willow and out of the barrow, and then stays in his own small land.",
    lifespan: "was there before river and trees",
    otherNames: "Tom Bombadil, Iarwain Ben-adar the eldest and fatherless, Forn to the Dwarves, Orald to Men",
    descent: "Unexplained. Tolkien called him deliberately a riddle that is meant to stay one.",
    appearance: "A small man in a blue coat and yellow boots, with a feather in his hat and a face as red as an apple.",
    nature: "Cheerful, singing, wholly without ambition. The Ring has no hold on him because he wants to own nothing.",
    bookFilm: "He appears in no adaptation. In the book the Council considers entrusting the Ring to him and rejects it: he would lose it.",
    deeds: [
      "Frees Merry and Pippin from the cleft of Old Man Willow",
      "Houses the hobbits for two nights and sends them on rested",
      "Pulls them out of the barrow and drives off the wight",
      "Chooses a blade from the barrow hoard for each of the four",
      "Calls the pony Fatty Lumpkin and finds the lost ponies again"
    ],
    notes: [
      "He puts the Ring on and does not vanish, then makes it vanish and hands it back.",
      "The barrow-blades later decide the battle of the Pelennor.",
      "He began as a figure in a poem Tolkien wrote long before The Hobbit."
    ]
  },
  goldberry: {
    name: "Goldberry",
    title: "Daughter of the River",
    allegiance: "Independent",
    weapon: "Water and song",
    actor: "not in the films",
    source: "The Lord of the Rings",
    bio: "Tom's companion, who makes the rain in the house by the river and keeps the night friendly.",
    fate: "She sends the hobbits on with clear counsel and the first warm beds of their journey.",
    lifespan: "daughter of the Withywindle",
    otherNames: "Goldberry, the River-daughter",
    descent: "Daughter of the Withywindle, a being of the water whom Tom took out of the river.",
    appearance: "Golden hair, a gown of green and silver, always moving as quietly as water.",
    nature: "Bright and clear; she says little and calms more with it than long explanations would.",
    bookFilm: "She is absent from the films, like Tom Bombadil.",
    deeds: [
      "Receives the hobbits in the house by the Withywindle",
      "Tells them that Tom belongs to no one and rules over nothing",
      "Sends them off on the second morning with plain counsel"
    ],
    notes: [
      "The autumn rain is her washing day."
    ]
  },
  gollum: {
    name: "Gollum, Sméagol",
    title: "The old Ring-bearer",
    allegiance: "Independent",
    weapon: "Teeth, fingers and stealth",
    actor: "Andy Serkis",
    source: "The Hobbit, The Lord of the Rings",
    bio: "Once a river hobbit named Sméagol who murdered for the Ring. Five hundred years under the Misty Mountains made him two voices in one body.",
    fate: "He guides Frodo into Mordor, betrays him to Shelob, and at the edge of the fire brings about the Ring's destruction without meaning to.",
    lifespan: "born about 2430 T.A., dies 25 March 3019",
    otherNames: "Sméagol, Gollum, the Sneak, Stinker, the Ring-bearer before Bilbo",
    descent: "A river hobbit of the Stoors, born about 2430 of the Third Age by the Gladden Fields. The Ring came to him on his birthday.",
    appearance: "Wasted, pallid skin, thin strands of hair, great pale eyes, broad feet, six remaining teeth.",
    nature: "Two voices in one body: the humiliated Sméagol and the possessive Gollum. Sam's mistrust decides which of them wins.",
    bookFilm: "The films show the inner quarrel as a dialogue with himself. In the book Sam overhears it, which makes the scene worse still.",
    deeds: [
      "Murders his cousin Déagol at the Gladden Fields for the Ring about 2463",
      "Is driven out by his kin and flees into the Misty Mountains",
      "Lives 478 years alone on an island in the underground lake",
      "Loses the Ring to Bilbo in 2941 and leaves the mountains years later",
      "Is tortured in Mordor and gives up the words Shire and Baggins",
      "Is caught by Aragorn and handed to the Wood-elves, and escapes",
      "Guides Frodo and Sam over the Dead Marshes to the Black Gate",
      "Leads them to Cirith Ungol and delivers them to Shelob",
      "Bites off Frodo's finger at the Cracks of Doom and falls into the fire"
    ],
    notes: [
      "His birthday present to himself is the murder of Déagol.",
      "The name Gollum comes from the noise he makes in his throat.",
      "On the stair of Cirith Ungol he is for a moment nearly Sméagol again, until Sam snaps at him.",
      "Without him the errand fails, as Gandalf says at the very beginning."
    ]
  },
  sauron: {
    name: "Sauron",
    title: "The Dark Lord, Lord of the Rings",
    allegiance: "Mordor",
    weapon: "The One Ring and a mace",
    actor: "Sala Baker",
    source: "The Hobbit, The Lord of the Rings",
    bio: "Once a servant of Morgoth, then smith of the Rings. Without his Ring he is a will and an eye that searches the lands.",
    fate: "With the Ring's destruction in the fire of Orodruin he loses everything and becomes a powerless shadow.",
    lifespan: "a Maia of the elder days, unmade 25 March 3019 T.A.",
    otherNames: "Mairon the admirable, Annatar the Lord of Gifts, Gorthaur the cruel, the Necromancer, the Great Eye, the Dark Lord",
    descent: "A Maia of the household of Aulë, in the First Age Morgoth's lieutenant, thereafter a Dark Lord in his own right.",
    appearance: "Once of dazzling beauty; after the fall of Númenor unable to take any fair shape. At the last a black figure with a burning hand.",
    nature: "The mania for order driven to the absolute. He cannot conceive that anyone would destroy power freely, and loses by exactly that.",
    bookFilm: "The film makes him a bodiless flaming eye upon the tower. In the book the Eye is an image of his perception; he has a form.",
    deeds: [
      "Serves Morgoth in the First Age as the mightiest of his lieutenants",
      "Appears about 1500 S.A. as Annatar among the Elven-smiths of Eregion",
      "Forges the One Ring in secret in the fire of Orodruin",
      "Lays waste to Eregion and kills Celebrimbor",
      "Corrupts Númenor from within and brings it to ruin",
      "Loses Ring and shape in 3441 S.A. to the Last Alliance",
      "Returns as the Necromancer of Dol Guldur and is driven out by the White Council",
      "Rebuilds Barad-dûr from 2951 and claims Mordor openly",
      "Loses everything when the Ring falls into the fire on 25 March 3019"
    ],
    notes: [
      "The nine rings of Men worked faster than the seven of the Dwarves, which only woke greed."
    ]
  },
  witchking: {
    name: "The Witch-king of Angmar",
    title: "Lord of the Nazgûl",
    allegiance: "Mordor",
    weapon: "A Morgul blade, a mace and a winged steed",
    actor: "Lawrence Makoare",
    source: "The Lord of the Rings",
    bio: "Once a king of Men, now first of the Nine. He destroyed the northern realm of Arnor and took Minas Ithil.",
    fate: "No man can fell him. Merry and Éowyn do it together on the Pelennor.",
    lifespan: "takes a ring about 1500 S.A., dies 15 March 3019",
    otherNames: "The Witch-king of Angmar, Lord of the Nazgûl, the Black Captain, the Morgul-lord",
    descent: "Once a king of Men, most likely out of Númenor, who accepted one of the Nine Rings.",
    appearance: "An empty crown over an unseen head, a cloak with no body in it, a sword lit with pale fire.",
    nature: "Pure will with no remnant of a person. His strongest weapon is not the blade but the dread that goes before him.",
    bookFilm: "The film breaks Gandalf's staff at the gate of Minas Tirith. That scene stands only in the extended version and in no page of the book.",
    deeds: [
      "Accepts one of the Nine Rings about 1500 S.A.",
      "Founds the realm of Angmar in the North about 1300 T.A.",
      "Destroys Arnor and takes Fornost in 1974",
      "Is beaten in 1975 by Eärnur and Glorfindel and leaves the North",
      "Takes Minas Ithil in 2002 and makes it Minas Morgul",
      "Stabs Frodo on Weathertop with a Morgul blade in 3018",
      "Breaks the gate of Minas Tirith with the ram Grond in 3019",
      "Falls on the Pelennor to Merry and Éowyn"
    ],
    notes: [
      "Glorfindel's prophecy is fulfilled to the letter: a woman and a hobbit.",
      "His steed is winged but no dragon, a creature out of an older world.",
      "He challenges Eärnur twice, and the second time Eärnur vanishes without trace.",
      "The blade that strikes him was forged against Angmar long before.",
      "After his death only the crown is left lying in the dust."
    ]
  },
  nazgul: {
    name: "The Nazgûl",
    title: "The Nine Ringwraiths",
    allegiance: "Mordor",
    weapon: "Morgul blades and winged steeds",
    actor: "various",
    source: "The Lord of the Rings",
    bio: "Nine kings of Men who took rings and faded out of sight because of them. They have no shape of their own, only will and terror.",
    fate: "They hunt the Ring from Bree to Mordor and pass away in the moment it falls into the fire.",
    lifespan: "bound since the Second Age",
    otherNames: "The Nine, Ringwraiths, Úlairi, Black Riders, the dreadful Nine",
    descent: "Nine kings and lords of Men who accepted rings from Sauron in the Second Age and faded.",
    appearance: "Black cloaks and hoods with no visible wearer. To one who wears the Ring, grey aged figures with colourless eyes appear beneath.",
    nature: "No will of their own is left. They act as an extension of Sauron and sense the Ring more than they see.",
    bookFilm: "In the book they ride ordinary horses at first and lose them at the Ford; only afterwards do they take the winged steeds.",
    deeds: [
      "Take rings in the Second Age and lose their shape to them",
      "First appear as wraiths about 2251 S.A.",
      "Take Minas Ithil in 2002 T.A. and the palantír within it",
      "Occupy Dol Guldur again in 2951",
      "Ride into the Shire in black cloaks in 3018",
      "Are swept away by the flood at the Ford of Bruinen",
      "Return on winged steeds and carry terror over the hosts"
    ],
    notes: [
      "Three of the Nine were once lords of Númenor.",
      "Only two are named: the Witch-king and Khamûl, the Shadow of the East.",
      "Their cry disables men without a sword being drawn."
    ]
  },
  mouthofsauron: {
    name: "The Mouth of Sauron",
    title: "Messenger of the Black Land",
    allegiance: "Mordor",
    weapon: "Parley and contempt",
    actor: "Bruce Spence",
    source: "The Lord of the Rings",
    bio: "A Black Númenórean so long in Sauron's service that he has forgotten his own name.",
    fate: "Before the Black Gate he displays Frodo's mithril shirt to break the host of the West.",
    lifespan: "messenger in the year 3019",
    otherNames: "The Mouth of Sauron, Lieutenant of Barad-dûr",
    descent: "A Black Númenórean, descended from those Men who went over to Sauron early.",
    appearance: "A living man, not a wraith, in black armour and a high helm, his face barely visible.",
    nature: "Haughty, well-spoken, cruel in the detail. He relishes the despair his messages cause.",
    bookFilm: "He appears only in the extended films and is beheaded by Aragorn on the spot. In the book he rides back unharmed.",
    deeds: [
      "Rises in the service of Barad-dûr to lieutenant",
      "Parleys before the Black Gate with the host of the West",
      "Produces mithril shirt, grey cloak and sword as proofs",
      "Demands withdrawal and the submission of Gondor as his price"
    ],
  },
  lurtz: {
    name: "Lurtz",
    title: "First of the Uruk-hai",
    allegiance: "Isengard",
    weapon: "Sword and bow",
    actor: "Lawrence Makoare",
    source: "The Lord of the Rings (film)",
    bio: "Dragged out of the mud beneath Isengard, bred to walk by day and know no fear.",
    fate: "He shoots Boromir down and is killed by Aragorn.",
    lifespan: "a figure of the films, 3019",
    otherNames: "Lurtz, first of the Uruk-hai",
    descent: "An invention of the films. On screen he is pulled out of the mud beneath Isengard.",
    appearance: "Very tall, black-skinned with a white handprint, tusks, yellow eyes.",
    nature: "Newly made and already without fear, bred for daylight and obedience.",
    bookFilm: "He is in no book. His task, to give Boromir's death a face, belongs there to nameless orc archers.",
    deeds: [
      "Is bred in the pits beneath Isengard",
      "Leads the band that comes upon the Company at Amon Hen",
      "Fells Boromir with three arrows",
      "Is killed by Aragorn in single combat"
    ],
    notes: [
      "The white hand on his brow is Saruman's mark."
    ]
  },
  ugluk: {
    name: "Uglúk",
    title: "Captain of the Uruk-hai",
    allegiance: "Isengard",
    weapon: "A scimitar",
    actor: "Nathaniel Lees",
    source: "The Lord of the Rings",
    bio: "He leads the band that drags Merry and Pippin across Rohan and keeps his quarrelling orcs together by force.",
    fate: "Éomer's riders bring the Uruks to bay at the eaves of Fangorn and destroy them.",
    lifespan: "killed in 3019 T.A. by Fangorn",
    otherNames: "Uglúk of Isengard, captain of the Uruk-hai",
    descent: "An Uruk of Saruman's breeding, leader of the band that carries off the hobbits.",
    appearance: "Broad, bow-legged, a white hand on helm and shield.",
    nature: "Brutal and disciplined. He holds his group together with threats and openly despises the orcs out of Mordor.",
    bookFilm: "The book has a long quarrel between Isengard, Mordor and the northern orcs. The film cuts it to a few lines.",
    deeds: [
      "Leads the Isengard band that carries off Merry and Pippin",
      "Wins the quarrel with Grishnákh of Mordor by force",
      "Drives the prisoners across Rohan without rest",
      "Is brought to bay at the forest eaves by Éomer's riders and killed"
    ],
    notes: [
      "The quarrel between Isengard, Mordor and the northern orcs saves the hobbits.",
      "He gives Merry and Pippin the orc-draught, which closes wounds and burns."
    ]
  },
  gothmog: {
    name: "Gothmog",
    title: "Lieutenant of Minas Morgul",
    allegiance: "Mordor",
    weapon: "A mace",
    actor: "Lawrence Makoare",
    source: "The Lord of the Rings (film)",
    bio: "The misshapen orc commander who directs the siege of Minas Tirith and lays the catapults.",
    fate: "He falls on the Pelennor to the blades of Aragorn and Gimli.",
    lifespan: "a captain in the year 3019",
    otherNames: "Gothmog, Lieutenant of Minas Morgul",
    descent: "Named once in the book, his kind unclear. The film makes him a deformed orc.",
    appearance: "In the film crooked, with a disfigured face and heavy armour.",
    nature: "Cold and methodical, a besieger rather than a berserker.",
    bookFilm: "The book gives only his name and rank. Everything else comes from the film.",
    deeds: [
      "Directs the siege of Minas Tirith",
      "Has the heads of the fallen flung into the city",
      "Takes command after the Witch-king has fallen"
    ],
    notes: [
      "His name is borrowed from the Balrog lord of the First Age.",
      "Whether he is orc, man or something else is left open."
    ]
  },
  shagrat: {
    name: "Shagrat",
    title: "Captain of Cirith Ungol",
    allegiance: "Mordor",
    weapon: "A scimitar",
    actor: "Peter Tait",
    source: "The Lord of the Rings",
    bio: "He finds Frodo stunned before Shelob's lair and quarrels with Gorbag over the mithril shirt.",
    fate: "The quarrel becomes the slaughter in the tower that opens the door for Sam.",
    lifespan: "captain in the year 3019",
    otherNames: "Shagrat, captain of the Tower of Cirith Ungol",
    descent: "An Uruk of Mordor commanding the watch of the pass-tower.",
    appearance: "Big for an orc, broad-handed, scarred from old fights.",
    nature: "Shrewd, dutiful towards orders, and instantly greedy the moment plunder appears.",
    bookFilm: "The long quarrel with Gorbag, which empties the whole tower, is barely hinted at in the film.",
    deeds: [
      "Commands the watch of the Tower of Cirith Ungol",
      "Finds Frodo stunned in Shelob's web",
      "Quarrels with Gorbag of Minas Morgul over the mithril shirt",
      "Escapes the slaughter in the tower and brings the spoil to Barad-dûr"
    ],
    notes: [
      "Of about two hundred orcs in the tower only two survive.",
      "His talk with Gorbag tells Sam that Frodo is still alive.",
      "Orcs talk about their superiors exactly as soldiers do everywhere, which mattered to Tolkien."
    ]
  },
  shelob: {
    name: "Shelob",
    title: "Last child of Ungoliant",
    allegiance: "Independent",
    weapon: "Poison and webs",
    actor: "a giant spider in the film",
    source: "The Lord of the Rings",
    bio: "An ancient spider in the pass above Minas Morgul, older in that land than Sauron. She serves no one and eats everything.",
    fate: "Sam drives her off with Sting and the light of Eärendil. She withdraws into her hole, grievously wounded.",
    lifespan: "in the mountains since the First Age",
    otherNames: "Shelob, the Great Spider, last child of Ungoliant",
    descent: "A descendant of Ungoliant, who killed the Two Trees in the First Age. She has lived in the mountains for millennia.",
    appearance: "Larger than any beast, a black bloated body, clustered eyes, a sting at the hinder end.",
    nature: "Ravenous and solitary. She serves no one, not even Sauron, and eats his servants as readily as his enemies.",
    bookFilm: "The film moves the encounter with Shelob into the third part; in the book it closes the second volume.",
    deeds: [
      "Escapes the ruin of the North as a child of Ungoliant",
      "Settles before the Second Age in the pass above Minas Ithil",
      "Devours Elves, Men and orcs that Sauron drives her way",
      "Paralyses Frodo with her sting",
      "Is wounded by Sam with Sting and the Phial of Galadriel",
      "Withdraws grievously hurt into her hole"
    ],
    notes: [
      "Sauron calls her his cat and keeps her as a guard upon the pass.",
      "The light of Eärendil in the phial is the one thing she gives way before.",
      "Her webs are so tough that ordinary blades slide off them.",
      "Her end is left open; Tolkien never says that she dies."
    ]
  },
  balrog: {
    name: "Durin's Bane",
    title: "A Balrog of Morgoth",
    allegiance: "Independent",
    weapon: "A whip of fire and a flaming sword",
    actor: "a creature in the film",
    source: "The Lord of the Rings",
    bio: "A demon of the First Age, woken by the dwarves digging for mithril. He drove a whole people out of its realm.",
    fate: "On the Bridge of Khazad-dûm Gandalf stands against him. Both fall, both die, one comes back.",
    lifespan: "woken in 1980 T.A., slain 25 January 3019",
    otherNames: "Durin's Bane, the Balrog of Moria, of the Valaraukar",
    descent: "A Maia corrupted by Morgoth in the First Age. After his master's fall he hid deep beneath the Misty Mountains.",
    appearance: "A shape of shadow with a core of fire, horns, a flaming sword and a whip.",
    nature: "No parley, no speech. Sheer destructive presence, before which even orcs flee.",
    bookFilm: "Whether Balrogs have wings is one of the oldest arguments among readers. The film decides for wings.",
    deeds: [
      "Fights in the First Age as a servant of Morgoth",
      "Hides beneath the Misty Mountains after his master's fall",
      "Is woken in 1980 T.A. by dwarves digging for mithril",
      "Kills Durin VI and his son Náin",
      "Drives the whole people out of Khazad-dûm",
      "Faces Gandalf on the bridge and pulls him down into the deep",
      "Is pursued up the Endless Stair and slain on Zirakzigil"
    ],
    notes: [
      "The dwarves name him only Durin's Bane and are loath to say it aloud.",
      "The fight lasts ten days and ends above the clouds.",
      "The orcs of Moria fear him so much that they call him only the terror."
    ]
  },
  azog: {
    name: "Azog",
    title: "The Defiler",
    allegiance: "Mordor",
    weapon: "An iron claw",
    actor: "Manu Bennett",
    source: "The Hobbit",
    bio: "Orc lord of Moria, who beheaded Thrór and so kindled the war between dwarves and orcs.",
    fate: "In the Battle of Five Armies he meets Thorin for the last time. Neither survives.",
    lifespan: "killed in 2799 T.A. before Moria",
    otherNames: "Azog the Defiler, orc of Moria",
    descent: "An orc chieftain who took Moria after the Balrog.",
    appearance: "In the book huge and black; the film makes him pale with an iron claw for an arm.",
    nature: "Cruel with an eye for humiliation. He brands Thrór's head and throws alms before the dwarves.",
    bookFilm: "In the book Azog dies in 2799 by Dáin's hand. The films keep him alive 140 years longer so that Thorin has an adversary.",
    deeds: [
      "Takes Moria after the dwarves have fled",
      "Beheads King Thrór in 2790 and brands the head",
      "Kindles the war between dwarves and orcs",
      "Falls in 2799 at Azanulbizar to Dáin Ironfoot"
    ],
    notes: [
      "His son Bolg leads the orcs in the Battle of Five Armies.",
      "The dwarf war over his head lasted six years and cost both sides everything."
    ]
  },
  bolg: {
    name: "Bolg",
    title: "Son of Azog",
    allegiance: "Sauron",
    weapon: "A morningstar and a spear",
    actor: "Lawrence Makoare, later John Tui",
    source: "The Hobbit",
    lifespan: "to 2941 T.A.",
    bio: "Leads the orcs of Gundabad and inherits from his father the war against the house of Durin.",
    fate: "Falls in the Battle of Five Armies. In the book Beorn breaks him in bear shape; in the films Legolas kills him.",
    otherNames: "Bolg of Gundabad",
    descent: "Son of Azog the Defiler, who killed Thrór.",
    appearance: "Larger than his father, with iron staples in his skull holding an old wound together.",
    nature: "A taker of orders with a cruelty of his own, more patient than Azog and so more dangerous.",
    bookFilm: "In the book Bolg leads the orcs in the battle because Azog has been dead since 2799. The films keep the father alive and make the son his lieutenant.",
    deeds: [
      "Gathers the host of Gundabad",
      "Brings the second force to Ravenhill in the films",
      "Leads the orcs in the Battle of Five Armies in the book",
      "Falls when the eagles and Beorn come into the field"
    ],
    notes: [
      "Gundabad is the mountain where Durin first woke; that orcs should sit there is unbearable to dwarves.",
      "In the book Bolg avenges his father; in the films he fights beside him."
    ]
  },
  greatgoblin: {
    name: "The Great Goblin",
    title: "Ruler of Goblin-town",
    allegiance: "Sauron",
    weapon: "A mace and a great many subordinates",
    actor: "Barry Humphries",
    source: "The Hobbit",
    lifespan: "to 2941 T.A.",
    bio: "Sits under the High Pass on a throne of bones and has whatever his guards pick up in the caves brought before him.",
    fate: "Falls to Glamdring when Gandalf puts out the lights of Goblin-town.",
    otherNames: "The Great Goblin, lord of the caves under the High Pass",
    descent: "Of the orc people of the Misty Mountains, who hold Gundabad and the passes.",
    appearance: "Enormously bloated, with a wattle and a crown he most likely forged himself.",
    nature: "Puffed up and quick to rage, with a taste for passing sentence and for songs of his own.",
    bookFilm: "The book disposes of him in two sentences; the film gives him an entrance, a ballad and a long ending.",
    deeds: [
      "Has the company seized in the caves under the High Pass",
      "Knows Orcrist for the sword his kind call Biter",
      "Condemns Thorin to death",
      "Falls to Gandalf's Glamdring without seeing the blade come"
    ],
    notes: [
      "In the uproar Bilbo loses the others and finds the Ring.",
      "His death is the reason Azog takes up the pursuit of the company at all."
    ]
  },
  gwaihir: {
    name: "Gwaihir",
    title: "Lord of the Winds",
    allegiance: "Free Peoples",
    weapon: "Talons and wings",
    actor: "an eagle in the film",
    source: "The Hobbit, The Lord of the Rings",
    bio: "The greatest of the Eagles of the North and an old debtor of Gandalf's. He watches the lands from the peaks of the Misty Mountains.",
    fate: "He carries Gandalf from Orthanc and from Zirakzigil, and lifts Frodo and Sam off the slopes of Mount Doom.",
    lifespan: "Lord of the Eagles of the North",
    otherNames: "Gwaihir the Windlord, Lord of the Eagles",
    descent: "A descendant of Thorondor, greatest eagle of the First Age. The Eagles are held to be messengers of Manwë.",
    appearance: "A wingspan of many yards, golden feathers about the neck.",
    nature: "Proud and self-willed. The Eagles are no transport service; they help as they see fit.",
    bookFilm: "The favourite question of why the Eagles did not simply carry the Ring is never answered in the text; the Eagles are under no one's command.",
    deeds: [
      "Carries Gandalf from the roof of Orthanc in 3018",
      "Fetches him from the summit of Zirakzigil after the fight with the Balrog",
      "Brings him with the Eagles to the battle before the Black Gate",
      "Carries Frodo and Sam from the slopes of Mount Doom"
    ],
    notes: [
      "The tales give Thorondor's wingspan as thirty yards.",
      "Gandalf once healed a forebear of his of an arrow wound; hence the old debt.",
      "He carries Gandalf three times, and each time Gandalf says it is the last."
    ]
  },
  shadowfax: {
    name: "Shadowfax",
    title: "Lord of all horses",
    allegiance: "Free Peoples",
    weapon: "Speed",
    actor: "a horse in the film",
    source: "The Lord of the Rings",
    bio: "A mearas of the herd of the kings of Rohan, whom only Gandalf may ride. He bears neither saddle nor bridle.",
    fate: "He carries Gandalf to Minas Tirith faster than any messenger and stands his ground before the Nazgûl.",
    lifespan: "a mearas of the kings' herd",
    otherNames: "Shadowfax, lord of all horses",
    descent: "A mearas of the herd that only the kings of Rohan may ride. The mearas are said to descend from Béma himself.",
    appearance: "Silver-grey, shining by day, hardly to be seen at night.",
    nature: "Wilful, understanding the speech of Men, suffering only Gandalf.",
    bookFilm: "In the book Gandalf needs several attempts before Shadowfax will carry him at all. The film skips that.",
    deeds: [
      "Runs free in the herds of the mearas in Rohan",
      "Lets Gandalf ride him after several attempts",
      "Carries him from Rohan to Minas Tirith in three days",
      "Alone among horses stands firm before the Witch-king at the gate"
    ],
    notes: [
      "Théoden gives him outright only after the healing; before that it was a grudging loan.",
      "He does not sail after the war but stays in Middle-earth."
    ]
  },
  kingofthedead: {
    name: "The King of the Dead",
    title: "Leader of the Oathbreakers",
    allegiance: "Independent",
    weapon: "A spectral sword",
    actor: "Paul Norell",
    source: "The Lord of the Rings",
    bio: "A ruler of the mountain men who swore faith to Isildur and broke the oath. For that his people found no death.",
    fate: "Aragorn calls in the oath. After the battle at Pelargir the dead are released at last.",
    lifespan: "oath broken 3434 S.A., released 3019 T.A.",
    otherNames: "The King of the Dead, Lord of the Oathbreakers, King of the Mountain Men",
    descent: "Ruler of the Men of the White Mountains, who had served Sauron and swore faith to Isildur nonetheless.",
    appearance: "A greenish shimmering figure with a crown, seen through as through smoke.",
    nature: "Silent, restless, bound to a word not honoured for three thousand years.",
    bookFilm: "In the book the host of the dead does not storm the Pelennor; it only clears the corsair ships, and Men of Lebennin fight the battle.",
    deeds: [
      "Swears faith to Isildur at the Stone of Erech",
      "Breaks the oath because his people had served Sauron",
      "Is cursed to find no rest until the oath is fulfilled",
      "Holds his people three thousand years in the mountains beneath Dunharrow",
      "Follows Aragorn, who claims the oath as Isildur's heir",
      "Drives the crews from the corsair fleet at Pelargir"
    ],
    notes: [
      "The Stone of Erech came out of Númenor with Isildur and has stood on the hill ever since.",
      "The dead do not fight; they fill the living with mortal terror.",
      "Once released they pass away on the spot like mist in the wind."
    ]
  },
  isildur: {
    name: "Isildur",
    title: "High King who took the Ring",
    allegiance: "Free Peoples",
    weapon: "Narsil, broken to a hilt-shard",
    actor: "Harry Sinclair",
    source: "The Lord of the Rings",
    bio: "Elendil's son, who cut the Ring from Sauron's hand with the stump of Narsil and then would not cast it into the fire.",
    fate: "Orcs ambush him at the Gladden Fields. The Ring slips from his finger and he dies in the Anduin.",
    lifespan: "3209 S.A. to 2 T.A.",
    otherNames: "Isildur, High King of Arnor and Gondor, builder of Minas Ithil",
    descent: "Elder son of Elendil, brother of Anárion. Father of four sons, of whom only Valandil survives.",
    appearance: "Tall as all Númenóreans, dark-haired, with the scar on his hand where he cut the Ring away.",
    nature: "Brave and dutiful, but open to grief and possession. The Ring calls him master and he believes it.",
    bookFilm: "The film shows him refusing Elrond's counsel in the prologue. In the book Elrond reports it afterwards, and Isildur repents of it in a scroll.",
    deeds: [
      "Steals a fruit of the White Tree before the fall of Númenor",
      "Escapes with his father and founds Gondor with Anárion",
      "Builds Minas Ithil and plants the White Tree there",
      "Fights in the Last Alliance on the Dagorlad and at the siege",
      "Cuts the Ring from Sauron's hand with the stump of Narsil",
      "Refuses Elrond's counsel to destroy it",
      "Sets down a description of the Ring in Gondor",
      "Falls at the Gladden Fields when the Ring slips from his finger"
    ],
    notes: [
      "He calls the Ring the precious thing of his house and the weregild for his father and his brother.",
      "Gandalf finds his scroll describing the Ring in the archive in 3018.",
      "Valandil survives only because he stayed behind in Rivendell.",
      "The Ring betrays him because in his need he shifts it from hand to hand."
    ]
  },
  elendil: {
    name: "Elendil",
    title: "The Tall, King of Arnor and Gondor",
    allegiance: "Free Peoples",
    weapon: "Narsil",
    actor: "Peter McKenzie",
    source: "The Silmarillion, Appendices",
    bio: "He escaped the drowning of Númenor with nine ships and founded the realms in exile. With Gil-galad he made the Last Alliance.",
    fate: "He died in combat with Sauron, and Narsil broke beneath him. Out of the shards came Andúril.",
    lifespan: "3119 to 3441 of the Second Age",
    otherNames: "Elendil the Tall, the Faithful, High King of Arnor and Gondor",
    descent: "Son of Amandil, Lord of Andúnië, leader of the Faithful of Númenor. Father of Isildur and Anárion.",
    appearance: "The tallest man of his age, given in the records as nearly eight feet.",
    nature: "Steadfast, devout in the old sense, a leader who keeps alliances rather than uses them.",
    bookFilm: "The film prologue shows his death as a brief fall. The record says Sauron threw him down and Narsil broke beneath him.",
    deeds: [
      "Leads the Faithful of Númenor who keep the old ways",
      "Escapes the drowning with nine ships and the seven palantíri",
      "Founds Arnor in the North and, with his sons, Gondor in the South",
      "Makes the Last Alliance with Gil-galad",
      "Wins on the Dagorlad and besieges Barad-dûr for seven years",
      "Falls wrestling with Sauron, and Narsil breaks beneath him"
    ],
    notes: [
      "His name means Elf-friend or star-lover.",
      "Andúril is not forged from the shards until three thousand years later.",
      "His tomb on the Halifirien stayed a state secret until Cirion's day."
    ]
  }
};
