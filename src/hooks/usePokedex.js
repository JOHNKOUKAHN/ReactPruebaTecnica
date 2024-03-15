import { useDispatch, useSelector } from "react-redux";

import {
    onLoadPokemons,
    onSelectPokemon,
    onUpdateOffset,
    onUpdateLimit,
    onCleanError,
    onDisabeleNextSearch,
    onDisabelePreviousSearch,
    onSafePokemonSearch,
    onSetError,
    onSetLoadingPokemon,
    onSetLoadingPokemonList
} from "../store/slices/pokedexSlice";

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

export const usePokedex = () => {

    const dispatch = useDispatch();

    const { pokemonList, loadingPokemon, loadingPokemonList, selectedPokemon, offset, limit, errorMessage, previous, next } = useSelector(state => state.pokedex);


    const startFetchPokemonList = async () => {

        dispatch(onSetLoadingPokemonList(true))
        dispatch(onCleanError(null))

        try {

            const response = await fetch(`${baseUrl}?offset=${offset}&limit=${limit}`);
            const fetchedPokemons = await response.json();
            const payload = fetchedPokemons.results;

            dispatch(onLoadPokemons(payload));

        } catch (error) {
            dispatch(onSetError('Something went wrong, try again!'));
        }
        finally {

            dispatch(onSetLoadingPokemonList(false))
        }

    }

    const startFetchPokemonByID = async ({ pokemonID }) => {

        dispatch(onSetLoadingPokemon(true))
        dispatch(onCleanError(null))

        try {

            const response = await fetch(`${baseUrl}${pokemonID}`);
            const fetchedPokemon = await response.json();
            const payload = formatPokemon(fetchedPokemon)
            dispatch(onSelectPokemon(payload));


        } catch (error) {
            dispatch(onSetError('Something went wrong, try again!'));

        } finally {

            dispatch(onSetLoadingPokemon(false))
        }


    }

    const getPreviousPage = () => {

        if (!previous) return;
        const updatedOffset = offset - 20
        dispatch(onUpdateOffset(updatedOffset))
        if (updatedOffset - limit < 0) {
            const updatedLimit = limit - updatedOffset
            dispatch(onUpdateLimit(updatedLimit))
            dispatch(onDisabelePreviousSearch())
        } else {
            dispatch(onSafePokemonSearch())
        }
    }
    const getNextPage = () => {

        if (!next) return;
        const updatedOffset = offset + 20
        dispatch(onUpdateOffset(updatedOffset))
        if (updatedOffset + limit > 151) {
            const updatedLimit = 151 - updatedOffset
            dispatch(onUpdateLimit(updatedLimit))
            dispatch(onDisabeleNextSearch())
        } else {
            dispatch(onSafePokemonSearch())
        }
    }

    const formatPokemon = (pokemon) => {

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

    return {

        //properties
        pokemonList,
        selectedPokemon,
        errorMessage,
        offset,
        limit,
        previous,
        next,
        loadingPokemon,
        loadingPokemonList,

        //methods
        startFetchPokemonList,
        startFetchPokemonByID,
        getNextPage,
        getPreviousPage,
    }
}
