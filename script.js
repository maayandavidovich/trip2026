/* TravelOS V8.8 — hard cache-bust + correct departure countdown */

(function () {
  var stops = [
    {n:1,name:'Buenos Aires',lat:-34.6037,lon:-58.3816,לילות:2,x:500,y:95},
    {n:2,name:'Iguazú',lat:-25.6953,lon:-54.4367,לילות:3,x:505,y:150},
    {n:3,name:'Salta & Jujuy',lat:-24.7821,lon:-65.4232,לילות:6,x:350,y:86},
    {n:4,name:'Bariloche',lat:-41.1335,lon:-71.3103,לילות:6,x:224,y:221},
    {n:5,name:'Carretera Austral',lat:-45.5712,lon:-72.0685,לילות:6,x:166,y:287},
    {n:6,name:'El Chaltén',lat:-49.3315,lon:-72.8863,לילות:6,x:147,y:326},
    {n:7,name:'El Calafate',lat:-50.3370,lon:-72.2648,לילות:6,x:160,y:358},
    {n:'B',name:'Puerto Natales · Pre-Torres Base',lat:-51.7260,lon:-72.5060,לילות:0,x:139,y:382,base:true},
    {n:8,name:'Torres del Paine',lat:-50.9423,lon:-73.4068,לילות:4,x:126,y:365},
    {n:9,name:'Ushuaia',lat:-54.8019,lon:-68.3030,לילות:4,x:228,y:438},
    {n:10,name:'Buenos Aires · final',lat:-34.6037,lon:-58.3816,לילות:3,x:480,y:140}
  ];
  function esc(v){return String(v).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
  function mapLink(s){return 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(s.lat+','+s.lon);}
  function haversine(a,b){var R=6371,dLat=(b.lat-a.lat)*Math.PI/180,dLon=(b.lon-a.lon)*Math.PI/180;var q=Math.sin(dLat/2)**2+Math.cos(a.lat*Math.PI/180)*Math.cos(b.lat*Math.PI/180)*Math.sin(dLon/2)**2;return R*2*Math.atan2(Math.sqrt(q),Math.sqrt(1-q));}
  function overviewSvg(){
    var path=stops.map(function(s,i){return (i?'L':'M')+s.x+' '+s.y;}).join(' ');
    var dots=stops.map(function(s){
      var anchor=s.n===10?'end':'start', dx=s.n===10?-15:15;
      return '<a href="'+mapLink(s)+'" target="_blank" rel="noopener"><circle class="native-dot" cx="'+s.x+'" cy="'+s.y+'" r="10"><title>'+esc(s.name)+' · '+s.לילות+' לילות</title></circle><text class="native-number" x="'+s.x+'" y="'+s.y+'">'+s.n+'</text><text class="native-label" text-anchor="'+anchor+'" x="'+(s.x+dx)+'" y="'+(s.y+4)+'">'+esc(s.name)+'</text></a>';
    }).join('');
    return '<div class="native-map-shell"><svg viewBox="0 0 640 500" role="img" aria-label="South America trip route">'+
      '<path class="native-land" d="M242 18 C320 10 407 40 466 79 C522 116 559 166 545 211 C531 255 483 278 447 306 C416 331 405 369 381 401 C353 439 313 475 274 486 C241 478 225 454 211 421 C196 383 170 354 165 316 C159 271 182 235 189 195 C197 147 187 97 205 60 C215 40 226 27 242 18Z"/>'+
      '<path class="native-border" d="M188 198 C255 206 326 191 395 169 M170 315 C242 305 310 322 382 300 M208 420 C255 397 304 388 364 396"/>'+
      '<text class="native-water-label" x="18" y="245">Pacific Ocean</text><text class="native-water-label" x="510" y="275">Atlantic Ocean</text>'+
      '<path class="native-route" d="'+path+'"/>'+dots+'</svg><div class="native-map-note">המפה מובנית באתר · לחצי על יעד כדי לפתוח Google Maps</div></div>';
  }
  function miniSvg(s){
    return '<div class="mini-native-map"><svg viewBox="0 0 180 150" role="img" aria-label="Location marker for '+esc(s.name)+'"><path class="native-land" d="M72 7 C102 5 136 24 150 50 C161 72 145 90 129 104 C112 118 106 138 88 144 C71 137 65 121 57 105 C48 87 35 75 38 55 C41 32 53 14 72 7Z"/><path class="native-border" d="M42 67 C77 71 112 62 145 57 M51 104 C82 97 108 107 132 99"/><circle class="mini-map-pin" cx="90" cy="70" r="12"/><circle cx="90" cy="70" r="4" fill="#0d1117"/></svg><div class="mini-map-copy"><strong>'+s.n+'. '+esc(s.name)+'</strong><span>'+s.lat.toFixed(2)+', '+s.lon.toFixed(2)+' · '+s.לילות+' לילות</span><a class="mini-map-link" href="'+mapLink(s)+'" target="_blank" rel="noopener">📍 פתיחה ב־Google Maps</a></div></div>';
  }
  var ov=document.getElementById('overview-map');
  // Static maps are embedded directly in the HTML for iPhone compatibility.
  var total=0,html='<div class="distance-row"><span class="leg-name">1. Buenos Aires (start)</span><span class="leg-km">stay 5 לילות</span></div>';
  for(var i=1;i<stops.length;i++){var km=haversine(stops[i-1],stops[i]);total+=km;html+='<div class="distance-row"><span class="leg-name">'+i+'. '+esc(stops[i-1].name)+' → '+esc(stops[i].name)+'</span><span class="leg-km">~'+Math.round(km).toLocaleString()+' km · stay '+stops[i].לילות+' לילות</span></div>';}
  var totalEl=document.getElementById('dp-total'),legs=document.getElementById('dp-legs');
  if(totalEl)totalEl.textContent='מרחק אווירי משוער: ~'+Math.round(total).toLocaleString()+' km';
  if(legs)legs.innerHTML=html;
})();



(function(){

  var departure=new Date('2026-10-15T22:50:00+03:00');
  var now=new Date();
  var יוםs=Math.max(0,Math.ceil((departure-now)/86400000));
  var יוםsEl=document.getElementById('days-to-go');
  if(יוםsEl)יוםsEl.textContent=יוםs;

  var boxes=[].slice.call(document.querySelectorAll('.check-toggle'));
  var key='maayan-sa-bookings-v2';
  var saved={};
  try{saved=JSON.parse(localStorage.getItem(key)||'{}')}catch(e){}
  boxes.forEach(function(box){
    if(Object.prototype.hasOwnProperty.call(saved,box.dataset.bookingId)) box.checked=!!saved[box.dataset.bookingId];
    box.closest('.check-item').classList.toggle('user-done',box.checked);
    box.addEventListener('change',function(){
      saved[box.dataset.bookingId]=box.checked;
      try{localStorage.setItem(key,JSON.stringify(saved))}catch(e){}
      box.closest('.check-item').classList.toggle('user-done',box.checked);
      update();
    });
  });
  function update(){
    var done=boxes.filter(function(b){return b.checked}).length;
    var pct=boxes.length?Math.round(done/boxes.length*100):0;
    var p=document.getElementById('booking-percent'), f=document.getElementById('booking-progress'), s=document.getElementById('booking-summary');
    if(p)p.textContent=done+' סגור'+(done===1?'':'ים'); if(f)f.style.width=pct+'%'; if(s)s.textContent=done+' סגור'+(done===1?'':'ים')+' · '+(boxes.length-done)+' עדיין דורשים פעולה'; 
    var firstUrgent=boxes.find(function(b){return !b.checked && b.closest('.check-item').classList.contains('urgent')});
    var t=document.getElementById('next-action-title'),n=document.getElementById('next-action-note');
    var main=document.getElementById('booking-summary-main'); if(main) main.textContent=done+' סגור'+(done===1?'':'ים')+' · '+(boxes.length-done)+' עדיין פתוח'+(boxes.length-done===1?'':'ים'); if(firstUrgent){var item=firstUrgent.closest('.check-item');var name=item.querySelector('.check-name');if(t&&name)t.textContent=name.childNodes[0].textContent.trim();if(n)n.textContent='פתחי את ההזמנות כדי לראות בדיוק מה חסר.';}else{if(t)t.textContent='כל ההזמנות הדחופות הושלמו';if(n)n.textContent='השלב הבא הוא לעבור על ההזמנות בעדיפות גבוהה.';}
  }
  update();
})();


/* V2 live trip experience */

(async function () {
  'use strict';

  const DAY = 86400000;
  let trip;
  try {
    trip = await fetch('trip.json', {cache: 'no-store'}).then(r => {
      if (!r.ok) throw new Error('trip.json unavailable');
      return r.json();
    });
  } catch (error) {
    console.warn(error);
    return;
  }

  const now = new Date();
  const start = new Date(trip.tripStart);
  const end = new Date(trip.tripEnd);
  const label = document.getElementById('live-label');
  const value = document.getElementById('live-value');
  const detail = document.getElementById('live-detail');
  const fill = document.getElementById('trip-progress-fill');
  const progressLabel = document.getElementById('trip-progress-label');
  const progressPercent = document.getElementById('trip-progress-percent');
  const legacyDays = document.getElementById('days-to-go');

  const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
  const יוםDiff = (a, b) => Math.ceil((b - a) / DAY);

  if (now < start) {
    const יוםs = Math.max(0, יוםDiff(now, start));
    label.textContent = 'ספירה לאחור ליציאה';
    value.textContent = `${יוםs} ${יוםs === 1 ? 'יום' : 'ימים'} עד היציאה`;
    detail.textContent = trip.departureLabel;
    progressLabel.textContent = 'הכנות לטיול';
    progressPercent.textContent = '0%';
    fill.style.width = '0%';
    if (legacyDays) legacyDays.textContent = יוםs;
  } else if (now <= end) {
    const total = end - start;
    const elapsed = now - start;
    const percent = clamp(Math.round((elapsed / total) * 100), 0, 100);
    const toיוםKey = now.toISOString().slice(0, 10);
    const currentIndex = trip.stops.findIndex(s => toיוםKey >= s.start && toיוםKey <= s.end);
    const current = currentIndex >= 0 ? trip.stops[currentIndex] : null;
    const next = currentIndex >= 0 ? trip.stops[currentIndex + 1] : null;
    label.textContent = `Day ${Math.floor(elapsed / DAY) + 1} of ${Math.ceil(total / DAY)}`;
    value.textContent = current ? `📍 ${current.name}` : 'In transit';
    detail.textContent = next ? `הבא: ${next.name}` : 'Final יוםs in Buenos Aires';
    progressLabel.textContent = 'Trip progress';
    progressPercent.textContent = `${percent}%`;
    fill.style.width = `${percent}%`;
    if (legacyDays) legacyDays.textContent = Math.max(0, יוםDiff(now, end));
  } else {
    label.textContent = 'Adventure complete';
    value.textContent = 'South America 2026 ✓';
    detail.textContent = 'A trip worth remembering';
    progressLabel.textContent = 'Trip progress';
    progressPercent.textContent = '100%';
    fill.style.width = '100%';
    if (legacyDays) legacyDays.textContent = '0';
  }

  document.querySelectorAll('.stop[data-collapsible="true"]').forEach((stop, index) => {
    const header = stop.querySelector('.stop-header');
    const body = stop.querySelector('.stop-body');
    if (!header || !body) return;

    const toggle = () => {
      const collapsed = stop.classList.toggle('is-collapsed');
      header.setAttribute('aria-expanded', String(!collapsed));
      body.setAttribute('aria-hidden', String(collapsed));
    };

    header.addEventListener('click', (event) => {
      if (event.target.closest('a,button,input,label')) return;
      toggle();
    });
    header.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggle();
      }
    });

    if (window.matchMedia('(max-width: 720px)').matches && index > 1) {
      stop.classList.add('is-collapsed');
      header.setAttribute('aria-expanded', 'false');
      body.setAttribute('aria-hidden', 'true');
    }
  });

  document.getElementById('back-to-top')?.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });

  // V8.6: calculate countdown to the actual international departure from TLV on 15.10.2026.
  const departureTarget = new Date('2026-10-15T00:00:00+03:00');
  const daysNode = document.getElementById('days-to-go');
  if (daysNode) {
    const diff = departureTarget.getTime() - Date.now();
    const days = Math.max(0, Math.ceil(diff / 86400000));
    daysNode.textContent = String(days);
  }

  // Keep the countdown accurate when the page stays open overnight.
  const nowMs = Date.now();
  const nextMidnight = new Date();
  nextMidnight.setHours(24, 0, 5, 0);
  setTimeout(() => location.reload(), Math.max(1000, nextMidnight.getTime() - nowMs));
})();


