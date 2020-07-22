console.log("dom basics");



// selector for id # 
// selector for class .
// GETTING THE ELEMENTS

/*
1. getElementByid
2. getElementByClassName
3. getElementByTagName
4. querySelector
5. querySelectorAll

*/

// 1. getElementByid



console.log(title); // NOS MUESTRA EL ELEMENTO QUE EN HTML TENEMOS IDENTIFICADO COMO TITLE
console.log(title.innerHTML);
console.log(title.innerText);

const para = document.getElementsByClassName('imp');

console.log(para);

const data = document.getElementsByTagName('p');

console.log(data);

console.log(document.querySelector('.imp'));

const data1 = document.querySelectorAll('p');
console.log(data1);



//for (let index = 0; index < data.length; index++) {
      //   const element = data[index];
    //    console.log(element)
        
  //   }

//const dataarr = [...data];
const dataarr = Array.from(data);

//dataarr.forEach(el=>{
  //  console.log(el);
//})







///  CHANCE PROPERTIES / ATRIBUTES


const attr = document.getElementById('attribute');

console.log(attr.getAttribute('id'));
//attr.setAttribute('style','color:red;');
//attr.setAttribute('style', 'background-color: blue;'); // PARA CAMBIAR El colOR DEL BACKGROUND

attr.classList.add('blue');
attr.classList.add('bgYellow');
//attr.classList.remove('blue');
//attr.classList.toggle('blue');
//attr.classList.toggle('blue');
// 2 toggles remove previous


//attr.style.color = "red";
//attr.style.backgroundColor = "yellowgreen";
//attr.style.backgroundColor = ""; // de esta forma remove previous



let fruits = ['apple', 'orange', 'watermelon', 'mango'];

console.log(fruits);

const list = document.querySelector('#list');
console.log(list);

fruits.forEach(fruit=>{
   // list.innerText += `<li>${fruit}</li>`;
    list.innerHTML += `<li>${fruit}</li>`;
})


dataarr.forEach(para=>{
    if(para.innerText.includes('amet')){
        para.classList.add('highlight');
    }
})


// button click

function showAlert(){
    alert("Hello, im a alert from the button");
}


//


const name = prompt("Enter your name" + "Anonymous");
title.innerText += `Welcome to the family ${name}`;



const ctime = document.getElementById('time');


function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}

// clock();

setInterval(clock,1000);





