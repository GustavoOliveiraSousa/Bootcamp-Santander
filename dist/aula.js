"use strict";
//ESCREVENDO A FUÇÃO SOMA EM TYPESCRIPT
// let soma = (a: number, b:number) => a + b;
// console.log(soma(2,6));
//==========================================================
var MeuCachorro = /** @class */ (function () {
    function MeuCachorro(nome, idade) {
        this.idade = idade;
        this.nome = nome;
    }
    return MeuCachorro;
}());
var cao = new MeuCachorro("Apolo", 5);
console.log(cao.nome);
//=================================================================
