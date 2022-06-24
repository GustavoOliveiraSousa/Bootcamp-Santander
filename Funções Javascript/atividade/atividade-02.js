const pessoa =  {
    nome: "Gustavo",
    idade: 19,
};

function calculaIdade(idade) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

var anos = 27;
console.log (calculaIdade.call(pessoa));
