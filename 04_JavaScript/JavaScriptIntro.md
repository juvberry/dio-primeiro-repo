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

