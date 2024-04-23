

// Função para exibir o menu de opções
function exibirMenu() {
    console.log("Menu de Opções:");
    console.log("1. Opção 1");
    console.log("2. Opção 2");
    console.log("3. Opção 3");
    console.log("4. Sair");
}

const readline = require('readline-sync');

// Função para processar a escolha do usuário
function processarEscolha(opcao) {
    switch (opcao) {
        case '1':
            console.log("Você escolheu a opção 1.");
            break;
        case '2':
            console.log("Você escolheu a opção 2.");
            break;
        case '3':
            console.log("Você escolheu a opção 3.");
            break;
        case '4':
            console.log("Encerrando o programa...");
            return true; // Indica que o programa deve ser encerrado
        default:
            console.log("Opção inválida. Por favor, escolha uma opção válida.");
    }
    return false; // Indica que o programa não deve ser encerrado
}

// Função principal
function main() {
    let encerrar = false;

    while (!encerrar) {
        exibirMenu();
        let opcao = readline.question("Digite o número da opção desejada: ");
        encerrar = processarEscolha(opcao);
    }
}

// Iniciar o programa
main();





