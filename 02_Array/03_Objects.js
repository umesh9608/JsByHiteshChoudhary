//singleton 

//object literals

// Object.create


const jsUser = {
    name:"umesh",
    age:18,
    location:"Ranchi",
    email:"um@gmail.com",
    isLoogedIn:false,
    lostLogginDays:["Monday","sunday"]
}

// console.log(jsUser.name);
// console.log(jsUser["email"]);
// jsUser.name ="mohan";

// Object.freeze(jsUser)

// jsUser.name = "sum@gmail.com"; //this is not work because obj is freeze in line no 20
// console.log(jsUser)

jsUser.greeting = function(){
    console.log(`hello js user, ${this.name}`)
}

console.log(jsUser.greeting); //[Function (anonymous)]
console.log(jsUser.greeting());