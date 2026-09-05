(function(){
  // TravelOS V9.1 — polished, fully local South America route map.
  // No tile server / Leaflet dependency: works offline.
  const places = [
    ['Buenos Aires',-34.6037,-58.3816,'16–18 Oct','פתיחה · עיר, אוכל וטנגו'],
    ['Iguazú',-25.6953,-54.4367,'18–21 Oct','מפלים · 3 לילות'],
    ['Salta & Jujuy',-24.7821,-65.4232,'21–27 Oct','צפון־מערב · 6 לילות'],
    ['Bariloche',-41.1335,-71.3103,'27 Oct–2 Nov','אגמים והרים · 6 לילות'],
    ['Carretera Austral',-45.5712,-72.0685,'2–8 Nov','רכב · 6 לילות'],
    ['El Chaltén',-49.3315,-72.8863,'8–14 Nov','Fitz Roy · 6 לילות'],
    ['El Calafate',-50.3370,-72.2648,'14–20 Nov','Perito Moreno · 6 לילות'],
    ['Puerto Natales',-51.7260,-72.5060,'19–21 Nov','בסיס לפני Torres · לינה מוזמנת'],
    ['Torres del Paine',-50.9423,-73.4068,'21–25 Nov','W Trek · תאריך מוגן'],
    ['Ushuaia',-54.8019,-68.3030,'26–30 Nov','Tierra del Fuego · 4 לילות']
  ];

  const W=1000,H=650;
  function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function project(lat,lng){
    // Equirectangular view tuned to Argentina/Chile + the Iguazú/Salta north.
    return [90+(lng+78)*27.2, 62+(lat+20)*18.0];
  }
  function mapsUrl(lat,lng){return 'https://www.google.com/maps/search/?api=1&query='+lat+','+lng;}

  // Recognisable, intentionally simplified South America coastline.
  const southAmerica = `M 365 20
    C 410 24 462 43 503 69 C 548 96 590 126 623 163
    C 649 193 662 226 651 252 C 642 273 621 287 613 307
    C 605 327 614 347 606 368 C 597 392 574 407 559 426
    C 542 448 537 474 523 499 C 509 525 491 552 473 578
    C 455 604 433 622 409 632 C 389 638 370 629 355 615
    C 337 599 325 575 316 548 C 307 521 293 498 280 474
    C 266 448 249 424 234 401 C 219 378 207 351 205 326
    C 202 300 211 276 220 252 C 230 225 236 201 233 176
    C 230 150 218 126 225 103 C 232 78 249 56 273 42
    C 302 25 334 17 365 20 Z`;

  const chileShape = `M 286 74 C 273 101 265 132 261 163 C 257 196 248 227 239 258
    C 230 290 220 318 222 345 C 224 374 239 397 253 421 C 267 446 280 470 293 497
    C 305 522 315 548 327 570 L 350 548 C 338 519 326 491 314 465 C 303 441 288 415 278 391
    C 267 365 263 341 270 312 C 277 283 287 254 294 223 C 301 192 307 159 310 128 C 313 102 307 82 298 67 Z`;

  const argentinaShape = `M 300 76 C 320 72 340 74 360 83 C 373 101 378 124 374 148
    C 369 176 358 201 350 229 C 342 258 336 287 338 316 C 340 348 350 377 362 404
    C 373 430 386 454 392 481 C 398 508 393 536 383 559 C 373 580 361 597 348 608
    C 329 588 319 563 309 537 C 300 512 287 489 274 465 C 261 442 247 418 234 395
    C 224 374 214 349 214 326 C 214 299 224 274 234 248 C 244 221 252 193 255 166
    C 258 137 262 109 273 89 C 280 80 289 76 300 76 Z`;

  function init(){
    const el=document.getElementById('travel-map'); if(!el) return;
    let zoom=1;
    let selected=0;
    const pts=places.map((p,i)=>{const [x,y]=project(p[1],p[2]);return {...p,i,x,y};});

    function pathFrom(points){return points.map((p,i)=>`${i?'L':'M'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ');}
    function render(){
      const scale=zoom;
      const tx=(W-W/scale)/2;
      const ty=(H-H/scale)/2;
      const p=pts[selected];
      el.innerHTML=`
      <div class="local-map-shell map-v91">
        <svg class="local-map-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="מפת המסלול של דרום אמריקה">
          <defs>
            <linearGradient id="seaV91" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e8f4f7"/><stop offset="1" stop-color="#cfe7ed"/></linearGradient>
            <linearGradient id="landV91" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fffdf8"/><stop offset="1" stop-color="#e9f0e9"/></linearGradient>
            <linearGradient id="routeV91" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#118b82"/><stop offset="1" stop-color="#0d6075"/></linearGradient>
            <filter id="shadowV91" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="5" stdDeviation="6" flood-color="#244b5a" flood-opacity=".15"/></filter>
          </defs>
          <rect width="1000" height="650" class="map-ocean-v91" fill="url(#seaV91)"/>
          <g class="map-grid-v91">
            <path d="M80 150H920 M70 250H930 M60 350H940 M55 450H945 M55 550H945"/>
            <path d="M220 40V610 M360 30V620 M500 25V625 M640 35V615 M780 60V590"/>
          </g>
          <g transform="translate(${tx} ${ty}) scale(${scale})">
            <path d="${southAmerica}" class="map-land-v91"/>
            <path d="${argentinaShape}" class="map-argentina-v91"/>
            <path d="${chileShape}" class="map-chile-v91"/>
            <path d="M 282 66 C 270 104 261 141 258 174 C 254 207 244 241 235 269 C 226 297 218 322 221 348 C 225 377 239 400 252 424 C 266 449 278 473 291 499 C 303 524 313 548 325 574" class="map-andes-v91"/>
            <text x="505" y="145" class="map-country-label-v91">ARGENTINA</text>
            <text x="264" y="340" class="map-country-label-v91 map-country-small">CHILE</text>
            <text x="745" y="205" class="map-ocean-label-v91">ATLANTIC OCEAN</text>
            <text x="40" y="330" class="map-ocean-label-v91">PACIFIC OCEAN</text>
            <path d="${pathFrom(pts)}" class="route-under-v91"/>
            <path d="${pathFrom(pts)}" class="route-line-v91"/>
            ${pts.map(q=>`<g class="local-marker marker-v91 ${q.i===selected?'is-selected':''}" data-i="${q.i}" transform="translate(${q.x} ${q.y})" tabindex="0" role="button" aria-label="${esc(q[0])}">
              <circle r="20" class="marker-halo-v91"/><circle r="12" class="marker-dot-v91"/><text y="5" text-anchor="middle" class="marker-number-v91">${q.i+1}</text>
              <text x="19" y="-15" class="marker-label-v91">${esc(q[0])}</text>
            </g>`).join('')}
          </g>
        </svg>
        <div class="map-v91-topbar"><span><b>Argentina & Chile</b> · המסלול שלך</span><span>10 יעדים · 49 ימים</span></div>
        <div class="local-map-controls map-controls-v91"><button type="button" data-map-zoom="in" aria-label="הגדלה">+</button><button type="button" data-map-zoom="out" aria-label="הקטנה">−</button><button type="button" data-map-zoom="reset" aria-label="איפוס">⌂</button></div>
        <div class="map-route-legend-v91"><i></i><span>מסלול הטיול</span><b>${selected+1}/10</b></div>
        <div class="map-v91-popup" role="dialog" aria-live="polite"><div class="map-popup-num">${p.i+1}</div><div class="map-popup-copy"><strong>${esc(p[0])}</strong><span>${esc(p[3])}</span><small>${esc(p[4])}</small><a href="${mapsUrl(p[1],p[2])}" target="_blank" rel="noopener">פתיחה ב־Google Maps ↗</a></div></div>
        <div class="local-map-note map-note-v91">מפה מקומית · זמינה גם בלי אינטרנט</div>
      </div>`;

      el.querySelectorAll('.local-marker').forEach(m=>{
        const open=()=>{selected=+m.dataset.i;render();};
        m.addEventListener('click',open);m.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}});
      });
      el.querySelectorAll('[data-map-zoom]').forEach(btn=>btn.addEventListener('click',()=>{
        const a=btn.dataset.mapZoom;if(a==='in')zoom=Math.min(2.4,zoom+.2);if(a==='out')zoom=Math.max(1,zoom-.2);if(a==='reset')zoom=1;render();
      }));
    }
    render();
    const fit=document.getElementById('fit-map'); if(fit)fit.addEventListener('click',()=>{zoom=1;selected=0;render();});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
