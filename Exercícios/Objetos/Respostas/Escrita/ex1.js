// a) Criação do Objeto e Função
const pessoa = {
    nome: "Vitor Hugo", 
    apelidos: ["Vitinho", "Vitão", "Vit"]
 };
 
 function apresentarPessoa(objeto) {
    
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]}, ${objeto.apelidos[2]}`)
 }
 
 apresentarPessoa(pessoa);
 
 // b) Criação de Novo Objeto com Spread Operator
 const novoObjeto = {
    ...pessoa,
    apelidos: ["Vico", "Vitão", "Vítor"]
 };
 
 apresentarPessoa(novoObjeto);
 