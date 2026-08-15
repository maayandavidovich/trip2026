# TravelOS V7 — Maayan South America 2026

GitHub Pages-ready modular build.

## Structure
- `index.html` — app shell / HTML only
- `css/` — visual styles and mobile/map styles
- `js/` — app logic and map layers
- `data/trip-data.js` — itinerary, bookings, POIs, flights and trip data
- `assets/` — local icon and image fallbacks
- `manifest.webmanifest` + `sw.js` — installable PWA/offline shell

## Upload to GitHub
Upload **the contents of this folder**, not the folder itself, to the repository root. Existing `assets/images` may be kept; this package also includes local fallbacks so no references are broken.

## GitHub Pages
Repository Settings → Pages → Deploy from branch → `main` / root.

## Important
The interactive map uses online OpenStreetMap tiles when network access is available. Core itinerary/PWA files are cached locally after the first normal web load.

## V7.2 GitHub-compatible structure

This build intentionally keeps the same repository layout as the existing GitHub Pages project:

- `index.html`
- `assets/`
- `manifest.webmanifest`
- `sw.js`
- `VERSION.txt`
- `README.md`

All app CSS, JavaScript, map layers and trip data are inlined into `index.html`, so there are no `css/`, `js/` or `data/` folders to upload.

To upgrade the existing repository, replace the matching top-level files and replace the `assets/` folder contents.
