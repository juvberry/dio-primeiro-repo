let array = [1, 4, 6, 8, 9]

function length(arr, num){
    if(arr.length === num){
        console.log('deu certo')
        return true
    }
}

function errorEx(arr, number){
    let refError = new ReferenceError('Você precisa colocar os parâmetros na função')
    let arrTypeError = new TypeError('O array precisa ser do tipo Object')
    let numTypeError = new TypeError('o número precisa ser do tipo Number')
    let rangeError = new RangeError('o comprimento do array não é o mesmo que o numero passado')

    if(arr){
        let length = arr.length
        try{
            if(length === number){
                console.log('voce acertou o tamanho do array')
            }else if(typeof arr != 'object'){
                throw arrTypeError
            }else if(typeof number != 'number'){
                throw numTypeError
            }else{
                throw rangeError
            }
        }catch(e){
            console.log(e)
            if(e instanceof TypeError) {
                if(arrTypeError){
                    throw arrTypeError
                }else{
                    throw numTypeError
                }
            } else if (e instanceof RangeError) {
                throw rangeError
                // declarações para manipular exceções RangeError
            }else{
                console.log('nenhum dos outros erros, se vira')
               // declarações para manipular quaisquer exceções não especificadas
            }
        }
    }else{
        throw refError
    }
    
}

// errorEx()
// errorEx(array, 5)
// errorEx('teste', 6)
// errorEx(array, 6)
errorEx(array, 'not a number')
// console.log(typeof array)