//const coding = ["js", "html", "css", "react", "node"];

// const values = coding.forEach( (item) =>{
//     console.log(item);
// })

// console.log(values); // undefined (reason: forEach does not return anything) but if you want to return something then use map

// const myNumbers = [1, 2, 3, 4, 5];

// const result = myNumbers.filter((item) => {
//   return item > 2;
// });

// const result = myNumbers.filter((item) => item > 2);

// console.log(result); // Output: [3, 4, 5]

// myNums = [1, 2, 3, 4, 5]
// const newNums = []
// myNums.forEach( (num) => {
//     if(num > 3){
//         newNums.push(num)
//     }
// })

// console.log(newNums) // Output: [4, 5]

//********Learn Filter in js********* */

const books = [
  { title: "Book 1", author: "Author A", year: 2000 },
  { title: "Book 2", author: "Author B", year: 2005 },
  { title: "Book 3", author: "Author A", year: 2010 },
  { title: "Book 4", author: "Author C", year: 2015 },
];

let userBooks = books.filter((bk) => bk.author === "Author A"); //bk is just a parameter name for each item (book) in the books array. 
userBooks = books.filter((bk) => { return bk.year > 2005}); //bk is just a parameter name for each item (book) in the books array.
console.log(userBooks); // Output: [{ title: "Book 1", author: "Author A", year: 2000 }, { title: "Book 3", author: "Author A", year: 2010 }]