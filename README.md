# Coffee atlas

Notes from The World Atlas of Coffee, one chapter per page. Plain HTML, CSS and JavaScript, no build step.

## Structure

```
coffee-atlas/
  index.html               chapter overview
  chapters/processing.html page shell for chapter 1
  data/processing.js       all content of chapter 1 (edit this)
  assets/css/base.css      colours, layout, components for every chapter
  assets/js/shared.js      icons and the cup illustration
  assets/js/chapter.js     builds a chapter page from its data file
```

## Preview locally

Double-click `index.html`, or run `python3 -m http.server 8000` in this folder and open http://localhost:8000.

## Edit content

Everything you read on a chapter page lives in `data/<chapter>.js`: methods, cup notes, facts, steps, glossary. Gauge values are set by tapping on the page. They and the tasting notes are stored in that browser only.

## Add a chapter (for example roasting)

1. Copy `data/processing.js` to `data/roasting.js` and replace the content. Change `slug`, `title`, `sub`, the colours in `c`, and the entries in `D` (one per roast level) and `R` (steps).
2. Copy `chapters/processing.html` to `chapters/roasting.html` and change the `data/processing.js` script line to `data/roasting.js`.
3. In `index.html`, turn the "Roasting" card into a link: `<a class="chcard" href="chapters/roasting.html">`.

## Publish

Push to GitHub and enable Pages (Settings, Pages, deploy from branch `main`, folder `/ (root)`).
