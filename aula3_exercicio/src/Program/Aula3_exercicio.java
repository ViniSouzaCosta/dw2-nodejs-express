package Program;
import java.util.Scanner;

public class Aula3_exercicio {

    
    public static void main(String[] args) {
      Scanner teclado = new Scanner(System.in);
      
      System.out.println("Digite um numero: ");
      int numero = teclado.nextInt();
      
      System.out.println("O numero ao quadrado é: " + (numero * numero));
      
      teclado.close();
    }
    
}
