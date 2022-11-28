console.log('Hello World!');

// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

let myExampleArray = [];

for (let i=1; i < 101; i++) {
    myExampleArray.push(i);
}
console.log(myExampleArray);

let numbersSum = 0;

for (let i=0; i < 100; i++) {
    if (i % 2 != 0) {
        numbersSum += i;
    }
}

console.log(numbersSum);
// switch (myExampleArray) {
//     case (% 2 == 0) :   
//         console.log(i);
// }