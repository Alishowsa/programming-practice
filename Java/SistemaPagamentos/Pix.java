import java.util.Locale;

public class Pix implements Pagamento {
    @Override
    public void pagar(double valor) {
        System.out.println("Pagamento realizado via PIX.");
        System.out.println(String.format(Locale.US, "Valor: R$ %.2f", valor));
    }
}
