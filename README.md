# TravelOS V7.8 — South America 2026

Personal travel app for Maayan’s Argentina + Chile trip.

## What’s new in V7.8
- 🧭 **Canonical itinerary:** the UI is synchronized to the current `trip.json` with 10 main stops, plus Puerto Natales as an explicit pre-Torres booked base.
- 🗺️ **Local/offline route map:** no external map tiles or Leaflet dependency.
- 🎓 **Travel Classroom:** destination learning content is bundled locally.
- 🖼️ **Local photo galleries:** images live under `assets/images/`.
- 📋 **Booking checklist:** priorities match the canonical route.
- 🏷️ **Visible version badge:** V7.8 · LOCAL OFFLINE.

## Canonical route
Buenos Aires → Iguazú → Salta & Jujuy → Bariloche → Carretera Austral → El Chaltén → El Calafate → Torres del Paine → Ushuaia → Buenos Aires.

Puerto Natales is shown explicitly as a **pre-Torres base** because lodging is booked there. It is intentionally not assigned invented dates in `trip.json`.

## Offline
Photos, learning content and the route map are local. External Google Maps links open only when selected.
