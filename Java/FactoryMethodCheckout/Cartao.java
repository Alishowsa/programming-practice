// PRODUTO CONCRETO
public class Cartao implements Pagamento {
    @Override
    public void processar(double valor) {
        System.out.println("Pagamento no cartao: R$ " + valor);
    }

    @Override
    public double percentualTaxa() {
        return 0.03;
    }
}
