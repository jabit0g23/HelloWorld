// Eventos
// Los eventos en JavaScript son acciones o sucesos que ocurren durante la interacción del usuario con una página web.
// Permiten responder a acciones como hacer clic en un botón, mover el mouse, presionar una tecla, etc.

// Escucha de eventos o "Event Listeners":
// Para detectar y responder a eventos, se utilizan event listeners o escuchadores de eventos.
// Estos se agregan a elementos del DOM y esperan hasta que ocurra el evento para ejecutar una función. Ejemplo:
// Supongamos que tenemos un botón con el ID "miBoton" y queremos ejecutar una función cuando se hace clic en él:

const miBoton = document.getElementById("miBoton");

miBoton.addEventListener("click", () => {
    console.log("¡Se hizo clic en el botón!");
});

// El objeto Event:
// Cuando ocurre un evento, se crea un objeto Event que contiene información sobre el evento.
// Este objeto proporciona detalles como el tipo de evento, el elemento objetivo, etc.

// Ejemplo:
miBoton.addEventListener("click", (event) => {
    console.log("Tipo de evento:", event.type);
    console.log("Elemento objetivo:", event.target);
});

// Flujo de Eventos o 'Event Flow':
// El flujo de eventos es el orden en el que los eventos se propagan a través del DOM.
// Puede ser "bubbling" (de dentro hacia fuera) o "capturing" (de fuera hacia dentro).

// Event Bubbling vs Event Capturing:
// En el evento bubbling, el evento se propaga desde el elemento objetivo hacia arriba en la jerarquía del DOM.
// En el event capturing, el evento se propaga desde el elemento raíz hacia abajo hasta el objetivo.

// Ejemplo de bubbling:
const container = document.getElementById("container");
const innerDiv = document.getElementById("innerDiv");

container.addEventListener("click", () => {
    console.log("Clic en el contenedor");
});

innerDiv.addEventListener("click", () => {
    console.log("Clic en el elemento interno");
});

// Flujos de eventos "bubbling":
container.addEventListener("click", () => {
    console.log("Clic en el contenedor (bubbling)");
});

innerDiv.addEventListener("click", () => {
    console.log("Clic en el elemento interno (bubbling)");
});

// Flujos de eventos "capturing":
container.addEventListener("click", () => {
    console.log("Clic en el contenedor (capturing)");
}, true);

innerDiv.addEventListener("click", () => {
    console.log("Clic en el elemento interno (capturing)");
}, true);


// ======================================================================================
//Eventos del Mouse

// Evento "click":
// ocurre con un click
const miElemento = document.getElementById("miElemento");
miElemento.addEventListener("click", () => {
    console.log("Se hizo clic en el elemento.");
});

// Evento "dblclick":
// ocurre con un doble click
const otroElemento = document.getElementById("otroElemento");
otroElemento.addEventListener("dblclick", () => {
    console.log("Se hizo doble clic en el otro elemento.");
});

// Evento "mouseover":
// ocurre cuando el puntero se mueve sobre un elemento o sobre uno de sus hijos.
const miDiv = document.getElementById("miDiv");
miDiv.addEventListener("mouseover", () => {
    console.log("El puntero se movió sobre el div.");
});

// Evento "mouseout":
// ocurre cuando se mueve el puntero fuera de un elemento o de sus elementos secundarios
const miOtroDiv = document.getElementById("miOtroDiv");
miOtroDiv.addEventListener("mouseout", () => {
    console.log("El puntero se movió fuera del otro div.");
});

// Evento "contextmenu":
// ocurre con un click en el boton derecho en un elemento para abrir un menú contextual.
const miParrafo = document.getElementById("miParrafo");
miParrafo.addEventListener("contextmenu", (event) => {
    event.preventDefault(); // Evita que aparezca el menú contextual por defecto.
    console.log("Se hizo clic derecho en el párrafo.");
});

// Evento "mouseenter":
// ocurre cuando el puntero se mueve sobre un elemento.
const miImagen = document.getElementById("miImagen");
miImagen.addEventListener("mouseenter", () => {
    console.log("El puntero entró en la imagen.");
});

// Evento "mouseleave":
// ocurre cuando el puntero se mueve fuera de un elemento.
const miOtraImagen = document.getElementById("miOtraImagen");
miOtraImagen.addEventListener("mouseleave", () => {
    console.log("El puntero salió de la otra imagen.");
});

