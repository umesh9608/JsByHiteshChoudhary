//js Date obj rep a single moment in time in a platform-independent fromat, Date obj encapsulate an integral number thai represents milliseconds since the midnight at the biginning of january 1, 1970, UTC

let myDate = new Date()//object
console.log(typeof myDate);
console.log(myDate); //2025-05-09T13:28:42.434Z
console.log(myDate.toString()); //Fri May 09 2025 18:59:50 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());  //Fri May 09 2025
console.log(myDate.toLocaleString()); //9/5/2025, 7:00:43 pm

let myCreatedDate = new Date(2025, 0 , 23);
console.log(myCreatedDate); //2025-01-22T18:30:00.000Z
console.log(myCreatedDate.toDateString()); //Thu Jan 23 2025

let myDateCreated = new Date(2025, 0 , 23, 5, 3);
console.log(myDateCreated.toLocaleString());//23/1/2025, 5:03:00 am
