package aula03_exercicio_temperatura;

import java.util.Scanner;


public class Aula03_exercicio_Temperatura {
    double conversao;
    
    public static void main(String[] args) {
       Scanner digite= new Scanner(System.in);
       System.out.println("Digite a temperatura em celsius: ");
       double celsius = digite.nextDouble();
       
       double conversao = celsius * 1.8 + 32;
       
       System.out.printf("A temperatura em Fahrenheit eh:%.2f " , conversao);
       digite.close();
    }
    
}
