
//Esta função deve retornar o maior e o segundo maior número

function maiorESegundoMaior(numeros) {
    let maior = numeros[0];
    let segundoMaior = numeros[0]

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            segundoMaior = maior;
            maior = numeros[i];
        } else if (numeros[i] > segundoMaior && numeros[i] !== maior) {
            segundoMaior = numeros[i];
        }
    }

    return {
        maior,
        segundoMaior
    };
}

const array = [10, 5, 8, 12, 30];
const resultado = maiorESegundoMaior(array);
console.log(`Maior: ${resultado.maior}, Segundo Maior: ${resultado.segundoMaior}`);

  