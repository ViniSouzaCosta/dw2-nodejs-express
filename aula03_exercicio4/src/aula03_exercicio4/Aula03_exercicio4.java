package aula03_exercicio4;

import java.util.Scanner;

public class Aula03_exercicio4 {

   
    public static void main(String[] args) {
       Scanner digite= new Scanner(System.in);
       System.out.println("Digite o seu nome: ");
       string nome = digite.next();
       
       System.out.println("Digite o ano de nasc: ");
       int ano = digite.nextInt();
       
       int anoAtual = 2025;
       
       int idade = anoAtual - ano;
       
       System.out.printf("voce tem: " + idade + " anos");
       digite.close();
    }
    }
