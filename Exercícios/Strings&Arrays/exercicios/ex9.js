//Desafio: Primeiro Número de um Array Positivo: Escreva um programa que imprima o primeiro número de um array, apenas se o array tiver pelo menos um elemento e o primeiro número for maior que 0.


function primeiroNumeroPositivo(array) {
    if (array.length > 0 && array[0] > 0) {
        return array[0];
    } else {
        return "O array está vazio ou o primeiro número não é positivo.";
    }
}

console.log(primeiroNumeroPositivo([5, -3, 7]));   // Saída: 5
console.log(primeiroNumeroPositivo([]));          // Saída: "O array está vazio ou o primeiro número não é positivo."
