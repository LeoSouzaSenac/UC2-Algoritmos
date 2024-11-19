const readlineSync = require('readline-sync'); // Importa a biblioteca readline-sync

// Função para obter os dados do usuário e criar o objeto
function criarObjetoUsuario() {
    // Pergunta ao usuário os dados necessários
    const nome = readlineSync.question('Qual é o seu nome? ');
    const idade = readlineSync.questionInt('Qual é a sua idade? ');
    const profissao = readlineSync.question('Qual é a sua profissão? ');

    // Cria o objeto com as propriedades fornecidas
    const usuario = {
        nome: nome,
        idade: idade,
        profissao: profissao
    };

    // Imprime o objeto no console
    console.log(usuario);

    // Exibe o tipo do objeto (deve ser "object")
    console.log(typeof usuario); // Esperado: "object"
}

// Chama a função para executar o código
criarObjetoUsuario();

