// AJAX con Axios

// Axios es una biblioteca de JavaScript que simplifica la realización de solicitudes HTTP.
// Proporciona una interfaz sencilla y promesas integradas para manejar las respuestas.

// En este ejemplo, utilizaremos Axios para cargar datos de una API de prueba y mostrarlos en una lista en una página web.

// Instalar Axios en tu proyecto: npm install axios

// Importar la biblioteca Axios
const axios = require("axios");

// Crear referencias a elementos en el documento HTML
const botonCargar = document.getElementById("cargarDatos");
const listaDatos = document.getElementById("listaDatos");

// Agregar un evento al botón para cargar datos
botonCargar.addEventListener("click", () => {
  // Realizar una solicitud GET a la API de prueba
  axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      // Obtener los datos de la respuesta
      const data = response.data;
      // Limpiar la lista de datos
      listaDatos.innerHTML = "";
      // Iterar a través de los datos y agregarlos a la lista
      data.forEach(dato => {
        const li = document.createElement("li");
        li.textContent = `ID: ${dato.id}, Título: ${dato.title}`;
        listaDatos.appendChild(li);
      });
    })
    .catch(error => {
      // Manejar errores en la solicitud
      console.error("Error:", error);
    });
});
