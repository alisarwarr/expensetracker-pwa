const cacheName = "ExpenseTrackerApp-v1";


const filesToCache = [
    '/',
    '/index.html',
    '/app.js'
];


self.addEventListener("install", (e) => {
    console.log("[Service Worker] has been installed");

    e.waitUntil(
        caches.open(cacheName)
        .then((cache) => {
            console.log("[Service Worker] Caching app shell");
            return cache.addAll(filesToCache);
        })
    )
});


self.addEventListener("activate", (e) => {
    console.log("[Service Worker] has been activated");

    e.waitUntil(
        caches.keys()
        .then((keys) => {
            return Promise.all(keys
                .filter(key => (key !== cacheName))
                .map(key => caches.delete(key))
            )
        })
    )
});


self.addEventListener("fetch", (e) => {
    console.log("fetch event", e);

    e.respondWith(
        caches.match(e.request)
        .then((cache) => {
            return (
                cache || fetch(e.request)
            )
        })
    )
});