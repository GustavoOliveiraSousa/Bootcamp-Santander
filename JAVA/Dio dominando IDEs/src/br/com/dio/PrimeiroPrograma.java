package br.com.dio;

import br.com.dio.model.Gato;

public class PrimeiroPrograma {

	public static void main(String[] args) {
		
		Gato Gato = new Gato ("Anubis", "Prateado", 2222);
		Livros Livros = new Livros();
		
		System.out.println(Gato);
		System.out.println(Livros);
		
		/*int a = 1011;
		int b = 1011;
		System.out.println("Hello Mars!!" + (a+b));*/
	}
	
}

class Livros {
	private String nome;
	private String npag;
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	
}
