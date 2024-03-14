import { usePokedex } from "../hooks/usePokedex"

export const PokemonList = ({ pokemons, handleDoubleClick, handleClick }) => {

    const { loadingPokemonList } = usePokedex()

    return (
        <>

            { loadingPokemonList
                ?
                    <p>Loading</p>
                :
                <ul className=' grid grid-cols-2 gap-1'>
                    {pokemons.map((pokemon) => (
                        <li key={pokemon.name} onDoubleClick={() => handleDoubleClick(pokemon.url)} onClick={() => handleClick(pokemon.url)}>{pokemon.name}</li>
                    ))

                    }
                </ul>

            }
        </>
    )
}
