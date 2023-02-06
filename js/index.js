import renderPokemons from './modules/renderPokemons.js'

const base_URL =  'https://pokeapi.co/api/v2/pokemon/';

function getPokemons() {
    for (let i = 1; i < 40; i++) {
        fetch(`${base_URL}${i}/`)
        .then(pokes => pokes.json())
        .then(pokes => renderPokemons(pokes))
    }
}

getPokemons();
