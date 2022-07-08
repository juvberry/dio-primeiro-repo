let numbers = [30, 30, 40, 5, 223, 2049, 3034, 5]

function unique(array){
    let newNumbers = new Set(array)
    return console.log([...newNumbers])
}

unique(numbers)