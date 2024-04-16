// Exercício 12: Jogo de Cara ou Coroa
// Utilize um loop while para simular um jogo de cara ou coroa.
// O jogo termina quando o usuário obtém o resultado desejado (cara ou coroa).

const readline = require('readline-sync');

let resultadoUsuario;
let resultadoAleatorio;
let jogando = true;

console.log("Bem-vindo ao jogo de Cara ou Coroa!");

while (jogando) {
    resultadoUsuario = readline.question("Escolha cara ou coroa: ").toLowerCase();
    if (resultadoUsuario !== 'cara' && resultadoUsuario !== 'coroa') {
        console.log("Por favor, escolha entre cara ou coroa.");
        continue;
    }

    
    // Math.random() retorna um número aleatório entre 0 (inclusive) e 1 (exclusivo).
    // Portanto, há 50% de chance de o número aleatório ser menor que 0.5, resultando em 'cara',
    // e 50% de chance de ser maior ou igual a 0.5, resultando em 'coroa'.
    const numeroAleatorio = Math.random();
    if (numeroAleatorio < 0.5) {
        resultadoAleatorio = 'cara';
    } else {
        resultadoAleatorio = 'coroa';
    }

    console.log("O resultado é:", resultadoAleatorio);

    if (resultadoUsuario === resultadoAleatorio) {
        console.log("Você ganhou!");
        jogando = false;
    } else {
        console.log("Você perdeu. Tente novamente!");
    }
}
