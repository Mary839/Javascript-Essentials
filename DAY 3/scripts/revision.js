console.log("Revision");

// Difference between Number() and parseInt()

//parseInt extrae la parte numerica y si hay texto, para
//Number te lo convierte y te da una terminacion en n
//EXAMPLE

let strnumb = '1234hello'
console.log(`The original value is ${strnumb} & its type is ${typeof strnumb}`);
console.log(Number(strnumb));
console.log(parseInt(strnumb)); // this one gonna show us only the numbers part



// ANOTHER WAY TO CONVERT A STRING TO A NUMBER

// let one = 1;
// let two = 2;
//console.log(one + two);
// OUTPUT = 3, SUM BECAUSE ITS A INT ITS A NUMBER

let one = '1';
let two = '2';

//console.log(one + two);
// OUTPUT = 12, BECAUSE ITS A STRING

console.log(+one + +two);
// OUTPUT = 3. BECAUSE WE ARE USING +





