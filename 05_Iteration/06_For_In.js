//for in :-The for...in loop is used to loop through the keys (properties) of an object.
// const obj = {   
//     js: "JavaScript",
//     html: "HTML",
//     css: "CSS",
//     react: "React",
//     node: "Node",
// }

// for (const key in obj) {
//    console.log(`${key} : ${obj[key]}`);
// }

//exe: Think of an obj like a school student info:
// let student = {
//   name: "Amit",
//   age: 15,
//   grade: "10th"
// };

// for (let key in student) {
//   console.log(key + " = " + student[key]);
// }


//********Notes:********* */
// Not use for...in loop for arrays. because
// Use for...of or normal for loop for arrays
// for...in on arrays will give you the index, not the value. exe:
let colors = ["red", "green", "blue"];

for (let index in colors) {
  console.log(index);         // 0, 1, 2 (indexes)
  console.log(colors[index]); // red, green, blue
}
