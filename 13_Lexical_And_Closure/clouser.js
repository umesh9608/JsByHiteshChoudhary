/*a closure is a fucntion that remembers the variables from its lexical (outer) scope, enve after the outer fucntion has finished executing */
function outerFunction() {
  let outerVar = "I am from outer";

  function innerFunction() {
    console.log(outerVar); // ✅ Can access outerVar
  }

  return innerFunction;
}

const closureFunc = outerFunction();
closureFunc(); // Output: I am from outer


/* Imagine a child (inner function) that remembers their parent’s phone number (outer variable) even when they leave the house (function is done executing).
That's closure — the function "remembers" its environment.

*/

//use case:- counter app
function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter1 = createCounter();
counter1(); // 1
counter1(); // 2

const counter2 = createCounter();
counter2(); // 1
