//Array sem o Primeiro e Último Elemento: Escreva um programa que imprima um array com todos os elementos de um array original, exceto o primeiro e o último.

function imprimirArraySemExtremos(array) {
    array.pop(); // Remove o último elemento
    array.splice(0, 1); // Remove o primeiro elemento
    return array;
}

console.log(imprimirArraySemExtremos([1, 2, 3, 4, 5]));   // Saída: [2, 3, 4]
