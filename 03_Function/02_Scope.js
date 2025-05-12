// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30

// this is work good but now here is problem when comde {}
// if (true) {
//   let a = 10;
//   const b = 20;
//   var c = 30;
// }

// //here is problem
// // console.log(a); // ReferenceError: a is not defined
// // console.log(b); // ReferenceError: b is not defined
// console.log(c); // 30



// let a = 300; //this is global variable
// let b = 200
// if (true) {
//     let a = 10; //this is block scope variable
    
//     console.log(a); //10
//     console.log(b); //200
// }

// console.log(a); //300


//****************nested scope************** */
//learn call stack in memory

// function one(){
//     const username = "John";

//     function two (){
//         const website = "youtube"
//         console.log(username)
//     }
//     // console.log(website) //ReferenceError: website is not defined //ths is block scope variable
//     two()
// }
// one()


//****************if else******************* */
// if(true){
//     const username= "hitesh"
//     if(username === "hitesh"){
//         const website = "youtube"
//         console.log(username) //hitesh
//         console.log(username + website) //hiteshyoutube
//     }
//     console.log(website) //ReferenceError: website is not defined
// }

// console.log(username) //ReferenceError: username is not defined

//****************intersting********************* */


//this fun run
// function addOne(num){
//     return num + 1
// }

// addOne(5) //6

// this fun is also run

// console.log(addOne(5)) //6
// function addOne(num){
//     return num + 1
// }


//type 2 function this is run

// const addTwo = function(num){
//     return num + 2
// }

// addTwo(5) //7

//but this fun is not run
// ReferenceError: Cannot access 'addTwo' before initialization
console.log(addTwo(5)) 

const addTwo = function(num){ 
    return num + 2
}
