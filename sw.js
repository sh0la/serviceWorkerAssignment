let cacheName = 'lorem_v22';

self.addEventListener('install', event => {
  
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        cache.addAll([
          'about_us.html',
          'contact_us.html',
          'index.html',
          'staff.html',
          'main.js',
        ]);
      })
      .catch(error => {
         console.log(error);
      })
  )
})


self.addEventListener('fetch', event => {

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) return response;
        return fetch(event.request)
      })
  )
})

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