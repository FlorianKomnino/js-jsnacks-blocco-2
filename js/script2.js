// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

let requestedNumber = parseInt(prompt('Inserisci un numero'));

if (requestedNumber % 2 != 0) {
    requestedNumber = requestedNumber + 1;
}
console.log (requestedNumber)