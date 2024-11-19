// a) Criação de Objetos
const pessoa1 = {
    nome: "Bruno",
    idade: 23,
    profissao: "Instrutor"
};

const pessoa2 = {
    nome: "Ana",
    idade: 30,
    profissao: "Desenvolvedora"
};

// b) Função para Retornar Informações em Array
function minhaFuncao(pessoa) {
    const resultado = [
        pessoa.nome, // valor de nome
        pessoa.nome.length, // número de caracteres do valor nome
        pessoa.idade, // valor de idade
        pessoa.profissao, // valor de profissão
        pessoa.profissao.length // número de caracteres do valor profissão
    ];
    return resultado;
}

// Testando a função
console.log(minhaFuncao(pessoa1));
// Retorno: ["Bruno", 5, 23, "Instrutor", 9]

console.log(minhaFuncao(pessoa2));
// Retorno: ["Ana", 3, 30, "Desenvolvedora", 14]
