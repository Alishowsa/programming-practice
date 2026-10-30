public abstract class Checkout {

    protected abstract Pagamento criarPagamento();

    public void pagar(double valor) {
        Pagamento pagamento = criarPagamento();
        pagamento.processar(valor);
    }

    public double taxa(double valor) {
        Pagamento pagamento = criarPagamento();
        return pagamento.percentualTaxa() * valor;
    }
}
