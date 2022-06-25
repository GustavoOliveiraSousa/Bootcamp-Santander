function excluiRepetidos(array) {
    let unicos = new Set(array);
    return[...unicos];
}

const array = [30, 30, 40, 5, 223, 2049, 3034, 5];

console.log(excluiRepetidos(array));