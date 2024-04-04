// Soma de Números Positivos: Crie um programa que imprima o resultado da soma de dois números, apenas se os dois números forem positivos.


function somaPositivos(num1, num2) {
    if (num1 > 0 && num2 > 0) {
        return num1 + num2;
    } else {
        return "Os números não são ambos positivos.";
    }
}

console.log(somaPositivos(5, 10));  // Saída: 15
console.log(somaPositivos(-3, 7));   // Saída: "Os números não são ambos positivos."
