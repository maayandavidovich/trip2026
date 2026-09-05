## V9.2 — Complete visual redesign
- Unified the new Patagonia editorial style across all app sections.
- Fixed the empty next-action card by synchronizing the card IDs with booking state.
- Added cache-busting for V9.2 assets.

## V9.1
- Unified the visual language across the entire app around the Patagonia reference: airy blue/teal/white surfaces, soft shadows, consistent rounded cards and a photo-led hero.
- Restyled itinerary, destination guide, learning, bookings, map, sync/import and footer sections.
- Added CSS/JS cache-busting and bumped the service-worker cache to V9.1.

# V8.8 — Booking history correction

- Restored/confirmed from project history: The Host Puerto Iguazú, 20–22/10/2026.
- Restored/confirmed from project history: Hostel Inn Bariloche, 28/10–01/11/2026.
- Fixed the Bariloche lodging checklist ID/date mapping.
- Clarified that these bookings cover only the booked nights, not every night of the destination stay.
- Updated service-worker version/cache to V8.8.

# V8.3
- Hebrew editorial UI refinement.
- Booking dates now show explicit missing/completed counts and clear action labels.
- Added visible app update prompt and versioned service-worker cache.
- App shell uses network-first fetching so GitHub Pages updates are picked up instead of being trapped in an old cache.

# V8.0 — Visual Refresh
- Warm Patagonia editorial palette
- Full Hebrew-first interface with English place names only
- Local image gallery retained

# TravelOS Changelog

## V8.0
- ממשק מלא בעברית עם שמות מקומות באנגלית.
- RTL לכל האתר.
- עיצוב בהיר ונקי יותר.
- גלריות הומרו ל-PNG מקומיים לתצוגה אמינה ב-GitHub Pages.
- תמונות נטענות מיד.
- Puerto Natales נשארת בסיס אמיתי לפני Torres עם לינה מוזמנת.
- שיפור המפה, הכרטיסים והטפסים.

## V8.2
- Added clickable booking dates; each date opens the exact remaining booking/checklist items.
- Booking status remains persistent in localStorage.
- Added a dedicated 1 November Bariloche date card as requested.


## V8.6
- מרכז הזמנות וטיסות עם ייבוא אישורים.
- אפשרות לייבא JSON / CSV / ICS או להדביק טקסט של אישור.
- הזמנות וטיסות נשמרות מקומית בדפדפן ומוצמדות לתאריכים.
- סטטוס ברור: הוזמן / חסר / פרטים חסרים.


## V8.6
- עיצוב חדש, נקי וקריא יותר במחשב ובאייפון.
- ממשק עברי מלא; שמות יעדים נשארים באנגלית.
- לוח ראשי ממוקד בפעולות ולא בנתוני דשבורד מיותרים.
- ביטול הצגת אחוזי הזמנות; במקום זאת מוצג כמה דברים מסודרים וכמה עדיין דורשים פעולה.
- שיפור מנגנון עדכון ה-Service Worker והגרסה.


## V8.6
- תיקון ספירת הימים ליציאה: מחושב דינמית מול 15.10.2026.
- הסרת מזהי HTML כפולים שגרמו לעדכוני Dashboard לא עקביים.
- חיזוק ניגודיות, גודל טקסט והיררכיה במחשב.
- תג גרסה בולט וברור.


## V8.8
- תיקון ספירת הימים ליציאה: 15.10.2026 (40 ימים נכון ל־5.9.2026).
- תיקון ID של מונה היציאה כדי שלא יחזור לערך ישן כמו 89.
- cache bust מלא ל־V8.8 + service worker מעודכן.
- שמירה על רשימת ההזמנות והטיסות ששוחזרו ב־V8.7.
