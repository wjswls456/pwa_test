self.addEventListener('install', event => {
    console.log('Service Worker installing...');
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
    console.log('Service Worker activated!');
});

self.addEventListener('fetch', event => {
    console.log('Fetching:', event.request.url);
});
