// let str1 = "hello";
// let str2 = 'hello';
// console.log(str1);
// console.log(str2)

//cocatenation
// console.log(str1 + str2); //this is not recommended but you can use
// console.log(`${str1} ${str2}`); //this is morden

//******************tpye 2 to decleare string*************************
const gameName = new String('umesh');
// console.log(gameName);
// console.log(typeof(gameName)); //object
// console.log(gameName[2]) //to check index position  2
// console.log(gameName.charAt(2)) //2
// console.log(gameName.indexOf('e')); //2
// console.log(gameName.__proto__); //{}  check it browser

// console.log(gameName.length); //5
// console.log(gameName.toLocaleUpperCase()); //UMESH
// console.log(gameName.toLowerCase()); //umesh

// const newString = gameName.substring(0,4); //it ignore -ve value
// console.log(newString) //umes

//***************slice method************* */
// const anotherString = gameName.slice(-3,4) //we can take -ve value also
// console.log(anotherString); ///es

//************'*trim method***************************/
// const name  = "   hitesh  ";
// console.log(name.trim());  //remove extram space using trim

//****************replace value************************* */
const url = "https://hitesh.com/hitesh%20chodhary";
console.log(url.replace('%20', '-')) //first vlaue kya hatana h and second value kya add krna hai

console.log(url.includes('hitesh')); //true
