let array = []
console.log(array)
console.log(`O tipo de array é: ${typeof array}`)
array.push(4)
console.log(array)
array.push(3)
console.log(array)
array.pop() // tira o el de ultimo indice
console.log(array)
array.push(3, 6, 5, 8)
console.log(array)
array.shift() // tira o el de indice[0]
console.log(array)
array.unshift(0) // adiciona o el no indice[0]
console.log(array)

// iterar o array
for(let i=0; i < array.length; i++){
    console.log(array[i])
}

console.log(`O meu array inclui o numero 2? ${array.includes(2)}`)

console.log(`Todos os meus itens da lista são numero 2? ${array.every(item => item === 2)}`)
console.log(`Algum dos itens da lista são numero 3? ${array.some(item => item === 3)}`)