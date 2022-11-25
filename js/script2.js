// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

const requestedNumber = parseInt(prompt('Inserisci un numero'));

if (requestedNumber % 2 == 0) {
    console.log(requestedNumber);
} else {
    console.log(requestedNumber + 1);
}