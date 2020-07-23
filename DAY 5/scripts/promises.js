console.log("Promises, Async Await");

/*

let users = [
    {
        name: 'Berlin',
        email: "b@gmail.com",

    },

    {
        name: 'Rio',
        email: "r@gmail.com",

    },

    {
        name: 'Tokyo',
        email: "t@gmail.com",

    },
 
]


function getUsers (){

    setTimeout(()=>{
        let result = " ";
        users.forEach(user=>{
            result += `The user is ${user.name} \n`;
        });
        console.log(result);
    }, 1000);

}



// PARA AGREGAR UN USARIO NUEVO
// usamos un callback para que el usuario nuevo se vea despues de los segundos pautados
function createUser (user, callback) {
    setTimeout(()=>{
        users.push(user);
        callback();
    }, 3000); // SEGUNDOS QUE VA A DURAR EN APARECER
}

//getUsers(); // NO NECESITAMOS ESTE PORQUE LO ADJUNTAMOS AL PRINT DE CREATEUSER

createUser({name: 'Pechu', email: 'p@gmail.com'}, getUsers);
    

*/

/*

function getUsers (){

    setTimeout(()=>{
        let result = " ";
        users.forEach(user=>{
            result += `The user is ${user.name} \n`;
        });
        console.log(result);
    }, 1000);

}

// PROMISES

let users = [
    {
        name: 'Berlin',
        email: "b@gmail.com",
    },

    {   name: 'Rio',
        email: "r@gmail.com",

    },

    {   name: 'Tokyo',
        email: "t@gmail.com",
    },



 
    function createUser(){
        return new Promise((resolve, reject) =>{
            setTimeout(()=>{
                users.push(user);

                const error = false;

                if (!error) {
                    resolve()
                }
                else {
                    reject("Ops an error ocurred");
                }

            }, 3000);
        })
    }

    


createUser ({name: 'Pechu', email:'p@gmail.com'}).then(getUsers).catch(error =>console.log(error));

*/

// EXAMPLE TWO

/*
  const userData = new Promise((resolve, reject)=> {
     const error = false; // para que de error se deja en true

    if (error )  {
        reject ("an error ocurred");
    }
else{
    resolve({
        firstName: "Sachin" ,
        age: 24,
        class: '12th',
    })
}

  });

userData.then((data=>console.log(data))).catch(error=>console.log(error))

*/

// ASYNC AWAIT ---- VARIAIBLE ASIGNADA A UN VALOR, ESPERA HASTA QUE LA FUNCION SEA RESUELTA


const photos = [];
async function photoUpload() {
//function photoUpload() {
    let status = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            photos.push('Avatar');
            resolve('Profile Updated');
        },3000)
    })
    

    //let result = status;
    let result = await status;
    console.log(photos.length);
   // console.log(result)
  //  console.log(result.length)

}

photoUpload();
photoUpload;













