// for (let index = 0; index < Array.length; index++){
//     const element = Array[index];
// }

// for (let i = 0; i < 5; i++) {
//   console.log("Hello World");
// }


//**********print even noumber from 1 to 20*********************
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i + " is even");
//   }
// }


//********************loop under a loop is called a nested loop****************
// for (let row = 1; row <= 5; row++) {
//   console.log("📘 Row", row);

//   for (let student = 1; student <= 3; student++) {
//     console.log("  👤 Student", student);
//   }
// }


//**********************loop in an array*************
// let myArray = ["umesh", "sadiq", "ali", "ahmed"];
// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

//************break and continue********** */

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Skipping 5");
    continue; // Skip the rest of the loop for this iteration
  }
  console.log(i);
  if (i === 8) {
    console.log("Breaking at 8");
    break; // Exit the loop when i is 8
  }
}
