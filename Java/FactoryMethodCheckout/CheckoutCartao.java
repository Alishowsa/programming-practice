public class CheckoutCartao extends Checkout {
    @Override
    protected Pagamento criarPagamento() {
        return new Cartao();
    }
}
