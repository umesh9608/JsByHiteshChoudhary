// const myNumbers = [1, 2, 3, 4, 5];
// const newNums = myNumbers.map((num) => {
//     return num + 10;
// })
// console.log(newNums); // Output: [11, 12, 13, 14, 15]


/*************same using for each loop */
//arrow function wiht block
// const myNumbers = [1, 2, 3, 4, 5];
// const newNums = [];

// myNumbers.forEach((num) => {
//   newNums.push(num + 10);
// });

// console.log(newNums); // [11, 12, 13, 14, 15]

//************************arrow function (inline, using one-liner)
// const myNumbers = [1, 2, 3, 4, 5];
// const newNums = [];

// myNumbers.forEach(num => newNums.push(num + 10));

// console.log(newNums); // [11, 12, 13, 14, 15]




//**************channing */

const myNumbers = [1, 2, 3, 4, 5];
const newNums = myNumbers
.map((num) => num * 10)
.map((num) => num + 1)
.filter((num) => num > 20)
console.log(newNums); 