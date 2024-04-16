// Exercício 9: Calcular a fatorial de um número
// Utilize um loop for para calcular a fatorial de um número digitado pelo usuário.
// Mostre o resultado no console.

// A fatorial de um número é o produto de todos os números inteiros positivos menores ou iguais a ele.
// Por exemplo, a fatorial de 5 (representada por 5!) é 5 * 4 * 3 * 2 * 1 = 120.

const readline = require('readline-sync');

const numero = Number(readline.question("Digite um número para calcular sua fatorial: "));
let fatorial = 1;

for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}

console.log(`A fatorial de ${numero} é:`, fatorial);
