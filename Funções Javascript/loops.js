//IS/ELSE
function numeroPositivo(num) {
    let resultado;

    if (num > 0) {
        resultado = true;
    }else{
        resultado = false;
    }

    return resultado
}

numero = numeroPositivo(2)
console.log(numero);