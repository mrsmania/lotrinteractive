# Character pictures

Drop an image here named after the character id, for example:

    frodo.jpg
    gandalf.png
    aragorn.webp

Accepted extensions: jpg, jpeg, png, webp, avif, gif, svg.

Any character without a file here shows the shared placeholder instead. The
folder is read at build time (and watched during `npm run dev`), so there are no
wasted requests hunting for files that do not exist.

The full list of character ids is in `src/data/figuren.ts`, or run:

    node --experimental-strip-types -e "import('./src/data/figuren.ts').then(m=>console.log(m.FIGUREN.map(f=>f.id).join('\n')))"

Images are cropped to a circle and displayed small, so square source images
around 400x400 work best.
