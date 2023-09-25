
"use strict"






function sumar (numero1,numero2){
    let num1 = parseFloat.getElementsById(numero1).value;
    let num2 = parseFloat.getElementsById(numero2).value;
resultado = num1 + num2
parseFloat.getElementsById(VentanaResultado).value=resultado
}


function restar (numero1,numero2){
    let num1 = parseFloat.getElementsById(numero1).value;
    let num2 = parseFloat.getElementsById(numero2).value;
resultado = num1 - num2
parseFloat.getElementsById(VentanaResultado).value=resultado
}


function multiplicar (numero1,numero2){
    let num1 = parseFloat.getElementsById(numero1).value;
    let num2 = parseFloat.getElementsById(numero2).value;
resultado = num1*num2
parseFloat.getElementsById(VentanaResultado).value=resultado
}


function dividir (numero1,numero2){
    let num1 = parseFloat.getElementsById(numero1).value;
    let num2 = parseFloat.getElementsById(numero2).value;

if (num2 === 0) {
    resultado="nose puede dividir por 0";
    parseFloat.getElementsById(VentanaResultado).value=resultado
} else {

resultado = num1 / num2 
parseFloat.getElementsById(VentanaResultado).value=resultado;
}



}