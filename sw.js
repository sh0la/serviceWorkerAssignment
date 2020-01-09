const cacheName = 'v1';
const CacheFiles = [
  './about_us.html',
  './contact_us.html',
  './index.html',
  './staff.html',
  './main.js',
  './styles/about_us.css',
  './styles/contact_us.css',
  './styles/header.css',
  './styles/index.css',
  './styles/normalize.css',
  './styles/staff.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        cache.addAll(CacheFiles);
      })
      .catch(error => {
         console.log(error);
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            return caches.delete(cache);
          };
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response
        };

        return fetch(event.request)
      })
      .catch(err => {
        console.log(err)
      })
  );
});