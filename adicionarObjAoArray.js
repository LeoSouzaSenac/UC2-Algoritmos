const readline = require('readline-sync');

let array = []

function adicionarPersonagem() {
    let nomePersonagem = readline.question("Digite o nome do novo personagem: ");
    let idadeDoPersonagem = readline.question("Digite a idade do novo personagem: ");
    

    array.push({ nome: nomePersonagem, idade: idadeDoPersonagem });
    
}

adicionarPersonagem()

console.log(array)
