//AJAX

// AJAX (Asynchronous JavaScript and XML) es una técnica de programación que permite realizar solicitudes asíncronas
// a un servidor web y actualizar el contenido de una página sin necesidad de recargarla por completo.

// AJAX es útil para:
// - Cargar y mostrar datos dinámicos en una página web.
// - Realizar actualizaciones de contenido sin recargar la página.
// - Enviar y recibir datos del servidor sin interrumpir la experiencia del usuario.
// - Mejorar la velocidad de carga y la interactividad de una aplicación web.

// Ejemplo de uso de AJAX con XMLHttpRequest:

// Crear una referencia al botón y la lista en el documento HTML
const botonCargar = document.getElementById("cargarUsuarios");
const listaUsuarios = document.getElementById("listaUsuarios");

// Agregar un evento al botón para cargar usuarios
botonCargar.addEventListener("click", () => {
  // Realizar una solicitud GET a la API de usuarios
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      // Verificar si la respuesta es exitosa
      if (!response.ok) {
        throw new Error("Error en la solicitud de usuarios");
      }
      // Parsear la respuesta como JSON
      return response.json();
    })
    .then(data => {
      // Limpiar la lista de usuarios
      listaUsuarios.innerHTML = "";
      // Iterar a través de los datos y agregar usuarios a la lista
      data.forEach(usuario => {
        const li = document.createElement("li");
        li.textContent = `Nombre: ${usuario.name}, Email: ${usuario.email}`;
        listaUsuarios.appendChild(li);
      });
    })
    .catch(error => {
      // Manejar errores en la solicitud
      console.error("Error:", error);
    });
}); 

// Este código detallado utiliza la Fetch API para realizar una solicitud GET a una API de usuarios
// cuando se hace clic en un botón en la página. Luego, maneja la respuesta y muestra los usuarios en una lista.

// Este es solo un ejemplo básico de AJAX utilizando XMLHttpRequest.
// Actualmente, se recomienda utilizar APIs más modernas como Fetch o librerías como Axios para manejar solicitudes AJAX de manera más eficiente y legible.

// Recuerda que las solicitudes AJAX pueden tener impacto en la seguridad y el rendimiento,
// así que es importante utilizarlas de manera consciente y segura en tus aplicaciones web.
