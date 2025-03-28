import React from 'react'
import Image from 'next/image'
import Card from '../Card/Card'

async function obtenerPokemon(poke) {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}/`)
    let data = res.json()
    return data
}
async function pokemons() {
    let arrayPoke = []
    for(let i = 1; i <= 26; i++){
        let idPokemon = String(i)
        let poke = await obtenerPokemon(idPokemon)
        arrayPoke.push({
            name: poke.name,
            image: poke.sprites.front_default,
            hp: poke.stats.find(stat => stat.stat.name === "hp").base_stat,
            atk: poke.stats.find(stat => stat.stat.name === "attack").base_stat,
            def: poke.stats.find(stat => stat.stat.name === "defense").base_stat,
            atks: poke.stats.find(stat => stat.stat.name === "special-attack").base_stat,
            defs: poke.stats.find(stat => stat.stat.name === "special-defense").base_stat,
            types: poke.types.map(type => type.type.name),
            /* typeImg:`https://play.pokemonshowdown.com/sprites/types/${types}.png` */
        })
    }
    return arrayPoke
}
export default async function PokeContainer() {
let data = await pokemons()
console.log(data)
return (
    <div className='flex flex-wrap gap-10 justify-center mt-10'>
        {data.map((pokemon,index) => (<Card key={index} data={pokemon}/>))}
    </div>
  )
}