/* ===== V3 interaction layer ===== */
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const searchInput = document.getElementById('site-search');
  const overlay = document.getElementById('search-overlay');
  const results = document.getElementById('search-results');
  const closeSearch = document.getElementById('close-search');
  const themeButton = document.getElementById('theme-toggle');
  const expandButton = document.getElementById('expand-all');

  // Theme preference.
  const savedTheme = localStorage.getItem('maayan-theme');
  if (savedTheme === 'light') body.classList.add('light-theme');
  const syncThemeIcon = () => {
    if (themeButton) themeButton.textContent = body.classList.contains('light-theme') ? '☾' : '☀︎';
  };
  syncThemeIcon();
  themeButton?.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    localStorage.setItem('maayan-theme', body.classList.contains('light-theme') ? 'light' : 'dark');
    syncThemeIcon();
  });

  // Expand/collapse all stops.
  let allExpanded = false;
  expandButton?.addEventListener('click', () => {
    allExpanded = !allExpanded;
    document.querySelectorAll('.stop[data-collapsible="true"]').forEach(stop => {
      const header = stop.querySelector('.stop-header');
      const bodyEl = stop.querySelector('.stop-body');
      stop.classList.toggle('is-collapsed', !allExpanded);
      header?.setAttribute('aria-expanded', String(allExpanded));
      bodyEl?.setAttribute('aria-hidden', String(!allExpanded));
    });
    expandButton.textContent = allExpanded ? 'סגירת הכול' : 'פתיחת הכול';
  });

  // Global search.
  const searchable = [
    ...document.querySelectorAll('.stop'),
    ...document.querySelectorAll('.booking-item')
  ];
  const renderSearch = query => {
    const q = query.trim().toLowerCase();
    if (!q) {
      overlay.hidden = true;
      results.innerHTML = '';
      return;
    }
    const matches = searchable
      .filter(el => (el.dataset.search || el.textContent.toLowerCase()).includes(q))
      .slice(0, 12);

    results.innerHTML = matches.length
      ? matches.map(el => {
          const isStop = el.classList.contains('stop');
          const title = isStop
            ? el.querySelector('.stop-name')?.textContent.trim()
            : el.querySelector('strong,h3,h4')?.textContent.trim() || 'משימת הזמנה';
          const snippet = (el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 150);
          return `<a class="search-result" href="#${el.id}"><strong>${title || 'Result'}</strong><span>${snippet}</span></a>`;
        }).join('')
      : '<div class="empty-search">No matching destinations or bookings.</div>';
    overlay.hidden = false;
  };
  searchInput?.addEventListener('input', e => renderSearch(e.target.value));
  searchInput?.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      overlay.hidden = true;
      searchInput.blur();
    }
  });
  closeSearch?.addEventListener('click', () => {
    overlay.hidden = true;
    searchInput?.focus();
  });
  overlay?.addEventListener('click', e => {
    if (e.target === overlay) overlay.hidden = true;
  });
  results?.addEventListener('click', e => {
    const link = e.target.closest('a');
    if (!link) return;
    overlay.hidden = true;
    const target = document.querySelector(link.getAttribute('href'));
    if (target?.classList.contains('stop')) {
      target.classList.remove('is-collapsed');
      target.querySelector('.stop-header')?.setAttribute('aria-expanded', 'true');
      target.querySelector('.stop-body')?.setAttribute('aria-hidden', 'false');
    }
  });
  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      searchInput?.focus();
    }
  });

  // Booking calendar: click a date to see exactly what is still missing for that date.
  const bookingDates = [...document.querySelectorAll('.booking-date-card')];
  const bookingDetail = document.getElementById('booking-detail');
  const bookingDetailTitle = document.getElementById('booking-detail-title');
  const bookingDetailSummary = document.getElementById('booking-detail-summary');
  const bookingDetailList = document.getElementById('booking-detail-list');
  const bookingDetailClose = document.getElementById('booking-detail-close');
  const bookingSourceItems = [...document.querySelectorAll('#booking-all-items .check-item')];
  const dateNames = Object.fromEntries(bookingDates.map(b => [b.dataset.date, b.querySelector('strong')?.textContent.trim() || '']));
  const formatBookingDate = value => { const [y,m,d]=value.split('-'); return `${Number(d)}.${Number(m)}`; };
  const refreshBookingCalendar = () => {
    bookingDates.forEach(card => {
      const date=card.dataset.date;
      const relevant=bookingSourceItems.filter(item => (item.dataset.dates||'').split(',').includes(date));
      const open=relevant.filter(item => !item.querySelector('input')?.checked).length;
      const count=card.querySelector(`[data-count-for="${date}"]`);
      if(count) count.textContent = open ? `${open} חסר${open===1?'':'ים'}` : '✓ הכל מסודר';
      card.classList.toggle('has-open', open>0);
      card.classList.toggle('all-done', open===0 && relevant.length>0);
    });
  };
  const openBookingDate = date => {
    const relevant=bookingSourceItems.filter(item => (item.dataset.dates||'').split(',').includes(date));
    bookingDates.forEach(c => c.classList.toggle('selected', c.dataset.date===date));
    if(bookingDetailTitle) bookingDetailTitle.textContent = `${formatBookingDate(date)} · ${dateNames[date] || ''}`;
    const open=relevant.filter(item => !item.querySelector('input')?.checked);
    if(bookingDetailSummary) bookingDetailSummary.innerHTML = open.length
      ? `<strong>${open.length} ${open.length===1?'דבר עדיין חסר':'דברים עדיין חסרים'}</strong> לתאריך הזה.`
      : '<strong>הכול מסודר ✓</strong> אין כרגע משימות פתוחות לתאריך הזה.';
    if(bookingDetailList) bookingDetailList.innerHTML = relevant.length ? relevant.map(item => {
      const box=item.querySelector('input');
      const name=item.querySelector('.check-name')?.cloneNode(true);
      if(name){ const small=name.querySelector('small'); if(small) small.remove(); }
      const title=(name?.textContent||'').trim();
      const detail=item.querySelector('small')?.textContent.trim()||'';
      return `<label class="booking-detail-item ${box?.checked?'done':''}"><input class="check-toggle" data-booking-id="${box?.dataset.bookingId||''}" type="checkbox" ${box?.checked?'checked':''}><span><strong>${title}</strong><small>${detail}</small></span><b>${box?.checked?'✓':'חסר'}</b></label>`;
    }).join('') : '<div class="booking-empty">אין משימות מוגדרות לתאריך הזה.</div>';
    if(bookingDetail){ bookingDetail.hidden=false; bookingDetail.scrollIntoView({behavior:'smooth',block:'nearest'}); }
    bookingDetailList?.querySelectorAll('input.check-toggle').forEach(copy => copy.addEventListener('change', () => {
      const original=bookingSourceItems.find(item => item.dataset.bookingId===copy.dataset.bookingId)?.querySelector('input');
      if(original){ original.checked=copy.checked; original.dispatchEvent(new Event('change',{bubbles:true})); }
      openBookingDate(date); refreshBookingCalendar();
    }));
  };
  bookingDates.forEach(card => card.addEventListener('click', () => openBookingDate(card.dataset.date)));
  bookingDetailClose?.addEventListener('click', () => { if(bookingDetail) bookingDetail.hidden=true; bookingDates.forEach(c=>c.classList.remove('selected')); });
  refreshBookingCalendar();

  // Booking filters.
  const bookingItems = [...document.querySelectorAll('.booking-item')];
  const filterCount = document.getElementById('filter-count');
  const updateBookingFilter = filter => {
    let shown = 0;
    bookingItems.forEach(item => {
      const checkbox = item.querySelector('input[type="checkbox"]');
      const done = Boolean(checkbox?.checked);
      const urgent = item.dataset.urgent === 'true';
      const show = filter === 'all' || (filter === 'done' && done) ||
        (filter === 'open' && !done) || (filter === 'urgent' && urgent && !done);
      item.classList.toggle('is-filtered-out', !show);
      if (show) shown += 1;
    });
    if (filterCount) filterCount.textContent = `${shown} shown`;
  };
  document.querySelectorAll('.booking-filter').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.booking-filter').forEach(b => b.classList.remove('active'));
      button.classList.add('active');
      updateBookingFilter(button.dataset.filter);
    });
  });
  bookingItems.forEach(item => item.querySelector('input[type="checkbox"]')?.addEventListener('change', () => {
    const active = document.querySelector('.booking-filter.active')?.dataset.filter || 'all';
    updateBookingFilter(active);
  }));
  updateBookingFilter('all');

  // Mark current/past journey stops and current itinerary card.
  const toיום = new Date().toISOString().slice(0, 10);
  document.querySelectorAll('.journey-stop').forEach((item, index) => {
    const start = item.dataset.start;
    const end = item.dataset.end;
    if (toיום > end) item.classList.add('is-past');
    if (toיום >= start && toיום <= end) {
      item.classList.add('is-current');
      document.getElementById(`stop-${index + 1}`)?.classList.add('is-current-stop');
    }
  });

  // Highlight active navigation section while scrolling.
  const navLinks = [...document.querySelectorAll('.v2-nav a,.quick-nav a')];
  const targets = navLinks
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);
  const observer = new IntersectionObserver(entries => {
    const active = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio)[0];
    if (!active) return;
    navLinks.forEach(link => {
      const on = link.getAttribute('href') === `#${active.target.id}`;
      link.classList.toggle('active-link', on);
    });
  }, {rootMargin:'-25% 0px -65% 0px', threshold:[0,.1,.4]});
  targets.forEach(target => observer.observe(target));
});


