# TypeScript

**Superset do JS**
construida por cima do JS e adiciona, features à linguagem,
compila para JS,
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

	
	interface IFelino extends IAnimal{
	    visaoNoturna: boolean
	}
	
	interface ICanino extends IAnimal{
	    porte: 'pequeno' | 'medio' | 'grande'
	}
	
	type TDomestico = IFelino | ICanino
	
	const animal: TDomestico = {
	    domestico: true,
	    nome: 'cachorro',
	    porte: 'medio',
	    tipo: 'terrestre' 
	}
	
é colocado o **as** depois da definição da variável, ao invés dos **:**	
	
	const input = document.getElementById('input') as HTMLInputElement

	input.addEventListener('input', (e) => {
	    console.log('digitei')
	    // console.log(e.currentTarget)
	})
	
**generic types**

**T** é o padrão para quando nao sabemos exatamente o tipo que receberemos.

	function adiciona<T>(array:any[], valor: T){
    	return array.map(item => item + valor)
	}
	
	adiciona([1,5,7], 8)
	adiciona(['A','B','T'], 'i')

**condicional a partir de parametros**
	
	interface IUsuario{
	    id: string;
	    email: string;
	}
	
	interface IAdmin extends IUsuario{
	    cargo: 'gerente' | 'coordenador' | 'supervisor'
	}
	
	function redirect(usuario: IUsuario | IAdmin){
	    if('cargo' in usuario){
	        // redirecionar para area de adm
	    }
	    // redirecionar para area de users
	}
	
	
**utilizando o ?**

	interface IUsuario{
	    id: string;
	    email: string;
	    cargo?: 'funcionario' | 'gerente' | 'coordenador' | 'supervisor'
	}

	function redirect(usuario: IUsuario){
	   if(usuario.cargo){
	        // redirecionar(usuario.cargo)
	   }
	
	   // redirecionar para area do usuario
	}
	
**readonly**

	interface Cachorro{
	    nome: string;
	    idade: number;
	    parqueFavorito?: string
	}
	
	type CachorroSoLeitura = {
	    readonly [K in keyof Cachorro]: Cachorro[K]
	}
	
	class MeuCachorro implements CachorroSoLeitura{
	    nome
	    idade
	
	    constructor(nome, idade){
	        this.nome = nome
	        this.idade = idade
	    }
	}
	
	const caozinho = new MeuCachorro('Apollo', 14)
	
	
**void**: quando a func nao retorna nada (como um console.log)


