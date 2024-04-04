//Array em Ordem Inversa: Escreva um programa que imprima um array em ordem inversa.

function imprimirArrayInversa(array) {
    // Verifica se o array está vazio
    if (array.length === 0) {
        return [];
    } else {
        // Seleciona o primeiro elemento do array
        const first = array[0];
        // Seleciona os elementos restantes do array (exceto o primeiro)
        const rest = array.slice(1);
        // Inverte os elementos restantes do array recursivamente
        const reversedRest = imprimirArrayInversa(rest);
        // Adiciona o primeiro elemento ao final do array invertido
        reversedRest.push(first);
        // Retorna o array invertido
        return reversedRest;
    }
}

console.log(imprimirArrayInversa([1, 2, 3, 4, 5]));   // Saída: [5, 4, 3, 2, 1]
