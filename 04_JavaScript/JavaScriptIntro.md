#JavaScript

## a brief history
**Linguagem interpretada** = rodada em tempo real, browser rodando em tempo real. O código está sendo disponibilidado instantaneamente. Não precisa esperar a compilação do código para receber o resultado dele.

**Baseado em Protótipos**

**Multiparadigma** (POO, Funcional, Estruturada)

**Comumente utilizada em apps web client-side**

**Segue o padrão ECMAScript**

1997 (início) -> 2015 (💙ECMAScript 6💙)

## comments, vars e consts

**comentário**: uma linha = **//**; mais de uma linha **/* conteúdo */**

**var**: variável que nomeada cujo valor pode ser alterado, não leva em consideração seu escopo.

**let**: variável que nomeada cujo valor pode ser alterado, leva em consideração seu escopo.

**const**: constante nomeada cujo valor não pode ser alterado

*são endereços de memória utilizados para gravar essas variaveis e constantes*

## function

**function**: função que deve ser nomeada, dentro dos parêntesis colocamos os parâmetros e entre chaves colocamos o que a função deve realizar.

function **teste**(paramA, paramB){

}

## console.log

**console.log**: nossa forma de debugar, de observar os valores sendo pedidos em nossas funcões, resultados, etc. Grava o resultado na memoria do browser.

## DOM

**Document Object Model**: estrutura dos elementos dentro da nossa janela 

## operadores

**atribuição**: atribuindo valor = (x = y), += (x = x+y), * = (x = x * y), /= (x = x / y),  %=(x = x % y)

**aritméticos**: relações matemáticas +, -, *, **, %, /, ++, --

**comparação**: == (igual a), === (mesmo valor e mesmo tipo), != (diferente), !== (valor e tipos diferentes), > (maior que), < (menor que), >= (maior ou igual a), <= (menor ou igual a)

**lógica**: variáveis e tipos -> &&(ambas afirmações verdadeiras), ||(esta ou aquela afirmação verdadeira), !(oposto do próximo dado)

**condicional(ternário)**: condição ? expressão1 : expressão2
`if(condição){realizar expressão1}else{realizar expressão2}`

## estrutura de dados

**Dados primitivos**(boolean, string, number, null e undefined) ou **nao primitivos**(objects e arrays)

**string**: textos 😇

**number**: números 🤩

**boolean**: true or false 🧐

**array**: listas []

**objeto**: item que contém características (estrutura do tipo chave & valor)
`let person = {
name: 'Julia,
age: 29'}`

**empty null e undefined**

* empty: inicializado porém nao tem conteúdo (ex: array: [] é empty)
* null: existe, porém propositalmente não é nada
* undefined: não existe, indefinido

*falsy*: é um valor que se traduz em **falso** quando avaliado em um contexto Boolean. exemplo:
	
		if(false)
		if(null)
		if(undefined)
		if(0)
		if(NaN)
		if('')
		if(document.all)[]
		
## funções

### tipos de funções
****

**função**

	function nome(parametros){
		// instruções
		return // valor de retorno
	}
		
**função anônima**

	const soma = function(a, b){
		return a + b
	}
	
	soma(2, 5) // 7
	
**função auto invocável**

	(
	 function(){
	let name = 'Julia Beims'
	return name
		}
	)()
	
	(
	 function(a, b){
		return a + b
		}
	)(1, 2) // 3
	
	const soma = (
		 function(a, b){
		return a + b
		}
	)(1, 2)
	console.log(soma) // 3
		
**callbacks**: uma função que é passada como argumento para outra!

	const calc = function(operação, num1, num2){
		return operacao(num1, num2)
	}
	
	function soma(num1, num2){
		return num1 + num2
	}
	
	function sub(num1, num2){
		return num1 - num2
	}
	
	const resultSoma = calc(soma, 1, 2)
	const resultSub = calc(sub, 1, 2)
	
	console.log(resultSoma) // 3
	console.log(resultSub) // -1

### parâmetros

valores que precisamos (ou não) para realizar a func.

*se o numero nao existir, ele será 1, como abaixo ⬇️*

	function exponencial(array, num = 1){
		const result = []
		for(let i = 0; i < array.length; i++){
			result.push(array[i] ** num)
		}
		return result
	}
		
