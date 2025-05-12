// const user = {
//     userName: "John",
//     price:99,

//     welcomeMessage: function(){ //this keyword is used to fefer the current context(obj)
//         console.log(`${this.userName}, welcome to the course`)
//         console.log("this key value",this)
//     }
// }

// user.welcomeMessage()
// user.userName = "Hitesh"
// user.welcomeMessage() //Hitesh, welcome to the course

// console.log(this) //window object //output {} because this in node env show empty object but when chek in browser it show window object


//**********Arrow fun************* */

// function chai(){
//     console.log(this)
// }

// chai() //show many types value

////////////////
// function chai(){
//     let userName = "John"
//     console.log(this.userName)
// }

// chai() //show undefined  qki ye obj ek ander kaam krta h ase fun ke under nhi


// const chai = function(){
//     let userName = "John"
//     console.log(this.userName)
// }
// chai() //undefied




//***********this is arrow function****************** */
// const  chai =() =>{
//     console.log(this)
// }

// chai() //{}

/////basic arrow function (type i to decleare function)    //(this is called explicit return)
// const addtwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addtwo(2, 3)) //5

////////////type 2---here we not use return keyword        (this is called implicit return)
// const addtwo = (num1, num2) => num1 + num2 //single line arrow function
// console.log(addtwo(2, 3)) //5

//learn obj return using function
// const addtwo = (num1, num2) => ({name: "John", age: 23}) //single line arrow function
// console.log(addtwo()) //{ name: 'John', age: 23 } //if we use return keyword then we have to use () brackets


// const myArray = [1, 2, 3, 4, 5]
// myArray.forEach((num) => {
//     console.log(num)
// }
// ) //1 2 3 4 5
