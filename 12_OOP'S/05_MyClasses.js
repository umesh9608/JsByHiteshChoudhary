//ES6

// class user{
//     constructor(userName, email,password){
//         this.userName = userName;
//         this.email=email;
//         this.password=password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUserName(){
//         return `${this.userName.toUpperCase()}`
//     }
// }

// const chai = new user("chai", "chai@gmail.com","123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());


//Behind the scene

function user(userName,emai,password){
    this.userName = userName;
    this.emai = emai;
    this.password = password;
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
user.prototype.changeUserName = function(){
    return `${this.userName.toUpperCase()}`
}

const tea = new user("tea", "tea@gmail.com","123456")

console.log(tea.encryptPassword());
console.log(tea.changeUserName());
