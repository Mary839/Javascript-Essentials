console.log("Methods of datatypes");

let str = `<h2> Hey there</h2>
<p> All good.</p>`;
console.log(str);

let name = "Rio";
let skill = "Hacking";
let weakness = "Tokyo";

console.log("The name is" + " " + name + " . His Hobby is" + " " + skill + " " 
+ "and his weakness is" + " " + weakness);



console.log(`The name is ${name}. His skill is ${skill} and 
his weakness is ${weakness}. ${40+40}`);


let text = "The quick brown fox jumps over the wall";
console.log(text);

// for the lenght
console.log(text.length);

// To change the case
console.log(text.toLowerCase());
console.log(text.toUpperCase());

// Accesing the index
// index is the position of the caracter

console.log(text[5]);
console.log(text.indexOf('o'));
console.log(text.lastIndexOf('o'));

console.log(text.charAt('12'));
console.log(text.endsWith("wandering"));

// console.log(text.split('e'));
console.log(text.split(' '));

// SUBSTRNG
// SPLICE
// REPLACE
// REPLACE ALL

// ARRAY 
let arr = ['one' , 'two', 'three'];
let arr2 = ['rio', 'berlin', 'alicia'];
console.log(arr);

// console.log(Array.isArray(text)); // false
console.log(Array.isArray(arr));
// indexOf('value')

console.log(arr.reverse());

console.log(arr[3]);

console.log(arr.concat(arr2));

// APPENDNNG AN ELEMENT
// AT THE START
arr2.unshift('Tokyo');
console.log(arr2);

// AT THE END
arr.push('Finland');

// REMOVING AN ELEMENT
// FROM THE START
arr2.shift('Tokyo');
console.log(arr2);

// FROM THE END
console.log(arr2.pop());
















