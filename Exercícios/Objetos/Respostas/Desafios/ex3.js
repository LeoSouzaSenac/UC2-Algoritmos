// Função para inverter a disponibilidade de uma fruta
function inverterDisponibilidade(fruta) {
    // Inverte o valor da propriedade 'disponibilidade'
    fruta.disponibilidade = !fruta.disponibilidade;
    
    // Retorna o objeto da fruta com a disponibilidade invertida
    return fruta;
}

// Exemplo de objetos de frutas
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

// Testando a função inverterDisponibilidade
console.log(inverterDisponibilidade(fruta1)); // A disponibilidade da maçã será invertida
console.log(inverterDisponibilidade(fruta2)); // A disponibilidade da banana será invertida
console.log(inverterDisponibilidade(fruta3)); // A disponibilidade da laranja será invertida
