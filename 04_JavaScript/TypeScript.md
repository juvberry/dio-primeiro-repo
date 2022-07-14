# TypeScript

tipagem dos dados, maior segurança 💆🏽‍♀️

para isso utiliza-se dos :

	function soma(a:number, b:number){
		return a + b
	}


**interfaces**: contrato para implementar seus dados. (este dado precisa ser do mesmo tipo que o dado comparado)

	interface IAnimal{
	    nome: string;
	    tipo: 'terrestre' | 'aquatico'
	}
	
	const animal: IAnimal = {
	    nome: 'Beta',
	    tipo: 'aquatico'
	}
	
**types**: juncoes, merges de interfaces ou atributos delas.