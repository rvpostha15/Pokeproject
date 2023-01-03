// basic api url for fetch requests
// let url = 'https://pokeapi.co/api/v2/'

// Get a reference to the button
let blueRedToggle = document.querySelector("#blue-red-button");

// Set the initial background color of the button
blueRedToggle.style.backgroundColor = '#cf1920'; //red

// Add an event listener to blueRedToggle
blueRedToggle.addEventListener("click", function() {
  // Toggle the background color between red and blue
  if (document.body.style.backgroundColor === 'rgb(207, 25, 32)') { //red
    document.body.style.backgroundColor = '#2a52be'; //blue
    blueRedToggle.style.backgroundColor = '#cf1920'; //red
    blueRedToggle.textContent = "Pokémon Red";
  } else {
    document.body.style.backgroundColor = '#cf1920'; //red
    blueRedToggle.style.backgroundColor = '#2a52be'; //blue
    blueRedToggle.textContent = "Pokémon Blue";
  }
});

fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(response => response.json())
  .then(pokemon => {
    // Get references to the results elements
    let name = document.querySelector("#pokemon-name");
    let id = document.querySelector("#pokemon-id");
    let type = document.querySelector("#pokemon-type");
    let sprite = document.querySelector("#pokemon-sprite");

    // Set the text content of the elements to display the Pokémon data
    name.textContent = pokemon.name;
    id.textContent = "ID: " + pokemon.id;
    type.textContent = "Type: " + pokemon.types[0].type.name;
    sprite.src = pokemon.sprites.front_default;
  });
