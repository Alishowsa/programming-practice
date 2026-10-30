public class PagamentoService {

    private final Pagamento pagamento;
    private final Notificacao notificacao;

    public PagamentoService(Pagamento pagamento) {
        this(pagamento, null);
    }

    public PagamentoService(Pagamento pagamento, Notificacao notificacao) {
        if (pagamento == null) {
            throw new IllegalArgumentException("A forma de pagamento e obrigatoria.");
        }
        this.pagamento = pagamento;
        this.notificacao = notificacao;
    }

    public void realizarPagamento(double valor) {
        pagamento.pagar(valor);

        if (notificacao != null) {
            notificacao.enviar("Seu pagamento foi confirmado.");
        }
    }
}
