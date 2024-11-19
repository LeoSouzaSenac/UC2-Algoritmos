// Função para comparar os anos de lançamento de dois filmes
function compararFilmes(filme1, filme2) {
    // Comparando os anos de lançamento
    const foiLançadoAntes = filme1.ano < filme2.ano;
    const foiLançadoNoMesmoAno = filme1.ano === filme2.ano;

    // Retornando as mensagens solicitadas
    console.log(`O primeiro filme foi lançado antes do segundo? ${foiLançadoAntes}`);
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${foiLançadoNoMesmoAno}`);
}

// Exemplo de objetos de filmes
const filme1 = {
    nome: "Filme A",
    ano: 2010
};

const filme2 = {
    nome: "Filme B",
    ano: 2015
};

// Chama a função com os dois filmes
compararFilmes(filme1, filme2);
