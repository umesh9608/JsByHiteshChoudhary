// Function to generate a random HEX color code
const reandomColor = function () {
  const hex = "0123456789ABCDEF"; // All possible characters for HEX
  let color = "#"; // Start with '#'
  for (let i = 0; i < 6; i++) {
    // Pick 6 random characters
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color; // Return the complete HEX color
};

let intervalId; // Variable to store interval ID (used to stop later)

// Function to start changing background color every second
const startChangingColor = function () {
  // Start only if it's not already running
  if (!intervalId) {
    intervalId = setInterval(changeBackgroundColor, 1000);
  }

  // Function to change the background color using random HEX
  function changeBackgroundColor() {
    document.body.style.backgroundColor = reandomColor();
  }
};

// Function to stop changing background color
const stopChangingColor = function () {
  clearInterval(intervalId); // Clear the interval
  intervalId = null; // Reset interval ID so we can start again
};

// Add event listener to start button
document.querySelector("#start").addEventListener("click", startChangingColor);

// Add event listener to stop button
document.querySelector("#stop").addEventListener("click", stopChangingColor);
