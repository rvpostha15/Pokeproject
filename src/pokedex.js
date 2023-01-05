// Get references to the results elements
let pokeName = document.querySelector("#pokemon-name");
let pokeId = document.querySelector("#pokemon-id");
let pokeType = document.querySelector("#pokemon-type");
let secondType = document.querySelector("#second-type");
let pokeSprite = document.querySelector("#pokemon-sprite");
let pokeHeight = document.querySelector("#pokemon-height");
let pokeWeight = document.querySelector("#pokemon-weight");
const playerSprite = document.querySelector("#player");

document.addEventListener("DOMContentLoaded", (e) => {
  updatePokemonDetails("https://pokeapi.co/api/v2/pokemon/1");
})

//initial fetch: default display pikachu
function updatePokemonDetails(url) {
  fetch(url)
  .then(response => response.json())
  .then(pokemon => {
 
    // Set the text content of the results elements to display the Pokémon data
    pokeName.textContent = pokemon.name.toUpperCase();
    pokeId.textContent = "ID: " + pokemon.id;
    if (pokemon.types.length === 2) {
      if (pokemon.types[1].type.name === 'steel'){
        pokeType.src = `./assets/${pokemon.types[0].type.name}.png`;
      }
      
      else if (pokemon.types[1].type.name !== 'steel') {
        pokeType.src = `./assets/${pokemon.types[0].type.name}.png`;
        secondType.src = `./assets/${pokemon.types[1].type.name}.png`
      }
    }

    else if (pokemon.types[0].type.name !== 'fairy' && pokemon.types.length === 1) {
      pokeType.src = `./assets/${pokemon.types[0].type.name}.png`;
      secondType.src = "";
    }

    else {
      pokeType.src = `./assets/${pokemon.past_types[0].types[0].type.name}.png`
      secondType.src = "";
    }

    pokeSprite.src = pokemon.sprites.front_default;
    pokeHeight.textContent = "Height: " + pokemon.height;
    pokeWeight.textContent = "Weight: " + pokemon.weight;
    playerSprite.src = pokeSprite.src;
  });
}

  function fetchKantoPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
     .then(response => response.json())
     .then(function(allpokemon){
     allpokemon.results.forEach(function(pokemon){
       fetchPokemonData(pokemon); 
     })
    })
   }
  
   function fetchPokemonData(pokemon){
    let url = pokemon.url // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
      fetch(url)
      .then(response => response.json())
      .then(function(pokeData){
      renderPokemon(pokeData)
      })
    }
  
    function renderPokemon(pokeData){
      let allPokemonContainer = document.getElementById('poke-container');
      let pokeContainer = document.createElement("div") //div will be used to hold the data/details for indiviual pokemon.{}
      pokeContainer.classList = "poke-card";  
      let pokeImage = document.createElement("img") // img will hold our pokemon's sprite
      pokeImage.src = pokeData.sprites.front_default;
      let pokeName = document.createElement('p')
      pokeName.innerText = pokeData.name.toUpperCase();    
      //ul list will hold the pokemon types
      // createTypes(pokeData.types, pokeTypes) 
      // helper function to go through the types array and create li tags for each one
      pokeContainer.append(pokeName, pokeImage);   
      //appending all details to the pokeContainer div
      allPokemonContainer.appendChild(pokeContainer);       
      //appending that pokeContainer div to the main div which will                                                      hold all the pokemon cards
      pokeContainer.addEventListener("click", (e) => {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokeData.name}/`
        updatePokemonDetails(url);
      })
      }
  
    function createTypes(types, ul){
      types.forEach(function(type){
      let pokeDetails = document.createElement('p');
      pokeDetails.innerText = type['name'];
      ul.append(pokeDetails);
      })
    }
  
    fetchKantoPokemon()