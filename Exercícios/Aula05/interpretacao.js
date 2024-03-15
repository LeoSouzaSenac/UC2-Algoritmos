//Exercicio 1

//Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

const bool1 = true
const bool2 = false
const bool3 = !bool2 //true

let resultado = bool1 && bool2
console.log("a. ", resultado) //false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) //false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)//true

console.log("d. ", typeof resultado)//boolean


//Exercicio 2

//Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 

let primeiroNumero = "100"
let segundoNumero = "43"

const soma = primeiroNumero + segundoNumero

console.log(soma) //10043, uma concatenação


let numero = Number(primeiroNumero)
let numero2 = Number(segundoNumero)
soma = numero + numero2
console.log(soma)//143