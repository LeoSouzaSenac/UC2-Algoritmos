// Exercício 1

// a) Idade do usuário
let idadeUsuario = 25;

// b) Idade do melhor amigo ou amiga
let idadeMelhorAmigo = 30;

// c) Imprimir se a idade do usuário é maior que a do melhor amigo
console.log("Sua idade é maior do que a do seu melhor amigo?", idadeUsuario > idadeMelhorAmigo);

// d) Imprimir a diferença de idade
let diferencaIdade = idadeUsuario - idadeMelhorAmigo;
console.log("Diferença de idade:", diferencaIdade);

// Exercício 2

// a) Número par
let numeroPar = 24;

// b) Imprimir o resto da divisão desse número por 2
let restoDivisao = numeroPar % 2;
console.log("Resto da divisão por 2:", restoDivisao);

// c) Padrão: O resto da divisão de um número par por 2 sempre será 0.

// d) Se trocar para um número ímpar, o resto da divisão por 2 será sempre 1.

// Exercício 3

// Idade do usuário em anos
let idadeAnos = 25;

// a) Idade do usuário em meses
let idadeMeses = idadeAnos * 12;
console.log("Idade do usuário em meses:", idadeMeses);

// b) Idade do usuário em dias
let idadeDias = idadeAnos * 365;  // Considerando anos não bissextos
console.log("Idade do usuário em dias:", idadeDias);

// c) Idade do usuário em horas
let idadeHoras = idadeDias * 24;
console.log("Idade do usuário em horas:", idadeHoras);

// Exercício 4

// Duas variáveis com números
let numero1 = 20;
let numero2 = 5;

// Operações e impressão
console.log("O primeiro número é maior que o segundo?", numero1 > numero2);
console.log("O primeiro número é igual ao segundo?", numero1 === numero2);
console.log("O primeiro número é divisível pelo segundo?", numero1 % numero2 === 0);
console.log("O segundo número é divisível pelo primeiro?", numero2 % numero1 === 0);
