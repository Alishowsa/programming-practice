# Exercício Factory Method: Checkout

## Tarefa 1: Os quatro papéis

| Papel | Classe(s) |
|---|---|
| Produto | `Pagamento` (interface) |
| Produtos concretos | `Pix`, `Cartao`, `Boleto` |
| Criador | `Checkout` (abstrata, declara `criarPagamento()`) |
| Criadores concretos | `CheckoutPix`, `CheckoutCartao`, `CheckoutBoleto` |

## Saída do programa

```
Pagamento via Pix: R$ 100.0
Taxa: R$ 1.0
Pagamento no cartao: R$ 100.0
Taxa: R$ 3.0
Pagamento via boleto: R$ 100.0
Taxa: R$ 2.0
```

As quatro primeiras linhas são iguais à versão original: a refatoração preservou o comportamento.

## Entrega

Para adicionar o boleto, criei as classes `Boleto` (que implementa `Pagamento`) e `CheckoutBoleto` (que estende `Checkout`), alterei apenas o `Main`, adicionando um `case "boleto"` na raiz de composição, e não precisei tocar em `Checkout`, `Pagamento`, `Pix`, `Cartao`, `CheckoutPix` nem `CheckoutCartao`.
