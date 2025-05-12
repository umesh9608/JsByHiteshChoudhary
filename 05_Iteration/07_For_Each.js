const coding = ["js", "html", "css", "react", "node"];
// coding.forEach((item, index) => {
//   console.log(`${index} : ${item}`);
// });

//or

// coding.forEach(function(item){
//     console.log(item);
// })

//or
// coding.forEach( (item) =>{
//     console.log(item);
// })

//or

// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe);

//or  print item , index, arry
// coding.forEach( (item , index, arr) => {
//     console.log(item , index, arr);
// })

const myCoding = [
  {
    languageName: "javascript",
    year: 1995,
  },
  {
    languageName: "html",
    year: 1993,
  },
  {
    languageName: "css",
    year: 1996,
  },
];

myCoding.forEach((item, index) => {
    console.log(item.languageName)
    // console.log(`${index} : ${item.languageName} : ${item.year}`);
    }
);
