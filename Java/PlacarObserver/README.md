# ⚽ Placar ao Vivo — Padrão Observer

Exercício da disciplina de Padrões de Projeto (Engenharia de Software) para praticar o padrão de projeto **Observer** em Java.

---

## 📚 Objetivo

Mostrar o placar de uma partida entre **Águias** e **Leões** em tempo real. Sempre que um time marca um gol, todos os interessados (telão, aplicativo, rádio) são avisados na hora, sem que a partida conheça as classes concretas de quem é avisado.

---

## 🏗 Estrutura

```
PlacarObserver/

├── Main.java
└── README.md
```

Todas as classes estão no `Main.java`:

| Classe | Papel |
|---|---|
| `PlacarObserver` | Interface dos observadores, com o método `atualizar(...)` |
| `Partida` | Observável: guarda o placar e a lista de observadores |
| `TelaoEstadio` | Observador que mostra o placar completo |
| `AppNotificacao` | Observador que envia um aviso curto |
| `NarradorRadio` | Observador que narra o gol |
| `Main` | Monta a partida e simula os gols |

---

## 🧠 Conceitos praticados

- Padrão de projeto Observer
- Interfaces e polimorfismo
- Baixo acoplamento entre classes
- Princípio Aberto/Fechado: o `NarradorRadio` foi adicionado sem alterar a classe `Partida`

---

## ▶ Como executar

```bash
javac -encoding UTF-8 Main.java
java Main
```

---

## 📷 Saída

```
[Telão] Águias 1 x 0 Leões
[App] Gol na partida! Placar atual: 1 x 0
[Telão] Águias 1 x 1 Leões
[App] Gol na partida! Placar atual: 1 x 1

[Telão] Águias 2 x 1 Leões
[App] Gol na partida! Placar atual: 2 x 1
[Rádio] É GOOOL! Águias 2 x 1 Leões!
```
