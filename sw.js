const CACHE_NAME = "pwa-cache-v1";
const FILES_TO_CACHE = [
  "index.html",
  "manifest.json",
  "icon.png"
];

// Install - cache files
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

// Activate
self.addEventListener("activate", event => {
  console.log("Service Worker Activated");
});

// Fetch - serve cached files
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});