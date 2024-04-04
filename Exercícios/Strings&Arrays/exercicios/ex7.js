//Consoantes em uma String: Escreva um programa que imprima todas as consoantes de uma string.

function imprimirConsoantes(str) {
    const vogaisList = ['a', 'e', 'i', 'o', 'u'];
    const lowerCaseStr = str.toLowerCase();
    return lowerCaseStr.split('').filter(char => !vogaisList.includes(char) && char >= 'a' && char <= 'z').join('');
}

console.log(imprimirConsoantes("Hello World"));   // Saída: "hllwrld"
