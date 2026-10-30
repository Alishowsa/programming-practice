// PRODUTO CONCRETO (novo, tarefa 5)
public class Boleto implements Pagamento {
    @Override
    public void processar(double valor) {
        System.out.println("Pagamento via boleto: R$ " + valor);
    }

    @Override
    public double percentualTaxa() {
        return 0.02;
    }
}
