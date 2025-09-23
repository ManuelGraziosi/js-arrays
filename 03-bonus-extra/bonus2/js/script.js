// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari.

const randomNumbers = [];
let somma = 0;
for (let i = 0; i < 6; i++) {
    const currentRandom = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    randomNumbers.push(currentRandom);
}

for (let i = 0; i < randomNumbers.length - 1; i++) {
    const currentNumber = randomNumbers[i]
    if (i % 2 === 1) {
        somma += currentNumber
    }

}
console.log("somma", somma);