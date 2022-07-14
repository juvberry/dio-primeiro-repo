let button = document.getElementById('btn')
let firstInput = document.getElementById('input') as HTMLInputElement
let secondInput = document.getElementById('input2') as HTMLInputElement

function addNum(num1:number, num2:number, mustPrint:boolean, phrase:string){
    let result = num1+num2
    if(mustPrint){
        console.log(phrase + result)
    }
    return result
}

let mustPrint = true
let phrase = 'O valor é: '

if(button){
    button.addEventListener('click', () => {
        if(firstInput && secondInput){
            console.log(addNum(Number(firstInput.value), Number(secondInput.value), mustPrint, phrase))
        }
    })
}
