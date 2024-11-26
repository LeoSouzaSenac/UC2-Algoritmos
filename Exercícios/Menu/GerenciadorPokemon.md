**Exercício de JavaScript: Gerenciador de Pokémons**

### Descrição:
Você foi designado para criar um simples sistema de gerenciamento de Pokémons utilizando JavaScript. Seu objetivo é simular um "banco de dados" de pokémons e a interação de um treinador com esse banco de dados. Para isso, você deverá criar e manipular dois arrays:

1. **Banco de Dados de Pokémons (Pokémons Disponíveis):** Um array que armazenará os pokémons disponíveis no mundo. Cada Pokémon será representado por um objeto com informações como nome, tipo e nível.

2. **Mochila do Treinador (Pokémons do Treinador):** Um array que armazenará os pokémons que o treinador escolheu levar para batalhas. O treinador pode carregar até 6 pokémons em sua mochila.

### Funcionalidades:

O sistema deverá permitir as seguintes ações:

1. **Adicionar Pokémon à Mochila do Treinador:**
   - O usuário poderá adicionar um Pokémon da lista de disponíveis para a mochila do treinador.
   - O treinador não pode ter mais de 6 pokémons na mochila.

2. **Ver Pokémons na Mochila:**
   - O usuário poderá visualizar todos os pokémons que estão na mochila do treinador.

3. **Remover Pokémon da Mochila:**
   - O treinador poderá remover um Pokémon de sua mochila.

### Requisitos:
- O banco de dados de pokémons será um array com objetos. Cada objeto deverá ter pelo menos o nome, tipo e nível do Pokémon.

- O sistema deve oferecer um **menu interativo** com opções para:
  1. Adicionar Pokémon à mochila
  2. Ver Pokémon na mochila
  3. Remover Pokémon da mochila
  4. Sair

### Requisitos Adicionais:
- O Pokémon pode ser adicionado à mochila apenas se ainda houver espaço (máximo de 6 pokémons).
- Quando um Pokémon for removido da mochila, ele deverá ser removido do array de mochila do treinador.

### Exemplos de Interação:

- **Menu:**
  ```text
  1. Adicionar Pokémon à mochila
  2. Ver Pokémons na mochila
  3. Remover Pokémon da mochila
  4. Sair
  ```

- **Adicionar Pokémon à mochila:**
  ```text
  Escolha um Pokémon para adicionar:
  1. Pikachu
  2. Charmander
  3. Bulbasaur
  4. Squirtle
  5. Eevee
  ```

- **Ver Pokémons na mochila:**
  ```text
  Pokémons na mochila:
  1. Pikachu - Tipo: Elétrico, Nível: 5
  2. Charmander - Tipo: Fogo, Nível: 10
  ```

- **Remover Pokémon da mochila:**
  ```text
  Escolha um Pokémon para remover:
  1. Pikachu
  2. Charmander
  ```

### Desafio:
Implemente o sistema de gerenciamento de pokémons e garanta que as funções de adicionar, remover e visualizar pokémons funcionem corretamente. 
