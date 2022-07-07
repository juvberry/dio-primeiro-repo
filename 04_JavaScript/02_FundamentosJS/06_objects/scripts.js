let objeto = {}

console.log(`O tipo de objeto é: ${typeof objeto}`)

objeto.name = 'Julia'
console.log(objeto)
objeto.age = 29
console.log(objeto)

console.log(Object.values(objeto))
console.log(Object.keys(objeto))

let person = {
    name: 'Julia',
    age: 20,
    address: 'Rua 4'
}

console.log(person)
console.log(person.name)
console.log(person['name'])


person['numberOfSiblings'] = 3
console.log(person)

// utiliza o valor "nameOfMom" ao inves de apenas "mom". nao gera uma key chamada "mom"
let mom = 'nameOfMom'
person[mom] = 'Maria'
console.log(person)