//Vogais em uma String: Escreva um programa que imprima todas as vogais de uma string.

function imprimirVogais(str) {
    const vogaisList = ['a', 'e', 'i', 'o', 'u'];
    const lowerCaseStr = str.toLowerCase();
    return lowerCaseStr.split('').filter(char => vogaisList.includes(char)).join('');
}

console.log(imprimirVogais("Hello World"));   // Saída: "eoo"

