# 💼 Sistema de Funcionários

Projeto desenvolvido para praticar os conceitos fundamentais da linguagem Java utilizando Programação Orientada a Objetos (POO).

---

## 📚 Objetivo

Criar um sistema simples de gerenciamento de funcionários, aplicando boas práticas de programação e separação de responsabilidades entre as classes.

---

## 🚀 Funcionalidades

- ✅ Cadastro de funcionário
- ✅ Exibição dos dados do funcionário
- ✅ Aumento de salário por porcentagem
- ✅ Cálculo do salário anual
- ✅ Validação de entradas do usuário
- ✅ Menu interativo no terminal

---

## 🏗 Estrutura do Projeto

```
SistemaFuncionario/

├── Main.java
├── Menu.java
├── Funcionario.java
├── Input.java
├── Validador.java
└── README.md
```

---

## 📌 Responsabilidade de cada classe

### Main.java

Responsável apenas por iniciar a aplicação.

---

### Menu.java

Controla o fluxo do sistema.

- Exibe o menu
- Recebe as opções do usuário
- Chama os métodos necessários

---

### Funcionario.java

Representa a entidade Funcionário.

Contém:

- atributos
- construtores
- getters
- setters
- regras de negócio

---

### Input.java

Responsável pela entrada de dados.

Centraliza o uso do Scanner.

Possui métodos para leitura de:

- Inteiros
- Double
- Texto
- Porcentagem

---

### Validador.java

Responsável pelas validações do sistema.

Valida:

- ID
- Nome
- Cargo
- Salário
- Porcentagem

---

## 🧠 Conceitos praticados

- Classes
- Objetos
- Encapsulamento
- Métodos
- Construtores
- Getters e Setters
- Programação Orientada a Objetos
- Scanner
- Validação de dados
- Estrutura de decisão (switch)
- Estrutura de repetição (do-while)
- Organização em múltiplas classes
- Separação de responsabilidades (SRP)

---

## ▶ Como executar

Compile todos os arquivos:

```bash
javac SistemaFuncionario/*.java
```

Execute a aplicação:

```bash
java SistemaFuncionario.Main
```

---

## 📷 Exemplo

```
======================================
          SISTEMA RH
======================================

1 - Cadastrar Funcionário
2 - Exibir Funcionário
3 - Aumentar Salário
4 - Salário Anual
5 - Sair

Escolha:
```

---

## 🎯 Aprendizados

Durante este projeto foram praticados conceitos importantes da Programação Orientada a Objetos, como encapsulamento, organização em classes, reutilização de código e separação de responsabilidades.

O projeto também reforçou boas práticas de estruturação de código utilizadas em aplicações Java.

---

