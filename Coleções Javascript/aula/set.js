// //SET
// //sets são estruturas que armazenam apenas valores únicos
// //em vez da propriedade length, consulta-se o número de registro pela propriedade size
// // não possui método map, filter, reduce...

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const mySet = new Set(myArray);


//MÉTODOS
//adicionar, consultar e deletar
const mySet = new Set();

mySet.add(5); //adicionando
mySet.add(1);

mySet.has(3);//lendo

mySet.delete(5);//deletando
