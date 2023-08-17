// Programa Detallado de JavaScript APIs y Funcionalidades

// API Date: Trabaja con fechas y horas
const currentDate = new Date();
console.log("Fecha actual:", currentDate);
console.log("Año actual:", currentDate.getFullYear());
console.log("Mes actual:", currentDate.getMonth()); // Meses comienzan desde 0 (enero=0, febrero=1, ...)
console.log("Día actual:", currentDate.getDate());
console.log("Hora actual:", currentDate.getHours());
console.log("Minuto actual:", currentDate.getMinutes());

// Local Storage: Almacena datos en el navegador
localStorage.setItem("username", "john_doe");
console.log("Username:", localStorage.getItem("username"));

// Session Storage: Almacena datos en la sesión actual del navegador
sessionStorage.setItem("theme", "dark");
console.log("Tema actual:", sessionStorage.getItem("theme"));

// Drag and Drop API: Permite arrastrar y soltar elementos
const draggableElement = document.getElementById("draggable");
const dropZone = document.getElementById("drop-zone");

draggableElement.addEventListener("dragstart", e => {
  e.dataTransfer.setData("text/plain", e.target.id);
});

dropZone.addEventListener("dragover", e => {
  e.preventDefault();
  dropZone.classList.add("dragover");
});

dropZone.addEventListener("dragleave", e => {
  e.preventDefault();
  dropZone.classList.remove("dragover");
});

dropZone.addEventListener("drop", e => {
  e.preventDefault();
  dropZone.classList.remove("dragover");
  const elementId = e.dataTransfer.getData("text/plain");
  const element = document.getElementById(elementId);
  dropZone.appendChild(element);
});

// Geolocalización API: Obtiene la ubicación del usuario
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(position => {
    console.log("Latitud:", position.coords.latitude);
    console.log("Longitud:", position.coords.longitude);
  }, error => {
    console.error("Error en la geolocalización:", error);
  });
} else {
  console.error("Geolocalización no disponible.");
}

// History API: Manipula el historial del navegador
history.pushState(null, null, "nueva_pagina.html"); // Cambia la URL sin recargar la página
console.log("URL actual:", window.location.href);

// FileReader API: Lee archivos desde el sistema del usuario
const fileInput = document.getElementById("file-input");
fileInput.addEventListener("change", e => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = function() {
    console.log("Contenido del archivo:", reader.result);
  };
  reader.readAsText(file);
});

// IndexedDB API: Almacena grandes cantidades de datos en el navegador
const request = indexedDB.open("mi_base_de_datos", 2);

request.onupgradeneeded = e => {
  const db = e.target.result;
  db.createObjectStore("personas", { keyPath: "id" }); // Crea un almacén de objetos "personas"
};

request.onsuccess = e => {
  const db = e.target.result;
  const transaction = db.transaction(["personas"], "readwrite");
  const objectStore = transaction.objectStore("personas");
  const persona = { id: 1, nombre: "Juan", edad: 30 };
  const addRequest = objectStore.add(persona); // Agrega una persona al almacén

  addRequest.onsuccess = e => {
    console.log("Persona añadida a la base de datos:", persona);
  };

  addRequest.onerror = e => {
    console.error("Error al añadir la persona:", addRequest.error);
  };
};

request.onerror = e => {
  console.error("Error al abrir la base de datos:", request.error);
};

// Match Media API: Verifica condiciones de medios
const mediaQuery = window.matchMedia("(max-width: 768px)");
if (mediaQuery.matches) {
  console.log("La pantalla es pequeña");
} else {
  console.log("La pantalla es grande");
}

// Intersection Observer API: Observa la visibilidad de elementos en la pantalla
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Elemento visible:", entry.target);
    }
  });
});

const targetElement = document.getElementById("target");
observer.observe(targetElement);

// Lazy Loading: Carga de imágenes y contenido bajo demanda
const lazyImages = document.querySelectorAll(".lazy-image");
const imageObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const lazyImage = entry.target;
      lazyImage.src = lazyImage.dataset.src;
      lazyImage.classList.remove("lazy-image");
      imageObserver.unobserve(lazyImage);
    }
  });
});

lazyImages.forEach(image => {
  imageObserver.observe(image);
});

// Notificaciones API: Muestra notificaciones en el sistema
if ("Notification" in window) {
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      new Notification("¡Hola!", {
        body: "Bienvenido a nuestra página."
      });
    }
  });
}
