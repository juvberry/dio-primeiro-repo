type input = number | string

function somarValores(input:input, input2:input){
    if(typeof input === 'string' || typeof input2 === 'string'){
        return input.toString() + input2.toString()
    }else{
        return input + input2
    }
}

console.log(somarValores(2, 5))
console.log(somarValores('Olá, ', 'tudo bem?'))
console.log(somarValores('Numero: ', 5))

function somarNumeros(num1:number, num2:number):number{
    return num1 + num2
}

function printNumeros(num1:number, num2:number):void{
    console.log(num1 + num2)
}

function somarNumerosECallback(num1:number, num2:number, callback: (num3: number) => number):number{
    let resultado = num1 + num2
    return callback(resultado)
}

function aoQuadrado(numero:number):number{
    return numero * numero
}

console.log(somarNumerosECallback(1, 3, aoQuadrado))
