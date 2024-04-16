// Exercício 5: Calcular a média de 5 números
// Utilize um loop for para ler 5 números do usuário e calcular a média dos números digitados. Mostre a média no console.

const readline = require('readline-sync');

let soma = 0;
for (let i = 0; i < 5; i++) {
    const numero = Number(readline.question(`Digite o próximo número: `));
    soma += numero;
}
const media = soma / 5;
console.log("A média dos números digitados é:", media);
