/*
Calculadora Básica:
Solicite ao usuário dois números e uma operação (por exemplo, +, -, *, /). Use if e else para executar a operação escolhida e exibir o resultado.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o primeiro número: ", (num1) => {
    rl.question("Digite o segundo número: ", (num2) => {
        rl.question("Digite a operação (+, -, *, /): ", (operacao) => {
                      
            let resultado;
            if (operacao === "+") {
                resultado = num1 + num2;
            } else if (operacao === "-") {
                resultado = num1 - num2;
            } else if (operacao === "*") {
                resultado = num1 * num2;
            } else if (operacao === "/") {
                resultado = num1 / num2;
            } else {
                console.log("Operação inválida.");
                rl.close();
                return;
            }

            console.log(`O resultado de ${num1} ${operacao} ${num2} é ${resultado}`);
            rl.close();
        });
    });
});
