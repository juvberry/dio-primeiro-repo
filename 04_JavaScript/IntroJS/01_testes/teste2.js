function returnEvenNum(array){
    let evenNums = []
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            evenNums.push(array[i])
        } else {
            console.log(`${array[i]} não é par.`)
        }
    }
    console.log('Os numeros pares nesta lista são: ' + evenNums)
}

let array = [1, 2, 4, 5, 6, 8]

returnEvenNum(array)