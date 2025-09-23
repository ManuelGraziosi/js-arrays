// Crea un array vuoto. Genera 6 numeri casuali compresi tra 1 e 100, inserisci nel array solo i numeri dispari.

const randomNumbers = [];

for (let i = 0; i < 6; i++) {
    const currentRandom = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    randomNumbers.push(currentRandom);
}

console.log("randomNumbers", randomNumbers);