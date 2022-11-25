// Calcola la somma dei primi 10 numeri di un array.

let exampleArray = [];

for (let i=1; i < 11; i++) {
    exampleArray.push(i);
}
console.log(exampleArray);

let numbersSum = 0;

for (let i = 0 ; i < 10 ; i++) {
    numbersSum = numbersSum + exampleArray(i);
}

console.log(numbersSum);