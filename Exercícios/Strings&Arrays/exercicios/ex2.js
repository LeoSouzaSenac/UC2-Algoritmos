//Multiplicação com Número Par: Crie um programa que imprima o resultado da multiplicação de dois números, apenas se pelo menos um dos números for par.



function multiplicacaoComPar(num1, num2) {
    if (num1 % 2 === 0 || num2 % 2 === 0) {
        return num1 * num2;
    } else {
        return "Os dois numeros são ímpar.";
    }
}

console.log(multiplicacaoComPar(3, 4));   // Saída: 12
console.log(multiplicacaoComPar(5, 7));   // Saída: "Os dois numeros são ímpar."
