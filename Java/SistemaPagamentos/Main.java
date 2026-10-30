public class Main {

    public static void main(String[] args) {
        double valor = 100.00;

        Pagamento pix = new Pix();
        PagamentoService servicoPix = new PagamentoService(pix);
        servicoPix.realizarPagamento(valor);
        System.out.println();

        Pagamento cartao = new Cartao();
        PagamentoService servicoCartao = new PagamentoService(cartao);
        servicoCartao.realizarPagamento(valor);
        System.out.println();

        PagamentoService servicoBoleto = new PagamentoService(new Boleto());
        servicoBoleto.realizarPagamento(valor);
        System.out.println();

        PagamentoService servicoDinheiro = new PagamentoService(new Dinheiro());
        servicoDinheiro.realizarPagamento(valor);
        System.out.println();

        PagamentoService pixComEmail = new PagamentoService(new Pix(), new Email());
        pixComEmail.realizarPagamento(valor);
        System.out.println();

        PagamentoService cartaoComSms = new PagamentoService(new Cartao(), new SMS());
        cartaoComSms.realizarPagamento(valor);
    }
}
