// Get references to the results elements
let pokeName = document.querySelector("#pokemon-name");
let pokeId = document.querySelector("#pokemon-id");
let pokeType = document.querySelector("#pokemon-type");
let pokeSprite = document.querySelector("#pokemon-sprite");
let pokeHeight = document.querySelector("#pokemon-height");
let pokeWeight = document.querySelector("#pokemon-weight");
const playerSprite = document.querySelector("#player");

//initial fetch: default display pikachu
fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(response => response.json())
  .then(pokemon => {
 
    // Set the text content of the results elements to display the Pokémon data
    pokeName.textContent = pokemon.name.toUpperCase();
    pokeId.textContent = "ID: " + pokemon.id;
    pokeType.src = `./assets/${pokemon.types[0].type.name}.png`;
    pokeSprite.src = pokemon.sprites.front_default;
    pokeHeight.textContent = "Height: " + pokemon.height;
    pokeWeight.textContent = "Weight: " + pokemon.weight;
    playerSprite.src = pokeSprite.src;
  });

  // document.addEventListener('DOMContentLoaded', () => {
  //   initialFetch();
  //   toggle();
  // })