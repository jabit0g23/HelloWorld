// Callbacks, Promesas y Async/Await en JavaScript

// Callbacks:
// Los callbacks son funciones que se pasan como argumentos a otras funciones.
// Se utilizan para manejar operaciones asíncronas y ejecutar código después de que una tarea finalice.

function realizarTarea(callback) {
    console.log("Realizando la tarea...");
    setTimeout(() => {
        console.log("Tarea completada.");
        callback();
    }, 2000);
}

function finalizar() {
    console.log("Tarea finalizada.");
}

realizarTarea(finalizar);

// Promesas:
// Las promesas son objetos que representan el resultado eventual (éxito o fallo) de una operación asíncrona.
// Son una alternativa más legible y estructurada a los callbacks anidados.
function realizarTareaPromise() {
    return new Promise((resolve, reject) => {
        console.log("Realizando la tarea con Promesa...");
        setTimeout(() => {
            const exito = true; // Simulando éxito
            if (exito) {
                console.log("Tarea completada con Promesa.");
                resolve();
            } else {
                console.log("Tarea fallida con Promesa.");
                reject();
            }
        }, 2000);
    });
}

realizarTareaPromise()
    .then(() => {
        console.log("Tarea resuelta con éxito.");
    })
    .catch(() => {
        console.log("Tarea fallida.");
    });

// Async/Await:
// Async/Await es una forma más legible y estructurada de trabajar con promesas.
// Permite escribir código asíncrono de manera similar a cómo se escribe código síncrono.
async function realizarTareaAsync() {
    try {
        console.log("Realizando la tarea con Async/Await...");
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Tarea completada con Async/Await.");
    } catch (error) {
        console.log("Tarea fallida con Async/Await.");
    }
}



const mostrarTarea = async ()=>{
    await realizarTareaAsync();
    console.log("Tarea Async/Await finalizada.");
};
