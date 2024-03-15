import { usePokedex } from "../hooks/usePokedex"

export const PokemonList = ({ pokemons, handleDoubleClick, handleClick }) => {

    const { loadingPokemonList } = usePokedex()

    return (
        <>
            <div data-testid="pokemonList" className="w-full min-h-[400px]">

                {loadingPokemonList
                    ?
                    <p data-testid="loadingPokemonList" >Loading</p>
                    :
                    <ul data-testid="loadedPokemonList" className=' grid grid-cols-2 gap-2 '>
                        {pokemons.map((pokemon) => (
                            <li
                                className="bg-gray-600 rounded-lg  text-center cursor-pointer"
                                key={pokemon.name}
                                onDoubleClick={() => handleDoubleClick(pokemon.url)}
                                onClick={() => handleClick(pokemon.url)}>
                                <button className=" text-white text-center p-1">
                                    {pokemon.name}
                                </button>
                            </li>
                        ))

                        }
                    </ul>

                }
            </div>
        </>
    )
}
