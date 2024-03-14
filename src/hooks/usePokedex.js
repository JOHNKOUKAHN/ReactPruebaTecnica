import { useDispatch, useSelector } from "react-redux";

import { onLoadPokemons,
         onSelectPokemon,
         onUpdateOffset,
         onUpdateLimit,
         onCleanError,
         onDisabeleNextSearch,
         onDisabelePreviousSearch,
         onSafePokemonSearch,
         onSetError } from "../store/slices/pokedexSlice"; 

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

export const usePokedex = () => {

    const dispatch = useDispatch();

    const { pokemonList, selectedPokemon, offset, limit, errorMessage, previous, next } = useSelector( state => state.pokedex);


    const startFetchPokemonList = async () => {
        console.log(offset);
        const response = await fetch(`${baseUrl}?offset=${offset}&limit=${limit}`);
        const fetchedPokemons = await response.json();
        const payload = fetchedPokemons.results;

        dispatch(onLoadPokemons(payload));

    }

    const startFetchPokemon = async ({pokemon}) => {

        const response = await fetch(pokemon.url);
        const fetchedPokemon = await response.json();
        const payload = fetchedPokemon;

        dispatch(onSelectPokemon(payload));

    }

    const getPreviousPage = () => {
        const updatedOffset = offset -20
        dispatch(onUpdateOffset(updatedOffset))
        if (updatedOffset - limit < 0) {
            const updatedLimit = limit - updatedOffset  
          dispatch(onUpdateLimit(updatedLimit))
          dispatch(onDisabelePreviousSearch())
        }else{
            dispatch(onSafePokemonSearch())
        }
    }
    const getNextPage =  () => {
        const updatedOffset = offset +20
        dispatch(onUpdateOffset(updatedOffset))
        if (updatedOffset + limit > 151) {
            const updatedLimit = 151 - updatedOffset 
          dispatch(onUpdateLimit(updatedLimit))
          dispatch(onDisabeleNextSearch())
        }else{
            dispatch(onSafePokemonSearch())
        }
    }
    
    
  return {

    //properties
    pokemonList,
    selectedPokemon,
    offset,
    limit,
    previous,
    next,

    //methods
    startFetchPokemonList,
    startFetchPokemon,
    getNextPage,
    getPreviousPage,
  }
}
