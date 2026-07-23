package SistemaFuncionario;

public class Funcionario {

    private int id;
    private String nome;
    private String cargo;
    private double salario;

    public Funcionario() {

    }

    public Funcionario(int id, String nome, String cargo, double salario) {
        this.id = id;
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }

    // getters
    public int getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getCargo() {
        return cargo;
    }

    public double getSalario() {
        return salario;
    }

    // setters
    public void setId(int id) {
        this.id = id;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public void setSalario(double salario) {
        this.salario = salario;
    }

    public void aumentarSalario(double porcentagem) {

        salario += salario * (porcentagem / 100);

    }

    public double calcularSalarioAnual() {

        return salario * 12;

    }

    public boolean estaCadastrado() {

        return nome != null && !nome.isBlank();

    }

    // exibir os dados do funcionário
    public void exibir() {

        System.out.println();
        System.out.println("====================================");
        System.out.println("        DADOS DO FUNCIONÁRIO");
        System.out.println("====================================");
        System.out.println("ID...............: " + id);
        System.out.println("Nome.............: " + nome);
        System.out.println("Cargo............: " + cargo);
        System.out.printf("Salário..........: R$ %.2f%n", salario);
        System.out.printf("Salário Anual....: R$ %.2f%n", calcularSalarioAnual());
        System.out.println("====================================");
        System.out.println();

    }

}