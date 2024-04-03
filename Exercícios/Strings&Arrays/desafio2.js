const fruits = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
// Função para encontrar o índice de "Abacaxi" no array
function findAbacaxiIndex(array) {
    let index; // Inicializa o índice  (caso "Abacaxi" não seja encontrado)
    // Função de callback para o método filter, que recebe cada elemento do array e seu índice
    function findAbacaxi(fruit, i) {
        // Verifica se a fruta é "Abacaxi"
        if (fruit === "Abacaxi") {
            index = i; // Atribui o índice atual se a fruta for "Abacaxi"
            return true; // Retorna true para interromper a execução do filter
        }
    }
   
    array.filter(findAbacaxi);
       // Retorna o índice encontrado
    return index;
}

// Chama a função para encontrar o índice da palavra "Abacaxi"
const abacaxiIndex = findAbacaxiIndex(fruits);

// Imprime o índice encontrado e o tamanho do array de frutas
console.log("Índice de 'Abacaxi':", abacaxiIndex);
console.log("Tamanho do array:", fruits.length);
