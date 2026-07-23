package SistemaFuncionario;
public class Menu {

    private Funcionario funcionario;
    private Input input;
    private Validador validador;

    public Menu() {

        funcionario = new Funcionario();
        input = new Input();
        validador = new Validador();

    }

    public void iniciar() {

        int opcao;

        do {

            System.out.println();
            System.out.println("======================================");
            System.out.println("          SISTEMA RH");
            System.out.println("======================================");
            System.out.println("1 - Cadastrar Funcionário");
            System.out.println("2 - Exibir Funcionário");
            System.out.println("3 - Aumentar Salário");
            System.out.println("4 - Salário Anual");
            System.out.println("5 - Sair");
            System.out.println("======================================");

            opcao = input.lerInteiro("Escolha uma opção: ");

            switch (opcao) {

                case 1:
                    cadastrarFuncionario();
                    break;

                case 2:
                    exibirFuncionario();
                    break;

                case 3:
                    aumentarSalario();
                    break;

                case 4:
                    mostrarSalarioAnual();
                    break;

                case 5:
                    System.out.println("\nSistema encerrado.");
                    break;

                default:
                    System.out.println("\nOpção inválida.");

            }

        } while (opcao != 5);

    }

   

    private void cadastrarFuncionario() {

        int id;

        do {

            id = input.lerInteiro("ID: ");

            if (!validador.idValido(id)) {

                System.out.println("ID inválido.");

            }

        } while (!validador.idValido(id));



        String nome;

        do {

            nome = input.lerTexto("Nome: ");

            if (!validador.nomeValido(nome)) {

                System.out.println("Nome inválido.");

            }

        } while (!validador.nomeValido(nome));



        String cargo;

        do {

            cargo = input.lerTexto("Cargo: ");

            if (!validador.cargoValido(cargo)) {

                System.out.println("Cargo inválido.");

            }

        } while (!validador.cargoValido(cargo));



        double salario;

        do {

            salario = input.lerDouble("Salário: ");

            if (!validador.salarioValido(salario)) {

                System.out.println("Salário inválido.");

            }

        } while (!validador.salarioValido(salario));



        funcionario.setId(id);
        funcionario.setNome(nome);
        funcionario.setCargo(cargo);
        funcionario.setSalario(salario);

        System.out.println();
        System.out.println("✅ Funcionário cadastrado com sucesso!");

    }


    private void exibirFuncionario() {

        if (!funcionario.estaCadastrado()) {

            System.out.println();
            System.out.println("Nenhum funcionário cadastrado.");
            return;

        }

        funcionario.exibir();

    }

   

    private void aumentarSalario() {

        if (!funcionario.estaCadastrado()) {

            System.out.println();
            System.out.println("Cadastre um funcionário primeiro.");
            return;

        }

        double porcentagem;

        do {

            porcentagem = input.lerPorcentagem("Porcentagem de aumento: ");

            if (!validador.porcentagemValida(porcentagem)) {

                System.out.println("Porcentagem inválida.");

            }

        } while (!validador.porcentagemValida(porcentagem));



        funcionario.aumentarSalario(porcentagem);

        System.out.println();
        System.out.println("✅ Salário atualizado com sucesso!");

    }


    private void mostrarSalarioAnual() {

        if (!funcionario.estaCadastrado()) {

            System.out.println();
            System.out.println("Cadastre um funcionário primeiro.");
            return;

        }

        System.out.println();
        System.out.printf("Salário anual: R$ %.2f%n",
                funcionario.calcularSalarioAnual());

    }

}