**objeto "arguments"**: um array com todos os parâmetros passados quando a função foi ivocada

	function findMax(){
		let max = -Infinity
		for(let i = 0; i < arguments.length; i++){
			if(arguments[i] > max){
				max = arguments[i]
			}
		}
		return max
	}
	findMax(1, 4, 90, 101, 80) // 101
	
	
	function showArgs(){
		return Arguments
	}
	
	showArgs(1, 4, [2, 4, 5], 'uma string qualquer')
	// Arguments(4) [1, 4, Array(3), 'uma string qualquer', callee ...]
		
**como tratar com arrays**

*spread*: o que era parte de um array se torna um el independente

	function sum(x, y, z){
		return x + y + z
	}
	const numbers = [1, 2, 3]
	console.log(sum(...numbers))
	
		
*rest*: o que era um el independente, vira parte de um array

	function checkSize(...args){
		console.log(args.length)
	}
	
	checkSize() // 0
	checkSize(1, 2) // 2
	checkSize(8, 9, 0) // 3
	
	
**como tratar objects**

*object destructuring*: entre {} podemos filtrar apenas os dados que nos interessam em um objeto

	const user = {
		name: 'juvberry',
		id: 888,
		fullName: {
			firstName: 'Julia',
			lastName: 'Beims'
		}
	}
	
	function userId({id}){
		return id
	}
	
	function getFullName({fullName: {firstName: first', lastName: last}}){
		return `${first} ${last}`
	}
	userId(user) // 888
	getFullName(user) // Julia Beims


### loops

**if/else**:
	
	function numeroPositivo(num){
		let resultado
			if(condição){
				realizar declaração 1
			}else{
				realizar declaração 2
			}
			
			if(num < 0){
				resultado = false
			}else{
				resultado = true
			}
			return resultado
	}
	
	numeroPositivo(10) // true
	numeroPositivo(-2) // false
		
****

	function numeroPositivo(num){
		let resultado
		
		const ehNegativo = num < 0
			
			if(ehNegativo){
				resultado = false
			}else{
				resultado = true
			}
			return resultado
	}
		
		
****

	function numeroPositivo(num){		
		const ehNegativo = num < 0
			
			if(ehNegativo){
				return false
			}
			return true
	}
		
		
*também pode-se usar o else if*

	function numeroPositivo(num){		
		const ehNegativo = num < 0
		const maiorQueDez = num > 10
			
			if(ehNegativo){
				return 'Esse número é negativo!'
			} else if (!ehNegativo && maiorQueDez){
				return 'Esse número é positivo e maior que dez!'
			}
			return 'Esse número é positivo!'
	}
		
**switch/case**: equivale a uma comparação de tipo e valor (===); sempre precisa ter um valor default; ideal para quando precisa-se comparar muitos valores.

	function getAnimal(id){
		switch(id){
			case 1:
				return 'cão';
			case 2:
				return 'gato';
			case 3:
				return 'pássaro';
			default:
				return 'peixe';
		}
	}
	
	
	getAnimal(1) // cão
	getAnimal(default) // peixe
	getAnimal(4) // peixe
		
		
**for**: loop dentro de elementos iteráveis (arrays, strings)

	function multiplicarPorDois(arr){
		let lista = []
		
		for(let i = 0; i < arr.length; i++){
			lista.push(arr[i] * 2)
		}
		
		return lista
	}
	
	const meusNumeros = [2, 33, 456, 356, 40	]
	
	multiplicarPorDois(meusNumeros) // [4, 66, 912, 712, 80]
		

*for...in:*

	const meuObjeto = {
	    nome: 'Julia',
	    idade: '20',
	    cidade: 'Curitiba'
	}
	function forIn(obj){
	    for(prop in obj){
	        console.log(prop)
	    }
	}
	
	forIn(meuObjeto)
	// nome
	// idade
	// cidade
	
	const meuObjeto = {
    nome: 'Julia',
    idade: '20',
    cidade: 'Curitiba'
	}
	function forIn(obj){
	    for(prop in obj){
	        console.log(obj[prop])
	    }
	}
	
	forIn(meuObjeto)
	// Julia
	// 20
	// Curitiba
	
	
*for...of*: loop entre estruturas iteraveis(arrays, strings)

	const palavra = 'abacate'

	function logLetras(palavra){
	    for(let letra of palavra){
	        console.log(letra)
	    }
	}
	
	logLetras(palavra) // a b a c a t e
	
	
	const nums = [1, 4, 6, 8, 2]

	function logNumeros(numeros){
	    for(let num of numeros){
	        console.log(numeros)
	    }
	}
	
	logNumeros(nums) // 1 4 6 8 2
	
	
*while*: enquanto condição é true, realizar tal coisa

	function exWhile(){
	    let num = 0
	    while(num <= 5){
	        console.log(num)
	        num++
    	}
	}
	
	exWhile()
	
*do...while*: faça tal coisa enquanto tal condição for verdadeira

	function exDoWhile(){
    let num = 0

    do{
        console.log(num)
        num ++
    }while(num <= 5)
	}
	
	exDoWhile()

## this

**this**: referência ao próprio contexto

	
	const pessoa = {
	    firstName: 'Julia',
	    lastName: 'Beims',
	    id: 888,
	    fullName: function(){
	        return this.firstName + ' ' + this.lastName
	    },
	    getId: function(){
	        return this.id
	    }
	}

	pessoa.fullName()
	pessoa.getId()

*contexto*: em objeto(método) = próprio objeto dono do método;

*contexto*: sozinho = objeto global(em navegadores, window)

*contexto*: funcao = objeto global

*contexto*: evento = elemento que recebeu o evento


**call**: chama o objeto que sera referenciado no this

	const pessoa = {
    	nome: 'Julia'
	}
	
	const animal = {
	    nome: 'Yummi'
	}
	
	function getSomething(){
	    console.log(this.nome)
	}
	
	getSomething.call(pessoa)
	getSomething.call(animal)
	
**apply**: como o call, mas os argumentos referenciados em []

**bind**: clona estrutura da func onde é chamada e aplica o valor do objeto passado como parâmetro

	const retornaNome = function(){
    	return this.nome
	}
	
	let bruno = retornaNome.bind({nome: 'Bruno'})
	bruno()
	
	
## arrow function

* não faz hoisting
* o valor 'this' sempre será global
* não existe o arguments
* o constructor nao pode ser utilizado

***


 	let helloWorld = function(){
     	return 'hello world'
 	}
 	
 	let helloWorld2 = () => {
 	    return 'hello world'
 	}
 	
 	let helloWorldInLine = () => {'hello world'}
 	
 	
## coleções chaveadas

**map**: estrutura de características no formato [chave e valor] e pode ser iterado com um loop for...of

	const MyMap = new Map()

	MyMap.set('apple', 'fruit')
	MyMap.get(apple)
	MyMap.delete('apple')
	MyMap.get('apple')


*map vs object:*

* maps podem ter chaves de qqr tipo 
* (numeros, booleans), enquanto objetos recebem chaves string
* maps possuem a propriedade length
* sao mais faceis de iterar
* utilizado quando o valor das chaves é desconhecido
* os valores tem o mesmo tipo


**set**: sets sao estruturas que armazenam valores únicos, nao se repetem

	const MySet = new Set()

	MySet.add(1)
	MySet.add(5)
	
	MySet.has(1)
	// true
	MySet.has(3)
	// false
	MySet.delete(5)
	
*set vs array:*

* possui valores únicos
* em vez da propriedade length, consulta-se o numero de registros pela propriedade size
* nao possui metodos map, filter, reduce, etc


## map

um conjunto passa por uma operação e torna-se um outro conjunto.

cria um novo array, nao modifica o original

realiza operações em ordem [0] - [lastIndex]

`array.map(callback, thisArg(opcional))`

*map vs forEach* (o forEach precisaria ser colocado em uma nova variavel)
	
	let array = [1, 2, 3, 4, 5, 6]

	array.map((item) => item * 2)
	// [2, 3, 6, 8, 10, 12]
	
	array.forEach((item) => item * 2)
	// undefined

## filter

literalmente filtra os itens que correspondem à condição

cria um novo array, nao modifica o original

`array.filter(callback, thisArg)`

****

	let frutas = ['maçã fuji', 'maçã verde', 'uva', 'pera']

	frutas.filter((fruta) => fruta.includes('maçã'))
	// ['maçã fuji', 'maçã verde']

## reduce

nao retorna um outro array: ele executa uma func em todos os el do array e retorna um valor unico

`array.reduce(callbackFn, initialValue)`

****

	let callbackFn = function(acumulator, currentValue, index, array){
	    // do something
	}
	
	array.reduce(callbackFn, initialValue)

## tipos de erros

ECMAScript error: erros que ocorrem em tempo de execução

DOMException: erros relaciondados ao Document Object Model(DOM)

**throw**: trata como sendo um erro no console.

	function findPalindrom(string){
    	if(!string) throw 'string inexistente';

    	return string.split('').reverse().join('') === string
	}
	
	findPalindrom('') // erro console 'string inexistente'

**try/catch**: 

	function tryCatchEx(string){
	    try{
	        findPalindrom(string)
	    }
	    catch(e){
	        console.log(e)
	    }
	}
	
	findPalindrom('') // string invalida no log

**finally**: executa o codigo independente de ter erro ou nao.
	
	function tryCatchEx(string){
	    try{
	        findPalindrom(string)
	    }
	    catch(e){
	        console.log(e)
	    }
	    finally{
	        console.log('a string enviada foi: ' + string)
	    }
	}
	
### objeto Error

`new Error(message, fileName, lineNumber)`

		const MeuErro = new Error('Mensagem Inválida')
		throw MeuErro
		
		
		const MeuErro = new Error('Mensagem Inválida')
		MeuErro.name = 'Invalid Message'
		
## JS Assíncrono

Assíncrono: nao ocorre ou nao se efetiva ao mesmo tempo, ou seja, podemos fazer duas coisas ao mesmo tempo: enquanto acontece uma, a outra também acontece.

**promises**: objeto de processamento assincrono. inicialmente seu valor é desconhecido, pode ser resolvida ou rejeitada. (vc tem um ingresso pra cinema, ele pode ser resolvido = assistir filme, ou rejeitado = aconteceu algm imprevisto)

		const MyPromise = new Promise((resolve, reject) => {
    		window.setTimeout(()=>{
        	resolve(console.log('resolvida!'))
    }, 2000)
	})
	
	await MyPromise
		    .then((result)=> result + ' passando pelo then')
		    .then((result)=> result + ' e agora acabou')
		    .catch((err)=> console.log(err.message))
	// apos 2 segundos, retornara o valor "resolvida"
	// 'resolvida passando pelo then e agora acabou!'
	
**async/await**: funcoes assincronas precisam dessas duas palavras chaves
		
		
	async function resolvePromise(){
	    const MyPromise = new Promise((resolve, reject) => {
	        window.setTimeout(()=>{
            	resolve(console.log('resolvida!'))
	        }, 2000)
	    })
	    const resolved = await MyPromise
	            .then((result)=> result + ' passando pelo then')
	            .then((result)=> result + ' e agora acabou')
	            .catch((err)=> console.log(err.message))
	    return resolved
	}

### API

Application Programming Interface: forma de intermediar resultados do back-end com o que é apresentado no front-end. vc consegue acessa-la por url

**JSON**: notação de objeto em JS

**fetch**: precisa utilizar o await

	fetch(url, options)
		.then(response => response.JSON())
		.then(json => console.log(json))
	// retorna uma promise
	
	fetch(url, {
		method: 'GET',
		cache: 'no-cache'
	})
		.then(response => response.JSON())
		.then(json => console.log(json))


## Orientação a Objetos

## paradigmas

### imperativo:
você precisa explicar como as coisas acontecem(como o javascript)


### declarativo:
declara as coisas e as coisas acontecem(como um banco de dados)

****

**object**: objetos que possuem uma serie de propriedades.

*pilares:*

* herança
* polimorfismo
* encapsulamento
* abstração

*abstração*: processo mental que consiste em isolar um aspecto determinado de um estado de coisas relativamente complexo, a fim de simplificar a sua avaliação, classificação ou para permitir a comunicação do mesmo.

*herança*: objetos filhos que herdam propriedades e métodos do objeto pai 👨‍👦‍👦

*encapsulamento*: cada classe tem propriedades e métodos independentes do restante do código

*polimorfismo*: objetos podem herdar a mesma classe pai, mas se comportarem de forma diferente quando invocamos seus métodos

**protótipos**: como se fossem um esqueleto. qualquer objeto JS, ele herdará propriedades e métodos do seu pai(caso fosse um objeto "novo", herda do protótipo)

**classes**: sao um *syntax sugar*, ou seja, uma sintaxe feita para facilitar a escrita. o JS não possui classes nativamente. todas as classes sao objetos e a herança são os protótipos.

o **super** é utilizado para gerar a propriedade que está no construtor da classe pai. 

	class Animal{
		constructor(type = 'animal'){
			this.type = type
		}
		
		get type(){
			return this.type
		}
		
		set type(valor){
			this.type = valor.toUpperCase()
		}
		
		makeSound(){
			console.log('Making animal sound')
		}
		
	class Cat extends Animal{
		constructor(){
			super('cat')
		}
		
		makeSound(){
			super.makeSound()
			console.log('Meow!')
		}
	}
	
	let animal = new Animal()
	let bardo = new Cat()
	
	console.log(animal.type)
	console.log(bardo.type)