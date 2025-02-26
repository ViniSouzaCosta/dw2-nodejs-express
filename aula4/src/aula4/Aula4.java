
package aula4;

import java.text.DecimalFormat;


public class Aula4 {

   
    public static void main(String[] args) {
        DecimalFormat deci = new DecimalFormat("0.00");        
        double num1 = 3.00;
        double num2 = 2.00;
        
        double result = num1/num2;
        
        System.out.printf("O resultado da divisão é %.2f" , result);
        System.out.println("O resultado da divisão é " + deci.format(result));
                
    }
    
}
