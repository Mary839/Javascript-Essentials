console.log("OOPS IN JS");

/*
const userOne = {
    name: 'Mary',
    age: 25,
    email: 'mari@gmail.com',
    login(){
        console.log('Mari has logged in');
    } ,
    logout(){
        console.log('Mary has logged out');
    },
} 

console.log(userOne.email);

*/

// FOR ADD MANY USERS, we need to create a class for that

/*

// METODO Y SUS PROPIEDADES
class User {
      constructor(name,age,email) {
          this.name = name;
          this.age = age;
          this.email = email;
      }

      login(){
          console.log(`${this.name} has logged in`);
      }
      logout(){
        console.log(`${this.name} has logged out`);
    }
}
let user1 = new User('Mary', 25, 'mari@gmail.com');
let user2 = new User('Safira', 20, 'safi@gmail.com');

user1.login()

*/  
// ADDING NEW FUNCTIONS

class User {
    constructor(name,age,email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.luCoins = 0;
        this.courses = [];
        
    }
 
    static greet(){
    console.log("Hello there");
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
      console.log(`${this.name} has logged out`);
      return this;
  }
  addCoins(){
      this.luCoins++;
      console.log(`${this.name} has ${this.luCoins} coins`)
      return this;
  }
  getDetails(){
      console.log(`Name is ${this.name}, email is ${this.email}`)
      return this;
  }
}

class Moderator extends User{
    //constructor(name, age,email,role){
      //  super(name,age,email);
       // this.role = 'Moderator';
    //}
     
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
let user2 = new User('Amaia',22, 'pulgui@gmail.com');
let mod = new Moderator ('Berlin', 21, 'b@gmail.com');
let admin = new Admin('Rio', 25, 'r@gmail.com');
let users = [admin, user1,user2,mod];
users.forEach(element => {
    console.log(element);
});

User.greet();
User.login();
admin.addCourse(user1, 'JavaScript');



/*
user1.login()
user1.addCoins();
user1.addCoins();
user1.logout()
*/

// A SINGLE LINE WITH THE SAME OUTPUT

//user1.login().addCoins().addCoins().getDetails().logout();

//mod.deleteUser(user1);
//console.log(users);





