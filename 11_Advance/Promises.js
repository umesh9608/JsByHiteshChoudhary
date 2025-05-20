// PROMISE 1: Basic Promise Creation and Consumption
const promiseOne = new Promise(function (resolve, reject) {
  // Simulating an async task like DB call or cryptography
  setTimeout(function () {
    console.log("Async task is complete");
    resolve(); // signals that the task is done
  }, 100);
});

// Consuming promiseOne using .then()
promiseOne.then(function () {
  console.log("Promise consumed");
});


// PROMISE 2: Creating and consuming inline promise
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve(); // resolves after 1 second
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});


// PROMISE 3: Returning data using resolve
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ userName: "Chai", email: "chai@gmail.com" }); // passing an object
  }, 1000);
});

// Consuming the returned user data
promiseThree.then(function (user) {
  console.log(user);
});


// PROMISE 4: Using .then(), .catch(), and .finally()
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false; // change to true to simulate error
    if (!error) {
      resolve({ userName: "hitesh", password: "123" });
    } else {
      reject("Error something went wrong");
    }
  }, 1000);
});

// Chaining .then(), handling errors, and using finally
promiseFour
  .then((user) => {
    console.log(user);
    return user.userName; // returning userName to next .then()
  })
  .then((userName) => {
    console.log(userName);
  })
  .catch(function (error) {
    console.log(error); // catches any error
  })
  .finally(() => console.log("The promise is either resolved or rejected")); // always runs


// PROMISE 5: Using async/await with try-catch block
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true; // change to false to resolve
    if (!error) {
      resolve({ userName: "mahek", password: "@mahek" });
    } else {
      reject("Error: JS went wrong");
    }
  }, 1000);
});

// Consuming promiseFive using async/await
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error); // catches any error
  }
}

consumePromiseFive();


// PROMISE 6: Fetching users from external API using async/await
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json(); // parsing JSON response
    console.log(data);
  } catch (error) {
    console.log("E: ", error);
  }
}

getAllUsers();


// SAME FETCH EXAMPLE USING .then() AND .catch()
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json(); // parsing JSON
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
