// 1️⃣ Object Literal - Create a single object manually
const user = {
    userName: "mohan",
    loginCount: 4,
    signedIn: true,

    getUserDetails: function () {
        // Accessing current object using `this`
        console.log(this); 
    }
};

// Accessing user details using the method
console.log(user.getUserDetails()); 

// Logs the global context (in browser, it's the `window` object)
console.log(this);


// 2️⃣ Constructor Function - For creating multiple objects using `new`

// `new` keyword is used to create instances from constructor functions like Promise and Date
const promiseOne = new Promise(() => {});
const date = new Date(); 


// Custom Constructor Function
function User(userName, loginCount, isLoggedIn) {
    this.userName = userName; // create properties using `this`
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function () { // method inside constructor
        console.log(`Welcome ${this.userName}`);
    }

   //return this // No need to explicitly return `this`; it's done by default
}

// Create new objects using `new` keyword
const useOne = new User("hitesh", 3, true);

// If we don’t use `new`, it will override the global object and return `undefined`
const userTwo = new User("Mohan", 12, false);

console.log(useOne);
console.log(userTwo);
