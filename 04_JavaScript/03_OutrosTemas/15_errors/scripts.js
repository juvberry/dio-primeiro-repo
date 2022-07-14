// minha resolução, nao deu certo
let array = [1, 4, 6, 8, 9]

// function errorEx(arr, number){
//     let refError = new ReferenceError('Você precisa colocar os parâmetros na função')
//     let arrTypeError = new TypeError('O array precisa ser do tipo Object')
//     let numTypeError = new TypeError('o número precisa ser do tipo Number')
//     let rangeError = new RangeError('o comprimento do array não é o mesmo que o numero passado')

//     if(!arr && !number){
//         try{ 
//             if(length === number){
//                 console.log('voce acertou o tamanho do array')
//             }else if(typeof arr !== 'object'){
//                 throw arrTypeError
//             }else if(typeof number !== 'number'){
//                 throw numTypeError
//             }else{
//                 throw rangeError
//             }
//         }catch(e){
//             console.log(e)
//             if(e instanceof TypeError) {
//                 console.log('Type Error!')
//                 console.log(e.name)
//                 console.log(e.stack)
//             } else if (e instanceof RangeError) {
//                 console.log('Range Error!')
//                 console.log(e.name)
//                 console.log(e.stack)
//                 // declarações para manipular exceções RangeError
//             } else if (e instanceof ReferenceError) {
//                 console.log('Reference Error!')
//                 console.log(e.name)
//                 console.log(e.stack)
//                 // declarações para manipular exceções RangeError
//             }else{
//                 console.log('nenhum dos outros erros, se vira')
//                // declarações para manipular quaisquer exceções não especificadas
//             }
//         }
//         throw refError
//     }
// }

// solução da expert:

// function validaArrays(arr, num) {
// 	try {
// 		if (!arr && !num) throw new ReferenceError('Envie os parâmetros!');

// 		if (typeof arr !== 'object')
// 			throw new TypeError('Envie um elemento do tipo Array!');

// 		if (typeof num !== 'number')
// 			throw new TypeError('Envie um elemento do tipo Number!');

// 		if (arr.length !== num) throw new RangeError('Tamanho do array inválido!');

// 		return arr;
// 	} catch (e) {
// 		if(e instanceof RangeError) {
// 			console.log('RangeError!');
// 			console.log(e.stack);
// 		} else if (e instanceof ReferenceError) {
// 			console.log('ReferenceError!');
// 			console.log(e.stack);
// 		} else {
// 			console.log('Outro tipo de erro!');
// 			console.log(e.stack);
// 		}
// 	}
// }

// console.log(validaArrays([1, 2, 3], 0));

// errorEx()
// errorEx(array, 5)
// errorEx('teste', 6)
// errorEx(array, 6)
// errorEx(array, 'not a number')
// console.log(typeof array)