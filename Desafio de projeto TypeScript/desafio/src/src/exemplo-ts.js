"use strict";
// npm install tsc-watch --save-dev
// não ative a configuração outdir no package.json (senão o tsc watch não funciona)
// npm run "algum script do package.json(voce pode criar) eu configurei o "watch": "tsc --watch" e o "start": "lite-server",
//tsc --init    - para iniciar o tradutor(cria o arquivo tsconfig.json)
let button = document.getElementById("button");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
const output = document.getElementById("output");
function adicionaNumeros(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
}
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            let saida = adicionaNumeros(Number(input1.value), Number(input2.value));
            if (saida) {
                let saidaString = saida.toString();
                output.innerHTML = saidaString;
            }
        }
    });
}
