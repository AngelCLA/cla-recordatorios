const CACHE_NAME = 'recordatorios-v1';
const urlsToCache = [
  './',
  './index.html'
];

// Instalación - cachear solo archivos locales
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

// Activación - limpiar cachés antiguos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch - estrategia Network First para CDNs, Cache First para archivos locales
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // Para CDNs externos (como Tailwind), usar Network First
  if (url.origin !== location.origin) {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          // Si falla la red, intentar cache
          return caches.match(event.request);
        })
    );
    return;
  }
  
  // Para archivos locales, usar Cache First
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request).then(response => {
          // No cachear si no es una respuesta válida
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clonar y guardar en caché
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
          
          return response;
        });
      })
      .catch(() => caches.match('./index.html'))
  );
});