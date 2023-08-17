// IEFE ("Immediately Invoked Function Expression", que en español se traduce como "Expresión de Función Inmediatamente Invocada")
(() => {

// variables de estado

let toDoListArray = [];
// variables interfaz de usuario (UI)
const form = document.querySelector(".form");
const input = form.querySelector(".form__input");
const ul = document.querySelector(".toDoList");


// event listeners

// Evento para cuando se envía el formulario
form.addEventListener('submit', e => { // e es una variable local que representa el objeto del evento de envio del formulario 
    // prevenir el comportamiento predeterminado - recarga de página al enviar el formulario
    e.preventDefault();
    // asignar un ID único al elemento
    let itemId = String(Date.now());
    // obtener/asignar el valor del campo de entrada
    let toDoItem = input.value;
    // pasar el ID y el elemento a las funciones
    addItemToDOM(itemId, toDoItem);
    addItemToArray(itemId, toDoItem);
    // limpiar el cuadro de entrada (esto es comportamiento predeterminado pero lo hemos eliminado)
    input.value = '';
});


// Evento para cuando se hace clic en la lista ul (toDoList)
ul.addEventListener('click', e => {
    let id = e.target.getAttribute('data-id') // e.target representa el elemento del DOM en el cual ocurrió el evento de click
    if (!id) return // el usuario hizo clic en algo diferente
    // pasar el ID a las funciones
    removeItemFromDOM(id);
    removeItemFromArray(id);
});

// funciones 
function addItemToDOM(itemId, toDoItem) {
    // crear un elemento li
    let li = document.createElement('li')
    li.setAttribute("data-id", itemId);
    // agregar el texto de la tarea (toDoItem) al li
    li.innerText = toDoItem
    // agregar el li al DOM
    ul.appendChild(li);
}

function addItemToArray(itemId, toDoItem) {
    // agregar la tarea al array como un objeto con un ID para poder encontrarlo y eliminarlo más tarde
    toDoListArray.push({ itemId, toDoItem });
    console.log(toDoListArray)
}

function removeItemFromDOM(id) {
    // obtener el elemento de lista por su ID de datos
    let li = document.querySelector('[data-id="' + id + '"]');
    // eliminar el elemento de lista
    ul.removeChild(li);
}

function removeItemFromArray(id) {
    // crear un nuevo toDoListArray con todos los li que no coincidan con el ID
    toDoListArray = toDoListArray.filter(item => item.itemId !== id);
}

})();