// Calcola la somma dei primi 10 numeri di un array.

let myExampleArray = [];

for (let i=1; i < 11; i++) {
    myExampleArray.push(i);
}
console.log(myExampleArray);

let numbersSum = 0;

let averageOperator = 0;



for (let i = 0 ; i < 10 ; i++) {
    numbersSum = numbersSum + myExampleArray[i];
    averageOperator += 1;
}

let numericalAverage = numbersSum / averageOperator;

console.log(numbersSum);

console.log(numericalAverage);

// Calcola la somma e la media dei primi 10 numeri di un array.