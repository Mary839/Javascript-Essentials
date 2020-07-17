console.log("Conditional Statements");

/*
1. IF
2. IF ELSE
3. IF ELSEIF ELSE
4. TERNARY
*/

//let age = +prompt("Enter your age", 0);

// let age = 18;
// console.log(age,typeof age);

/*
if (condition) {
code to evaluate if condition is true

}
*/

/*
if (age === 18) {
console.log("You are an adult");    
}


if (1) {
    console.log("True");
}


// IF ELSE

age = 17;
if (age >= 18) {
 console.log("You are an adult")   
}
else {
console.log("You are not an adult");
}
*/

////// TERNARY  OPERATORS
// SYNTAX: condition ? value if true: value if false

//let age = 18;
//console.log(age >= 18 ? 'You are an adult' : 'You are not an adult');


//let result = (age == 50) ? 'You are 18' : (age == 20) ? 'You are 20' : 'Your age is neither 18 or 20';
//console.log(result);


/// switch case

/*
switch(arg){
    case 1: 
    code here
    break;

    case 2: 
    code here
    break;

    default:
    code here;
    break;
}
*/

let age = 18;
switch (age) {
    case 18:
        console.log("You are 18");
        break;
    case 20:
        console.log("You are 20");
        break;
    default:
        console.log("Your age is neither 18 or 20");
        break;
}






