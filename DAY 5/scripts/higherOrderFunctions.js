console.log("Higher Order Functions");

// MAP ----> ALLOWS US OPERATE WITH EVERY ELEMENT OF THE ARRAY AND RETURN AN ARRAY WITH THE ANSWERS

/*
let arr = [1,2,3,4,5,6];

arr.forEach((el)=>{
console.log(el**2)
})

*/


//let square = arr.map((el)=>el**2);  /// ARROW FUNCTION
//console.log(square);

/*
let square = arr.map(function(el){   // NORMAL WAY
    return el**2;
})
console.log(square);
*/


// FILTER ---- PARA FILTRAR LO QUE QUEREMOS SABER, EJ: USUARIOS CON NUMEROS MAYORES A 35

/*
let even = arr.filter((el)=>el%2==0);
let evenSquare = arr.filter((el)=>el%2==0).map(el=>el**2)
console.log(even);
console.log(evenSquare);
*/

// FILTER ---- PARA FILTRAR LO QUE QUEREMOS SABER, EJ: USUARIOS CON NUMEROS MAYORES A 35
/*
let users = [{"user": 'Mary'}, {"user": 'Safi'},
{"useer": 'Amaia'}, {"user": 'Lechuza'}, {"user": 'Rafa'},
{"user": 'Marta'}, {"user": 'Steven'}];


let resultDetails = users.map(user => {
    let mark = Math.random()*100;
    user.mark = mark;
    return user;
})

console.log(resultDetails);
*/

// AHORA PARA MOSTRAR SOLO LOS USUARIOS QUE TIENEN UNA MARCA DE 40 PARA ARRIBA, USAMOS FILTER

/*
let pass = resultDetails.filter(user => {
if (user.mark > 55) {
    return user
}
})

console.log(pass);
*/

//// REDUCE ----- AGREGA LOS VALORES A LA VARIABLE INICIAL


let arr = [1,2,3,4,5,6];

let names = ['berlin', 'denver', 'rio'];

let red = names.reduce((acc,val)=>{
    let obj = {
        name: val,
        len: val.length,
    }
    acc.push(obj);
    return acc;
},[]);

console.log(red);
















