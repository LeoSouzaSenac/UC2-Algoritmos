// Exercício 7: FizzBuzz
// Utilize um loop for para implementar a lógica do FizzBuzz.
// Substitua os múltiplos de 3 por "Fizz", os múltiplos de 5 por "Buzz" e os múltiplos de 3 e 5 por "FizzBuzz".

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