// Evento "mouseup":
// ocurre cuando un usuario suelta un botón del mouse sobre un elemento
const miBoton2 = document.getElementById("miBoton");
miBoton2.addEventListener("mouseup", () => {
    console.log("Se soltó el botón del mouse sobre el botón.");
});

// Evento "mousemove":
// ocurre cuando el puntero se mueve mientras está sobre un elemento.
const miContenedor = document.getElementById("miContenedor");
miContenedor.addEventListener("mousemove", () => {
    console.log("El puntero se está moviendo sobre el contenedor.");
});

// ======================================================================================
// Eventos del Teclado

// Evento "keypress":
// ocurre cuando una tecla se presiona
document.addEventListener("keypress", (event) => {
    console.log(`Tecla presionada: ${event.key}`);
});

// Evento "keydown":
// ocurre cuando una tecla se deja de presionar
document.addEventListener("keydown", (event) => {
    console.log(`Tecla presionada: ${event.key}`);
});

// Evento "keyup":
// ocurre despues de que los dos events anteriores hayan concluido consecutivamente
document.addEventListener("keyup", (event) => {
    console.log(`Tecla soltada: ${event.key}`);
});

// ======================================================================================
//Eventos de la interfaz

// Evento "abort":
// ocurre cuando un elemento madre elimina a su hijo
const miImagen2 = document.getElementById("miImagen");
miImagen2.addEventListener("abort", () => {
    console.log("La carga de la imagen se ha abortado.");
});

// Evento "error":
// ocurre cuando sucede un error durante la carga de un archivo multimedia.
const miVideo = document.getElementById("miVideo");
miVideo.addEventListener("error", () => {
    console.log("Error al cargar el video.");
});

// Evento "load":
// ocurre cuando un objeto se ha cargado
const miObjeto = document.getElementById("miObjeto");
miObjeto.addEventListener("load", () => {
    console.log("El objeto se ha cargado completamente.");
});

// Evento "beforeunload":
// ocurre antes de que el documento esté a punto de descargarse
window.addEventListener("beforeunload", (event) => {
    event.preventDefault();
    event.returnValue = "¿Seguro que deseas salir de la página?";
});

// Evento "unload":
// ocurre una vez que se ha descargado una página
window.addEventListener("unload", () => {
    console.log("La página se ha descargado completamente.");
});

// Evento "resize":
// ocurre cuando se cambia el tamaño de la vista del documento
window.addEventListener("resize", () => {
    console.log("La vista del documento ha cambiado de tamaño.");
});

// Evento "scroll":
// ocurre cuando se desplaza la barra de desplazamiento de un elemento
const miElemento2 = document.getElementById("miElemento");
miElemento2.addEventListener("scroll", () => {
    console.log("Se ha desplazado el contenido del elemento.");
});

// Evento "select":
// ocurre después de que el usuario selecciona algún texto de <input> o «textarea>
const miInput = document.getElementById("miInput");
miInput.addEventListener("select", () => {
    console.log("Texto seleccionado en el input:", miInput.value);
});

// ======================================================================================
//Timers (Temporizadores)
// setTimeout():
const timeoutId = setTimeout(() => {
    console.log("Este mensaje se mostrará después de 3 segundos.");
}, 3000);

// setInterval():
let contador = 0;
const intervaloId = setInterval(() => {
    contador++;
    console.log("Contador:", contador);
    if (contador >= 5) {
        clearInterval(intervaloId);
    }
}, 1000);

// clearTimeout():
const timeoutId2 = setTimeout(() => {
    console.log("Este mensaje no se mostrará porque se canceló el temporizador.");
}, 2000);

clearTimeout(timeoutId2);

//El método setTimeout() se utiliza para programar una función que se ejecute después de un cierto tiempo. En el ejemplo,
//el mensaje "Este mensaje se mostrará después de 3 segundos" se mostrará después de 3 segundos (3000 milisegundos).

//El método setInterval() se utiliza para programar una función que se repita cada cierto tiempo. En el ejemplo,
//el contador se incrementará cada segundo (1000 milisegundos) y se mostrará en la consola hasta que alcance el valor de 5.

//El método clearTimeout() se utiliza para cancelar un temporizador programado previamente con setTimeout(). En el ejemplo,
//el segundo mensaje no se mostrará porque se canceló el temporizador antes de que se cumplieran los 2 segundos.

//El método clearInterval() se utiliza para detener la repetición de una función programada con setInterval(). En el ejemplo,
//el contador dejará de incrementarse y mostrar mensajes en la consola después de alcanzar el valor de 5.
