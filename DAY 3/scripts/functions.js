console.log("functions");

/*

function nameOfFunctions (param if any){
    ..... write code here
}

*/


function hello(){
    console.log("Welcome Everyone to Functions");
}

hello();

// ASIGN THIS FUNCTIONS TO A VARIABLE

let greet = function(){
    console.log("Im a Function assing to a variable")
}
greet()


//let welcome = function(name="Stranger"){ IF THE FUNCTION CALL IN GLOBAL HAVE SOMETHING WRITE ON IT ITS GONNA REPLACE THIS ONE
let welcome = function(name){
    console.log(`Hello ${name}`)
}
welcome("Mary");

//let addition = function(num1=0,num2=0){
//    let sum = +num1 + +num2; -----> IF WE HAVE A STRING AND WE NEED TO SUM, WE NEED TO PUT + 
//   return sum;
//}

//let result = addition('5'+ 5);
//let result = addition('5'+ true); ----> OUTPUT WILL BE 11, BECAUSE TRUE = 1
//console.log(result);


let addition = function(num1=0,num2=0){
    let sum = num1+num2;
    return sum;
}

let result = addition(5+5);
console.log(result);