/* V8.4 — local booking + flight import center */
document.addEventListener('DOMContentLoaded', () => {
  const KEY='travelos-imported-reservations-v1';
  let state={bookings:[],flights:[]};
  try{state=JSON.parse(localStorage.getItem(KEY)||'{"bookings":[],"flights":[]}')}catch(e){}
  state.bookings=Array.isArray(state.bookings)?state.bookings:[];
  state.flights=Array.isArray(state.flights)?state.flights:[];

  const panel=document.getElementById('import-panel');
  const title=document.getElementById('import-panel-title');
  const text=document.getElementById('import-text');
  const msg=document.getElementById('import-message');
  const file=document.getElementById('import-file');
  let importType='booking';

  const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(state));}catch(e){};render();};

  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const iso=(s)=>{
    if(!s)return '';
    const m=String(s).match(/(20\d{2})[-/.](\d{1,2})[-/.](\d{1,2})|(\d{1,2})[-/.](\d{1,2})[-/.](20\d{2})/);
    if(!m)return '';
    const y=m[1]||m[6], mo=m[2]||m[5], d=m[3]||m[4];
    return `${y}-${String(mo).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
  };
  const parseDatePair=(raw)=>{
    const a=[...String(raw||'').matchAll(/(?:check[- ]?in|arrival|כניסה|הגעה)[^\d]{0,30}(\d{1,2}[\/.-]\d{1,2}[\/.-]20\d{2}|20\d{2}[\/.-]\d{1,2}[\/.-]\d{1,2})/ig)][0];
    const b=[...String(raw||'').matchAll(/(?:check[- ]?out|departure|יציאה|עזיבה)[^\d]{0,30}(\d{1,2}[\/.-]\d{1,2}[\/.-]20\d{2}|20\d{2}[\/.-]\d{1,2}[\/.-]\d{1,2})/ig)][0];
    return {start:iso(a?.[1]),end:iso(b?.[1])};
  };
  const parseBooking=(raw)=>{
    const dates=parseDatePair(raw);
    const hotel=(raw.match(/(?:hotel|property|accommodation|מלון|נכס)\s*[:\-]\s*(.+)/i)||[])[1] ||
      (raw.match(/(?:booking\.com|reservation)\s*[:\-]\s*(.+)/i)||[])[1] || 'לינה שיובאה';
    const conf=(raw.match(/(?:confirmation|reservation)\s*(?:number|no\.?|#)?\s*[:\-]?\s*([A-Z0-9\-]{5,})/i)||[])[1] || '';
    const city=(raw.match(/(?:city|עיר)\s*[:\-]\s*([^\n,]+)/i)||[])[1] || '';
    return {id:'b-'+Date.now(),hotel:hotel.trim().slice(0,120),city:city.trim(),start:dates.start,end:dates.end,confirmation:conf,source:'import'};
  };
  const parseFlight=(raw)=>{
    const dates=iso((raw.match(/(?:date|flight date|תאריך)\s*[:\-]\s*([0-9./-]+)/i)||[])[1]) ||
      iso((raw.match(/(20\d{2}[-/.]\d{1,2}[-/.]\d{1,2})/)||[])[1]);
    const route=(raw.match(/(?:route|מסלול)\s*[:\-]\s*([A-Z]{3}\s*(?:→|->|-)\s*[A-Z]{3})/i)||[])[1] || 
      ((raw.match(/\b([A-Z]{3})\b\s*(?:→|->|-)\s*\b([A-Z]{3})\b/)||[]).slice(1,3).join(' → '));
    const flightNo=(raw.match(/(?:flight|טיסה)\s*(?:number|no\.?|#)?\s*[:\-]?\s*([A-Z]{1,3}\s?\d{1,5})/i)||[])[1] || '';
    const airline=(raw.match(/(?:airline|חברת תעופה)\s*[:\-]\s*(.+)/i)||[])[1] || '';
    const time=(raw.match(/\b([01]?\d|2[0-3]):[0-5]\d\b/)||[])[0] || '';
    return {id:'f-'+Date.now(),date:dates,route:route||'טיסה ללא מסלול',flightNo,airline:airline.trim(),time,source:'import'};
  };
  const parseContent=(raw,type)=>{
    const s=String(raw||'').trim();
    if(!s)return null;
    try{
      const j=JSON.parse(s);
      if(j.type==='booking'||type==='booking'&&j.hotel){return {...j,id:j.id||'b-'+Date.now()};}
      if(j.type==='flight'||type==='flight'&&j.route){return {...j,id:j.id||'f-'+Date.now()};}
      if(Array.isArray(j.bookings)||Array.isArray(j.flights)) return j;
    }catch(e){}
    return type==='booking'?parseBooking(s):parseFlight(s);
  };

  const render=()=>{
    const bc=document.getElementById('imported-bookings-count'),fc=document.getElementById('imported-flights-count'),list=document.getElementById('imported-list');
    if(bc)bc.textContent=state.bookings.length;
    if(fc)fc.textContent=state.flights.length;
    if(!list)return;
    const b=state.bookings.map(x=>`<div class="imported-item"><span class="type">🏨</span><div><strong>${esc(x.hotel||'לינה')}</strong><small>${esc(x.city||'')} ${esc(x.start||'')} → ${esc(x.end||'')} ${x.confirmation?'· אישור '+esc(x.confirmation):''}</small></div><button data-remove="b" data-id="${esc(x.id)}">הסרה</button></div>`).join('');
    const f=state.flights.map(x=>`<div class="imported-item"><span class="type">✈️</span><div><strong>${esc(x.route||'טיסה')} ${x.flightNo?'· '+esc(x.flightNo):''}</strong><small>${esc(x.date||'')} ${esc(x.time||'')} ${esc(x.airline||'')}</small></div><button data-remove="f" data-id="${esc(x.id)}">הסרה</button></div>`).join('');
    list.innerHTML=(b+f)||'<div class="sync-note">עדיין לא יובאו הזמנות או טיסות. הוסיפי אישור כדי שהן יופיעו כאן.</div>';
    list.querySelectorAll('button[data-remove]').forEach(btn=>btn.addEventListener('click',()=>{const k=btn.dataset.remove==='b'?'bookings':'flights';state[k]=state[k].filter(x=>x.id!==btn.dataset.id);save();}));
  };
  const open=(type)=>{
    importType=type;
    if(title)title.textContent=type==='booking'?'ייבוא הזמנת Booking.com':'ייבוא אישור טיסה';
    if(text)text.value='';
    if(msg)msg.textContent='אפשר להדביק טקסט מהאימייל או לייבא JSON/CSV/ICS.';
    if(panel)panel.hidden=false;
    panel?.scrollIntoView({behavior:'smooth',block:'nearest'});
  };
  document.querySelectorAll('[data-import-type]').forEach(b=>b.addEventListener('click',()=>open(b.dataset.importType)));
  document.getElementById('import-close')?.addEventListener('click',()=>{if(panel)panel.hidden=true;});
  document.getElementById('import-template')?.addEventListener('click',()=>{
    const sample=importType==='booking'
      ? 'Hotel: Example Hotel\\nCity: Bariloche\\nCheck-in: 01/11/2026\\nCheck-out: 04/11/2026\\nConfirmation number: ABC12345'
      : 'Airline: Example Air\\nRoute: AEP → USH\\nDate: 21/10/2026\\nFlight: XX123\\nTime: 18:30';
    if(text)text.value=sample;
    if(msg)msg.textContent='אפשר להחליף את הדוגמה בפרטי האישור שלך וללחוץ "ייבוא ועדכון".';
  });
  file?.addEventListener('change',async()=>{
    const f=file.files?.[0]; if(!f)return;
    const raw=await f.text();
    if(text)text.value=raw;
    if(msg)msg.textContent=`נטען: ${f.name}`;
  });
  document.getElementById('import-save')?.addEventListener('click',()=>{
    const raw=text?.value||'';
    const parsed=parseContent(raw,importType);
    if(!parsed){if(msg)msg.textContent='לא הצלחתי לזהות פרטים. נסי להדביק את טקסט האישור המלא.';return;}
    if(parsed.bookings||parsed.flights){
      if(Array.isArray(parsed.bookings))state.bookings.push(...parsed.bookings.map(x=>({...x,id:x.id||'b-'+Date.now()+Math.random()})));
      if(Array.isArray(parsed.flights))state.flights.push(...parsed.flights.map(x=>({...x,id:x.id||'f-'+Date.now()+Math.random()})));
    }else if(importType==='booking') state.bookings.push(parsed);
    else state.flights.push(parsed);
    save();
    if(msg)msg.textContent='הייבוא הצליח ✓ הנתונים נשמרו מקומית.';
    if(text)text.value='';
  });
  render();
});
