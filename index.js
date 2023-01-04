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
    let pokeName = document.createElement('h4')
    pokeName.innerText = pokeData.name
    let pokeNumber = document.createElement('p')
    pokeNumber.innerText = `#${pokeData.id}`
    let pokeTypes = document.createElement('ul') 
    //ul list will hold the pokemon types
    createTypes(pokeData.types, pokeTypes) 
    // helper function to go through the types array and create li tags for each one
    pokeContainer.append(pokeName, pokeNumber, pokeTypes);   
    //appending all details to the pokeContainer div
    allPokemonContainer.appendChild(pokeContainer);       
    //appending that pokeContainer div to the main div which will                                                             hold all the pokemon cards
    }

  function createTypes(types, ul){
    types.forEach(function(type){
    let typeLi = document.createElement('li');
    typeLi.innerText = type['type']['name'];
    ul.append(typeLi)
    })
  }

  fetchKantoPokemon()
  