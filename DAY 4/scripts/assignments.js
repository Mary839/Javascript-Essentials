console.log("Assignments DAY 4");

// QUESTION 1... FOR LOOP 

/*
for (let i = 0; i<101; i++){
    if (i % 3 == 0) {
    console.log(i + "fizz");
    continue;
    }
     if (i % 5 == 0) {
     console.log(i + "buzz");    
     continue   
    }
    let num = i;
    console.log(num);
 }
 */



// QUESTION 2...... DESTRUCTURING OBJECT

/*

const student = {
    name: "Helsinki",
    age: 24,
    projects: {
        diceGame: " Two player dice Game using JavaScript"}
}
const {name, age, projects} = student;

*/



// QUESTION 3 ......... ARRAY - 2 SHOPPING LIST
/*

let shoppingList = ["Banana", "Mango", "Watermelon", "Vegetables", "Grapes"];
let shoppingBasket = ["Cheese", "Wine", "Meat", "Fish",...shoppingList];
console.log(shoppingList);
console.log(shoppingBasket);

*/


// QUESTION 4 ....... CALCULATOR

/*
let sum = alert ("We are gonna make a sum");
let ask = prompt("Enter a number");
let ask1 = prompt("Enter another number");
let result = +ask + +ask1; 
console.log(`The result of adding ${ask} and ${ask1} is ${result}`);

let rest = alert ("Now let's subtract some numbers")
let rest1 =  prompt("Enter a number please");
let rest2 =  prompt("Enter another number, please");
let resultrest = rest1 - rest2;
console.log(`The result from the substraction of ${rest1} and ${rest2} is ${resultrest}`);

let mult = alert ("Now let's multiplicate some numbers")
let multi1 =  prompt("Enter a number please");
let multi2 =  prompt("Enter another number, please");
let resultmulti = multi1 * multi2;
console.log(`The result of multiplicate ${multi1} and ${multi2} is ${resultmulti}`);

let division = alert ("Now let's make some divisions")
let div1 =  prompt("Enter a number please");
let div2 =  prompt("Enter another number, please");
let resultdiv = div1 / div2;
console.log(`The result from the division between ${div1} and ${div2} is ${resultdiv}`);

let sqr = alert ("Lets find a square root of a number")
let sqr1 = prompt("Enter a number");
let square = Math.sqrt(sqr1);
console.log(`Square root of number ${sqr1} is ${square}`);

let porce = alert ("Lets find porcentage")
let porcentaje = prompt("Enter a number");
let porcentaje2 = prompt("Another number, please");
let resultporce = porcentaje / porcentaje2 * 100;
console.log(`The porcentage from ${porcentaje} and ${porcentaje2} is ${resultporce}%`);

*/


// QUESTION 5 - SALES DEPARTMENT

/*
let sales = prompt("Enter your sales, please")
if (sales > 0 && sales <= 5000) {
let result = sales * 100 / 5000;
console.log(result);    
}

if (sales >= 5001 && sales <= 10000) {
let result2 = sales * 100 / 10000
console.log(result2);    
}

if (sales >= 10001 && sales <= 20000) {
let result3 = sales * 100 / 20000
console.log(result3);  
}

if (sales > 20000) {
let result4 = sales * 100 / 20000
console.log(result4);  
}

*/



// QUESTION 6 - NUMBER HIGHER THAN 100

//let number = prompt("Enter a number higher than 100, please");
//console.log(number>= 100) ? 'Excellent the number is ${number}' 


/*
let number = prompt("Enter a number higher than 100, please");

for (let i = number; i>100; i++)
number++;
if (number >= 100) {
 console.log("Excellent") 
  
} else {

prompt("Please higher than 100");
    
}

*/




// QUESTION 7 .... PRIME NUMBERS

/*
let contador = 1;
let contador2 = 0;
let verifica = 0;

let x = prompt("Insert a number please");
while (contador <= x) {
    while (contador2 < contador) {
        if (contador % contador2 == 0 && contador2 != 1 && contador2 != contador) {
            verifica = 1;
        }
       contador2++; 
    }
    
    if (verifica == 0) {
        console.log(contador2);
        
    } else {

      verifica = 0;
    }
    contador++;
    contador2 = 0;
}

*/






// QUESTION 8 .... ARROW FUNCTIONS -   

//   CAN´T SOLVE THIS ONE. I DIDNT UNDERSTAND HOW TO CONVERT 
//   IF STATEMENT TO A ARROW FUNCTION


/*
function ask(question,yes,no){
     if (confirm(question)) yes(); 
     else no(); 
    } 
     
    ask
     ("do you agree?",
     function(){alert("you agreed.");},
     function(){alert("you cancelled the execution.");}
      )
 
*/

// TRY WITH THIS BUT DOESNT WORK, HOW CAN I PUT THE QUESTION FOR THE USER?

/*
function ask(question,yes,no){
    return confirm(question) ? yes()  
    : cancel ? no()

  
    }
*/

