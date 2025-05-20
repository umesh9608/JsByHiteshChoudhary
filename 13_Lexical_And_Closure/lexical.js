/*Lexical means retlated to location in you code(written in a fixed structure). so in js , lexical scope means:
Tje scope of a variable is determined by where it is decleared, not where it's used */
function outerFunction() {
  let outerVar = "I am outside!";

  function innerFunction() {
    console.log(outerVar); // ✅ Accessing variable from outer scope
  }

  innerFunction();
}

outerFunction();

/* Real Life Analogy 
Think of lexical scope like rooms in a house:

If you're in a room (inner function), you can see things in the living room (outer function).

But if you're in the living room, you can’t see inside the bedroom (inner function).

*/