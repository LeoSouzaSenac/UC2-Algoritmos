const pessoa = {
    nome: 'Maria',
    idade: 16,
    gostoMusical: 'pop'

}

const pessoa2 = {
    nome: 'Andre',
    idade: 16,
    gostoMusical: 'rock'

}

function criaNovoObjeto (objeto){
    const novoObjeto = {
        ...objeto,
        comidasFavoritas: ['hamburguer', 'pizza', 'churrasco'],
        melhorAmiga: {
            nome: 'Mirelle',
            idade: 17
        }
    } 

    console.log(`o nome da pessoa é ${objeto.nome} e suas comidas favoritas são ${novoObjeto.comidasFavoritas[0]}, ${novoObjeto.comidasFavoritas[1]},${novoObjeto.comidasFavoritas[2]}. sua melhor amiga se chama ${novoObjeto.melhorAmiga.nome} e tem ${novoObjeto.melhorAmiga.idade} anos.`)

}

criaNovoObjeto(pessoa)