// Calcola la somma e la media dei primi 10 numeri.
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;
let average = 0;

for (let i = 0; i < numbersArray.length; i++) {
    const curNumber = numbersArray[i];
    sum += curNumber;
}
average = sum / numbersArray.length;

console.log(`La media e la somma di [${numbersArray}] sono rispettivamente: ${sum} e ${average} !`)