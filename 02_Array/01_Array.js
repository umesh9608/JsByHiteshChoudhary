//***********Array****************** */

// const myArr = [0,1,2,6,45,16,7,8];
// console.log(myArr); // [0,1,2,6,45,16,7,8]
// console.log(myArr[4]); //45

// const myArr2 = ["suman","mohan","sohan","rohan"];
// console.log(myArr2)//[ 'suman', 'mohan', 'sohan', 'rohan' ]

//*************Array Method******************** */
// myArr.push(6);
// console.log(myArr);

// myArr.pop()//remove from last not vive value
// console.log(myArr)

// myArr.unshift(9) //this add in starting
// console.log(myArr)

// myArr.shift() //no give parameter
// console.log(myArr)//it remove value from the last

// console.log(myArr.includes(9)) //false

// const newArray = myArr.join()
// console.log(myArr);
// console.log(newArray);
// console.log(typeof newArray); //join me array bind or string me convert ho jata hai

//*******************slice, splice*********************** */
// const myArr = [0,1,2,3,4,5];
// console.log("A", myArr);

// const myn1 = myArr.slice(1,3);

// console.log(myn1);
// console.log("B", myArr);

// const myn2 = myArr.splice(1,3);
// console.log("C", myArr);
// console.log(myn2)


//************************ */
// let arr = [1, 2, 3, 4];
// let sliced = arr.slice(1, 3);  // [2, 3]
// console.log(arr);              // [1, 2, 3, 4] (unchanged)
// console.log(sliced);          //2,3

//************************* */
// let arr1 = [1, 2, 3, 4];
// let spliced1 = arr1.splice(1, 2);  // Removes 2 items starting from index 1 → [2, 3]
// console.log(arr1);                // [1, 4] (original changed)
// console.log(spliced1)            //2,3

const marvel_hero = ["thor", "Ironman", "Spiderman"];
const dc_hero = ["superman", "flash", "batman"];

// marvel_hero.push(dc_hero);
// console.log(marvel_hero) ; //[ 'thor', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]

// const allheros = marvel_hero.concat(dc_hero); //
// console.log(allheros)  //[ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]
//*********************spread op************************* */
// const all_new_heros = [...marvel_hero,...dc_hero];
// console.log(all_new_heros); //[ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]

// const anotherArray = [1,2,3,[4,5,6],7,[6,7,8,[4,5]]];
// const reaalAnotherArray = anotherArray.flat(Infinity)
// console.log(reaalAnotherArray)

// console.log(Array.isArray("hitesh")) //false
// console.log(Array.from("hitesh")) //[ 'h', 'i', 't', 'e', 's', 'h' ]
// console.log(Array.from({name:"hitesh"})) //intersting  ( []  )
