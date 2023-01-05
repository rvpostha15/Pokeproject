// basic api url for fetch requests
// let url = 'https://pokeapi.co/api/v2/'
// Boolean for super secret color
let isGradient = false;

// Get a reference to the button
let blueRedToggle = document.querySelector("#blue-red-button");

// Set the initial background color of the button
blueRedToggle.style.backgroundColor = '#cf1920'; //red

// Add an event listener to blueRedToggle
blueRedToggle.addEventListener('dblclick', function() { //secret background color
  isGradient = !isGradient;
  if(isGradient) {
    document.body.style.background = 'linear-gradient(to right, #cf1920, #2a52be, #ffcb05)'; //red, blue, yellow
  }
  else {
    document.body.style.background = '#cf1920';
  }
});

blueRedToggle.addEventListener("click", function() {

  // Toggle the background color and text between red and blue 
  if (document.body.style.backgroundColor === 'rgb(207, 25, 32)') { //red
    document.body.style.backgroundColor = '#2a52be'; //blue
    blueRedToggle.style.backgroundColor = '#cf1920'; //red
    blueRedToggle.textContent = "Pokemon Red"; //text
  } else {
    document.body.style.backgroundColor = '#cf1920'; //red
    blueRedToggle.style.backgroundColor = '#2a52be'; //blue
    blueRedToggle.textContent = "Pokemon Blue"; //text
  }
});

