// const tinderUser = new Object() //singlaton obj

const tinderUser = {}; //non singlaton obj

tinderUser.id = "1234c";
tinderUser.name = "sumit";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
  email: "user@gmail.com",
  fullName: {
    userName: {
      userName: "sonu",
      lastName: "kumar",
    },
  },
};

// console.log(regularUser.fullName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 ={obj1,obj2} //this is not good //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// console.log(obj3);

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj3 = Object.assign({},obj1,obj2,obj4)
// console.log(obj3) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const users = [
//   {
//     id: 1,
//     email: "ss@gmail.com",
//   },
//   {
//     id: 2,
//     email: "suman@gmail.com",
//   },
//   {
//     id: 3,
//     email: "sachin@gmail.com",
//   },
//   {
//     id: 4,
//     email: "jon@gmail.com",
//   },
// ];

// users[1].email

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName:"js",
    price:"9999",
    courseInstructor:"hitesh"
}
 //************obj destrucutre************88888 */
// course.courseInstructor

// const {courseInstructor} = course
// console.log(courseInstructor) //hitesh

const {courseInstructor: instructor} = course
console.log(instructor) //hitesh


// const navBar = ({company}) => {

// }
// navBar(company= "hitesh")


//***********************Api******************** */
// {
//     "courseName":"js",
//     "price":"9999",
//     "courseInstructor":"hitesh"
// }

[
    {},
    {},
    {},
]