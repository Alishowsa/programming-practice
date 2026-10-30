import java.util.Locale;

public class Boleto implements Pagamento {
    @Override
    public void pagar(double valor) {
        System.out.println("Pagamento realizado via Boleto.");
        System.out.println(String.format(Locale.US, "Valor: R$ %.2f", valor));
    }
}
