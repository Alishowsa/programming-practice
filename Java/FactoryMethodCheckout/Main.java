public class Main {

    public static void main(String[] args) {
        executar("pix", 100);
        executar("cartao", 100);
        executar("boleto", 100);
    }

    private static void executar(String tipo, double valor) {
        Checkout checkout = criarCheckout(tipo);
        checkout.pagar(valor);
        System.out.println("Taxa: R$ " + checkout.taxa(valor));
    }

    private static Checkout criarCheckout(String tipo) {
        switch (tipo) {
            case "pix":
                return new CheckoutPix();
            case "cartao":
                return new CheckoutCartao();
            case "boleto":
                return new CheckoutBoleto();
            default:
                throw new IllegalArgumentException("Forma de pagamento invalida: " + tipo);
        }
    }
}
