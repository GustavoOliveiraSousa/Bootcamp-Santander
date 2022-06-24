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

//IF/ELSE
function numeroPositivo(num) {
    const ehNegativo = num < 0;
    const maiorQueDez = num >10;

    if (ehNegativo) {
        return "Esse número é negativo!";
    }else if (!ehNegativo && maiorQueDez) {
        return "Esse número é positivo e maior que dez!"
    }

    return "Esse número é positivo!";
}

numero = numeroPositivo(50);
console.log(numero);
//-------------------------------