console.log('Hello World!');

// Crea un array vuoto.
// Chiedi per 6 volte all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.

let exampleArray = [];

let requestedNumber;

for (let i = 0 ; i < 6 ; i++) {
    requestedNumber = parseInt(prompt('Inserisci un numero'));
    if (requestedNumber % 2 != 0) {
        exampleArray.push(requestedNumber);
    }
}

console.log(exampleArray);