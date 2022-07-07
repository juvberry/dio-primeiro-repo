let arr = [1, 2, 4, 5, 7, 8, 23]

function substituteEven(array){
    if(!array) return -1
    if(!array.length) return -1
    for(let i = 0; i < array.length; i++){
        if(array[i] === 0){
            console.log('você já é zero!')
        }else if(array[i] % 2 === 0){
            console.log(`Substituindo ${array[i]} por 0...`)
            array[i] = 0
        }
    }
    return array
}

substituteEven(arr)
console.log(substituteEven(arr))
console.log(substituteEven([]))
console.log(substituteEven(null))