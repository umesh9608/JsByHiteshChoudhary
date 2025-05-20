//  Step 1: Base class - User
class User {
    constructor(userName) {
        this.userName = userName;
    }

    // Method available to all User objects
    logMe() {
        console.log(`Username is ${this.userName}`);
    }
}

//  Step 2: Subclass - Teacher extends User
class Teacher extends User {
    constructor(userName, email, password) {
        super(userName); // Call parent class constructor to set userName
        this.email = email;
        this.password = password;
    }

    // New method specific to Teacher
    addCourse() {
        console.log(`A new course was added by ${this.userName}`);
    }
}

// Step 3: Create object from Teacher class
const chai = new Teacher("chai", "chai@gamil.com", '123');
chai.addCourse(); //  Output: A new course was added by chai

// Step 4: Create object from User class
const masalaChai = new User("masalaChai");
masalaChai.logMe(); //  Output: Username is masalaChai

// Step 5: Check class relationships
// console.log(chai === Teacher); // Not a valid comparison between object and class
console.log(chai instanceof Teacher); // true
