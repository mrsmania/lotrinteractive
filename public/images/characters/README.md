# Character pictures

Drop an image here named after the character id, for example:

    frodo.jpg
    gandalf.png
    aragorn.webp

Accepted extensions: jpg, jpeg, png, webp, avif, gif, svg.

Any character without a file here shows the shared placeholder instead. The
folder is read at build time (and watched during `npm run dev`), so there are no
wasted requests hunting for files that do not exist.

Images are cropped to a circle and displayed small, so square source images
around 400x400 work best.

## The 57 ids

Ids are English and do not change when the page is switched to German.

```
aragorn        elendil        gothmog        radagast
arwen          elrond         grima          rosie
azog           eomer          gwaihir        sam
balin          eowyn          haldir         saruman
balrog         faramir        imrahil        sauron
bard           frodo          isildur        shadowfax
beorn          galadriel      kingofthedead  shagrat
beregond       gandalf        legolas        shelob
bilbo          gilgalad       lurtz          smaug
bombadil       gimli          merry          theoden
boromir        glorfindel     mouthofsauron  thorin
butterbur      goldberry      nazgul         thranduil
celeborn       gollum         pippin         treebeard
cirdan                                       ugluk
dain                                         witchking
denethor
```

A few are worth spelling out, since the id is not the first word of the name:

| id              | character                |
| --------------- | ------------------------ |
| `balrog`        | Durin's Bane             |
| `bard`          | Bard the Bowman          |
| `butterbur`     | Barliman Butterbur       |
| `grima`         | Gríma Wormtongue         |
| `kingofthedead` | The King of the Dead     |
| `mouthofsauron` | The Mouth of Sauron      |
| `witchking`     | The Witch-king of Angmar |

To regenerate the list from the data:

    sed -n 's/^    id: "\(.*\)",$/\1/p' ../../../src/data/characters.ts | sort
