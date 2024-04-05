//concat(): Concatena dois ou mais arrays e retorna um novo array resultante.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = array1.concat(array2);
console.log(newArray); // Saída: [1, 2, 3, 4, 5, 6]

//filter(): Cria um novo array contendo apenas os elementos que passam por uma determinada condição de filtragem.
const numbers = [1, 2, 3, 4, 5];
function isEven(num) {
    return num % 2 === 0;
}
const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers); // Saída: [2, 4]


//find(): Retorna o primeiro elemento no array que satisfaz uma determinada condição de busca.
const numbers1 = [1, 2, 3, 4, 5];
function findNumber(num) {
    return num > 2;
}
const foundNumber = numbers1.find(findNumber);
console.log(foundNumber); // Saída: 3


//forEach(): Executa uma determinada função em cada elemento do array.
const numbers2 = [1, 2, 3, 4, 5];
function logNumber(num) {
    console.log(num);
}
numbers2.forEach(logNumber); // Saída: 1, 2, 3, 4, 5 (imprime cada número no console)


//includes(): Verifica se um determinado elemento está presente no array.
const fruits = ['apple', 'banana', 'orange'];
const hasBanana = fruits.includes('banana');
console.log(hasBanana); // Saída: true

//join(): Une todos os elementos do array em uma única string, separados por um separador especificado.
const fruits2 = ['apple', 'banana', 'orange'];
const fruitsString = fruits2.join(', ');
console.log(fruitsString); // Saída: "apple, banana, orange"

//map(): Cria um novo array contendo os resultados da aplicação de uma função a cada elemento do array original.
const numbers3 = [1, 2, 3];
const doubledNumbers = numbers3.map(num => num * 2);
console.log(doubledNumbers); // Saída: [2, 4, 6]

//pop(): Remove o último elemento do array e o retorna.
const numbers4 = [1, 2, 3, 4, 5];
const removedNumber = numbers4.pop();
console.log(removedNumber); // Saída: 5
console.log(numbers4); // Saída: [1, 2, 3, 4]

//push(): Adiciona um ou mais elementos ao final do array e retorna o novo comprimento do array.
const numbers5 = [1, 2, 3];
const newLength = numbers5.push(4, 5);
console.log(newLength); // Saída: 5
console.log(numbers5); // Saída: [1, 2, 3, 4, 5]

//reduce(): Reduz o array a um único valor, aplicando uma função acumuladora para cada elemento.
const numbers6 = [1, 2, 3, 4, 5];
const sum = numbers6.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Saída: 15 (soma de todos os elementos)

//reverse(): Inverte a ordem dos elementos do array.
const numbers7 = [1, 2, 3, 4, 5];
numbers7.reverse();
console.log(numbers7); // Saída: [5, 4, 3, 2, 1]

//shift(): Remove o primeiro elemento do array e o retorna.
const numbers8 = [1, 2, 3, 4, 5];
const removedNumber2 = numbers8.shift();
console.log(removedNumber2); // Saída: 1
console.log(numbers8); // Saída: [2, 3, 4, 5]

//slice(): Extrai uma parte do array e retorna um novo array.
const numbers9 = [1, 2, 3, 4, 5];
const slicedArray = numbers.slice(1, 3);
console.log(slicedArray); // Saída: [2, 3]

//splice(): Adiciona ou remove elementos do array em uma posição especificada.
const numbers10 = [1, 2, 3, 4, 5];
numbers10.splice(2, 1, 6); // Remove um elemento a partir do índice 2 e adiciona o número 6
console.log(numbers10); // Saída: [1, 2, 6, 4, 5]

//toString(): Converte os elementos do array em uma string separada por vírgulas e retorna a string resultante.
const numbers11 = [1, 2, 3, 4, 5];
const stringRepresentation = numbers11.toString();
console.log(stringRepresentation); // Saída: "1,2,3,4,5"

//unshift(): Adiciona um ou mais elementos no início do array e retorna o novo comprimento do array.
const numbers12 = [3, 4, 5];
const newLength2 = numbers12.unshift(1, 2);
console.log(newLength2); // Saída: 5
console.log(numbers12); // Saída: [1, 2, 3, 4, 5]

//indexOf(): Retorna o índice do primeiro elemento no array igual ao valor especificado.
const numbers13 = [1, 2, 3, 4, 5];
const index = numbers13.indexOf(3);
console.log(index); // Saída: 2 (o índice do número 3 no array)





/*

const personagensNaruto = ["Naruto Uzumaki", "Sasuke Uchiha", "Sakura Haruno", "Kakashi Hatake", "Itachi Uchiha", "Gaara", "Hinata Hyuga", "Jiraiya", "Orochimaru", "Tsunade"];

function quemSouEu(array) {
    
    const indiceAleatorio = Math.floor(Math.random() * array.length);

   
    return array[indiceAleatorio];
}

const personagemEscolhido = quemSouEu(personagensNaruto);
console.log("Você é:", personagemEscolhido);
*/