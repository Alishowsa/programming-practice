// PRODUTO: interface comum a todas as formas de pagamento
public interface Pagamento {
    void processar(double valor);

    double percentualTaxa();
}
