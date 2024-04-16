// Exercício 6: Mostrar os números pares de 1 a 20, mas pular os múltiplos de 3
// Utilize um loop for para imprimir os números pares de 1 a 20 no console, mas pule os números que são múltiplos de 3.

for (let i = 2; i <= 20; i += 2) {
    if (i % 3 !== 0) {
        console.log(i);
    }
}
