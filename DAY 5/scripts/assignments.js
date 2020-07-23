console.log("Assignments DAY 5");


// QUESTION 1 - POSITIVE NUMBER FROM USER, FILTER ODD NUMBERS
/*
let number = prompt("Enter a number please");
let ans = number;
for (let i = 0; i<ans; i++){
console.log(i);


let number = [{ans}];
let resultDetails  = number.map(ans=>{
    let odd = number % 2;
    ans.odd = odd;
    return ans;

    
})

let result = resultDetails.filter(ans => {
    if (ans.odd == 0) {
        return ans
    }
    })
    
    console.log(result);


}

*/






// QUESTION 2 - CREATE CLASS USER 


/*

class User {
    constructor(name,age,email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.Coins = 0;
        this.courses = [];   
    }
    login(){
        console.log(`${this.name} has logged in`);
       // return this;
    }
    logout(){
      console.log(`${this.name} has logged out`);
      return this;
  }
  addCoins(){
      this.Coins++;
      console.log(`${this.name} has ${this.Coins} coins`)
      return this;
  }
  getDetails(){
      console.log(`Name is ${this.name}, email is ${this.email}`)
      return this;
  }
}

class Moderator extends User{

         deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email;
        })
    } 

   }

class Admin extends Moderator{
addCourse(user,courses){
    user.courses.push(courses);
    console.log(user);
}

}

let user1 = new User('Mary', 25, 'mari@gmail.com');
let user2 = new User('Amaia',17, 'pulgui@gmail.com');
let mod = new Moderator ('Rafa', 29, 'rafa@gmail.com');
let admin = new Admin('Safira', 20, 'safi@gmail.com');
let users = [admin, user1,user2,mod];
users.forEach(element => {
    console.log(element);
});

admin.addCourse(user1, 'JavaScript' +  "," + 'Python' + "," + "," + 'Java');
admin.addCourse(user2, 'Java');
user1.login();
user2.addCoins();


*/


function req1() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => {
        const title = json.title;
        const body = json.body;
        document.getElementById("printTitle").innerHTML = title;
        document.getElementById("printBody").innerHTML = body;
      });
  }
  
  req1();












