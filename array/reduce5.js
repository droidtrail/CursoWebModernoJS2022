/**
 https://www.youtube.com/watch?v=O_bSjsLga48
 */
const pokemons = [
    {
        name: 'Pikachu',
        type: 'eletric'
    },
    {
        name: 'Squirtle',
        type: 'water'
    },
    {
        name: 'Magikarp',
        type: 'eletric'
    }
]

const pokemonsPorTipo = pokemons.reduce((pokemonsPorTipo, pokemonAtual)=>{
    console.log(pokemonAtual.type)
    return pokemonsPorTipo
},{})

// console.log(pokemonsPorTipo)