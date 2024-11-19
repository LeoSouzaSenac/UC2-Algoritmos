// a) Declaração de Array carrinho
let carrinho = []; // Variável global carrinho que começa como um array vazio

// b) Criação de Objetos Fruta
const fruta1 = {
    nome: "Maçã",
    disponibilidade: true
};

const fruta2 = {
    nome: "Banana",
    disponibilidade: true
};

const fruta3 = {
    nome: "Laranja",
    disponibilidade: true
};

// c) Função para Adicionar Frutas ao carrinho
function adicionarFrutaAoCarrinho(fruta) {
    carrinho.push(fruta); // Adiciona o objeto fruta ao array carrinho
}

// Invoque a função passando os três objetos de fruta
adicionarFrutaAoCarrinho(fruta1);
adicionarFrutaAoCarrinho(fruta2);
adicionarFrutaAoCarrinho(fruta3);

// d) Impressão do Array carrinho
console.log(carrinho); // Imprime o conteúdo do carrinho
