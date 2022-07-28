const pessoa = {
    nome: 'João Arthur',
    idade: 20,
    profissao: 'Desenvolvedora de Sistemas',
}

const Gustavo: {nome: string, idade: number, profissao: string} = {
    nome: "Gustavo",
    idade: 19,
    profissao: "Desenvolvedora de Sistemas"
}

enum profissao {
    "Desenvolvedor(a)",
    "Professor(a)",
    "Arquiteto(a)",
    "Enfermeiro(a)",
    "Engenheiro(a)",
}

interface pessoa {
    nome: string,
    idade: number,
    profissao?: profissao
}
interface Estudade extends pessoa{
    materias: string[]
}

const Morfeu: pessoa = {
    nome: "Morfeu",
    idade: 23,
    profissao: profissao["Desenvolvedor(a)"]
}

const Margarida: pessoa = {
    nome: "Margarida",
    idade: 16,
    profissao: profissao["Engenheiro(a)"]
}

const Yudi: Estudade = {
    nome: "Yudi",
    idade: 34,
    profissao: profissao["Engenheiro(a)"],
    materias: ['Mecânica dos Fluidos', 'Resistencia dos Materiais', 'Cálculo']
}

const Morzart: pessoa = {
    nome: "Morzart",
    idade: 13,
}

function listar(lista: string[]) {
    for (const item of lista ) {
        console.log("- ", item);
        
    }
}

listar(Yudi.materias);