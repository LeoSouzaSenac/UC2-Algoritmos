// Exercício 11: Jogo de Adivinhação
// Utilize um loop while para gerar um número aleatório entre 1 e 100 e pedir ao usuário para adivinhar o número.
// Dê dicas ao usuário se o chute for maior ou menor que o número aleatório.

const readline = require('readline-sync');

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let chute;

console.log("Bem-vindo ao jogo de adivinhação!");

while (chute !== numeroAleatorio) {
    chute = Number(readline.question("Tente adivinhar o número (entre 1 e 100): "));
    tentativas++;

    if (chute < numeroAleatorio) {
        console.log("Tente um número maior.");
    } else if (chute > numeroAleatorio) {
        console.log("Tente um número menor.");
    }
}

console.log(`Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`);
