
// Tipos de datos
const ej_const = "esto siempre sera igual, no se puede modificar"
let ej_let = "esta variable es local"
var ej_var = "esta variable es global" //no se usa

let ej_string = "algo";
let ej_number = 12;
let ej_booleano = true;


//prueba con prompt
nombre = prompt("dame un nombre");
alert("hola" + nombre);


//concatenacion en js

let numero1 = 3;
let numero2 = 3;
let numero3 = "3";
let frase1 = numero1 + numero2; //6
let frase2 = "" + numero1 + numero2; //33
let frase3 = numero3.concat(numero1,numero2,"otracosa");
let frase4 = `soy javier y tengo ${numero3} años`; //solo funciona con ````````
alert(frase4);

//operadores

document.write(numero1 == numero2); //true
document.write(numero1 == numero3); //true
document.write(numero1 === numero3); //false
document.write(numero1 === numero2); //true
//y luego estan los <, >, >=, <=, &&, ||, !*/

//if, else if

if(false){

} else if(true){

}

//Arrays y array asociativo

let ej_array = [1,2,3,4,5,6,"una palabra?", "si, una palabra"];
document.write(ej_array[1]); //2

let ej_arrayAsociativo = {
    nombre  : "Javier",
    edad    : 21,
    apellido: "Gonzalez"
}
document.write(ej_arrayAsociativo[nombre]); //javier


// for, while, do while son iguales

let animales = ["gato", "perro", "elefante"];

for(animal in animales){
    document.write(animal + "<br>")
} // 0  1  2 (posicion)

 
for(animal of animales){
    document.write(animal + "<br>")
} //gato perro elefante (objeto en si)

forAlgo: //label 
for(animal of animales){
    document.write(animal + "<br>")
    for(animal of animales){
        document.write(animal + "<br>")
        break forAlgo; // el label hace break o continue del for que hayamos definido
    }
    
}

// funciones

//no tan usada

function saludar(){
    return "hola como estas?";
}
let saludo = saludar();
document.write(saludo);

//funciones flechas

const saludarr = (nombre)=>{
    let frase = `hola ${nombre}`;
    document.write(frase);
}
