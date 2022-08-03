package br.com.dio;

import br.com.dio.model.Gato;

public class PrimeiroPrograma {

	public static void main(String[] args) {
		
		Gato Gato1 = new Gato ("Anubis", "Prateado", 2222);
		Gato Gato2 = new Gato ("Bichano", "Pretp", 10);
		Livros Livros = new Livros("Sherlock Holmes", 500);
		
		System.out.println(Gato1);
		System.out.println(Gato2);
		System.out.println(Livros);
		
		/*int a = 1011;
		int b = 1011;
		System.out.println("Hello Mars!!" + (a+b));*/
	}
	
}

class Livros {
	private String nome;
	private int npag;
	
	@Override
	public String toString() {
		return "Livros [nome=" + nome + ", npag=" + npag + "]";
	}

	public Livros(String nome, int i) {
		this.nome = nome;
		this.npag = i;
	}
	
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public int getNpag() {
		return npag;
	}

	public void setNpag(int npag) {
		this.npag = npag;
	}

	

}
