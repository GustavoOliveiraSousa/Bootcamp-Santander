class pessoa {
    nome: string;
    idade: number;
    profissao: string;
    constructor(nome: string, idade: number, profissao: string) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
}
let pessoa1 = new pessoa ("Maria", 29, "atriz");
let pessoa2 = new pessoa ("Roberto", 54, "pedreiro");
let pessoa3 = new pessoa ("Laura", 32, "Engenheira");
let pessoa4 = new pessoa ("Gustavo", 19, "Programador");