let currentNumWrapper = document.getElementById('currentNumber')
let currentNum = 0;

// utilizando a chamda da func onClick no html:
function increment(){
    currentNum = currentNum + 1
    currentNumWrapper.innerHTML = currentNum
}

function decrement(){
    currentNum = currentNum - 1
    currentNumWrapper.innerHTML = currentNum
}