// basic api url for fetch requests
// let url = 'https://pokeapi.co/api/v2/'

// Get a reference to the button
let blueRedToggle = document.querySelector("#blue-red-button");

// Set the initial background color of the button
blueRedToggle.style.backgroundColor = '#cf1920'; //red

// Add an event listener to blueRedToggle
blueRedToggle.addEventListener('dblclick', function() { //secret background color
  document.body.style.background = 'linear-gradient(to right, #cf1920, #2a52be, #ffcb05)'; //red, blue, yellow
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

// function fetchKantoPokemon(){
//   fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
//   .then(response => response.json())
//   .then(allpokemon => console.log(allpokemon))
// }
  