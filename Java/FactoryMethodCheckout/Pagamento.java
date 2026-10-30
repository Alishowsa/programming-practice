public interface Pagamento {
    void processar(double valor);

    double percentualTaxa();
}
