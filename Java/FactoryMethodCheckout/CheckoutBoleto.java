// CRIADOR CONCRETO (novo, tarefa 5)
public class CheckoutBoleto extends Checkout {
    @Override
    protected Pagamento criarPagamento() {
        return new Boleto();
    }
}
