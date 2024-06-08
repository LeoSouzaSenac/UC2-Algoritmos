        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d'); //fornece os métodos e propriedades necessários para desenhar e manipular gráficos 2D


        // Variáveis do jogo
        const tileSize = 20; // Tamanho do tile
        let snake = [{ x: 10, y: 10 }]; // Inicializa a cobrinha com uma posição (é um array de objetos, onde cada objeto é um "quadradinho" da cobrinha)
        let dx = 0; // Direção horizontal da cobrinha
        let dy = 0; // Direção vertical da cobrinha
        let food = { x: 15, y: 15 }; // Posição da comida
        let gameOver = false; // Indica o fim do jogo
        let paused = false; // Indica se o jogo está pausado ou não


        // Função para desenhar a cobrinha
function drawSnake() {
    // Define a cor de preenchimento para a cobrinha (verde)
    ctx.fillStyle = '#00ff08';
    // Itera sobre cada segmento da cobrinha
    snake.forEach(segment => {
        // Desenha um retângulo (um segmento da cobrinha) no canvas
        // O retângulo é preenchido com a cor definida acima
        // As coordenadas do retângulo são baseadas nas coordenadas do segmento da cobrinha
        // Cada coordenada é multiplicada pelo tamanho do tile para posicionamento correto
        // tileSize representa o tamanho de cada "bloco" na grade do jogo
        ctx.fillRect(segment.x * tileSize, segment.y * tileSize, tileSize, tileSize);
    });
}


    // Função para desenhar a comida
    function drawFood() {
        // Define a cor de preenchimento para a comida (vermelho)
        ctx.fillStyle = '#f00';

    // Desenha um retângulo (representando a comida) no canvas
    // O retângulo é preenchido com a cor definida acima
    // As coordenadas do retângulo são baseadas nas coordenadas da comida
    // Cada coordenada é multiplicada pelo tamanho do tile para posicionamento correto
    // tileSize representa o tamanho de cada "bloco" na grade do jogo
    ctx.fillRect(food.x * tileSize, food.y * tileSize, tileSize, tileSize);
    }





        // Função para mover a cobrinha
        function moveSnake() {
            if (!paused) { // Verifica se o jogo não está pausado
                const head = { x: snake[0].x + dx, y: snake[0].y + dy }; // Calcula a nova posição da cabeça da cobrinha
                snake.unshift(head); // Adiciona a nova posição da cabeça no início do array
                if (head.x === food.x && head.y === food.y) { // Verifica se a cabeça da cobrinha comeu a comida
                    generateFood(); // Gera nova comida
                } else {
                    snake.pop(); // Remove a última parte da cauda da cobrinha
                }
                if (checkCollision()) { // Verifica colisão da cobrinha consigo mesma ou com as bordas do canvas
                    gameOver = true; // Define o fim do jogo
                    setTimeout(() => { // Após 5 segundos, recarrega a página
                        location.reload();
                    }, 5000);
                }
            }
        }






        // Função para gerar comida em uma posição aleatória
        function generateFood() {
            food.x = Math.floor(Math.random() * canvas.width / tileSize);
            food.y = Math.floor(Math.random() * canvas.height / tileSize);
        }

        // Função para limpar o canvas
        function clearCanvas() {
            ctx.clearRect(0, 0, canvas.width, canvas.height); //x,y,largura, altura
        }










        // Função para atualizar o jogo
        function update() {
            clearCanvas();
            drawFood();
            drawSnake();
            moveSnake();
            if (!gameOver) {
                setTimeout(update, 100); // Chama a função update novamente após 100ms
            } else {
                ctx.fillStyle = '#ffff';
                ctx.font = '30px Arial';
                ctx.fillText('Game Over', canvas.width / 2 - 80, canvas.height / 2);
            }
        }











        // Função para verificar colisão
        function checkCollision() {
            const head = snake[0];
            for (let i = 1; i < snake.length; i++) {
                if (snake[i].x === head.x && snake[i].y === head.y) {
                    return true; // Retorna true se houver colisão com o próprio corpo da cobrinha
                }
            }
            return head.x < 0 || head.x >= canvas.width / tileSize || head.y < 0 || head.y >= canvas.height / tileSize;
            // Retorna true se a cabeça da cobrinha atingir as bordas do canvas
        }

        // Função principal do jogo
        function main() {
            update(); // Inicia o jogo
        }





        

        // Evento de teclado para controlar a direção da cobrinha
        document.addEventListener('keydown', e => {
            if (!gameOver && !paused) { // Verifica se o jogo não acabou e não está pausado
                switch (e.key) {
                    case 'ArrowUp':
                        if (dy === 0) {
                            dx = 0;
                            dy = -1;
                        }
                        break;
                    case 'ArrowDown':
                        if (dy === 0) {
                            dx = 0;
                            dy = 1;
                        }
                        break;
                    case 'ArrowLeft':
                        if (dx === 0) {
                            dx = -1;
                            dy = 0;
                        }
                        break;
                    case 'ArrowRight':
                        if (dx === 0) {
                            dx = 1;
                            dy = 0;
                        }
                        break;
                }
            }
        });

        // Adiciona evento de clique ao botão para pausar/despausar o jogo
        const pauseButton = document.getElementById('pauseButton');
        pauseButton.addEventListener('click', () => {
            paused = !paused; // Inverte o estado de pausa do jogo

            // Define o texto do botão de pausa com base no estado de 'paused'
            // A expressão ternária abaixo atribui um texto ao botão com base na condição 'paused'
            // Se 'paused' for verdadeiro, o texto do botão será 'Resume', indicando que o jogo está pausado e pode ser retomado
            // Se 'paused' for falso, o texto do botão será 'Pause', indicando que o jogo está em execução e pode ser pausado
            pauseButton.textContent = paused ? 'Resume' : 'Pause'; // Altera o texto do botão
        });

        main(); // Inicia o jogo