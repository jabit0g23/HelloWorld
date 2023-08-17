// Resumen Completo de Web Workers y sus Tipos

// Dedicated Worker: Un worker dedicado que se ejecuta en un hilo separado.
// Puede ser utilizado para realizar tareas intensivas en segundo plano sin bloquear la interfaz de usuario.
const dedicatedWorker = new Worker("dedicated-worker.js");

dedicatedWorker.postMessage("Mensaje desde el hilo principal.");

dedicatedWorker.onmessage = event => {
  console.log("Mensaje recibido desde el Dedicated Worker:", event.data);
};

// Ejemplo de contenido para "dedicated-worker.js":
// self.onmessage = event => {
//   const messageFromMain = event.data;
//   const response = "Respuesta desde el Dedicated Worker: " + messageFromMain;
//   self.postMessage(response);
// };

// Shared Worker: Un worker compartido que puede ser accedido por múltiples páginas.
// Útil para colaboración en tiempo real o compartir datos entre pestañas.
const sharedWorker = new SharedWorker("shared-worker.js");

sharedWorker.port.postMessage("Mensaje desde el hilo principal al Shared Worker.");

sharedWorker.port.onmessage = event => {
  console.log("Mensaje recibido desde el Shared Worker:", event.data);
};

// Ejemplo de contenido para "shared-worker.js":
// self.onconnect = event => {
//   const port = event.ports[0];
//   port.onmessage = event => {
//     const messageFromMain = event.data;
//     const response = "Respuesta desde el Shared Worker: " + messageFromMain;
//     port.postMessage(response);
//   };
// };

// Service Worker: Un worker especial que actúa como intermediario entre la aplicación y la red.
// Se utiliza para cachear recursos, realizar notificaciones push, entre otros.
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js").then(registration => {
    console.log("Service Worker registrado con éxito:", registration);
  }).catch(error => {
    console.error("Error al registrar el Service Worker:", error);
  });
}

// Ejemplo de contenido para "service-worker.js":
// self.addEventListener("install", event => {
//   console.log("Service Worker instalado.");
// });

// self.addEventListener("activate", event => {
//   console.log("Service Worker activado.");
// });

// self.addEventListener("fetch", event => {
//   console.log("Petición fetch interceptada:", event.request.url);
// });

// Nota: Los ejemplos de Service Worker pueden incluir caché, notificaciones push, etc.

// Abstract Worker: No es un término oficial, pero puede referirse al concepto de usar funciones worker-like sin archivo externo.
// Útil para tareas sencillas que no requieren un archivo independiente.
const abstractWorker = new Worker(URL.createObjectURL(new Blob([`
  self.onmessage = event => {
    const result = event.data * 2;
    self.postMessage(result);
  };
`])));

abstractWorker.postMessage(5);

abstractWorker.onmessage = event => {
  console.log("Resultado del Abstract Worker:", event.data);
};
    