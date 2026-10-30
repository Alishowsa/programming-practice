public class CheckoutPix extends Checkout {
    @Override
    protected Pagamento criarPagamento() {
        return new Pix();
    }
}
