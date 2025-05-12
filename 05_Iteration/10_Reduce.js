/* .reduce() is used to reduce an array to a single value — like a total, sum, product, or even a single object.*/
// const myNums = [1, 2, 3, 4, 5];

// const myTotal = myNums.reduce(function (accumulator, currentValue) {
//     console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
//   return accumulator + currentValue;
// }, 0); // 0 is the initial value of the accumulator
// console.log(myTotal); // Output: 15

//now i want to write same code using arrow function
// const myTotal = myNums.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // 0 is the initial value of the accumulator
// console.log(myTotal); // Output: 15

//*****************exe:-1 Shopping Cart Total
// const cart = [100, 200, 300];

// const total = cart.reduce((acc, price) => acc + price, 0);

// console.log(total); // 600

//***************Counting Votes */
// const votes = ['A', 'B', 'A', 'C', 'A', 'B'];

// const result = votes.reduce((acc, curr) => {
//   acc[curr] = (acc[curr] || 0) + 1;
//   return acc;
// }, {});

// console.log(result); // { A: 3, B: 2, C: 1 }

const shoppingCart = [
  { itemName: "js course", price: 299 },
  {
    itemName: "css course",
    price: 199,
  },
  {
    itemName: "html course",
    price: 99,
  },
  {
    itemName: "react course",
    price: 399,
  },
];

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price, 0)
console.log(priceToPay); // Output: 299 + 199 + 99 + 399 = 996