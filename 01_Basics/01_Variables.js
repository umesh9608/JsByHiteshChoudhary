//we can declare variable to store data there are three type let,var,const but no not use var because of issue in block scop and functional scope
const accoutId = 12355;
let accoutEmail = "hitesh@gmail.com";
var accountPass ="12345";
accountCity = "jaiput"; //this is option but not good to store value

let value; 
console.log(value) //show undefiend (because we can declare variable but not assing value)

// accoutId = 2;  //this is not allowed show this(TypeError: Assignment to constant variable.)
console.log(accoutId)

console.log([accoutId, accoutEmail, accountPass, accountCity]) //[ 12355, 'hitesh@gmail.com', '12345', 'jaiput' ]

