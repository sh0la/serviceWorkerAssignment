
self.addEventListener('install', event => {
  let cacheName = 'lorem_v1';
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        cache.addAll([
          'about_us.html',
          'contact_us.html',
          'index.html',
          'staff.html',
          'main.js'
        ]);
      })
      .catch(error => {
         console.log(error);
      })
  )
})