package br.com.dio;

import br.com.dio.model.Gato;

public class PrimeiroPrograma {
    public static void main(String[] args) {
        Gato gato = new Gato("Xilito", "marrom", 12);
        Livro livro = new Livro("Sherlock Holmes", 121);

        System.out.println(gato);
        System.out.println(livro);

        /*
         * int a = 1000;
         * int b = 1022;
         * System.out.println("Hello Mars!!! "+ (a+b));
         */
    }
}

class Livro {
    private final String nome;
    private final Integer npages;

    public Livro(String nome, Integer npages) {
        this.nome = nome;
        this.npages = npages;
    }

    @Override
    public String toString() {
        return "Livro{" +
                "nome='" + nome + '\'' +
                ", npages=" + npages +
                '}';
    }
}