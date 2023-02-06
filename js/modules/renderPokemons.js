
export default function renderPokemons(pokemon) {
    let pokeCards = document.querySelector('.poke-cards');
    let type = pokemon.types[0].type.name; //If they have more than 1 type??
    let element = document.createElement('article');
    element.className ='poke-card';
    console.log(pokemon, 'hej');

    if (type == 'fire') {
        type = '&#x1F525;'; // Change to SVG?
    } else if (type == 'grass') {
        type = '&#127811;';
    } else if (type == 'bug') {
        type = '&#x1F41B;';
    } else if (type == 'water') {
        type = '&#128167;';
    } else if (type == 'normal') {
        type = '&#9737;';
    } else if (type == 'poison') {
        type = '&#128302;';
    } else if (type == 'electric') {
        type = '&#9889;';
    } else if (type == 'ground') {
        type = '&#127792;';
    } else if (type == 'fairy') {
        type = '&#10024;';
    }

    element.innerHTML = `
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.species.name}">
    <p class="poke-card__name">Id: ${pokemon.id}</p>
    <p class="poke-card__name">${pokemon.species.name}</p>
    <p class="poke-card__type">Type: ${type}</p>
    `;
    pokeCards.appendChild(element);
}