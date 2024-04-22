import axios from 'axios';

// Função para obter uma piada aleatória
async function getRandomJoke(): Promise<string> {
    try {
        // Faz uma solicitação GET para a API JokeAPI para obter uma piada aleatória
        const response = await axios.get('https://v2.jokeapi.dev/joke/Any');

        // Verifica se a resposta contém dados de piada
        if (!response.data || response.data.error) {
            throw new Error('Não foi possível obter a piada');
        }

        // Verifica se a piada é do tipo "single" ou "twopart"
        if (response.data.type === 'single') {
            return response.data.joke;
        } else if (response.data.type === 'twopart') {
            return `${response.data.setup} ${response.data.delivery}`;
        } else {
            throw new Error('Tipo de piada desconhecido');
        }
    } catch (error) {
        console.error('Erro ao obter piada:', error);
        throw new Error('Erro ao obter piada');
    }
}
// Chama a função para obter uma piada aleatória e imprime no console
getRandomJoke()
    .then(joke => {
        console.log('Piada aleatória:', joke);
    })
    .catch(error => {
        console.error('Erro:', error.message);
    });




    //Ler a API
    //https://sv443.net/jokeapi/v2/
    //1 - Retornar piada em outra lingua
    //2 - Selecionar uma categoria
    //3 - Bloquear algum tipo de piada (blacklist)
    //4 - Retornar 5 piadas
