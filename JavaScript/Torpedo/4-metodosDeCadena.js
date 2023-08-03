let cadena1 = "asd fgh jkl";
let cadena2 = "asd";
let cadena3 = "fgh";
let cadena4 = "jkl";

cadena1.concat(cadena2); //junta dos o más cadenas y retorna una nueva
cadena1.startWith(cadena2); //si una cadena comienza con otra cadena retorna true
cadena1.includes(cadena3); //si una cadena incluye a otra cadena retorna true
cadena1.endsWith(cadena4); //si una cadena termina con otra cadena retorna true
cadena1.indexOf("fgh"); //retorna el primer indice donde encuentre una cadena o letra, si no retorna -1 (en este caso retorna 4)
cadena1.lastIndexOf("fgh"); //retorna el ultimo indice donde encuentre una cadena o letra, si no retorna -1 (en este caso retorna 6)
 
let cadena5 = "abc";

cadena5.padStart(5,a); //rellena hasta "5" caracteres con el texto a al inicio (en este caso: aaabc)
cadena5.padEnd(5,c); //rellena hasta "5" caracteres con el texto a al final (en este caso: abccc)
cadena5.repeat(3); //rellena repitiendo las veces que se pida (en este caso: abcabcabc)

let cadena6 = "hola,como,estas";
let num1 = "123";
let num2 = 123;

cadena6.split(","); //devuelve un array con la separación 
cadena6.substring(0,2) //devuelve un string cortado desde la posicion que se indica (en este caso devuelve "ho")
cadena6.toLowerCase() //convierte a minuscula
cadena6.toUpperCase() //convierte a mayuscula
cadena6.trim() //quita los espacios
cadena6.trimStart() //quita los espacios al inicio
cadena6.trimEnd() //quita los espacios al final
num2.toString() //lo transforma a string

