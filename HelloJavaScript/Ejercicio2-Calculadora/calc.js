
// insertar un número o un operador en el display de la calculadora.

function insert(num) {
    //si hay un syntax error, return
    if (SyntaxError) {
        return
    }

    // insertar en el display
    if (display.value.length < 20) {

        if (isNaN(num)) {  //NaN = Not a Number, si no es un numero, solo lo ingresamos
            display.value += num
        }
        else if (display.value.length == 1 && display.value[0] == 0) { //para ingresar el primer numero por el 0, y que no quede "01"
            display.value = num
        }
        else {
            display.value += num
        }
    }
    else {
        return
    }
}

function clean() {
    //Reseteamos los errores
    SyntaxError = false
    //Limpiamos el display 
    display.value = "0";

}

function equal() { //verifica si hay errores de sintaxis en la expresión ingresada y, si no hay errores, realiza el cálculo de la expresión
    var exp = display.value

    for (i = 0; i < exp.length; i++) {
        if (isNaN(exp[i]) && isNaN(exp[i + 1])) { //verificamos si el caracter actual y el siguiente no son numeros
            if (exp[i] != "+" && exp[i] != "-") { //si ninguno de los primeros es + o -, revisamos los siguientes
                if (exp[i + 1] != "+" && exp[i + 1] != "-") { //si se cumple esto, ya hay algun error

                    display.value = "Syntax Error"
                    SyntaxError = true
                }
            }
        }
    }


    if (SyntaxError == false) { //ahora que no hay errores, calculamos con la funcion eval
        let answer = eval(exp)

        if (isFinite(answer)) { //si el resultado no es infinito lo mostramos
            display.value = answer
        }
        else {
            display.value = "Math Error" // si es infinito
            SyntaxError = true
        }
    }


}

function back() {

    //Si hay un error, simplemente retornamos
    if (SyntaxError) {
        return
    }

    display.value = display.value.substring(0, display.value.length - 1) //eliminamos el ultimo caracter

    if (display.value == "") { //si el ultimo caracter esta vacio, agregamos un 0
        display.value = "0"
    }

}

//seleccionar el display
const display = document.querySelector('.display')
//seleccionar todos los numeros
const numbers = document.querySelectorAll('.number')
//seleccionar todos los operadores
const operators = document.querySelectorAll('.operator')


//agregar detector de eventos para cada número en "numbers"
numbers.forEach((button) => {
    button.addEventListener('click', calculate)
})
//agregar detector de eventos para cada operador en "operators"
operators.forEach((button) => {
    button.addEventListener('click', calculate)
})
// agregar detector de eventos al keyboard
window.addEventListener('keypress', check)

function check(key) {
    let keyValue = key.key //valor de la tecla presionada
    if (key.keyCode) { //solo teclas con un keycode valido (no valido por ej shift)
        if (!isNaN(keyValue)) { //si la tecla presionada es un numero la agregamos
            insert(keyValue)
        } else {

            //verificamos si es algun caracter especial para actuar y si no, solo lo aregamos
            for (i = 0; i < operators.length; i++) {
                if (keyValue == operators[i].value) {
                    if (keyValue == "c") {
                        clean()
                    } else if (keyValue == "<") {
                        back()
                    } else if (keyValue == "=") {
                        equal()
                    } else {
                        display.value += keyValue
                    }
                }
            }
        }
    }
}


let SyntaxError = false
function calculate(event) {

    let buttonValue = event.target.value  


    if (!isNaN(buttonValue) || (isNaN(buttonValue) && buttonValue != "=" && buttonValue != "<" && buttonValue != "c")) {
        if (buttonValue == "x") {
            buttonValue = "*" //cambiamos "x" por "*" para trabajar mejor
        }

        //insertamos el valor
        insert(buttonValue)

    }
    else if (buttonValue == '=') {
        equal() //llamamos a equal() function
    }
    else if (buttonValue == "<") {
        back() //llamamos a back() function
    }
    else if (buttonValue == "c") {
        clean() //llamamos a clean() function
    }

}