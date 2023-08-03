// DOM, Document Object Model

// document - Metodos de seleccion de elementos

// Selecciona un elemento por ID
let parrafo = document.getElementById("parrafo");
// document.write(parrafo); [object HTMLParagraphElement]

// Selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada.
parrafo = document.getElementsByTagName("p");

// Devuelve el primer elemento que coincida con el grupo especificado de selectores.
parrafo = document.querySelector("#parrafo");
let parrafo2 = document.querySelector(".parrafo2");

// Devuelve todos los elementos que coincidan con el grupo especificado de selectores
parrafo = document.querySelectorAll(".parrafo");
// document.write(parrafo[1])

// Metodos para Definir, obtener y Eliminar valores de atributos

const rangoEtario = document.querySelector(".rangoEtario");

document.write(" <br> antes: " + rangoEtario.getAttribute("type"));
// - Modifica el valor de un atributo
rangoEtario.setAttribute("type", "color"); // cambio de text a color
document.write("  <br> despues: " + rangoEtario.getAttribute("type"));

// - Remueve el valor de un atributo
rangoEtario.removeAttribute("type");
document.write("  <br> finalmente: " + rangoEtario.getAttribute("type"));

// clases, classlist y Metodos de classList

// - añade una clase
rangoEtario.classList.add("nuevaClase");
// - remueve una clase
rangoEtario.classList.remove("viejaClase");
// - devuelve la clase del indice especificado
let claseIndex = rangoEtario.classList.item(0);
// - verifica si ese elemento posee o no, la clase especificada.
let tieneClase = rangoEtario.classList.contains("algo");
// - reemplaza una clase por otra
rangoEtario.classList.replace("viejaClase", "nuevaClase");
// - si no tiene la clase especificada, la agrega, si ya la tiene, la elimina.
rangoEtario.classList.toggle("claseToggle");

// obtención y Modificación de Elementos

const titulo = document.querySelector(".titulo");

// - devuelve el texto de cualquier nodo.
let textoTitulo = titulo.textContent;
// - devuelve el contenido html de un elemento
let contenidoHTMLTitulo = titulo.innerHTML;
// - devuelve el codigo HTML completo del elemento
let codigoHTMLTitulo = titulo.outerHTML;

// Creación de Elementos

const contenedor = document.querySelector(".contenedor");
const item = document.createElement("LI");
// - Crea un nuevo elemento con el nombre de la etiqueta especificada (en este caso, un elemento <li>).

// createTextNode()
let textoItem = document.createTextNode("Contenido del nuevo elemento LI");
item.appendChild(textoItem);
// - Crea un nodo de texto y lo agrega como hijo del elemento <li> que hemos creado antes.

// createDocumentFragment()
let fragmento = document.createDocumentFragment();
// - Crea un fragmento de documento, un nodo especial que puede contener varios elementos.
let elementoH1 = document.createElement("H1");
let textoH1 = document.createTextNode("Soy un H1 dentro del fragmento");
elementoH1.appendChild(textoH1);
fragmento.appendChild(elementoH1);
// - Creamos un H1 y lo añadimos al fragmento.
let elementoP = document.createElement("P");
let textoP = document.createTextNode("Soy un párrafo dentro del fragmento");
elementoP.appendChild(textoP);
fragmento.appendChild(elementoP);
// - Creamos un párrafo y lo añadimos al fragmento.

// ahora, podemos añadir todo el fragmento al contenedor:
contenedor.appendChild(fragmento);

// obtención y modificación de Childs (Hijos)

// - Devuelve el primer hijo del elemento.
let primerHijo = contenedor.firstElementChild;
// - Devuelve el último hijo del elemento.
let ultimoHijo = contenedor.lastElementChild;
// - Devuelve todos los hijos del elemento en un array-like object.
let hijos = contenedor.children;

// Metodos de childs (Hijos)

// - Agrega un nodo como el último hijo del elemento.
contenedor.appendChild(item);
// - Reemplaza un nodo hijo por otro.
let nuevoElemento = document.createElement("SPAN");
contenedor.replaceChild(nuevoElemento, item);
// - Remueve un nodo hijo del elemento.
contenedor.removeChild(nuevoElemento);
// - Verifica si el elemento tiene hijos o no.
let tieneHijos = contenedor.hasChildNodes();

// Propiedades de parents (Padres)

// - Devuelve el elemento padre del elemento actual.
let padreElemento = contenedor.parentElement;
// - Devuelve el nodo padre del elemento actual (puede ser un nodo de texto, un elemento o el Document).
let padreNodo = contenedor.parentNode;

// Propiedades de siblings (Hermanos)

// - Devuelve el siguiente hermano del elemento actual.
let siguienteHermano = contenedor.nextElementSibling;
// - Devuelve el hermano anterior del elemento actual.
let hermanoAnterior = contenedor.previousElementSibling;
// - Devuelve el siguiente elemento hermano del elemento actual (ignorando nodos de texto).
let siguienteElementoHermano = contenedor.nextElementSibling;
// - Devuelve el elemento hermano anterior del elemento actual (ignorando nodos de texto).
let anteriorElementoHermano = contenedor.previousElementSibling;
