//Group words by fisrst letter using reduce
const words = ["apple", "ant", "banana", "ball", "cat"];

const grouped = words.reduce((acc, word) => {
  const first = word[0];
  acc[first] = acc[first] || [];
  acc[first].push(word);
  return acc;
}, {});

console.log(grouped);
// { a: ['apple', 'ant'], b: ['banana', 'ball'], c: ['cat'] }

//flatten,fliter ans square number(chaining + flatMap)
const nested = [1, [2, 3], [4, [5, 6]]];

const result = nested
  .flat(Infinity)
  .filter((n) => n % 2 === 0)
  .map((n) => n * n);

console.log(result); // [4, 16, 36]



//Remove Duplicate using Set
// const nums = [1, 2, 2, 3, 4, 4, 5];

// const unique = [...new Set(nums)];

// console.log(unique); // [1, 2, 3, 4, 5]



//Destructure ans swap elements
let arr = [10, 20];
[arr[0], arr[1]] = [arr[1], arr[0]];

console.log(arr); // [20, 10]

//find most frequent element
const nums = [1, 2, 2, 3, 3, 3, 4];

const freq = nums.reduce((acc, n) => {
  acc[n] = (acc[n] || 0) + 1;
  return acc;
}, {});

const mostFrequent = Object.entries(freq).sort((a, b) => b[1] - a[1])[0][0];

console.log(mostFrequent); // "3"
