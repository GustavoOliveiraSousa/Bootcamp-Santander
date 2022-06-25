//SINTAXE
//callback: função a ser executada em cada elemento
//thisArg(opcional): valor de "this" dentro da função de callback
// Array.map(callback, thisArg)
// callback(item, index, array)

//MAP VS FOREACH
//usando map
const array = [1, 2, 3, 4, 5];
array.map((item) => item * 2);

//usando forEach
// const array = [1, 2, 3, 4, 5];
// array.forEach((item) => item * 2);
