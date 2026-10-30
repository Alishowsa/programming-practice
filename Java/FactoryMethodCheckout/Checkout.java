// CRIADOR: contem a regra de negocio e declara o factory method.
// Nao conhece Pix, Cartao nem Boleto, apenas a interface Pagamento.
public abstract class Checkout {

    // Factory Method: cada subclasse decide qual Pagamento criar
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
