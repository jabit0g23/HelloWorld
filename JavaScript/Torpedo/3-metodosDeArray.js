let nombres = ["pedro", "maria", "jorge","jose"];


nombres.pop(); //elimina y retorna el ultimo elemento del array
nombres.shift(); //elimina y retorna el primer elemento del array
nombres.push("javier"); //agrega un elemento al final del array, además retorna el nuevo tamaño del array
nombres.unshift("joaco"); //añade al incio del array
nombres.reverse(); //invierte el orden del array
nombres.sort(); //ordena, lexicograficamente o numericamente

nombres.splice(1,2); //elimina desde la posicion 1 hasta la 2
nombres.splice(1,2,"juanita"); //elimino y agrego algo en donde elimine
nombres.splice(1,0,"asd","fgh"); //no elimino y agrego todo lo que quiera desde esa posicion

let nuevo1 = nombres.join(" - "); //crea un string nuevo separando por " - " (queda: "pedro - maria - ...")
let nuevo2 = nombres.slice(0,2); //me devuelve un array desde la posicion 0 hasta la 2, sin contar el 2  
//tambien estan todos los metodos de cadena: toString(), indexof(), includes(), etc

let resultado = nombres.filter((i) => {
    i.length > 4
}); // nos crea un nuevo array con los elementos que cumplan una condicion, en alguna funcion en este caso los nombres que tengan más de 4 letras

nombres.forEach((i) => {i + "estoy haciendo algo con cada iteracion"}) //hago algo con cada iteracion del array