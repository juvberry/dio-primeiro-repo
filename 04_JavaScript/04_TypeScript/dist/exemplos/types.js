"use strict";
function somarValores(input, input2) {
    if (typeof input === 'string' || typeof input2 === 'string') {
        return input.toString() + input2.toString();
    }
    else {
        return input + input2;
    }
}
console.log(somarValores(2, 5));
console.log(somarValores('Olá, ', 'tudo bem?'));
console.log(somarValores('Numero: ', 5));
function somarNumeros(num1, num2) {
    return num1 + num2;
}
function printNumeros(num1, num2) {
    console.log(num1 + num2);
}
function somarNumerosECallback(num1, num2, callback) {
    let resultado = num1 + num2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
console.log(somarNumerosECallback(1, 3, aoQuadrado));
