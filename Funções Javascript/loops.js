// //IF/ELSE
// function numeroPositivo(num) {
//     let resultado;

//     if (num > 0) {
//         resultado = true;
//     }else{
//         resultado = false;
//     }

//     return resultado
// }
// numero = numeroPositivo(2)
// console.log(numero);
// //-------------------------------

// //IF/ELSE
// function numeroPositivo(num) {
//     const ehNegativo = num < 0;
//     const maiorQueDez = num >10;

//     if (ehNegativo) {
//         return "Esse número é negativo!";
//     }else if (!ehNegativo && maiorQueDez) {
//         return "Esse número é positivo e maior que dez!"
//     }

//     return "Esse número é positivo!";
// }

// numero = numeroPositivo(50);
// console.log(numero);
// //-------------------------------

// //SWITCH/CASE
// function getAnimal(id) {
//     switch (id) {
//         case 1:
//             return "ornintorrinco";
//         case 2:
//             return "pinguin";
//         case 3:
//             return "periquito";
//         case 4:
//             return "tubarão";
//         default:
//             return "opção inválida!";
//     }
// }

// animal = getAnimal(3);
// console.log(animal);

// //----------------------------------

// //FOR
// function multiplicaPorDois(array) {
//     let multiplicados = [];

//     for (let index = 0; index < array.length; index++) {
//         multiplicados.push(array[index] *2);
//     }

//     return multiplicados
// }

// const meusNumeros = [2,33,456,356,40];

// let output = multiplicaPorDois(meusNumeros);
// console.log(output);
// //----------------------------------------

// //WHILE
// //executa instruções até que a condição se torne falsa
// function exemploWhile() {
//     let num = 0

//     while (num <= 5) {
//         console.log(num);
//         num++;
//     }
// }

// let output = exemploWhile()
// console.log(output);
// --------------------------------------

// //DO WHILE
// //executa instruções até que a condição se torne falsa, porém a primeira execução sempre ocorre
// function exemploWhile() {
//     let num = 0

//     do{
//         console.log(num);
//         num++;
//     }while (num <= 5) 
// }

// let output = exemploWhile()
// console.log(output);
// //--------------------------------------

// //THIS
// const pessoa = {
//     firstName: "Gustavo",
//     lastName: "Sousa",
//     id: 1,
//     fullName: function(){
//         return this.firstName+" "+this.lastName
//     },
//     getId: function () {
//         return this.id;
//     }
// };

// console.log(pessoa.fullName());
// console.log(pessoa.getId());
// //----------------------------------

// //THIS - CALL
// //o this é substituido pelo argumento de call

// const pessoa = {
//     nome: "Gustavo",
// };

// const corFavorita = {
//     nome: "Laranja",
// };

// function getSomthing() {
//     console.log(this.nome);
// }

// getSomthing.call(pessoa);
// getSomthing.call(corFavorita); 
// //---------------------------------------

// //THIS - APPLY
// //o this é substituido pelo argumento de apply

// const pessoa = {
//     nome: "Gustavo",
// };

// const corFavorita = {
//     nome: "Laranja",
// };

// function getSomthing() {
//     console.log(this.nome);
// }

// getSomthing.apply(pessoa);
// getSomthing.apply(corFavorita); 
// //---------------------------------------

//THIS - APPLY
//clona a estrutura da função onde é chamada e aplica o valor do objeto como parametro

const retornaNomes = function (){
    return this.nome;
};

let Gustavo = retornaNomes.blind({nome: "Gustavo"});

Gustavo();