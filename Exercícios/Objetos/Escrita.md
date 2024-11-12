# Exercícios de Escrita de Código

## Exercício 1

### a) Criação do Objeto e Função

Crie um objeto que contém duas propriedades: nome (string) e apelidos (um array com três apelidos). Em seguida, escreva uma função que recebe o objeto e imprime a mensagem no formato:

```jsx
// Exemplo de entrada
const pessoa = {
   nome: "Vitor Hugo", 
   apelidos: ["Vitinho", "Vitão", "Vit"]
}

// Exemplo de saída
"Eu sou Vitor Hugo, mas pode me chamar de: Vitinho, Vitão ou Vit"
```

Dica: Não se esqueça de chamar a função, passando o objeto como argumento para garantir que o código seja executado.

### b) Criação de Novo Objeto com Spread Operator

Usando o operador spread, crie um novo objeto que mantém o valor da propriedade `nome`, mas possui uma nova lista de três apelidos. Depois, chame a função anterior passando o novo objeto como argumento.

## Exercício 2

### a) Criação de Objetos

Crie dois objetos diferentes com as propriedades `nome`, `idade` e `profissao`.

### b) Função para Retornar Informações em Array

Escreva uma função que receba um objeto de cada vez e retorne um array com as seguintes informações:
1. O valor de `nome`
2. O número de caracteres do valor `nome`
3. O valor de `idade`
4. O valor de `profissao`
5. O número de caracteres do valor `profissao`

Exemplo:

```jsx
const pessoa = {
    nome: "Bruno", 
    idade: 23, 
    profissao: "Instrutor"
}

function minhaFuncao(pessoa) {
    const resultado = []
    // Desenvolver a lógica aqui
    return resultado
}

console.log(minhaFuncao(pessoa))
// Retorno: ["Bruno", 5, 23, "Instrutor", 9]
```

## Exercício 3

### a) Declaração de Array `carrinho`

Crie uma variável de escopo global que armazene um `array` vazio chamada `carrinho`.

### b) Criação de Objetos Fruta

Crie três objetos representando frutas com as propriedades: `nome` (string) e `disponibilidade` (boolean, começando como `true`).

### c) Função para Adicionar Frutas ao `carrinho`

Crie uma função que receba um objeto fruta por parâmetro e o adicione ao array `carrinho` usando o método `push()`. Invoque a função passando os três objetos de fruta.

### d) Impressão do Array `carrinho`

Imprima o conteúdo da variável `carrinho` para garantir que ela agora contém três objetos.
