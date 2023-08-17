// Resumen Completo sobre Caché en Aplicaciones Web

// Registro de un Service Worker para controlar el caché.
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js").then(registration => {
      console.log("Service Worker registrado con éxito:", registration);
    }).catch(error => {
      console.error("Error al registrar el Service Worker:", error);
    });
  }
  
  // Ejemplo de contenido para "service-worker.js":
  // Este Service Worker se encargará de manejar el caché de recursos.
  
  const CACHE_NAME = "my-cache-v1";
  
  self.addEventListener("install", event => {
    console.log("Service Worker instalado.");
  
    // Cachear los recursos necesarios durante la instalación.
    event.waitUntil(
      caches.open(CACHE_NAME).then(cache => {
        return cache.addAll([
          "/",
          "index.html",
          "styles.css",
          "script.js",
          "image.jpg"
          // ...otros recursos
        ]);
      })
    );
  });
  
  self.addEventListener("activate", event => {
    console.log("Service Worker activado.");
  
    // Limpiar cachés antiguos durante la activación.
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });
  
  self.addEventListener("fetch", event => {
    console.log("Petición fetch interceptada:", event.request.url);
  
    // Intentar responder con un recurso desde el caché.
    event.respondWith(
      caches.match(event.request).then(response => {
        // Si se encuentra en caché, retornar la respuesta en caché.
        if (response) {
          return response;
        }
  
        // Si no está en caché, hacer la petición a la red.
        return fetch(event.request);
      })
    );
  });
  
  // Nota: Puedes personalizar y ajustar el caché de acuerdo a tus necesidades.
  