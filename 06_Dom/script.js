// 1. Selecting Elements
const title = document.getElementById('main-title');
const input = document.querySelector('#username');
const button = document.getElementById('btn');
const link = document.querySelector('a');
const boxes = document.querySelectorAll('.box');

// 2. Changing Text
title.textContent = "Learning DOM in JS";

// 3. Changing HTML
title.innerHTML = "<span>DOM <b>Mastery</b></span>";

// 4. Changing Styles
title.style.color = 'blue';
title.style.backgroundColor = 'lightyellow';

// 5. Input Value
console.log("Input value is:", input.value);

// 6. Set Attributes
link.setAttribute('href', 'https://www.google.com');
link.setAttribute('target', '_blank');

// 7. Add / Remove / Toggle class
title.classList.add('active');

// 8. Create and Append Elements
const newDiv = document.createElement('div');
newDiv.textContent = "I am a new div!";
document.body.appendChild(newDiv);

// 9. Remove Element
// newDiv.remove(); // Uncomment to test

// 10. Event Listener
button.addEventListener('click', () => {
  alert('Button clicked!');
  title.classList.toggle('active');
});

// 11. Loop through elements
boxes.forEach((box, index) => {
  box.style.border = '1px solid red';
  box.addEventListener('click', () => {
    box.style.backgroundColor = 'yellow';
    box.textContent = `Clicked ${index + 1}`;
  });
});


