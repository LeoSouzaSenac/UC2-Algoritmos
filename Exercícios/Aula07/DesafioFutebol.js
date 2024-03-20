// Definindo as informações fornecidas pelo usuário
let nomeCompleto = "João Silva";
let tipoJogo = "IN"; // IN para internacional, DO para doméstico
let etapaJogo = "FI"; // SF para semifinal, DT para decisão de terceiro lugar, FI para final
let categoria = 2; // 1, 2, 3 ou 4
let quantidadeIngressos = 3;

// Definindo os valores dos ingressos de acordo com o tipo de jogo, etapa do jogo e categoria
let valorIngresso;
switch (etapaJogo) {
    case "SF":
        switch (categoria) {
            case 1:
                valorIngresso = 1320;
                break;
            case 2:
                valorIngresso = 880;
                break;
            case 3:
                valorIngresso = 550;
                break;
            case 4:
                valorIngresso = 220;
                break;
            default:
                console.log("Categoria de ingresso inválida.");
                return;
        }
        break;
    case "DT":
        switch (categoria) {
            case 1:
                valorIngresso = 660;
                break;
            case 2:
                valorIngresso = 440;
                break;
            case 3:
                valorIngresso = 330;
                break;
            case 4:
                valorIngresso = 170;
                break;
            default:
                console.log("Categoria de ingresso inválida.");
                return;
        }
        break;
    case "FI":
        switch (categoria) {
            case 1:
                valorIngresso = 1980;
                break;
            case 2:
                valorIngresso = 1320;
                break;
            case 3:
                valorIngresso = 880;
                break;
            case 4:
                valorIngresso = 330;
                break;
            default:
                console.log("Categoria de ingresso inválida.");
                return;
        }
        break;
    default:
        console.log("Etapa do jogo inválida.");
        return;
}

// Se o jogo for internacional, multiplicar o valor do ingresso pelo valor do dólar
if (tipoJogo === "IN") {
    //valorIngresso *= 4.10;
    //let valorInternacional = valorIngresso * 4.10
    valorIngresso = valorIngresso * 4.10

}

// Calculando o valor total a ser pago
let valorTotal = valorIngresso * quantidadeIngressos;

// Imprimindo todas as informações
console.log("Nome: " + nomeCompleto);
console.log("Tipo de jogo: " + (tipoJogo === "IN" ? "Internacional" : "Doméstico"));
console.log("Etapa do jogo: " + (etapaJogo === "SF" ? "Semifinal" : (etapaJogo === "DT" ? "Decisão de Terceiro Lugar" : "Final")));
console.log("Categoria: " + categoria);
console.log("Quantidade de ingressos: " + quantidadeIngressos);
console.log("Valor do ingresso: R$ " + valorIngresso.toFixed(2));
console.log("Valor total a ser pago: R$ " + valorTotal.toFixed(2));
