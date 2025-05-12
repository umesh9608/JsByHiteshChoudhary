// console.log("This is function.js file");
// function sayMyName(){ //this is function declaration
//     console.log("My name is Hitesh"); //this is function body
// }

// sayMyName() //this is function execution

// function addTwoNumbers(num1, num2) { //here num1 and num2 are parameters
//     return num1 + num2;
// }
// console.log(addTwoNumbers(5, 10)); // Output: 15 //here 5 and 10 are arguments

// const result = addTwoNumbers(5, 10); 
// console.log(result); 


//******************Learn Why we use Return in Function******************* */

// function addTwoNumbers(num1, num2) { //here num1 and num2 are parameters
//     console.log(num1 + num2); 
// }

// const result = addTwoNumbers(5, 10); 
// console.log("Result",result);  //shows undefined because the function does not return anything

// function addTwoNumbers(num1, num2) {
//     let result = num1 + num2; 
//     return result; 
// }

// const result = addTwoNumbers(5, 10);
// console.log("Result",result);


// function loginUserMessage(userName){
//     return `${userName}just logged in `
// }

// // loginUserMessage("Hitesh"); //not run this is return but not print
// console.log(loginUserMessage("Hitesh"));



// function loginUserMessage(userName = "sam"){
//     return `${userName} just logged in `
// }
// console.log(loginUserMessage()); //if we not pass any value than it will take default value sam


//in this if we don't know how many arguments we will pass then use rest operator
//(...name) some time called as rest op or some time called as spread op
// function calculateCartPrice(...price) {
//     return price ;
// }

// console.log(calculateCartPrice(200,300,400,500,600)); //[ 200, 300, 400, 500, 600 ]

//some time we use
// function calculateCartPrice(value1,value2,...price) {
//     return price ;
// }

// console.log(calculateCartPrice(200,300,400,500,600)); //show output this[ 400, 500, 600 ] because we are taking first two values in value1 and value2

//******************passing obj in  function*********** */
// const user = {  
//     name: "Hitesh",
//     email: "hitesh@gmai.com",
//     price:199
// }

// function handleObject(anyobject){
//     console.log(`User name is ${anyobject.name} and email is ${anyobject.email} and price is ${anyobject.price}`);
// }

// // handleObject(user); 
// handleObject({
//     name:"sam",
//     email:"sam@gamil.com",
//     price:200
// })


//********************Pass array in function***************
const myArray = [20,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myArray)); //300
console.log(returnSecondValue([200,980,800,900])); //989
