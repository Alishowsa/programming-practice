# Sistema de Pagamentos: respostas conceituais

## 1. O que é uma interface?

É um contrato: define **o que** uma classe deve fazer (os métodos), sem dizer **como**. No projeto, a interface `Pagamento` declara apenas `pagar(double valor)`, e cada classe que a implementa decide como esse pagamento acontece. Uma interface não pode ser instanciada; ela serve como um tipo comum para classes diferentes.

## 2. Por que Pix, Cartao e Boleto implementam Pagamento?

Porque, apesar de funcionarem de forma diferente, todas são formas de pagamento e precisam oferecer a mesma operação: `pagar(valor)`. Ao implementarem `Pagamento`, elas passam a ter um tipo em comum, e o sistema pode tratá-las da mesma maneira. Além disso, o compilador garante que cada uma realmente tenha o método `pagar` (o `@Override` confirma isso).

## 3. Por que o PagamentoService recebe Pagamento em vez de Pix?

Porque assim ele funciona com **qualquer** forma de pagamento, atual ou futura. Se recebesse `Pix`, só aceitaria Pix, e para usar Cartão ou Boleto seria preciso alterar a classe. Recebendo a abstração, o serviço não sabe nem precisa saber qual implementação está usando: ele depende do contrato, não do detalhe (princípio da Inversão de Dependência).

## 4. Onde está o polimorfismo no projeto?

Na linha `pagamento.pagar(valor);` dentro do `PagamentoService`. A mesma chamada executa comportamentos diferentes conforme o objeto recebido: se for um `Pix`, imprime a mensagem do PIX; se for um `Cartao`, a do cartão, e assim por diante. Quem decide qual método executar é a linguagem, em tempo de execução, sem nenhum `if`. O mesmo ocorre em `notificacao.enviar(...)` com `Email` e `SMS`.

## 5. Onde está a injeção de dependência?

No construtor do `PagamentoService`:

```java
public PagamentoService(Pagamento pagamento, Notificacao notificacao)
```

O serviço não cria suas dependências; elas são criadas fora (no `Main`) e **injetadas** pelo construtor:

```java
PagamentoService servico = new PagamentoService(new Pix(), new Email());
```

## 6. Qual seria o problema se fizéssemos `private Pix pix = new Pix();` dentro do PagamentoService?

- **Alto acoplamento:** o serviço ficaria preso a uma implementação concreta e só funcionaria com PIX.
- **Para trocar ou adicionar uma forma de pagamento**, seria preciso alterar o `PagamentoService`, provavelmente criando `if`s para cada tipo, o que viola o princípio Aberto/Fechado.
- **Dificuldade de testar:** não daria para substituir o PIX real por um pagamento falso (mock) num teste.
- O serviço passaria a ter duas responsabilidades: **criar** a dependência e **usar** a dependência.

## 7. O que acontece quando adicionamos Dinheiro sem modificar PagamentoService?

O sistema passa a aceitar a nova forma de pagamento sem que nenhuma linha do `PagamentoService` seja alterada. Basta criar `Dinheiro implements Pagamento` e entregá-lo ao serviço no `Main`:

```java
new PagamentoService(new Dinheiro()).realizarPagamento(100.00);
```

Isso funciona porque o serviço depende da abstração `Pagamento`, e `Dinheiro` cumpre esse contrato. É a demonstração prática do **baixo acoplamento** e do princípio **Aberto/Fechado**: o sistema está aberto para extensão (novas classes) e fechado para modificação (o código existente não muda). Também reduz o risco de quebrar algo que já funcionava, já que nada que estava pronto foi tocado.

## Saída do programa

```
Pagamento realizado via PIX.
Valor: R$ 100.00

Pagamento realizado via Cartão.
Valor: R$ 100.00

Pagamento realizado via Boleto.
Valor: R$ 100.00

Pagamento realizado em Dinheiro.
Valor: R$ 100.00

Pagamento realizado via PIX.
Valor: R$ 100.00
[E-mail] Seu pagamento foi confirmado.

Pagamento realizado via Cartão.
Valor: R$ 100.00
[SMS] Seu pagamento foi confirmado.
```
