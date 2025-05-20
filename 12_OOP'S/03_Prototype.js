// 🧠 Step 1: Create string variables
let myName = "hitesh";
let myChannel = "chai";

// 🔍 Trying to access a custom property on a string (will be undefined)
console.log(myName.trueLength); // undefined (method not yet defined)


// 🧠 Step 2: Create an array and object
let myHeros = ["thor", "spidermen"];

let heroPower = {
    thor: "hammer",
    spidermen: "sling",

    getSpiderPower: function () {
        // ⚠️ Incorrect syntax: &{this.spiderman} should be ${this.spidermen}
        console.log(`Spider power is &{this.spiderman}`);
    }
};


// 🧠 Step 3: Add method to Object prototype (available to all objects)
Object.prototype.hitesh = function () {
    console.log(`hitesh is present in all objects`);
};

// 🧠 Step 4: Add method to Array prototype (only available to arrays)
Array.prototype.heyhitesh = function () {
    console.log(`Hitesh says hello`);
};

// ✅ Using the prototype methods
myHeros.hitesh();     // ✅ works (Array inherits from Object)
myHeros.heyhitesh();  // ✅ works (Array-specific)
                      // heroPower.heyhitesh(); ❌ would fail (Object can't access array methods)


// 🧠 Step 5: Prototypal Inheritance Example

const User = {
    name: "suman",
    email: "su@gamil.com"
};

const Teacher = {
    makeVideo: true
};

const TeacherSupport = {
    isAvailable: false
};

const TASupport = {
    makeAssignment: "js assignment",
    fullTime: true,
    __proto__: TeacherSupport // ✅ old-style inheritance
};

// ✅ Assign User as prototype of Teacher (old way)
Teacher.__proto__ = User;


// 🧠 Step 6: Modern way of setting prototype
Object.setPrototypeOf(TeacherSupport, Teacher);


// 🧠 Step 7: Add custom method to String prototype
String.prototype.trueLength = function () {
    console.log(`${this}`);                        // original string
    console.log(`True length is: ${this.trim().length}`); // trimmed length
};

// ✅ Using the custom method
let anotherusername = "ChaiOrCode";
anotherusername.trueLength();  // works

"hitesh".trueLength();         // works
"iceTea".trueLength();         // works
