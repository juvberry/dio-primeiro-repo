let animais = [
    {
        type: "cat",
        name: "Yummi",
        age: 2,
    },
    {
        type: "dog",
        name: "Dudu",
        age: 3,
    }
]
let dog = {
    type: "dog",
    name: "Dudu",
    age: 3,
}
let cat = {
    type: "cat",
    name: "Yummi",
    age: 2,
}

let numbers = [2, 3, 4, 5, 7, 8]
let prices = [2, 3, 6, 8]

function alterAgeAnimals(arr, thisArg){
    return arr.map(function(item){
        return item * this.age
    }, thisArg)
}

function multiplyAgeByTwo(array){
    let ageByTwo = array.map((item) => item.age * 2)
    return  console.log(ageByTwo)
}

function filterEven(arr){
    let newArray = arr.filter((item) => item % 2 === 0)
    return console.log(newArray)
}

function sum(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}

function purchase(arr, amount){
    let callbackFn = function(acumulator, currentValue, index, array){
        let soma = sum(array)
        return amount - soma
    }
    let a = arr.reduce(callbackFn, amount)
    console.log(a);
}

let array = [1, 2, 3, 4];

array.reduce((current, acc) => current + acc);



// multiplyAgeByTwo(animais)
// console.log(alterAgeAnimals(numbers, cat))
// console.log(alterAgeAnimals(numbers, dog))

// filterEven(numbers)

// purchase(prices, 70)
