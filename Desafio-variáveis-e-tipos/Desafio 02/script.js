var array = [1, 3, 4, 6, 80, 33, 23, 90];

for ( let i = 0; i <= array.length; i++) {
    if (array[i] % 2 === 0) {
        array[i] = 0;
    }
}
if (array == "") {
    array = -1;
}

console.log("Trocando pares por 0")
console.log(array);