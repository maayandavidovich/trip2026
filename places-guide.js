(function(){
  'use strict';
  const places = [
    {
      id:'ba-start', region:'ארגנטינה', name:'Buenos Aires', heb:'בואנוס איירס', emoji:'🇦🇷', dates:'16–18.10', nights:'2 לילות', coords:'-34.6037,-58.3816',
      vibe:'עיר גדולה, אוכל, שכונות, תרבות וחיי לילה',
      why:'פתיחה רכה לטיול: להתאפס מהטיסה, לאכול טוב ולהיכנס לקצב הארגנטינאי.',
      intro:'בואנוס איירס היא עיר ענקית עם אופי אירופי־לטיני: שדרות רחבות, בניינים היסטוריים, שכונות שכל אחת מרגישה כמו עולם אחר, בתי קפה, כדורגל, טנגו ותרבות אוכל חזקה. היא פחות “אטרקציה אחת” ויותר עיר שחווים דרך הליכה, אוכל ואווירה.',
      feel:'מרגישה כמו שילוב של מדריד, פריז ובואנוס איירס — אבל בקצב ארגנטינאי.',
      must:['San Telmo + שוק סוף שבוע','Recoleta Cemetery','Teatro Colón','Parrilla טובה + Malbec','Palermo / Retiro להליכה בערב'],
      day:'יום 1: הגעה והתאוששות · יום 2: San Telmo + Recoleta + ערב במסעדה',
      food:'Parrilla, empanadas, pizza בסגנון porteño, גלידה ו-Malbec.',
      practical:'לשמור על הטלפון בכיס ליד כבישים ובתחבורה ציבורית. עדיף לא להעמיס יותר מדי אטרקציות ביום הראשון.',
      watch:'כייסים, חטיפות טלפון מאופנועים והונאות הסחת דעת באזורים צפופים.',
      best:'🍷 אוכל · 🏛 תרבות · 🚶 עיר',
      tip:'אל תנסי “לכבוש” את כל העיר. ב־2 לילות עדיף לבחור 2–3 שכונות ולהשאיר זמן לשבת בבית קפה.'
    },
    {
      id:'iguazu', region:'ארגנטינה', name:'Iguazú', heb:'איגואסו', emoji:'🌴', dates:'18–21.10', nights:'3 לילות', coords:'-25.6953,-54.4367',
      vibe:'מפלים, ג׳ונגל ולחות טרופית',
      why:'קונטרה מושלמת לפטגוניה: חם, ירוק ועוצמתי.',
      intro:'איגואסו נמצאת בצפון־מזרח ארגנטינה, באזור טרופי ממש על הגבול עם ברזיל. הסיבה להגיע היא מערכת המפלים העצומה בתוך יער גשם: לא רק נקודת תצפית אחת, אלא רשת של שבילים, גשרים ומפלים מכל כיוון.',
      feel:'טרופי, לח, ירוק ורועש — שינוי מוחלט מהמשך הטיול בפטגוניה.',
      must:['Parque Nacional Iguazú – הצד הארגנטינאי','Garganta del Diablo','Upper + Lower circuits','הצד הברזילאי לתצפית פנורמית','Macuco Safari אם בא לך להירטב'],
      day:'יום 1: הצד הארגנטינאי · יום 2: הצד הברזילאי · יום 3: באפר/טיסה לסלטה',
      food:'דגי נהר, בשר ארגנטינאי, פירות טרופיים וקוקטיילים.',
      practical:'נעלי הליכה קלות שמתייבשות מהר + dry bag לטלפון. להתחיל מוקדם כדי להימנע מהחום ומהעומס.',
      watch:'קואטים יכולים לחטוף אוכל; לא להאכיל ולא להשאיר תיק פתוח.',
      best:'💦 טבע · 🥾 הליכות · 🌿 ג׳ונגל',
      tip:'אם יש יום אחד בלבד – הצד הארגנטינאי נותן את חוויית ההליכה הכי קרובה למפלים; אם יש זמן, הצד הברזילאי משלים את התמונה.'
    },
    {
      id:'salta-jujuy', region:'ארגנטינה', name:'Salta & Jujuy', heb:'סלטה וג׳וג׳וי', emoji:'🏜️', dates:'21–27.10', nights:'6 לילות', coords:'-24.7821,-65.4232',
      vibe:'מדבר, הרים צבעוניים, כפרים וגובה',
      why:'הצבעוניות הכי שונה בטיול – אנדים יבשים, כבישים הרריים ואוכל צפון־ארגנטינאי.',
      intro:'סלטה וג׳וג׳וי הן צפון־מערב ארגנטינה: אזור אנדי יבש עם הרים צבעוניים, קניונים, כפרים קטנים, תרבות ילידית ואוכל שונה מאוד מבואנוס איירס. סלטה היא הבסיס הנוח, וג׳וג׳וי היא החלק הדרמטי יותר של הנוף.',
      feel:'פתאום מרגישים בדרום אמריקה “הקלאסית” — מדבר, גובה, כפרים וכבישי הרים.',
      must:['Purmamarca + Cerro de los Siete Colores','Salinas Grandes','Tilcara','Humahuaca','Iruya','Quebrada de Humahuaca'],
      day:'בסיס בסלטה; יום כביש לפורממרקה + Salinas Grandes; יום נוסף ל־Tilcara/Humahuaca; Iruya ביום נפרד אם הקצב מתאים.',
      food:'Empanadas salteñas, locro, tamales, humitas ויינות Cafayate אם משלבים.',
      practical:'חלק מהיעדים מעל 3,000–3,500 מ׳. לעלות בהדרגה, לשתות מים ולהימנע מאלכוהול ביום הראשון בגובה.',
      watch:'גובה, כבישים מפותלים והבדלי טמפרטורה גדולים בין יום ללילה.',
      best:'🏜️ נוף · 🚗 road trip · 🍽 אוכל',
      tip:'עם 6 לילות יש לך מרווח טוב. אל תדחסי את Iruya + Salinas + Humahuaca לאותו יום.'
    },
    {
      id:'bariloche', region:'ארגנטינה', name:'Bariloche', heb:'ברילוצ׳ה', emoji:'🏔️', dates:'27.10–02.11', nights:'6 לילות', coords:'-41.1335,-71.3103',
      vibe:'אגמים, הרים, יערות, שוקולד וטיולי יום',
      why:'המעבר האידיאלי בין צפון ארגנטינה לפטגוניה הכבדה.',
      intro:'ברילוצ׳ה היא עיירת הרים גדולה יחסית על שפת Lago Nahuel Huapi. זה אזור של אגמים כחולים, יערות, פסגות געשיות, מסלולי יום ואוכל הררי. היא הרבה יותר “נוחה” מהיעדים הפראיים שיגיעו אחריה, ולכן היא מקום טוב לנשום לפני הקרטרה.',
      feel:'עיירת נופש הררית — מסודרת, יפה, פעילה ומאוד נוחה למטיילים.',
      must:['Circuito Chico','Cerro Campanario','Lago Nahuel Huapi','Refugio Frey אם התנאים טובים','El Bolsón + Cajón del Azul','יום רגוע בעיר ובאגם'],
      day:'יום עיר/אגם · יום Circuito Chico + Campanario · יום Frey/Catedral · יום El Bolsón · להשאיר יום באפר למזג אוויר.',
      food:'שוקולד מקומי, בירה קראפט, בשר צבי/חזיר ומאכלי הרים.',
      practical:'מזג האוויר בהרים משתנה מהר. לבדוק תחזית ותנאי שבילים בבוקר כל יום.',
      watch:'רוח/גשם/שלג מאוחר בעונה עלולים לשנות תוכניות.',
      best:'🏔️ הרים · 🚗 נופים · 🍫 אוכל',
      tip:'עם 6 לילות אין צורך לרוץ. תני יום אחד גמיש לטיול הררי שהתנאים בו יהיו הכי טובים.'
    },
    {
      id:'carretera', region:'צ׳ילה', name:'Carretera Austral', heb:'הקרטרה אוסטרל', emoji:'🚙', dates:'02–08.11', nights:'6 לילות', coords:'-46.7500,-72.0000',
      vibe:'road trip פראי, אגמים, קרחונים וכבישי חצץ',
      why:'זה החלק שבו הדרך עצמה היא האטרקציה.',
      intro:'הקרטרה אוסטרל היא לא עיר אלא דרך הררית ארוכה בדרום צ׳ילה. את לא מגיעה לכאן כדי “לראות אתר”, אלא כדי לנסוע בין אגמים, נהרות, קרחונים, יערות וכבישי חצץ. לכן הקצב, הרכב והיכולת להגיב למזג האוויר חשובים כמעט כמו האטרקציות.',
      feel:'פראי, מבודד והרפתקני. זה החלק בטיול שבו מרגישים הכי רחוקים מהציוויליזציה.',
      must:['Cerro Castillo','Puerto Río Tranquilo','Marble Caves','Lago General Carrera','Exploradores Glacier','Queulat Hanging Glacier','Cochrane / Río Baker'],
      day:'לבנות את הימים סביב מרחקי נהיגה ולא סביב “כמה אטרקציות”. כל בוקר לבדוק דרך, מזג אוויר ודלק.',
      food:'לקנות אוכל, מים וחטיפים מראש. לא לבנות על מסעדה בכל ערב.',
      practical:'רכב מאושר למעבר גבול + מסמכים מודפסים/דיגיטליים. למלא דלק בכל הזדמנות. קליטה סלולרית מוגבלת.',
      watch:'כבישי חצץ, אבנים, מרחקים גדולים, מזג אוויר ותקלה ברכב רחוק מעיר.',
      best:'🚙 road trip · 🧗 טבע · 🧊 קרחונים',
      tip:'זה החלק שבו שווה להשאיר buffer. עדיף לוותר על נקודה אחת מאשר לנהוג בלחץ בחושך.',
      sub:['Cerro Castillo – טרק מרכזי','Puerto Río Tranquilo – Marble Caves','Exploradores – קרחון','Queulat – קרחון תלוי','Cochrane – Río Baker']
    },
    {
      id:'chalten', region:'ארגנטינה', name:'El Chaltén', heb:'אל צ׳לטן', emoji:'🥾', dates:'08–14.11', nights:'6 לילות', coords:'-49.3315,-72.8863',
      vibe:'בירת הטרקים של פטגוניה',
      why:'היעד הכי “שלך” בטיול אם את רוצה הרבה הליכה ונוף.',
      intro:'אל צ׳לטן היא כפר קטן שנבנה סביב תיירות הטרקים של Parque Nacional Los Glaciares. אין כאן הרבה “עיר” — וזה בדיוק העניין. יוצאים ברגל כמעט מהכפר אל שבילים שמובילים ל־Fitz Roy, Laguna Torre ותצפיות ענקיות.',
      feel:'קטן, צעיר, תרמילאי וספורטיבי. קמים בבוקר כדי ללכת, לא כדי לעשות קניות.',
      must:['Laguna de los Tres / Fitz Roy','Laguna Torre','Loma del Pliegue Tumbado','Mirador Fitz Roy','יום גמיש למזג אוויר'],
      day:'יום קל לאחר ההגעה · Fitz Roy ביום עם התחזית הטובה ביותר · Laguna Torre · Pliegue Tumbado · יום באפר.',
      food:'שוקולד חם, בירה מקומית, פיצה/בורגר אחרי טרק ואוכל פשוט ומשביע.',
      practical:'להצטייד במזומן מראש. להתחיל מוקדם במסלולים ארוכים ולהחזיק שכבות גשם/רוח.',
      watch:'עננות ורוח יכולות להסתיר את Fitz Roy. לא “לבזבז” את היום הראשון רק כי הגעת.',
      best:'🥾 טרקים · 🏔️ הרים · 📸 נוף',
      tip:'היתרון של 6 לילות הוא שאת יכולה לבחור את יום ה־Fitz Roy לפי מזג האוויר ולא לפי לוח קשיח.'
    },
    {
      id:'calafate', region:'ארגנטינה', name:'El Calafate', heb:'אל קלפטה', emoji:'🧊', dates:'14–20.11', nights:'6 לילות', coords:'-50.3370,-72.2648',
      vibe:'קרחונים, Lago Argentino ועיירת בסיס נוחה',
      why:'הבית של Perito Moreno והנקודה הנוחה ביותר להתארגנות לפני Torres.',
      intro:'אל קלפטה היא עיירת התיירות המרכזית באזור הקרחונים של דרום ארגנטינה. היא בנויה סביב Lago Argentino ומשמשת בסיס נוח ל־Perito Moreno ולשייטים/טיולי קרחונים. בניגוד לאל צ׳לטן, כאן יש יותר תחושה של עיירת תיירות ושירותים.',
      feel:'נוחה, תיירותית ומסודרת — מקום טוב לעשות בו reset לפני החלק האינטנסיבי של הטיול.',
      must:['Perito Moreno Glacier viewpoints','Big Ice / Minitrekking','Lago Argentino boat trip','Laguna Nimez','Glaciarium'],
      day:'יום Perito Moreno · יום טרק/שייט · יום קל/באפר · הכנה למעבר לצ׳ילה.',
      food:'כבש פטגוני, בשר, אמפנדס ויין אדום.',
      practical:'להזמין מראש פעילויות קרחון מבוקשות ולנצל את העיר למשיכת מזומן וקניות לפני אזורים מרוחקים.',
      watch:'רוח וקור על הקרחון; פעילות יכולה להשתנות לפי מזג אוויר.',
      best:'🧊 קרחונים · 🚤 שייט · 🥾 הליכה',
      tip:'אל תעמיסי Big Ice + יום טרק ארוך + מעבר ביום אחד. יש לך מספיק לילות כדי ליהנות בקצב טוב.'
    },
    {
      id:'puerto-natales', region:'צ׳ילה', name:'Puerto Natales', heb:'פוארטו נטאלס', emoji:'⚓', dates:'לפני/אחרי Torres', nights:'לוגיסטיקה', coords:'-51.7260,-72.5060',
      vibe:'עיירת בסיס לטורס דל פיינה',
      why:'זה המקום להתארגן לפני ואחרי ה־W: אוכל, ציוד, אוטובוסים, מזומן ומנוחה.',
      intro:'פוארטו נטאלס היא עיירת נמל קטנה שהפכה לשער הראשי ל־Torres del Paine. היא לא יעד שצריך “לכבוש”, אלא בסיס לוגיסטי חשוב: כאן קונים אוכל לטרק, מסדרים ציוד, עולים לאוטובוס לפארק וחוזרים להתאושש.',
      feel:'תרמילאית, קטנה ופרקטית — הרבה מטיילים מגיעים לכאן בדיוק לאותה מטרה.',
      must:['Costanera והטיילת','Mirador Cerro Dorotea אם יש זמן','קניות אוכל וציוד לטרק','בדיקת אוטובוס לפארק','ארוחה טובה לפני/אחרי ה־W'],
      day:'הגעה והתארגנות · יום טרק · חזרה ומנוחה/המשך.',
      food:'אוכל משביע לפני טרק, מאפיות, בשר ומנות מקומיות; לקנות מראש חטיפים לארבעת ימי ה־W.',
      practical:'לרכז כאן את כל הלוגיסטיקה: מזומן, אוכל, ציוד, טעינה, בדיקת תחבורה ומסמכים.',
      watch:'לא להשאיר רכישות/ציוד לרגע האחרון לפני יציאה לפארק.',
      best:'⚓ לוגיסטיקה · 🥾 טרקים · 🍲 התאוששות',
      tip:'תחשבי עליה כעל “מחנה בסיס” ולא כעוד יעד שצריך להספיק בו אטרקציות.'
    },
    {
      id:'torres', region:'צ׳ילה', name:'Torres del Paine', heb:'טורס דל פיינה', emoji:'⛰️', dates:'21–25.11', nights:'4 לילות', coords:'-50.9423,-73.4068',
      vibe:'טרק W, רוח פטגונית ונופי גרניט',
      why:'השיא של הטיול – כמה ימים רצופים בתוך אחד מנופי ההרים המרשימים בעולם.',
      intro:'טורס דל פיינה הוא פארק לאומי בצ׳ילה, לא עיר. הכוכבים שלו הם מגדלי הגרניט, האגמים, הקרחונים ורוחות פטגוניה. אצלך הוא מגיע כטרק W של כמה ימים, ולכן צריך לחשוב עליו כעל “חוויית מסע” ולא כעל אוסף תצפיות.',
      feel:'עוצמתי, פיזי וחשוף למזג האוויר. זה החלק שבו הטבע קובע את הקצב.',
      must:['Base Torres','French Valley','Paine Grande','Grey Glacier','Lake Pehoé','Catamaran / exit logistics'],
      day:'יום כניסה/התארגנות · Base Torres · French Valley · Paine Grande → Grey · יציאה.',
      food:'להצטייד ב־Puerto Natales באוכל טרקים קל ועמיד; בתוך הפארק המחירים גבוהים יותר והאפשרויות מוגבלות.',
      practical:'אין לסמוך על קליטה או ATM. לבדוק כל בוקר תחזית רוח, גשם וסגירות שבילים.',
      watch:'רוח חזקה היא גורם הסיכון המרכזי. לא לדחוף קדימה מול סגירת שביל או אזהרת צוות.',
      best:'⛰️ טרק · 🏕️ בקתות · 🧊 קרחון',
      tip:'זה לא המקום “לנצח את המסלול”. אם תנאי מזג האוויר קשים, שינוי תוכנית הוא חלק מהטרק.'
    },
    {
      id:'ushuaia', region:'ארגנטינה', name:'Ushuaia', heb:'אושואיה', emoji:'🌊', dates:'26–30.11', nights:'4 לילות', coords:'-54.8019,-68.3030',
      vibe:'סוף העולם, ים, הרים ויער',
      why:'סיום דרומי חזק אחרי Torres – שילוב של טבע, ים ויום מנוחה.',
      intro:'אושואיה היא העיר הדרומית ביותר בעולם לפי ההגדרה התיירותית המקובלת, על תעלת ביגל ובין הים להרי Tierra del Fuego. היא משלבת עיר קטנה עם נמל, יערות, הרים ופעילויות ימיות — ולכן היא סיום שונה מאוד מהטרקים שלפניה.',
      feel:'קצה העולם: עיר קטנה, הרים ממש מאחוריה, ים ממש לפניה והרבה אווירת הרפתקה.',
      must:['Tierra del Fuego National Park','Laguna Esmeralda','Beagle Channel cruise','Martial Glacier / viewpoint','End of the World Train – אופציונלי'],
      day:'יום התאוששות · Tierra del Fuego · Laguna Esmeralda לפי תנאים · שייט Beagle Channel.',
      food:'סרטנים/מאכלי ים, כבש, שוקולד ובירה.',
      practical:'רוח וגשם יכולים לשנות הפלגות וטרקים. להשאיר פעילות אחת גמישה.',
      watch:'מסלולים בוציים אחרי גשם, רוח חזקה וקרינת UV גבוהה למרות הקור.',
      best:'🌊 ים · 🥾 טבע · 🚢 שייט',
      tip:'אחרי ה־W Trek אל תבני ארבעה ימים עמוסים. תני לעצמך לפחות חצי יום התאוששות.'
    },
    {
      id:'ba-final', region:'ארגנטינה', name:'Buenos Aires · Final', heb:'בואנוס איירס · סיום', emoji:'🏁', dates:'01–04.12', nights:'3 לילות', coords:'-34.6037,-58.3816',
      vibe:'אוכל, קניות, עיר ומרווח ביטחון לטיסה',
      why:'לסיים בלי לחץ: כביסה, קניות, ארוחה טובה ולילה לפני הטיסה.',
      intro:'בואנוס איירס בסוף הטיול היא לא אותה משימה כמו בהתחלה. עכשיו המטרה היא ליהנות מהעיר בלי לרדוף אחרי אטרקציות: לחזור למסעדה שאהבת, לקנות דברים, לנוח, לעשות כביסה ולהרגיש שסגרת מעגל לפני הטיסה הביתה.',
      feel:'סוף רגוע ומפנק אחרי כמעט שבעה שבועות של תנועה, נהיגה וטרקים.',
      must:['Palermo / Recoleta','ארוחת parrilla אחרונה','קניות מתנות','קפה וגלידה','יום רגוע לפני הטיסה'],
      day:'יום חזרה והתאקלמות · יום עיר/קניות · 04.12: נסיעה ל־EZE עם buffer גדול.',
      food:'בחרי מסעדה אחת “של הסיום” במקום לנסות להספיק הכול.',
      practical:'לשמור buffer גדול ל־EZE. לא לתכנן פעילות רחוקה מהעיר ביום הטיסה.',
      watch:'פקקים בדרך לשדה; לא לסמוך על “זה רק 40 דקות”.',
      best:'🍷 אוכל · 🛍️ קניות · 🧘 באפר',
      tip:'הסיום צריך להרגיש כמו חופשה, לא כמו עוד יום מרוץ. ארוחה טובה + שינה + שדה התעופה בזמן.'
    }
  ];

  const localGallery = {
    'ba-start':["assets/images-png/buenos-aires-1.png"],
    'ba-final':["assets/images-png/buenos-aires-1.png"],
    'iguazu':["assets/images-png/iguazu-1.png"],
    'salta-jujuy':["assets/images-png/salta-jujuy-1.png"],
    'bariloche':["assets/images-png/bariloche-1.png"],
    'carretera':["assets/images-png/carretera-austral-1.png"],
    'chalten':["assets/images-png/el-chalten-1.png"],
    'calafate':["assets/images-png/el-calafate-1.png"],
    'torres':["assets/images-png/torres-1.png"],
    'ushuaia':["assets/images-png/ushuaia-1.png"],
    'puerto-natales':["assets/images-png/puerto-natales-1.png"],
  };
  const gallery = id => localGallery[id] || [];

  const maps = p => 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(p.coords);
  const esc = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  function card(p){
    return `<article class="place-card" data-region="${esc(p.region)}" data-search="${esc([p.name,p.heb,p.vibe,p.why,...p.must,...(p.sub||[]),p.food,p.practical,p.watch].join(' '))}">
      <div class="place-top"><div class="place-icon">${p.emoji}</div><div><span class="place-region">${esc(p.region)}</span><h3>${esc(p.name)}</h3><div class="place-dates">${esc(p.dates)} · ${esc(p.nights)}</div></div></div>
      <p class="place-vibe">${esc(p.vibe)}</p>
      <div class="place-gallery" aria-label="תמונות ${esc(p.heb||p.name)}">${gallery(p.id).map((src,i)=>`<img src="${src}" alt="${esc(p.name)} – תמונה ${i+1}" loading="eager" onerror="this.onerror=null;this.src='${(localGallery[p.id]||[])[i%Math.max(1,(localGallery[p.id]||[]).length)]||''}"/>`).join('')}</div>
      <p class="place-why">${esc(p.why)}</p><div class="place-story"><b>📖 מה זה המקום הזה?</b><p>${esc(p.intro||p.why)}</p><span>✨ האופי: ${esc(p.feel||p.vibe)}</span></div>
      <div class="place-grid">
        <div><b>⭐ לא לפספס</b><ul>${p.must.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>
        <div><b>🗓️ איך הייתי בונה את הימים</b><p>${esc(p.day)}</p><b>🍽️ אוכל</b><p>${esc(p.food)}</p></div>
        <div><b>🎒 פרקטי</b><p>${esc(p.practical)}</p><b>⚠️ לשים לב</b><p>${esc(p.watch)}</p></div>
      </div>
      ${p.sub?`<div class="subplaces"><b>📍 נקודות בתוך האזור</b>${p.sub.map(x=>`<span>${esc(x)}</span>`).join('')}</div>`:''}
      <div class="place-footer"><span class="place-best">${esc(p.best)}</span><span class="place-tip">💡 ${esc(p.tip)}</span><a href="${maps(p)}" target="_blank" rel="noopener">📍 Google Maps</a></div>
    </article>`;
  }



  const learning = {
    'ba-start': {
      title:'להבין את בואנוס איירס לפני שמגיעים',
      basics:['העיר בנויה סביב שכונות עם אופי מאוד שונה — לכן כדאי לחשוב על שכונה ולא רק על “מרכז”.','Porteño הוא הכינוי לתושב בואנוס איירס, והתרבות המקומית מושפעת מאוד מהגירה אירופית.','הקצב הארגנטינאי קשור מאוד לאוכל, קפה, כדורגל, טנגו וחיים חברתיים מאוחרים.'],
      story:'בואנוס איירס צמחה כנמל מרכזי והפכה לבירה תרבותית של ארגנטינה. ההשפעה הספרדית והאיטלקית חזקה במיוחד באדריכלות, באוכל ובשפה היומיומית.',
      geography:'זו מטרופולין שטוחה יחסית על הגדה המערבית של Río de la Plata. בניגוד לפטגוניה שתראי בהמשך, כאן הנוף העירוני הוא הסיפור.',
      culture:'טנגו הוא לא רק מופע לתיירים; הוא חלק מההיסטוריה העירונית. גם parrilla, mate וכדורגל הם מפתחות טובים להבנת התרבות.',
      before:'ללמוד לזהות את Palermo, Recoleta, San Telmo ו-La Boca על המפה ולהבין מה מתאים לבוקר, אחר הצהריים ולערב.',
      quiz:'למה קוראים לתושבי בואנוס איירס Porteños?'
    },
    'iguazu': {
      title:'להבין את איגואסו לפני שמגיעים',
      basics:['Iguazú הוא מערכת של מאות מפלים בתוך יער גשם סובטרופי.','המפל המפורסם ביותר הוא Garganta del Diablo — אבל החוויה היא מערכת שלמה של מסלולים ותצפיות.','הנהר והפארק נמצאים באזור גבול משולש של ארגנטינה, ברזיל ופרגוואי.'],
      story:'המים של Río Iguazú עוברים על מדרגות סלע ויוצרים רצף עצום של מפלים. היער שמסביב חשוב לא פחות מהמים — הוא חלק מהמערכת האקולוגית.',
      geography:'זה אזור חם ולח מאוד יחסית לשאר המסלול שלך, ולכן הוא מרגיש כמו עולם אחר לפני המעבר להרים ולמדבר.',
      culture:'השם Iguazú מגיע משפות ילידיות באזור ומתייחס למים הגדולים. האזור מושפע מתרבויות ארגנטינאיות, ברזילאיות וילידיות.',
      before:'להבין את ההבדל בין המסלולים בצד הארגנטינאי לבין נקודת המבט מהצד הברזילאי.',
      quiz:'למה הצד הארגנטינאי והצד הברזילאי נותנים חוויות שונות של אותם מפלים?'
    },
    'salta-jujuy': {
      title:'להבין את סלטה וג׳וג׳וי לפני שמגיעים',
      basics:['הצפון־מערב הארגנטינאי הוא אזור אנדי עם שילוב של מדבר, עמקים והרים צבעוניים.','גובה הוא חלק מהסיפור: חלק מהמסלולים והכבישים עולים מעל 3,000 מטר.','התרבות באזור מושפעת מאוד ממורשת אנדית וילידית.'],
      story:'האזור ישב במשך מאות שנים על נתיבי מסחר ותרבות שחיברו את האנדים. לכן האדריכלות, האוכל והמסורות כאן שונות מהאופי האירופי יותר של בואנוס איירס.',
      geography:'Quebrada de Humahuaca היא עמק ארוך בצפון ג׳וג׳וי, וסביבו כפרים, שכבות סלע צבעוניות ומישורים גבוהים.',
      culture:'Empanadas salteñas, humitas, tamales ומוזיקה מקומית מספרים סיפור אחר של ארגנטינה — פחות “פמפאס ובשר” ויותר אנדים.',
      before:'להכיר את הקשר בין גובה, יובש וצבעי הסלע כדי להבין למה הדרך עצמה היא אטרקציה.',
      quiz:'איך גובה משפיע על הגוף ועל תכנון יום נסיעה באזור?'
    },
    'bariloche': {
      title:'להבין את ברילוצ׳ה לפני שמגיעים',
      basics:['Bariloche יושבת על Lago Nahuel Huapi ומוקפת בהרי האנדים.','האזור מושפע מאוד מנופים ותרבות שהגיעו מאירופה, במיוחד באזור האגמים.','זו עיר נופש של ארבע עונות: טיולי טבע בקיץ וספורט שלג בחורף.'],
      story:'העיר התפתחה כיעד תיירות הררי סביב הפארק הלאומי Nahuel Huapi. לכן היא משלבת תשתית תיירותית טובה עם גישה מהירה לטבע.',
      geography:'אגמים קרחוניים, יערות, פסגות געשיות ומעברים הרריים יוצרים את הנוף של Lake District.',
      culture:'השוקולד והבירה הפכו לסמלים מקומיים, ובמקביל נשמרת זהות פטגונית של טיולי הרים ואגמים.',
      before:'ללמוד את שמות האגמים והפסגות המרכזיות ולפתוח מפה של Circuito Chico כדי להבין את המבנה של האזור.',
      quiz:'למה ברילוצ׳ה היא בסיס טוב לטיולי יום ולא רק יעד עירוני?'
    },
    'carretera': {
      title:'להבין את הקרטרה אוסטרל לפני שמגיעים',
      basics:['Carretera Austral היא דרך דרומית בצ׳ילה שמחברת אזורים מרוחקים מאוד של Patagonia.','הדרך עצמה היא חלק מרכזי מהחוויה: מרחקים, מזג אוויר וכבישי חצץ משפיעים על כל יום.','הנוף משתנה במהירות בין יער גשם, קרחונים, נהרות, אגמים והרים.'],
      story:'הדרך נבנתה כדי לחבר את דרום צ׳ילה המבודד יותר למרכז המדינה. היום היא הפכה לאחד ממסלולי ה־road trip האיקוניים בדרום אמריקה.',
      geography:'היא עוברת בצד הצ׳יליאני של האנדים, באזור שבו הקרחונים והנהרות מעצבים את העמקים והאגמים.',
      culture:'היישובים קטנים והקצב איטי. חקלאות, דיג ותיירות טבע הם חלק חשוב מהחיים המקומיים.',
      before:'ללמוד לקרוא מפה לפי זמן נהיגה ולא רק לפי קילומטרים, ולהבין איפה יש דלק, אוכל וקליטה.',
      quiz:'מה הופך כביש עם מעט תשתיות לחלק מהחוויה ולא רק לדרך בין אטרקציות?'
    },
    'chalten': {
      title:'להבין את אל צ׳לטן לפני שמגיעים',
      basics:['El Chaltén הוא כפר קטן בתוך אזור הטרקים של Parque Nacional Los Glaciares.','Fitz Roy ו־Cerro Torre הם שני השמות החשובים ביותר להבנת הנוף המקומי.','מזג האוויר והרוח יכולים לשנות את חוויית הטרק אפילו באותו יום.'],
      story:'היישוב הוקם בשנות ה־80 ונבנה במידה רבה סביב גישה לטבע וטרקים. לכן התחושה היא יותר “בסיס הרים” מאשר עיר.',
      geography:'פסגות גרניט חדות, קרחונים, אגמים ועמקים קרחוניים יוצרים את הנוף האיקוני של דרום הפארק.',
      culture:'תרבות המטיילים כאן מאוד חזקה: מוקדם קמים, הולכים, חוזרים, אוכלים ומחליפים מידע על תנאי המסלולים.',
      before:'להכיר את Fitz Roy, Laguna de los Tres, Laguna Torre ו־Loma del Pliegue Tumbado על מפה אחת.',
      quiz:'למה תחזית רוח חשובה כאן כמעט כמו תחזית גשם?'
    },
    'calafate': {
      title:'להבין את אל קלפטה לפני שמגיעים',
      basics:['El Calafate היא שער הכניסה הדרומי לקרחוני Parque Nacional Los Glaciares.','Perito Moreno הוא קרחון דינמי ופעיל יחסית, ולכן אפשר לראות ולשמוע תנועות וקריסות קרח.','העיר יושבת ליד Lago Argentino — האגם הגדול ביותר בארגנטינה.'],
      story:'העיר התפתחה סביב התיירות לקרחונים והפכה לבסיס נוח מאוד לפעילויות באזור.',
      geography:'הקרחונים יורדים משדה הקרח הדרומי של פטגוניה אל אגמים ועמקים. זו המחשה חיה לכוח של קרח על נוף.',
      culture:'העיר היא מרכז תיירותי ולכן יש בה יותר מסעדות, חנויות ופעילויות מאשר באל צ׳לטן.',
      before:'להבין את ההבדל בין תצפית על Perito Moreno, שייט ופעילות על הקרח — אלה חוויות שונות.',
      quiz:'למה Perito Moreno יכול להיראות “קפוא” ועדיין להיות בתנועה?'
    },
    'puerto-natales': {
      title:'להבין את פוארטו נטאלס לפני שמגיעים',
      basics:['Puerto Natales היא עיר נמל קטנה והבסיס המרכזי ל־Torres del Paine.','היא חשובה בעיקר לוגיסטית: אוכל, ציוד, תחבורה והתארגנות לטרק.','היא יושבת על Seno Última Esperanza, מפרץ עמוק בתוך רשת פיורדים.'],
      story:'העיר התפתחה סביב נמל, חקלאות ותעשייה מקומית ובהמשך הפכה לשער התיירותי לטורס.',
      geography:'הפיורדים וההרים שמסביב מסבירים למה הדרך לטורס מרגישה כמו מעבר הדרגתי למדבריות והרמות של דרום צ׳ילה.',
      culture:'יש שילוב של תושבים מקומיים, עובדי תיירות ומטיילים מכל העולם — במיוחד בעונת הטרקים.',
      before:'ללמוד להכין “ערכת יציאה לטורס”: אוכל, שכבות, מים, מסמכים ותחבורה.',
      quiz:'למה דווקא כאן כדאי לבצע את רוב ההכנות ל־W?'
    },
    'torres': {
      title:'להבין את טורס דל פיינה לפני שמגיעים',
      basics:['Torres del Paine הוא פארק לאומי, לא עיר — ולכן מזג האוויר והטבע מנהלים את הלו״ז.','שלושת מגדלי הגרניט הם הסמל של הפארק, אבל ה־W מחבר ביניהם לבין עמקים, אגמים וקרחונים.','הרוח יכולה להיות חזקה מאוד, והמסלול חשוף לשינויים מהירים.'],
      story:'הפארק מגן על שילוב נדיר של פסגות, אגמים, יערות וקרחונים. מסלול ה־W נבנה למעשה כדרך לחוות כמה מהאזורים האיקוניים ביותר ברגל.',
      geography:'הנוף עוצב על ידי קרחונים ותהליכים גיאולוגיים. הצבעים של האגמים והקירות הסלעיים משתנים לפי מינרלים, אור ומשקעים.',
      culture:'תרבות הטרקים היא חלק מהפארק: refugios, מטיילים, מדריכים וכללי Leave No Trace.',
      before:'להכיר את סדר ימי ה־W על מפה, כולל נקודות יציאה, refugios וקטעי עלייה משמעותיים.',
      quiz:'למה חשוב יותר להבין את כיוון הרוח והחשיפה מאשר רק את מספר הקילומטרים?'
    },
    'ushuaia': {
      title:'להבין את אושואיה לפני שמגיעים',
      basics:['Ushuaia יושבת על תעלת Beagle בדרום Tierra del Fuego.','היא משמשת שער לשמורות, שייטים ואנטארקטיקה.','העיר מוקפת הרים מצפון ומים מדרום — ולכן הנוף משתנה מאוד בתוך דקות נסיעה.'],
      story:'העיר גדלה סביב נמל, התיישבות ותעשייה, ובהמשך הפכה למוקד תיירות והרפתקה בדרום הקיצוני.',
      geography:'Tierra del Fuego הוא ארכיפלג גדול, והעיר נמצאת בחלק הארגנטינאי של האי המרכזי.',
      culture:'הכינוי “סוף העולם” הוא חלק מהמיתוג התיירותי, אבל מאחוריו יש היסטוריה של עמים ילידיים, התיישבות ונמל ימי חשוב.',
      before:'ללמוד על Beagle Channel ועל Tierra del Fuego כדי שהשייט והפארק יקבלו הקשר ולא יהיו רק “עוד נוף”.',
      quiz:'למה אושואיה היא נקודת מוצא טבעית לאנטארקטיקה?'
    },
    'ba-final': {
      title:'להבין את בואנוס איירס בסוף הטיול',
      basics:['בסוף הטיול את כבר מגיעה לעיר עם הקשר: אחרי אנדים, מדבר, קרחונים ופטגוניה.','כדאי להשתמש בימים האלה כדי לחבר בין מה שראית לבין התרבות הארגנטינאית בעיר.','הסיום הוא גם זמן טוב להבין את המטבח: בשר, יין, אמפנדס, גלידה וקפה.'],
      story:'חזרה לבואנוס איירס יוצרת ניגוד מעניין: מהטבע הפראי של הדרום חזרה למטרופולין צפוף ותוסס.',
      geography:'העיר שטוחה יחסית ולכן התחושה הגיאוגרפית שונה לחלוטין מהאנדים.',
      culture:'אפשר לראות עכשיו את ארגנטינה כמכלול — לא רק עיר, אלא מדינה עם אזורים גיאוגרפיים ותרבותיים שונים מאוד.',
      before:'לבחור נושא אחד לסיום: אוכל, אמנות, היסטוריה או שכונות — ולא לנסות “להשלים” את כל העיר.',
      quiz:'מה השתנה בהסתכלות שלך על ארגנטינה אחרי שראית את הצפון ואת פטגוניה?'
    }
  };

  function learningCard(p){
    const l=learning[p.id]; if(!l) return '';
    return `<article class="learn-card" data-search="${esc([p.name,p.heb,l.title,...l.basics,l.story,l.geography,l.culture,l.before,l.quiz].join(' '))}">
      <div class="learn-card-top"><div><span class="place-region">${esc(p.region)}</span><h3>${p.emoji} ${esc(p.name)}</h3></div><span class="learn-label">🎓 ללמוד</span></div>
      <h4>${esc(l.title)}</h4>
      <div class="learn-basics">${l.basics.map((x,i)=>`<div><b>${i+1}</b><span>${esc(x)}</span></div>`).join('')}</div>
      <details><summary>📖 הסיפור וההקשר</summary><div class="learn-detail"><p><b>הסיפור:</b> ${esc(l.story)}</p><p><b>גיאוגרפיה:</b> ${esc(l.geography)}</p><p><b>תרבות:</b> ${esc(l.culture)}</p></div></details>
      <details><summary>🧠 מה ללמוד לפני שמגיעים</summary><div class="learn-detail"><p>${esc(l.before)}</p><div class="learn-quiz"><b>❓ שאלה לעצמך</b><span>${esc(l.quiz)}</span></div></div></details>
    </article>`;
  }

  function initLearning(){
    const anchor=document.getElementById('places-guide');
    if(!anchor || document.getElementById('learn-trip')) return;
    const section=document.createElement('section');
    section.id='learn-trip'; section.className='learn-trip'; section.setAttribute('aria-label','ללמוד על היעדים');
    section.innerHTML=`<div class="learn-head"><div><span class="eyebrow">כיתת הטיול</span><h2 class="section-title" style="margin-top:.35rem">🎓 ללמוד לטיול</h2><p class="learn-intro">מיני־קורס לפני הדרך: להבין את ההיסטוריה, הגיאוגרפיה והתרבות של כל מקום — כדי שכשתגיעי, הנוף יקבל משמעות.</p></div><div class="learn-count"><strong>${Object.keys(learning).length}</strong><span>שיעורים</span></div></div><div class="learn-tools"><input id="learn-search" type="search" placeholder="חפשי מקום, נושא או שאלה…"></div><div class="learn-list" id="learn-list">${places.map(learningCard).join('')}</div>`;
    anchor.parentNode.insertBefore(section,anchor.nextSibling);
    const input=section.querySelector('#learn-search'); const cards=[...section.querySelectorAll('.learn-card')];
    input.addEventListener('input',()=>{const q=input.value.trim().toLowerCase();cards.forEach(c=>c.hidden=!!q&&!c.dataset.search.toLowerCase().includes(q));});
  }

  function init(){
    const anchor=document.getElementById('bookings');
    if(!anchor || document.getElementById('places-guide')) return;
    const section=document.createElement('section');
    section.id='places-guide'; section.className='places-guide'; section.setAttribute('aria-label','מדריך היעדים');
    section.innerHTML=`<div class="places-head"><div><span class="eyebrow">מדריך היעדים</span><h2 class="section-title" style="margin-top:.35rem">📚 מדריך לכל מקום בטיול</h2><p class="places-intro">לא רק “מה להזמין” — מה לראות, איך לחלק את הימים, מה לאכול, מה חשוב לדעת ומה אני הייתי עושה במקומך.</p></div><div class="places-count"><strong>${places.length}</strong><span>יעדי בסיס</span></div></div>
      <div class="places-tools"><input id="places-search" type="search" placeholder="חפשי יעד, טרק, אוכל או אטרקציה…"><div class="place-filters"><button class="active" data-region="all">הכול</button><button data-region="ארגנטינה">🇦🇷 ארגנטינה</button><button data-region="צ׳ילה">🇨🇱 צ׳ילה</button></div></div>
      <div class="places-list" id="places-list">${places.map(card).join('')}</div>`;
    anchor.parentNode.insertBefore(section,anchor);

    const input=document.getElementById('places-search');
    const cards=[...section.querySelectorAll('.place-card')];
    let region='all';
    function filter(){
      const q=(input.value||'').trim().toLowerCase();
      cards.forEach(c=>{const okRegion=region==='all'||c.dataset.region===region; const okQ=!q||c.dataset.search.toLowerCase().includes(q); c.hidden=!(okRegion&&okQ);});
    }
    input.addEventListener('input',filter);
    section.querySelectorAll('[data-region]').forEach(b=>b.addEventListener('click',()=>{region=b.dataset.region;section.querySelectorAll('[data-region]').forEach(x=>x.classList.toggle('active',x===b));filter();}));
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>{init();initLearning();}); else {init();initLearning();}
})();
