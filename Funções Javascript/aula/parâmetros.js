// //VALORES PADRÃO
// function exponencial(array, num = 1) {
//     let result = []

//     for (let index = 0; index < array.length; index++) {
//         result.push(array[index] ** num);
//     }
//     return result;
// }

// let base = [1, 2, 3, 4];

// let semExpoente =  exponencial([1, 2, 3, 4]) //nesse caso, nao foi falado a elevação, então num será 1 
// let comExpoente = exponencial([1, 2, 3, 4], 4) //o ultimo "4" é a elevação

// console.log(`${base} com expoente 1: ${semExpoente}`);
// console.log(`${base} com expoente 4: ${comExpoente}`);
// //------------------------------------------------------


// //OBJETOS ARGUMENTS
// function findMax() {
//     let max = -Infinity;

//     for (let index = 0; index < arguments.length; index++) {
//         if (arguments[index] > max) {
//             max = arguments[index];  
//         } 
//     }
//     return max;
// }
// var resultado = findMax(1, 2, 3, 6, 90, 1);
// console.log(resultado);
// //--------------------------------------------------------

// //ARRAYS E OBJETOS  
// //spread: uma forma de lidar separadamente com elementos
// function sum(y , x , z) {
//     return x  + y + z;
// }
// const numbers = [1, 2, 3];

// console.log(sum(...numbers));
// //O que era parte de um array se torna um elemento independente
// //----------------------------------------------------------

//ARRAYS E OBJETOS  
//rest: combina os argumentos em um array
function confereTamanho(...args) {
    console.log(args.length);
}
confereTamanho()
confereTamanho(1, 2)
confereTamanho(1, 2, 3)
//O que era um elemento independente se torna parte de um array
//----------------------------------------------------------