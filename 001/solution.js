// notas aluno 
const nota1 = 2;
const nota2 = 3;
const nota3 = 4;

// calculo da media 
const media = (nota1 + nota2 + nota3) / 3;

// exibe notas 
console.log("=== Resultado ===");
console.log(`Nota 1: ${nota1}`);
console.log(`Nota 2: ${nota2}`);
console.log(`Nota 3: ${nota3}`);

// Exibe a média com duas casas decimais
console.log(`Média: ${media.toFixed(2)}`);

// situação do aluno
if (media >= 7) {
    console.log("Status: Aprovado");
} else if (media >= 3) {
    console.log("Status: Recuperação");
} else {
    console.log("Status: Reprovado");
}