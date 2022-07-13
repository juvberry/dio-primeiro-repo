class ContaBancaria{
    agencia = ''
    numero = 0
    tipo = ''
    saldo = null

    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia
        this.numero = numero
        this.tipo = tipo
        this.saldo = saldo
    }
    
    get saldo(){
        console.log(`O seu saldo é de ${this.saldo} reais`)
        return this.saldo
    }

    set crieSaldo(valor){
        this.saldo = valor
        console.log(`O seu novo saldo é de ${this.saldo} reais`)
        return this.saldo
    }

    sacar(valor) {
        if(valor > this.saldo){
            console.log(`Você não tem saldo o suficiente para essa transação`)
        }else{
            this.saldo = this.saldo - valor
            console.log(`Você sacou ${valor} reais e agora possui ${this.saldo} reais`)
        }
        return this.saldo
    }

    depositar(valor){
        this.saldo = this.saldo + valor
        console.log(`Você depositou ${valor} reais e agora possui ${this.saldo} reais`)
        return this.saldo
    }
}

class ContaCorrente extends ContaBancaria{
    cartaoCredito = null

    constructor(agencia, numero, tipo, saldo, cartaoCredito){
        super(agencia, numero, 'conta corrente', saldo)
        this.cartaoCredito = cartaoCredito
    }

    get credito() {
        return this.cartaoCredito
    }

    set credito(valor){
        this.cartaoCredito = valor
        return this.cartaoCredito
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero, tipo, saldo){
        super(agencia, numero, 'conta poupança', saldo)
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero, tipo, saldo){
        super(agencia, numero, 'conta universitária', saldo)
    }

    sacar(valor){
        if(valor > 500){
            console.log('Você não pode sacar um valor acima de R$500, por favor altere o valor de saque.')
        }else{
            super.sacar(valor)
        }
        // console.log(`O seu saldo é de ${this.saldo} reais`)
    }
}

function desafio(N){
    for(let i = 1; i <= N; i++){
        if(i % 2 === 0){
            res = Math.pow(i, 2)
            console.log(`${i}^2 = ${res}`)
        }
    }
}

let soma = 0

function desafio2(string){
    let myStrg = string.shift().split(' ')
    for(i = 0; i < myStrg.length; i++){
        let transfor = parseInt(myStrg[i], 10)
        soma =  soma + transfor
        console.log(transfor)
    }
    console.log(soma - 3)
}

let myAccount = new ContaBancaria('centro', 1345, 'conta bancária', 1400)
let contaCorr = new ContaCorrente('centro', 1346, '', 1400)
let contaUni = new ContaUniversitaria('centro', 1346, '', 1400)

// console.log(myAccount.saldo)
// console.log(`O seu saldo é de ${myAccount.saldo} reais`)
// myAccount.sacar(30)
// myAccount.sacar(3000)

// console.log(contaCorr.tipo)
// console.log(contaCorr.saldo)
// contaCorr.crieSaldo = 1200
// console.log(contaCorr.saldo)

// console.log(contaUni.tipo)

// contaUni.sacar(510)
// console.log(contaUni.saldo)
// contaUni.sacar(10)
// console.log(contaUni.saldo)
// console.log(contaUni.agencia)

// desafio(10)
// desafio2(['6 5 4 3'])
// desafio2(['6 6 2 6'])