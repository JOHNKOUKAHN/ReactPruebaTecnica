
export const formatPokemon = (pokemon) => {

    const stats = pokemon.stats.map(stat => {
        return {
            name: stat.stat.name,
            baseValue: stat.base_stat
        }
    })

    const types = pokemon.types.map(type => { return { name: type.type.name } })
    const moves = pokemon.moves.map(move => { return { name: move.move.name } })
    const abilities = pokemon.abilities.map(ability => { return { name: ability.ability.name } })

    return {
        name: pokemon.name,
        img: pokemon.sprites.other.dream_world.front_default,
        height: pokemon.height,
        weight: pokemon.weight,
        stats,
        moves,
        types,
        abilities,
    }
}

