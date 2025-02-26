package application;

import java.util.Scanner;


public class Exercicio02 {
    public static void main(String[] args) {
       
        Scanner entrada = new Scanner (System.in);
        
        System.out.println("Digite quantos litros foram abastecidos no carro: ");
        float litros = entrada.nextFloat();
        
        
                
        double valorpago = litros * 4.39;
        
        System.out.println("O valor a ser pago eh: " + valorpago);
    }
    
}
