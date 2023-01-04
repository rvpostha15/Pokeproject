// basic api url for fetch requests
// let url = 'https://pokeapi.co/api/v2/'

// Get a reference to the button
let blueRedToggle = document.querySelector("#blue-red-button");


// Get references to the results elements
let pokeName = document.querySelector("#pokemon-name");
let pokeId = document.querySelector("#pokemon-id");
let pokeType = document.querySelector("#pokemon-type");
let pokeSprite = document.querySelector("#pokemon-sprite");
let pokeHeight = document.querySelector("#pokemon-height");
let pokeWeight = document.querySelector("#pokemon-weight");

// Set the initial background color of the button
blueRedToggle.style.backgroundColor = '#cf1920'; //red

// Add an event listener to blueRedToggle
blueRedToggle.addEventListener('click', function(event) { //secret background color
    if(event.ctrlKey) {
  document.body.style.background = 'linear-gradient(to right, #cf1920, #2a52be, #ffcb05)'; //red, blue, yellow
    }
});
blueRedToggle.addEventListener("click", function() {

  // Toggle the background color and text between red and blue 
  if (document.body.style.backgroundColor === 'rgb(207, 25, 32)') { //red
    document.body.style.backgroundColor = '#2a52be'; //blue
    blueRedToggle.style.backgroundColor = '#cf1920'; //red
    blueRedToggle.textContent = "Pokémon Red"; //text
  } else {
    document.body.style.backgroundColor = '#cf1920'; //red
    blueRedToggle.style.backgroundColor = '#2a52be'; //blue
    blueRedToggle.textContent = "Pokémon Blue"; //text
  }
});

//initial fetch: default display pikachu
fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(response => response.json())
  .then(pokemon => {
 
    // Set the text content of the results elements to display the Pokémon data
    pokeName.textContent = pokemon.name.toUpperCase();
    pokeId.textContent = "ID: " + pokemon.id;
    pokeType.textContent = pokemon.types[0].type.name;
    pokeSprite.src = pokemon.sprites.front_default;
    pokeHeight.textContent = "Height: " + pokemon.height;
    pokeWeight.textContent = "Weight: " + pokemon.weight;
  });

  // document.addEventListener('DOMContentLoaded', () => {
  //   initialFetch();
  //   toggle();
  // })

