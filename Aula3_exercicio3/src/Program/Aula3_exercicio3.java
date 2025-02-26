package Program;
import java.util.Scanner;
public class Aula3_exercicio3 {

    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        System.out.println("Sigite o valor da prestação");
        double prestacao = teclado.nextDouble();
        
        System.out.println("Digite a taxa de juros");
        double taxa = teclado.nextDouble();
        
        System.out.println("Digite a qtd de parcelas em atraso");
        int tempo = teclado.nextInt();
        
        double valorAtraso = prestacao + (prestacao * (taxa/100) * tempo);
        
        System.out.println("O valor atual da parcela é: " + valorAtraso);
        
        teclado.close();
    }
    
}
