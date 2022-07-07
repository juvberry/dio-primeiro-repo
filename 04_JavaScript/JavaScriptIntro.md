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