console.log("Fetch API");
// https://jsonplaceholder.typicode.com/comments
// MAKING A GET REQUEST 

fetch ('https://jsonplaceholder.typicode.com/posts/1')
.then(response=>response.json())
.then(data=>console.log(data))


// MAKE A POST REQUEST

fetch ('https://jsonplaceholder.typicode.com/posts/', {
    method: 'POST',
    body: JSON.stringify({
    
         userId: 254,
         title: "Some title",
         body: 'Lorem ipsum'
    })
}).then(response=>response.json())
.then(data=>console.log(data))



// JOKES API

async function fetchJokes(){
    const response = await fetch('https://api.chucknorris.io7jokes/random');
    const data = await response.json();

    console.log(data);
}

fetchJokes();



// CONVERT TO JASON AND BACK TO STRING

let obj1 ={
    name: 'Mary',
    age: 25,
    canDrive: true,
}

console.log(obj1);
let str = JSON.stringify(obj1);
console.log(str)

let strobj = JSON.parse(str);
console.log(strobj);



















