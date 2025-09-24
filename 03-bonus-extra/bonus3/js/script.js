// Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

/**
 * 
 */

const userNumberString = prompt("Inserisci un numero di 4 cifre");
console.log(userNumberString);
if (!userNumberString) {
    console.error("Input non valido. Ricaricare la pagina");
} else {
    if (userNumberString.length === 4) {
        let somma = 0;
        for (let i = 0; i < userNumberString.length; i++) {
            somma += parseInt(userNumberString[i]);
        }
        console.log("La somma delel cifre del tuo numero è:", somma);
    } else {
        console.error("L'unghezza dell'input errata. Ricaricare la pagina");
    }
}
