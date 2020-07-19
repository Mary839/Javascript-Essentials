console.log("Modern Javascript");

// Destructuring Objects

/*
let person = { 
    name: "Mary",
    age: 25,
    hobby: "Music",
    adress: {
        city: "San jose",
        Country: "Costa Rica"
    },
}

*/

//console.log(person.hobby);
//console.log(person.adress.city);

// BETTER WAY TO DO THIS
// DECONSTRUCTURING OBJECTS

//const {name, age} = person;
//console.log(name, age); // OUTPUT : MARY 25

// DESTRUCTURING ARRAYS

//let arr = ["Robert", "Downey", "Jr"];
//let firstname = arr[0];
//let lastname = arr[1];

//console.log(`${firstname} ${lastname}`)


//let [firstname, lastname] = ["Robert", "Downey", "Jr"];

//console.log(`${firstname} ${lastname}`);



// spread operator

//let friends = ["Safira", "Amaia", "Lechuza"];

//let contacts = ["Rafa",...friends]; // give us separate copies
//friends.push("Error 404");
//console.log(friends);
//console.log(contacts);


/*
let person = {
    name: "Amaia",
    age: 20,
    city: "Costa Rica"
}

let employee = {
    ...person, //// ASIGN INFORMATION FROM PREVIOUS ARRAY
    salary: 4000,
    designation: "accountant"
}

console.log(person)
console.log(employee)

*/


// ARROW FUNCTIONS

//let add = function(num1, num2){
//return num1+num2

//}

//let result = add(10,20);
//console.log(result);

//(parameters) => execute and return the value
//let add = (num1,num2) => num1+num2; //// its the same before but witout return like return 
//we use the symbols =>
//let result = add(10,20);
//console.log(result)

//let join = (a,b) =>`the value of A is ${a} & B is ${b}`

//let line = join (`Hello`, `World` );
//console.log(line);

//let greet = (name) => ` Hey ${name} Welcome to the jungle`

//let log = greet('Schatten')
//console.log(log)


let greet = ()=> console.log("Hello");
greet()



