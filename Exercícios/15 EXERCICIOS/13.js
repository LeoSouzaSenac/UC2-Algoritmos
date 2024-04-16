// Exercício 13: Calcular a soma dos números ímpares de 1 a 100
// Utilize um loop for para calcular a soma dos números ímpares de 1 a 100.
// Mostre o resultado no console.

let somaImpares = 0;

for (let i = 1; i <= 100; i += 2) {
    somaImpares += i;
}

console.log("A soma dos números ímpares de 1 a 100 é:", somaImpares);
