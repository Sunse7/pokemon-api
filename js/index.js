const base_URL =  'https://pokeapi.co/api/v2/pokemon/';
let pokeCards = document.querySelector('.poke-cards');

function showPokemons() {
    for (let i = 1; i < 10; i++) {
        fetch(`${base_URL}${i}/`)
        .then(pokes => pokes.json())
        .then(pokes => console.log(pokes.species.name))
    }
}

showPokemons();