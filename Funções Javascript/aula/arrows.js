//ARROW FUNCTION "=>"
//substitui a necessidade de usar o "return"
//arrow function não faz hoisting
//"this" sempre será o objeto global. Métodos para modificar seu valor não irão funcionar
//não existe o objeto "arguments"
//o construtur (ex: new MeuObjeto()) também não pode ser utilizado

// const helloworld = function(){
//     return "Hello World";
// }

// //equivale a 
// const helloworld = () => {
//     return "Hello world";
// }

// //equivale a
// const helloworld = () => "Hello world";
// let output = helloworld();
// console.log(output);

//caso exista apenas uma linha, pode dispensar as chaves e o return
//caso exista apenas um parâmetro, pode dispensar os parênteses

const soma = (a, b) => console.log(a+b); 
soma(4, 6);


