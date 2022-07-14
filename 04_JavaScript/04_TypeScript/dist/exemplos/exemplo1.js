"use strict";
let button = document.getElementById('btn');
let firstInput = document.getElementById('input');
let secondInput = document.getElementById('input2');
function addNum(num1, num2, mustPrint, phrase) {
    let result = num1 + num2;
    if (mustPrint) {
        console.log(phrase + result);
    }
    return result;
}
let mustPrint = true;
let phrase = 'O valor é: ';
if (button) {
    button.addEventListener('click', () => {
        if (firstInput && secondInput) {
            console.log(addNum(Number(firstInput.value), Number(secondInput.value), mustPrint, phrase));
        }
    });
}
