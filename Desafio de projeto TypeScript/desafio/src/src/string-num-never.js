"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = "Olá";
anyEstaDeVolta = 5;
let stringTeste = "Verificar";
stringTeste = anyEstaDeVolta;
let unknownValue;
unknownValue = 1;
unknownValue = "Oi";
unknownValue = true;
unknownValue = "vai sim";
let stringTeste2 = "agora vai";
if (typeof unknownValue === 'string') {
    //só posso reatribuir um tipo unknown se eu verificar com um if
    stringTeste2 = unknownValue;
}
function jogaErro(erro, codigo) {
    //o throw do professor não deu certo aqui, então fiz desse jeito
    throw new Error(`${erro} code:${codigo}`);
}
jogaErro("Deu erro,", 500);
