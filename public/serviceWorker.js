/* eslint-disable no-restricted-globals */
const CACHE_NAME = 'novanjunaedi-v1';
const urlsToCache = [
  '/',
  '/asset-manifest.json',
  '/favicon.ico',
  '/index.html',
  '/logo192.png',
  '/logo512.png',
  '/manifest.json',
  '/robots.txt',
];
self.addEventListener('install', (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      }),
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => Promise.all(
      cacheNames.map((cacheName) => {
        if (cacheName !== CACHE_NAME && CACHE_NAME.startsWith('novanjunaedi-v')) {
          console.log('ServiceWorker: old cache deleted');
          return caches.delete(cacheName);
        }
        return console.log('New cache has been added.');
      }),
    )),
  );
});
