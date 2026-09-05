
(function () {
  var stops = [
    {n:1,name:'Buenos Aires',lat:-34.60,lon:-58.38,nights:5,x:500,y:95},
    {n:2,name:'Ushuaia',lat:-54.81,lon:-68.31,nights:3,x:228,y:438},
    {n:3,name:'El Calafate',lat:-50.34,lon:-72.26,nights:4,x:160,y:358},
    {n:4,name:'El Chaltén',lat:-49.33,lon:-72.89,nights:7,x:147,y:326},
    {n:5,name:'Puerto Natales',lat:-51.73,lon:-72.51,nights:3,x:147,y:382},
    {n:6,name:'Torres del Paine',lat:-50.94,lon:-73.41,nights:4,x:126,y:365},
    {n:7,name:'Carretera Austral',lat:-47.50,lon:-72.50,nights:8,x:166,y:287},
    {n:8,name:'Pucón',lat:-39.28,lon:-71.98,nights:4,x:210,y:190},
    {n:9,name:'Bariloche',lat:-41.13,lon:-71.31,nights:3,x:224,y:221},
    {n:10,name:'Iguazú',lat:-25.70,lon:-54.44,nights:2,x:505,y:95},
    {n:11,name:'Salta',lat:-24.79,lon:-65.41,nights:2,x:340,y:86},
    {n:12,name:'Buenos Aires · final',lat:-34.60,lon:-58.38,nights:2,x:480,y:140}
  ];
  function esc(v){return String(v).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
  function mapLink(s){return 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(s.lat+','+s.lon);}
  function haversine(a,b){var R=6371,dLat=(b.lat-a.lat)*Math.PI/180,dLon=(b.lon-a.lon)*Math.PI/180;var q=Math.sin(dLat/2)**2+Math.cos(a.lat*Math.PI/180)*Math.cos(b.lat*Math.PI/180)*Math.sin(dLon/2)**2;return R*2*Math.atan2(Math.sqrt(q),Math.sqrt(1-q));}
  function overviewSvg(){
    var path=stops.map(function(s,i){return (i?'L':'M')+s.x+' '+s.y;}).join(' ');
    var dots=stops.map(function(s){
      var anchor=s.n===10?'end':'start', dx=s.n===10?-15:15;
      return '<a href="'+mapLink(s)+'" target="_blank" rel="noopener"><circle class="native-dot" cx="'+s.x+'" cy="'+s.y+'" r="10"><title>'+esc(s.name)+' · '+s.nights+' nights</title></circle><text class="native-number" x="'+s.x+'" y="'+s.y+'">'+s.n+'</text><text class="native-label" text-anchor="'+anchor+'" x="'+(s.x+dx)+'" y="'+(s.y+4)+'">'+esc(s.name)+'</text></a>';
    }).join('');
    return '<div class="native-map-shell"><svg viewBox="0 0 640 500" role="img" aria-label="South America trip route">'+
      '<path class="native-land" d="M242 18 C320 10 407 40 466 79 C522 116 559 166 545 211 C531 255 483 278 447 306 C416 331 405 369 381 401 C353 439 313 475 274 486 C241 478 225 454 211 421 C196 383 170 354 165 316 C159 271 182 235 189 195 C197 147 187 97 205 60 C215 40 226 27 242 18Z"/>'+
      '<path class="native-border" d="M188 198 C255 206 326 191 395 169 M170 315 C242 305 310 322 382 300 M208 420 C255 397 304 388 364 396"/>'+
      '<text class="native-water-label" x="18" y="245">Pacific Ocean</text><text class="native-water-label" x="510" y="275">Atlantic Ocean</text>'+
      '<path class="native-route" d="'+path+'"/>'+dots+'</svg><div class="native-map-note">Built into this file · tap a stop to open Google Maps</div></div>';
  }
  function miniSvg(s){
    return '<div class="mini-native-map"><svg viewBox="0 0 180 150" role="img" aria-label="Location marker for '+esc(s.name)+'"><path class="native-land" d="M72 7 C102 5 136 24 150 50 C161 72 145 90 129 104 C112 118 106 138 88 144 C71 137 65 121 57 105 C48 87 35 75 38 55 C41 32 53 14 72 7Z"/><path class="native-border" d="M42 67 C77 71 112 62 145 57 M51 104 C82 97 108 107 132 99"/><circle class="mini-map-pin" cx="90" cy="70" r="12"/><circle cx="90" cy="70" r="4" fill="#0d1117"/></svg><div class="mini-map-copy"><strong>'+s.n+'. '+esc(s.name)+'</strong><span>'+s.lat.toFixed(2)+', '+s.lon.toFixed(2)+' · '+s.nights+' nights</span><a class="mini-map-link" href="'+mapLink(s)+'" target="_blank" rel="noopener">📍 Open in Google Maps</a></div></div>';
  }
  var ov=document.getElementById('overview-map');
  // Static maps are embedded directly in the HTML for iPhone compatibility.
  var total=0,html='<div class="distance-row"><span class="leg-name">1. Buenos Aires (start)</span><span class="leg-km">stay 5 nights</span></div>';
  for(var i=1;i<stops.length;i++){var km=haversine(stops[i-1],stops[i]);total+=km;html+='<div class="distance-row"><span class="leg-name">'+i+'. '+esc(stops[i-1].name)+' → '+esc(stops[i].name)+'</span><span class="leg-km">~'+Math.round(km).toLocaleString()+' km · stay '+stops[i].nights+' nights</span></div>';}
  var totalEl=document.getElementById('dp-total'),legs=document.getElementById('dp-legs');
  if(totalEl)totalEl.textContent='Total straight-line distance: ~'+Math.round(total).toLocaleString()+' km';
  if(legs)legs.innerHTML=html;
})();



(function(){

  var departure=new Date('2026-10-15T22:50:00+03:00');
  var now=new Date();
  var days=Math.max(0,Math.ceil((departure-now)/86400000));
  var daysEl=document.getElementById('days-to-go');
  if(daysEl)daysEl.textContent=days;

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
    if(p)p.textContent=pct+'%'; if(f)f.style.width=pct+'%'; if(s)s.textContent=done+' of '+boxes.length+' completed';
    var firstUrgent=boxes.find(function(b){return !b.checked && b.closest('.check-item').classList.contains('urgent')});
    var t=document.getElementById('next-action-title'),n=document.getElementById('next-action-note');
    if(firstUrgent){var item=firstUrgent.closest('.check-item');var name=item.querySelector('.check-name');if(t&&name)t.textContent=name.childNodes[0].textContent.trim();if(n)n.textContent='An urgent item is still incomplete. Open the bookings section for details.';}else{if(t)t.textContent='All urgent items are complete';if(n)n.textContent='The next step is to review the high-priority bookings.';}
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
  const dayDiff = (a, b) => Math.ceil((b - a) / DAY);

  if (now < start) {
    const days = Math.max(0, dayDiff(now, start));
    label.textContent = 'Departure countdown';
    value.textContent = `${days} ${days === 1 ? 'day' : 'days'} to go`;
    detail.textContent = trip.departureLabel;
    progressLabel.textContent = 'Pre-trip planning';
    progressPercent.textContent = '0%';
    fill.style.width = '0%';
    if (legacyDays) legacyDays.textContent = days;
  } else if (now <= end) {
    const total = end - start;
    const elapsed = now - start;
    const percent = clamp(Math.round((elapsed / total) * 100), 0, 100);
    const todayKey = now.toISOString().slice(0, 10);
    const currentIndex = trip.stops.findIndex(s => todayKey >= s.start && todayKey <= s.end);
    const current = currentIndex >= 0 ? trip.stops[currentIndex] : null;
    const next = currentIndex >= 0 ? trip.stops[currentIndex + 1] : null;
    label.textContent = `Day ${Math.floor(elapsed / DAY) + 1} of ${Math.ceil(total / DAY)}`;
    value.textContent = current ? `📍 ${current.name}` : 'In transit';
    detail.textContent = next ? `Next: ${next.name}` : 'Final days in Buenos Aires';
    progressLabel.textContent = 'Trip progress';
    progressPercent.textContent = `${percent}%`;
    fill.style.width = `${percent}%`;
    if (legacyDays) legacyDays.textContent = Math.max(0, dayDiff(now, end));
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
    expandButton.textContent = allExpanded ? 'Collapse all' : 'Expand all';
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
            : el.querySelector('strong,h3,h4')?.textContent.trim() || 'Booking item';
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
  const today = new Date().toISOString().slice(0, 10);
  document.querySelectorAll('.journey-stop').forEach((item, index) => {
    const start = item.dataset.start;
    const end = item.dataset.end;
    if (today > end) item.classList.add('is-past');
    if (today >= start && today <= end) {
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
