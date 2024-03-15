import pokeballImage from '../assets/poke.jpg'
import { usePokedex } from '../hooks/usePokedex'

export const PokemonCard = ({ pokemon }) => {

    const { loadingPokemon } = usePokedex()

    return (
        <>
            <div className='w-5/6 h-[300px] flex justify-center justify-items-center items-center'>

            {loadingPokemon
                ?
                <img className='max-w-[70%] animate-pulse' src={pokeballImage} alt="pokemon sprite" />
                :
                <img className={`max-w-[70%]  ${ !pokemon && 'animate-bounce'}`} src={pokemon ? pokemon.img : pokeballImage} alt="pokemon sprite" />
            }
            </div>
        </>
    )
}
