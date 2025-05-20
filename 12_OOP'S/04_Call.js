/*We want to create a user using a function called CreateUser.
But we also want to reuse another function SetUsername to set the username separately (maybe because it has some complex logic like database calls).

 */
// Step 1: Function to set username
function SetUsername(username) {
    // This could be a complex logic (e.g., from database)
    this.username = username;

    // Just to show this function is called
    console.log("called");
}

//  Step 2: Function to create a user with username, email, and password
function CreateUser(username, email, password) {
    //  We are reusing SetUsername to set the username
    //  .call(this) means "use the same object that CreateUser is working on"
    SetUsername.call(this, username); // Call SetUsername with 'this' object

    // Now add more properties to the same object
    this.email = email;
    this.password = password;
}

//  Step 3: Create a new user using CreateUser function
const chai = new CreateUser("chai", "chai@gmail.com", "123");

//  Step 4: Show the final user object
console.log(chai);
