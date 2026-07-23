
// Array responsável por armazenar todos os alunos.
const alunos = [];

// Adicionar Aluno

function adicionarAluno(nome, idade, notaFinal) {
    const aluno = {
        nome,
        idade,
        notaFinal
    };

    alunos.push(aluno);
}

// Listar Alunos

function listarAlunos() {

    console.log("===== LISTA DE ALUNOS =====");

    for (const aluno of alunos) {
        console.log(`
Nome: ${aluno.nome}
Idade: ${aluno.idade}
Nota Final: ${aluno.notaFinal}
-------------------------`);
    }

}


// Mostrar Aprovados

function mostrarAprovados() {

    console.log("===== ALUNOS APROVADOS =====");

    for (const aluno of alunos) {

        if (aluno.notaFinal >= 7) {
            console.log(`${aluno.nome} - Nota: ${aluno.notaFinal}`);
        }

    }

}


// média da turma 

function calcularMedia() {

    let soma = 0;

    for (const aluno of alunos) {
        soma += aluno.notaFinal;
    }

    const media = soma / alunos.length;

    console.log(`Média da turma: ${media.toFixed(2)}`);

}

// melhor aluno

function melhorAluno() {

    let melhor = alunos[0];

    for (const aluno of alunos) {

        if (aluno.notaFinal > melhor.notaFinal) {
            melhor = aluno;
        }

    }

    console.log("===== MELHOR ALUNO =====");

    console.log(`
Nome: ${melhor.nome}
Nota: ${melhor.notaFinal}
`);

}

// Buscar Aluno

function buscarAluno(nome) {

    const aluno = alunos.find(aluno => aluno.nome === nome);

    if (aluno) {

        console.log(`
Aluno encontrado

Nome: ${aluno.nome}
Idade: ${aluno.idade}
Nota: ${aluno.notaFinal}
`);

    } else {

        console.log("Aluno não encontrado.");

    }

}


// Ordenar por Nota

function ordenarPorNota() {

    const listaOrdenada = [...alunos];

    listaOrdenada.sort((a, b) => b.notaFinal - a.notaFinal);

    console.log("===== RANKING =====");

    for (const aluno of listaOrdenada) {
        console.log(`${aluno.nome} - ${aluno.notaFinal}`);
    }

}


// Cadastro dos alunos

adicionarAluno("João", 20, 8.5);
adicionarAluno("Maria", 22, 9.7);
adicionarAluno("Pedro", 19, 6.3);
adicionarAluno("Ana", 21, 7.4);
adicionarAluno("Lucas", 18, 5.9);


// Execução

listarAlunos();

mostrarAprovados();

calcularMedia();

melhorAluno();

buscarAluno("Pedro");

ordenarPorNota();