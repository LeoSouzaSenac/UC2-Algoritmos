// Exercício 15: Contar o número de vogais e consoantes em uma frase
// Utilize um loop for para iterar sobre a frase e contar o número de vogais e consoantes.
// Mostre os resultados no console.

const readline = require('readline-sync');

const frase = readline.question("Digite uma frase: ").toLowerCase();
let vogais = 0;
let consoantes = 0;

for (let i = 0; i < frase.length; i++) {
    const caractere = frase[i];
    if (caractere >= 'a' && caractere <= 'z'){
        if (caractere === 'a' || caractere === 'e' || caractere === 'i' || caractere === 'o' || caractere === 'u') {
            vogais++;
        } else {
            consoantes++;
        }
    }
    
}

console.log("Número de vogais:", vogais);
console.log("Número de consoantes:", consoantes);
