package br.com.dio.calculadora;

import java.util.Scanner;

public class Calculadora {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int a, b;

        System.out.print("Digite o primeiro numero: ");
        a = scan.nextInt();
        System.out.print("Digite o segundo numero: ");
        b = scan.nextInt();

        int somar = somar(a, b);
        int subtrair = subtrair(a, b);
        float dividir = dividir(a, b);
        int multiplicar = multiplicar(a, b);

        System.out.println("\nsoma: "+ somar);
        System.out.println("subtração: "+ subtrair);
        System.out.println("divisão: "+ dividir);
        System.out.println("multiplicação: "+ multiplicar);
    }

    public static int somar(int a, int b) {
        return a + b;
    }
    public static int subtrair(int a, int b) {
        return a - b;
    }
    public static float dividir(float a, float b) {
        return a / b;
    }
    public static int multiplicar(int a, int b) {
        return a * b;
    }
}
