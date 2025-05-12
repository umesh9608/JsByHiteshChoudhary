//for of loop in js use it Arrays, String, Sets, Maps, and other iterable objects.
 /* The for...of loop is a modern and simple way to loop over iterable objects (like arrays, strings, or other data structures). It is perfect for iterating over values directly without needing an index.*/
// ["", "", ""]
// [{}, {}, {}]

//think of you have a basket of fruits
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruit); // apple, banana, cherry
}
//notes object ke uper forin loop chalayenge or array ke upper for of loop chalayenge


const arr = [1,2,3,4,5,6]

for (const num of arr) { //num = 1,2,3,4,5,6 or arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]
    console.log(num);
    
}

//////////////////////////
// const fruits = ["Apple", "Banana", "Cherry", "Date"];

// for (let fruit of fruits) {
//   console.log(fruit);
// }

//////////////////////////const message = "Hello";

const message = "Hello";

for (let char of message) {
  console.log(char);
}

/* note:-Because a string is a sequence of characters, and the for...of loop goes through each character one by one. That’s why each letter gets printed on a new line.

console.log(char) prints each character on its own line.*/