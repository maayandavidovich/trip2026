(function(){
  const places = [
    ['Buenos Aires','-34.6037','-58.3816','16–18 Oct'],
    ['Iguazú','-25.6953','-54.4367','18–21 Oct'],
    ['Salta & Jujuy','-24.7821','-65.4232','21–27 Oct'],
    ['Bariloche','-41.1335','-71.3103','27 Oct–2 Nov'],
    ['Carretera Austral','-45.5712','-72.0685','2–8 Nov'],
    ['El Chaltén','-49.3315','-72.8863','8–14 Nov'],
    ['El Calafate','-50.3370','-72.2648','14–20 Nov'],
    ['Torres del Paine','-50.9423','-73.4068','21–25 Nov'],
    ['Ushuaia','-54.8019','-68.3030','26–30 Nov'],
    ['Buenos Aires','-34.6037','-58.3816','1–4 Dec']
  ];
  function init(){
    const el=document.getElementById('travel-map');
    if(!el || typeof L==='undefined') return;
    const map=L.map(el,{scrollWheelZoom:false}).setView([-38,-62],4);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'© OpenStreetMap contributors'}).addTo(map);
    const latlngs=[];
    places.forEach((p,i)=>{
      const lat=+p[1],lng=+p[2]; latlngs.push([lat,lng]);
      const marker=L.marker([lat,lng]).addTo(map);
      marker.bindPopup('<strong>'+p[0]+'</strong><br>'+p[3]+'<br><a target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query='+lat+','+lng+'">Google Maps ↗</a>');
    });
    L.polyline(latlngs,{weight:3}).addTo(map);
    map.fitBounds(latlngs,{padding:[25,25]});
    const fit=document.getElementById('fit-map');
    if(fit) fit.addEventListener('click',()=>map.fitBounds(latlngs,{padding:[25,25]}));
    setTimeout(()=>map.invalidateSize(),250);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();
