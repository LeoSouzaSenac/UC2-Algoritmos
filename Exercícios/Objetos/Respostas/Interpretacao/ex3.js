function minhaFuncao(objeto, propriedade) {
    return objeto[propriedade]
}

const pessoa = {
    nome: "Caio", 
    idade: 23, 
    backender: false
}

console.log(minhaFuncao(pessoa, "backender")) 
console.log(minhaFuncao(pessoa, "altura"))

/*
a) O que vai ser impresso no console?
false
undefined

b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

No primeiro console.log(minhaFuncao(pessoa, "backender")), a função retorna o valor da propriedade "backender" do objeto pessoa, que é false, portanto, imprime false.

No segundo console.log(minhaFuncao(pessoa, "altura")), a função tenta acessar a propriedade "altura" do objeto pessoa, mas essa propriedade não existe. Quando tentamos acessar uma propriedade que não está presente em um objeto, o JavaScript retorna undefined, pois o valor para essa chave não foi definido.

*/