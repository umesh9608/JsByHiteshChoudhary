// console.log( 2 > 1); //true
// console.log( 2 >= 1); //ftrue
// console.log( 2 < 1); //false
// console.log( 2 == 1); //false
// console.log( 2 != 1);//true
// console.log( 2 === 1); //false

// console.log("2" > 1); //true make sure check data type are same

// console.log(null > 0);//false
// console.log(null == 0); //false
// console.log(null >= 0);//true (value conversion problem)
// console.log(undefined == 0); //false

// === strick chack(datatpye and value both check)

// console.log("2" === 2); //false



//+++++++++++++++++++++++++++++++Memory++++++++++++++++++++++++++++++++++++++++

//stack (primitive): jo bhi apne variable declare kra uska ek copy milta hia
//  Heap(non-primitive):- ahe se  original value ka rafrance milta hai mean jo bhi change krenge wo original value me bhi change hoga

// let myValue = "hello jon"; //go stack memory example
// let anotherVal = myValue;

// console.log(anotherVal); //hello jom

// anotherVal = "jon Doe"
// console.log(myValue) //hello jon
// console.log(anotherVal);//jon Doe //this is change but not change original value

let user = {  //Heap memory example (reference value)
    email:"user@gamil.com",
    password:"user@123"
}

let user2 = user;

user2.email = "user2@gamil.com";

console.log(user.email); //user2@gamil.com
console.log(user2.email); //user2@gamil.com


