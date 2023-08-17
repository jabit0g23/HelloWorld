// AJAX con Fetch API

// Fetch API es una interfaz moderna de JavaScript para realizar solicitudes HTTP asíncronas.
// Permite realizar peticiones a recursos en una red (como APIs web) y manejar las respuestas de manera sencilla.

// En este ejemplo, utilizaremos Fetch API para cargar datos de una API de prueba y mostrarlos en una lista en una página web.

// Crear referencias a elementos en el documento HTML
const botonCargar = document.getElementById("cargarDatos");
const listaDatos = document.getElementById("listaDatos");

// Agregar un evento al botón para cargar datos
botonCargar.addEventListener("click", () => {
  // Realizar una solicitud GET a la API de prueba
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      // Verificar si la respuesta es exitosa (código de estado 200)
      if (!response.ok) {
        throw new Error("Error en la solicitud de datos");
      }
      // Parsear la respuesta como JSON y devolver la promesa resultante
      return response.json();
    })
    .then(data => {
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

// Métodos y conceptos importantes de Fetch API:

// fetch(): Realiza una solicitud HTTP. Devuelve una promesa que resuelve en la respuesta de la solicitud.

// Response: Objeto que representa la respuesta de una solicitud. Contiene información como el código de estado, encabezados y datos.

// .ok: Propiedad de Response que indica si la respuesta es exitosa (código de estado 200).

// .json(): Método de Response que parsea el cuerpo de la respuesta como JSON y devuelve una promesa con los datos parseados.

// .text(): Método de Response que devuelve una promesa con el cuerpo de la respuesta como texto.

// .headers: Propiedad de Response que representa los encabezados de la respuesta. Permite acceder a encabezados específicos.

// Headers: Constructor para crear y manipular encabezados de solicitud o respuesta.

// Request: Objeto que representa una solicitud HTTP. Puede ser personalizado con opciones como método, encabezados y cuerpo.
