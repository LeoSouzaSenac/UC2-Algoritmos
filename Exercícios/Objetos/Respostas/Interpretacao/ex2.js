const cachorro = {
    nome: "Juca", 
    idade: 3, 
    raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

/*
a) O que vai ser impresso no console?

{ nome: 'Juca', idade: 3, raca: 'SRD' }
{ nome: 'Juba', idade: 3, raca: 'SRD' }
{ nome: 'Jubo', idade: 3, raca: 'SRD' }

b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

A sintaxe dos três pontos (...) é usada para criar uma cópia de um objeto, ou seja, ela cria um novo objeto com as mesmas propriedades do objeto original. No exemplo, ...cachorro cria um novo objeto com as mesmas propriedades de cachorro, mas, em seguida, permite modificar o valor de algumas propriedades, como o nome, sem alterar o objeto original.
*/