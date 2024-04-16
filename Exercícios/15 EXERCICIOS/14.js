// Exercício 14: Mostrar a tabuada de todos os números de 1 a 10
// Utilize um loop for aninhado para mostrar a tabuada de todos os números de 1 a 10 no console.

console.log("Tabuada de 1 a 10:");

for (let i = 1; i <= 10; i++) {
    console.log(`Tabuada do ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log(); // Adiciona uma linha em branco para separar as tabuadas
}
