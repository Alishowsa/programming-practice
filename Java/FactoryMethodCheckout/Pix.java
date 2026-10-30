public class Pix implements Pagamento {
    @Override
    public void processar(double valor) {
        System.out.println("Pagamento via Pix: R$ " + valor);
    }

    @Override
    public double percentualTaxa() {
        return 0.01;
    }
}
