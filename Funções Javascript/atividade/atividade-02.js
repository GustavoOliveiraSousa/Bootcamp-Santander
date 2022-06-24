const pessoa =  [
    pessoa.nome = "Gustavo",
    pessoa.idade = 19,
]


function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}