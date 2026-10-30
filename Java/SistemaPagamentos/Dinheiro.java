import java.util.Locale;

public class Dinheiro implements Pagamento {
    @Override
    public void pagar(double valor) {
        System.out.println("Pagamento realizado em Dinheiro.");
        System.out.println(String.format(Locale.US, "Valor: R$ %.2f", valor));
    }
}
