function isEqual(a, b){
    let sum = a + b
    if(a === b){
        if(sum > 10 && sum < 20){
            console.log(`Os números ${a} e ${b} são iguais e sua soma ${sum} é maior que 10 e menor que 20.`)
        }else if(sum > 10 && sum > 20){
            console.log(`Os números ${a} e ${b} são iguais e sua soma ${sum} é maior que 10 e maior que 20.`)
        }else if(sum < 10 && sum < 20){
            console.log(`Os números ${a} e ${b} são iguais e sua soma ${sum} é menor que 10 e menor que 20.`)
        }
    }else{
        if(sum > 10 && sum < 20){
            console.log(`Os números ${a} e ${b} não são iguais e sua soma ${sum} é maior que 10 e menor que 20.`)
        }else if(sum > 10 && sum > 20){
            console.log(`Os números ${a} e ${b} não são iguais e sua soma ${sum} é maior que 10 e maior que 20.`)
        }else if(sum < 10 && sum < 20){
            console.log(`Os números ${a} e ${b} não são iguais e sua soma ${sum} é menor que 10 e menor que 20.`)
        }
    }
}

isEqual(2, 4)
isEqual(10, 4)
isEqual(20, 20)
isEqual(2, 2)
isEqual(10, 10)

// resolvido pela expert:

function comparaNumeros(num1, num2) {
	const primeiraFrase = criaPrimeiraFrase(num1, num2);
	const segundaFrase = criaSegundaFrase(num1, num2);

	return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
	let primeiraFrase = `Os números ${num1} e ${num2}`;
	let simNao = 'não';

	if (num1 === num2) {
		simNao = '';
	}

	return `${primeiraFrase} ${simNao} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
	const soma = num1 + num2;
	let comparaDez = 'menor';
	let comparaVinte = 'menor';

	if (soma > 10) {
		comparaDez = 'maior';
	}

	if (soma > 20) {
		comparaVinte = 'maior';
	}

	return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

console.log(comparaNumeros(10, 10));