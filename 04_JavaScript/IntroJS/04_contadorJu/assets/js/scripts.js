let currentNumWrapper = document.getElementById('currentNumber')
let currentNum = 0;
let sumBtn = document.getElementById('add')
let subsBtn = document.getElementById('sub')
let bodyBackground = document.getElementById('body')
let text = document.getElementsByClassName('text')

sumBtn.addEventListener("click", sumFunc)
subsBtn.addEventListener("click", subsFunc)

// sem utilizar a chamada da func no html: [addEventListener]
function sumFunc(){
    currentNum = currentNum + 1
    currentNumWrapper.innerHTML = currentNum
    positiveColor()
}

function subsFunc(){
    currentNum = currentNum - 1
    currentNumWrapper.innerHTML = currentNum
    negativeColor()
}

// mudar a cor quando ficar negativo

function negativeColor(){
    if(currentNum < 0){
        currentNumWrapper.style.color = 'red'
        bodyBackground.style.backgroundColor = 'black'
        text[0].style.color = 'red'
        text[0].innerHTML = 'Olá mundo invertido!'
        text[1].style.color = 'red'

        sumBtn.style.color = 'black'
        sumBtn.style.backgroundColor = '#e46767'
        sumBtn.style.border = '2px solid red'
        subsBtn.style.color = 'black'
        subsBtn.style.backgroundColor = '#e46767'
        subsBtn.style.border = '2px solid red'
    }
}

function positiveColor(){
    if(currentNum >= 0){
        currentNumWrapper.style.color = 'black'
        bodyBackground.style.backgroundColor = 'rgb(177, 225, 255)'
        text[0].style.color = 'black'
        text[0].innerHTML = 'Olá mundo!'
        text[1].style.color = 'black'

        sumBtn.style.color = 'lightcoral'
        sumBtn.style.backgroundColor = 'rgb(241, 214, 214)'
        sumBtn.style.border = '2px solid lightcoral'
        subsBtn.style.color = 'lightcoral'
        subsBtn.style.backgroundColor = 'rgb(241, 214, 214)'
        subsBtn.style.border = '2px solid lightcoral'
    }
}