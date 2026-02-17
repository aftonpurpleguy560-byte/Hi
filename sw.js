const cacheName = 'efe-mert-pwa-v1';
const assets = ['./', './index.html', './style.css', './Script.js', './Translations.js', './profil.jpg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});

