package SistemaFuncionario;
public class Validador {

 

    public boolean idValido(int id) {

        return id > 0;

    }

  

    public boolean nomeValido(String nome) {

        return nome != null && !nome.isBlank();

    }

   

    public boolean cargoValido(String cargo) {

        return cargo != null && !cargo.isBlank();

    }

  

    public boolean salarioValido(double salario) {

        return salario > 0;

    }


    public boolean porcentagemValida(double porcentagem) {

        return porcentagem > 0;

    }

}