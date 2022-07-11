"use strict";
//npm start lite-server
//npm run watch
let valorAny;
valorAny = 3;
valorAny = "Olá";
valorAny = true;
let valorString1 = "Teste";
valorString1 = valorAny;
let valorString2 = ", pode comemorar";
valorString2 = valorAny;
function somaString(string1, string2) {
    console.log(string1 + string2);
}
somaString(valorString1, valorString2);
