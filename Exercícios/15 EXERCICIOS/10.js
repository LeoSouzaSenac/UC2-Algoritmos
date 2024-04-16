// Exercício 10: Sequência de Fibonacci até o 10º termo
// Utilize um loop for para calcular e mostrar os 10 primeiros termos da sequência de Fibonacci no console.

// A sequência de Fibonacci é uma série de números em que cada número é a soma dos dois números anteriores.
// Começa com 0 e 1, e os próximos números são sempre a soma dos dois números anteriores.
// Portanto, a sequência começa assim: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ...

let termoAnterior = 0;
let termoAtual = 1;

console.log("Sequência de Fibonacci:");

for (let i = 1; i <= 10; i++) {
    console.log(termoAtual);
    const proximoTermo = termoAnterior + termoAtual;
    termoAnterior = termoAtual;
    termoAtual = proximoTermo;
}
