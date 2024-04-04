//Divisão por Não Zero: Crie um programa que imprima o resultado da divisão de dois números, apenas se o divisor não for zero.



function divisaoPorNaoZero(numero1, numero2) {
    if (numero2 > 0) {
        return numero1 / numero2;
    } else {
        return "Divisão por zero não é permitida.";
    }
}

console.log(divisaoPorNaoZero(10, 2));   // Saída: 5
console.log(divisaoPorNaoZero(8, 0));    // Saída: "Divisão por zero não é permitida."
