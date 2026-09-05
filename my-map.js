(function(){
  // Fully local map: no Leaflet, tile servers or external map assets required.
  const places = [
    ['Buenos Aires',-34.6037,-58.3816,'16–18 Oct'],
    ['Iguazú',-25.6953,-54.4367,'18–21 Oct'],
    ['Salta & Jujuy',-24.7821,-65.4232,'21–27 Oct'],
    ['Bariloche',-41.1335,-71.3103,'27 Oct–2 Nov'],
    ['Carretera Austral',-45.5712,-72.0685,'2–8 Nov'],
    ['El Chaltén',-49.3315,-72.8863,'8–14 Nov'],
    ['El Calafate',-50.3370,-72.2648,'14–20 Nov'],
    ['Puerto Natales',-51.7260,-72.5060,'בסיס לפני Torres · לינה מוזמנת'],
    ['Torres del Paine',-50.9423,-73.4068,'21–25 Nov'],
    ['Ushuaia',-54.8019,-68.3030,'26–30 Nov']
  ];

  function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function project(lat,lng){
    const x=70+(lng+75)*6.0;
    const y=55+(lat+20)*7.7;
    return [x,y];
  }
  function mapsUrl(lat,lng){return 'https://www.google.com/maps/search/?api=1&query='+lat+','+lng;}

  function init(){
    const el=document.getElementById('travel-map');
    if(!el) return;
    let zoom=1;
    const baseW=640, baseH=520;
    const pts=places.map((p,i)=>{const [x,y]=project(p[1],p[2]); return {...p,i,x,y};});
    const route=pts.map(p=>p.x+','+p.y).join(' ');

    function render(){
      const ox=(baseW-baseW/zoom)/2, oy=(baseH-baseH/zoom)/2;
      el.innerHTML=`<div class="local-map-shell">
        <svg class="local-map-svg" viewBox="0 0 640 520" role="img" aria-label="מפת מסלול מקומית של דרום אמריקה">
          <defs><filter id="mapShadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="3" stdDeviation="4" flood-opacity=".18"/></filter></defs>
          <g transform="translate(${ox} ${oy}) scale(${zoom})">
            <rect width="640" height="520" rx="20" class="local-water"/>
            <path class="local-land" d="M250 20 C320 10 405 35 470 75 C525 108 558 155 548 205 C538 255 492 285 452 315 C420 340 407 382 382 420 C350 467 311 506 270 520 C238 510 220 480 207 445 C191 402 166 369 160 328 C154 284 178 244 188 201 C198 153 190 105 208 65 C219 42 233 28 250 20Z"/>
            <path class="local-relief" d="M225 70 C210 130 215 185 195 245 C184 278 178 320 193 365 C210 415 230 452 270 490"/>
            <text x="36" y="270" class="local-water-label">Pacific</text><text x="540" y="285" class="local-water-label">Atlantic</text>
            <polyline points="${route}" class="local-route"/>
            ${pts.map(p=>`<g class="local-marker" data-i="${p.i}" transform="translate(${p.x} ${p.y})" tabindex="0" role="button" aria-label="${esc(p[0])}">
              <circle r="15" class="marker-halo"/><circle r="10" class="marker-dot"/><text y="4" text-anchor="middle" class="marker-number">${p.i+1}</text>
              <text x="15" y="-12" class="marker-label">${esc(p[0])}</text>
            </g>`).join('')}
          </g>
        </svg>
        <div class="local-map-controls"><button type="button" data-map-zoom="in">+</button><button type="button" data-map-zoom="out">−</button><button type="button" data-map-zoom="reset">⌂</button></div>
        <div class="local-map-note">מפה מקומית · עובדת גם בלי אינטרנט</div>
        <div class="local-map-popup" hidden></div>
      </div>`;

      el.querySelectorAll('.local-marker').forEach(marker=>{
        const p=pts[+marker.dataset.i];
        const open=()=>{
          const pop=el.querySelector('.local-map-popup');
          pop.innerHTML=`<strong>${esc(p[0])}</strong><span>${esc(p[3])}</span><a href="${mapsUrl(p[1],p[2])}" target="_blank" rel="noopener">פתיחה ב־Google Maps ↗</a>`;
          pop.hidden=false;
        };
        marker.addEventListener('click',open); marker.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' ') {e.preventDefault();open();}});
      });
      el.querySelectorAll('[data-map-zoom]').forEach(btn=>btn.addEventListener('click',()=>{
        const action=btn.dataset.mapZoom;
        if(action==='in') zoom=Math.min(2.2,zoom+.25);
        if(action==='out') zoom=Math.max(1,zoom-.25);
        if(action==='reset') zoom=1;
        render();
      }));
    }
    render();
    const fit=document.getElementById('fit-map');
    if(fit) fit.addEventListener('click',()=>{zoom=1;render();});
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();
