//Descubra como fazer com que Jason sempre fique com o maior numero e Freddy com o segundo maior

// Esta função deve retornar o maior e o segundo maior número
function maiorESegundoMaiorPoder(numeros) {
    let Jason = numeros[0]; // Jason é o maior (o numero maior / poder maior é sempre dele)!
    let Freddy = numeros[0]; // Freddy é o segundo maior, mas está sempre atrás de Jason! (o SEGUNDO numero maior / SEGUNDO poder maior é sempre dele)!

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < Jason) {
            Freddy = Jason; 
            Jason = numeros[i]; 
        } else if (numeros[i] > Freddy && numeros[i] !== Jason) {
            Freddy = Jason 
        }
    }

    return {
        Jason, 
        Freddy 
    };
}

const array = [13, 66, 31, 5, 74]; 
const resultado = maiorESegundoMaiorPoder(array);
console.log(`O poder de Jason é ${resultado.Jason}, e o poder de Freddy é ${resultado.Freddy}`);


  