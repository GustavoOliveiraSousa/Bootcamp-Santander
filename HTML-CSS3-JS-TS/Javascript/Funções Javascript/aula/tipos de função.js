// //ESTRURURA DE UMA FUNÇÃO
// function name(params) {
//     //instruções
//     return; //valor do retorno
// }
// //--------------------------------------------

// //FUNÇÃO ANÔNIMA
// const soma = function (a, b) { // se chama função anônima, pois ela não tem nome ("anônima")
//     return a + b;
// }

// let soma1 = soma(1, 2);
// let soma2 = soma(5, 4);

// console.log(soma1); //3
// console.log(soma2); //9
// //--------------------------------------------

// //FUNÇÃO AUTOINVOCÁVEL
// (
//     function() {
//         let name = "Gustavo O Programador"
//         return name;
//     }
// )();
// //--------------------------------------------

// //CALLBACKS
// //função passada como argumento para outra função
// const calc = function(operacao, num1, num2) {
//     return operacao(num1, num2);
// }

// const soma = function(num1, num2) {
//     return num1 + num2;
// }

// const sub = function(num1, num2) {
//     return num1 - num2;
// }

// const resultSoma = calc(soma, 1, 2);
// const resultSub = calc(sub, 1, 2);

// console.log(resultSub);
// console.log(resultSoma);
// //--------------------------------------------
