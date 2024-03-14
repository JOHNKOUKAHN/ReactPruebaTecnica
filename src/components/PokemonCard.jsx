import pokeballImage from '../assets/poke.jpg'
import { usePokedex } from '../hooks/usePokedex'

export const PokemonCard = ({ pokemon }) => {

    const { loadingPokemon } = usePokedex()

    return (
        <>
            {loadingPokemon
                ?
                <img className='w-[70%] animate-pulse' src={pokeballImage} alt="pokemon sprite" />
                :
                <img className={`w-[70%] ${ !pokemon && 'animate-bounce'}`} src={pokemon ? pokemon.sprites.other.dream_world.front_default : pokeballImage} alt="pokemon sprite" />
            }
        </>
    )
}
