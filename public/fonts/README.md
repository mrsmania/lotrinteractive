# The Aniron font

The masthead, the character sheet's name and the two legends are set in
**Aniron**, the calligraphic face of the films' title cards, by Pete Klassen.

The font file is not in this repository. Drop it in here as:

```
public/fonts/aniron.woff2     preferred
public/fonts/aniron.ttf       fallback, or on its own
```

`@font-face` in `src/styles.css` asks for both and takes whichever it finds.
Until one of them is here, every rule that names Aniron falls through to the
sans stack behind it and the page looks as it did before.

A `.ttf` converts to `.woff2` with any of the usual tools; it is worth doing,
since the woff2 is a third of the size and this is the only font the site
loads.

## Licence

Aniron is distributed as freeware for personal use. This is a non-commercial
fan project, which is the use it is offered for, but the file is a
redistribution once it is committed here — worth a glance at the terms it came
with before pushing it to a public repository.
