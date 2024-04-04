//Último Número de um Array: Escreva um programa que imprima o último número de um array, apenas se o array tiver pelo menos dois elementos.

function imprimirUltimoNumero(array) {
    if (array.length >= 2) {
        return array[array.length - 1];
    } else {
        return "O array não tem pelo menos dois elementos.";
    }
}

console.log(imprimirUltimoNumero([1, 2, 3, 4]));   // Saída: 5
console.log(imprimirUltimoNumero([9]));             // Saída: "O array não tem pelo menos dois elementos."
