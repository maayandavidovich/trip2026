const CACHE = 'travelos-v8-5';
const CORE = [
  './', './index.html', './style.css', './script.js', './my-map.js',
  './places-guide.js', './my-guide.js', './trip.json', './manifest.webmanifest',
  './assets/icons/icon.svg'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('message', event => { if(event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting(); });
self.addEventListener('fetch', event => {
  if(event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if(url.origin !== location.origin) return;
  const isShell = /\.(html|css|js|json|webmanifest)$/i.test(url.pathname) || url.pathname.endsWith('/');
  event.respondWith((async () => {
    if(isShell){
      try{
        const response = await fetch(event.request, {cache:'no-store'});
        const copy = response.clone();
        caches.open(CACHE).then(c => c.put(event.request, copy));
        return response;
      }catch(e){ return caches.match(event.request) || caches.match('./index.html'); }
    }
    const cached = await caches.match(event.request);
    if(cached) return cached;
    try{
      const response = await fetch(event.request);
      const copy=response.clone(); caches.open(CACHE).then(c=>c.put(event.request,copy));
      return response;
    }catch(e){ return caches.match('./index.html'); }
  })());
});
