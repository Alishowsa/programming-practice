public class CheckoutBoleto extends Checkout {
    @Override
    protected Pagamento criarPagamento() {
        return new Boleto();
    }
}
