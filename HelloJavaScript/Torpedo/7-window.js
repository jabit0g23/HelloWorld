
//Objeto window, Hereda las propiedades de EventTarget


// Carga un recurso en el contexto de un nuevo navegador o uno que ya existe.
window.open("https://www.ejemplo.com");

// Cierra la ventana actual, o la ventana en la que se llamó.
window.close();

// Indica si la ventana referenciada está cerrada o no.
let estaCerrada = window.closed;

// Detiene la carga de recursos en el contexto de navegación actual.
window.stop();

// Muestra un cuadro de alerta con el contenido especificado y un botón Aceptar.
window.alert("Esto es un mensaje de alerta!");

// Abre el cuadro de diálogo Imprimir para imprimir el documento actual.
window.print();

// Abre un cuadro de diálogo con un mensaje que solicita al usuario un dato (string).
let respuesta = window.prompt("Por favor, ingresa tu nombre:", "Usuario");

// Abre un cuadro de diálogo con un mensaje y dos botones: Aceptar y Cancelar.
let confirmacion = window.confirm("¿Estás seguro de continuar?");



// Propiedades relacionadas con la pantalla

// Devuelve una referencia al objeto de pantalla asociado con la ventana.
let pantalla = window.screen;

// Devuelve la distancia horizontal entre el borde izquierdo del navegador y el borde izquierdo de la pantalla.
let distanciaHorizontal = window.screenLeft;

// Devuelve la distancia vertical entre el borde superior del navegador y el borde superior de la pantalla.
let distanciaVertical = window.screenTop;

// Devuelve el número de píxeles que el documento se desplaza actualmente horizontalmente.
let desplazamientoHorizontal = window.scrollX;

// Devuelve el número de píxeles que el documento se desplaza actualmente verticalmente.
let desplazamientoVertical = window.scrollY;



// Métodos de desplazamiento de la ventana

// Desplaza la ventana a una ubicación particular en el documento (con opciones y con posiciones).
window.scroll({
  top: 0,
  left: 0,
  behavior: 'smooth' // 'auto' para un desplazamiento instantáneo o 'smooth' para un desplazamiento suave
});

// Minimiza la ventana.
window.minimize();

// Cambia el tamaño de la ventana actual en una cantidad específica.
window.resizeBy(200, 100); // Ancho: +200 píxeles, Alto: +100 píxeles

// Redimensiona dinámicamente la ventana.
window.resizeTo(800, 600); // Ancho: 800 píxeles, Alto: 600 píxeles

// Mueve la ventana en una ubicación relativa.
window.moveBy(100, 50); // Mueve la ventana 100 píxeles hacia la derecha y 50 píxeles hacia abajo

// Mueve la ventana en una ubicación absoluta.
window.moveTo(300, 200); // Mueve la ventana a la posición (300, 200) en la pantalla.



// Propiedades de objetos barprop

window.locationbar;   // Propiedad relacionada con la barra de ubicación del navegador.
window.menubar;        // Propiedad relacionada con la barra de menú del navegador.
window.personalbar;    // Propiedad relacionada con la barra personal del navegador.
window.scrollbars;     // Propiedad relacionada con las barras de desplazamiento del navegador.
window.statusbar;      // Propiedad relacionada con la barra de estado del navegador.
window.toolbar;        // Propiedad relacionada con la barra de herramientas del navegador.


// Location

// Devuelve el href (URL) de la página actual.
let urlActual = window.location.href;

// Devuelve el nombre de dominio del servidor web.
let dominio = window.location.hostname;

// Devuelve la ruta y el nombre de archivo de la página actual.
let rutaArchivo = window.location.pathname;

// Devuelve el protocolo web utilizado (http: o https:).
let protocolo = window.location.protocol;

// Método assign() - carga un nuevo documento.
window.location.assign("https://www.ejemplo.com");







