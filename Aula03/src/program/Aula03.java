package program;
import java.util.Scanner;

public class Aula03 {

    
    public static void main(String[] args) {
     Scanner teclado = new Scanner(System.in);
     
     System.out.println("Digite o primeiro numero: ");
     int num1 = teclado.nextInt();
     
     System.out.println("digite o segundo numero: ");
     int num2 = teclado.nextInt();
     
     System.out.println("O dobro do primeiro numero é:" + (num1 * 2));
     System.out.println("O triplo do segundo numero é:" + (num2 * 3));
     
     teclado.close();
    }
    
}
