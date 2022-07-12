"use strict";
const pessoa = {
    nome: 'João Arthur',
    idade: 20,
    profissao: 'Desenvolvedora de Sistemas',
};
const Gustavo = {
    nome: "Gustavo",
    idade: 19,
    profissao: "Desenvolvedora de Sistemas"
};
var profissao;
(function (profissao) {
    profissao[profissao["Desenvolvedor(a)"] = 0] = "Desenvolvedor(a)";
    profissao[profissao["Professor(a)"] = 1] = "Professor(a)";
    profissao[profissao["Arquiteto(a)"] = 2] = "Arquiteto(a)";
    profissao[profissao["Enfermeiro(a)"] = 3] = "Enfermeiro(a)";
    profissao[profissao["Engenheiro(a)"] = 4] = "Engenheiro(a)";
})(profissao || (profissao = {}));
const Morfeu = {
    nome: "Morfeu",
    idade: 23,
    profissao: profissao["Desenvolvedor(a)"]
};
const Margarida = {
    nome: "Margarida",
    idade: 16,
    profissao: profissao["Engenheiro(a)"]
};
const Yudi = {
    nome: "Yudi",
    idade: 34,
    profissao: profissao["Engenheiro(a)"],
    materias: ['Mecânica dos Fluidos', 'Resistencia dos Materiais', 'Cálculo']
};
const Morzart = {
    nome: "Morzart",
    idade: 13,
};
function listar(lista) {
    for (const item of lista) {
        console.log("- ", item);
    }
}
listar(Yudi.materias);
