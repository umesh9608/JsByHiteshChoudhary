// const balance = new Number(400);
// console.log(balance) //[Number:400]
// console.log(balance.toFixed(2)); //400.00

// const otherNumber = 21343.3333;
// console.log(otherNumber.toPrecision(3)); //13e+4

// const num = 100000;
// console.log(num.toLocaleString('en-IN')); //1,00,000

//***************************MATHS************************************** */
// console.log(Math); //object [Math] {} //chcek in crome
// console.log(Math.round(4.3)); //4
// console.log(Math.ceil(4.2)); //5
// console.log(Math.floor(4.9)); //4
// console.log(Math.min(4,2,5,2,1,55,9)); //1
// console.log(Math.max(4,1,5,7,2,8)); //8
// console.log(Math.random()) //always cale cone o to 1(0.8326816187817985)

console.log((Math.random() * 10 )+ 1); //1 to 9

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min) //15 ,12,15,19
