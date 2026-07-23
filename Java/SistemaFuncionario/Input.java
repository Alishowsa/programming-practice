package SistemaFuncionario;
import java.util.Scanner;

public class Input {

    private Scanner scanner;

    public Input() {

        scanner = new Scanner(System.in);

    }

   
    public int lerInteiro(String mensagem) {

        while (true) {

            System.out.print(mensagem);

            if (scanner.hasNextInt()) {

                int valor = scanner.nextInt();
                scanner.nextLine();

                return valor;

            }

            System.out.println("❌ Digite um número inteiro válido.");

            scanner.nextLine();

        }

    }

  

    public double lerDouble(String mensagem) {

        while (true) {

            System.out.print(mensagem);

            if (scanner.hasNextDouble()) {

                double valor = scanner.nextDouble();
                scanner.nextLine();

                return valor;

            }

            System.out.println("❌ Digite um número válido.");

            scanner.nextLine();

        }

    }

  
    

    public String lerTexto(String mensagem) {

        while (true) {

            System.out.print(mensagem);

            String texto = scanner.nextLine();

            if (!texto.isBlank()) {

                return texto;

            }

            System.out.println("❌ O campo não pode ficar vazio.");

        }

    }


    public double lerPorcentagem(String mensagem) {

        while (true) {

            System.out.print(mensagem);

            String texto = scanner.nextLine();

            texto = texto.replace("%", "");
            texto = texto.replace(",", ".");

            try {

                return Double.parseDouble(texto);

            } catch (NumberFormatException e) {

                System.out.println("❌ Digite uma porcentagem válida.");

            }

        }

    }

}