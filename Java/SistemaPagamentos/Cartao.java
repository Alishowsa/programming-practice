import java.util.Locale;

public class Cartao implements Pagamento {
    @Override
    public void pagar(double valor) {
        System.out.println("Pagamento realizado via Cartão.");
        System.out.println(String.format(Locale.US, "Valor: R$ %.2f", valor));
    }
}
