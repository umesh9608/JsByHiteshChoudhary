//Immedidate Invoked Function Expression

// (function () {
//   console.log("I am an IIFE");
// })();

/* Imagine This:
You go to a shop (like your browser).
You ask a worker:

"Hey, just pack a gift for me and don't leave anything behind."

The worker:

Enters a room (a private space),

Packs the gift,

Cleans everything,

Leaves the room immediately.

He doesn't leave scissors, tape, or ribbon outside. */

//**********************IIFE: A function that runs Instanntly and Cleans Up Code:****************************

// (function () {
//   let gift = "Toy Car";
//   console.log("Packing:", gift);
// })(); // ← This makes it run immediately


//******************* */ Without IIFE:(Bad Way)******************
// let gift = "Toy Car";
// console.log("Packing:", gift);

// // gift is still available here (messy)
// console.log("Anyone can see:", gift);

//*****************Final Fun Code Example****************** */
// (function () {
//   let username = "Guest";
//   console.log("Welcome", username);
// })();  // Output: Welcome Guest

// // console.log(username); ❌ ERROR: username is not defined


(function chai(){
    console.log("chai");
}) ();

((name) => {
    console.log(`Hello ${name}`);
}) ("John");