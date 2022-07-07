// solução 1

function findPalindrom(string){
    if(!string) return 'string inexistente';

    // ao fazer o split, a string se torna um array (cada item é um caractere) e por isso usamos o metodo reverse
    return string.split('').reverse().join('') === string
}

let myVar
let myVar2 = null

console.log(findPalindrom('ovo'))
console.log(findPalindrom('gato'))
console.log(findPalindrom(''))
console.log(findPalindrom(myVar))
console.log(findPalindrom(myVar2))

// solução 2
// abba
// 0123
// abbbba
// 012345
function findPalindrom2(string){
    if(!string) return 'string inexistente';

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i]){
            return false
        }
    }
    return true
}

console.log(findPalindrom2('ovo'))
console.log(findPalindrom2('gato'))
console.log(findPalindrom2(''))
console.log(findPalindrom2(myVar))
console.log(findPalindrom2(myVar2))