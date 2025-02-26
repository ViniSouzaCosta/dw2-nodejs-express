package Program;
import java.util.Scanner;

public class Aula03_exercicio2 {

   
    public static void main(String[] args) {
       double salario = 1000.00;
       double bonus = 50.00;    
       
       Scanner teclado = new Scanner(System.in);
        System.out.println("Digite a qtd de moveis vendidos");
        int qtd = teclado.nextInt();
        
        salario = salario + (qtd * bonus);
       
        
        System.out.println(" qtd vendida foi: " + qtd);
        System.out.println("O salario total foi: " + salario);
        
       teclado.close();
               
    }
    
}
