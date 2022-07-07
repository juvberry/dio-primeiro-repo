// strings e seus métodos
let nome = "Julia"
let sobrenome = "Beims"
console.log(nome)
console.log(sobrenome)

console.log(`o tipo de nome é ${typeof nome}`)

let nomeConcat = nome.concat(sobrenome)

console.log(nomeConcat)
console.log(`o tipo de nomeConcat é ${typeof nomeConcat}`)
console.log(nomeConcat.length)

let exemplo = new String('bla bla bla')
console.log(`o tipo de exemplo é ${typeof exemplo}`)
console.log(exemplo)
console.log('com o objeto pai String, vc consegue acessar todos os métodos que pode utilizar numa string ;)')
console.log(exemplo.length)

let vazio = ''
console.log(`o tipo de vazio é ${typeof vazio}`)


console.log(`A letra do index 0 do nome "Julia" é ${nome[0]}`)

nomeConcat = nome + " " + sobrenome 
console.log(nomeConcat)
nomeConcat = nome + "\n" + sobrenome
console.log(nomeConcat)
nomeConcat = `${nome} ${sobrenome}`

// frases

let frase = "Amo gatinhos"

// split
console.log(frase.split(""))
console.log(frase.split(" "))
// includes
console.log(frase.includes("Amo"))
// startsWith
console.log(frase.startsWith("A")) //true
console.log(frase.startsWith("s")) // false
// endsWith
console.log(frase.endsWith("s")) //true
console.log(frase.endsWith("a")) //false
// replace
let novaFrase = frase.replace('A', 'a')
console.log(frase)
console.log(novaFrase)