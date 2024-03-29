import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loadingPokemon: false,
  loadingPokemonList: false,
  selectedPokemon: null,
  pokemonList: [],
  previous: false,
  next: true,
  offset: 0,
  limit: 20,
  errorMessage: null
}

export const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState,
  reducers: {
    onSetLoadingPokemon: (state, { payload }) => {
      state.loadingPokemon = payload;
    },
    onSetLoadingPokemonList: (state, { payload }) => {
      state.loadingPokemonList = payload;
    },
    onLoadPokemons: (state, { payload }) => {
      state.pokemonList = payload;
    },
    onSelectPokemon: (state, { payload }) => {
      state.selectedPokemon = payload;
    },
    onUpdateOffset: (state, { payload }) => {
      state.offset = payload;
    },
    onUpdateLimit: (state, { payload }) => {
      state.limit = payload;
    },
    onDisabeleNextSearch: (state,) => {
      state.next = false;
    },
    onDisabelePreviousSearch: (state,) => {
      state.previous = false;
    },
    onSafePokemonSearch: (state,) => {
      state.next = true;
      state.previous = true;
      state.limit = 20;
    },
    onSetError: (state, { payload }) => {
      state.errorMessage = payload;
    },
    onCleanError: (state,) => {
      state.errorMessage = null;
    },
  },
})

export const {
  onLoadPokemons,
  onSelectPokemon,
  onUpdateLimit,
  onUpdateOffset,
  onSetLoadingPokemon,
  onSetLoadingPokemonList,
  onDisabeleNextSearch,
  onDisabelePreviousSearch,
  onSafePokemonSearch,
  onCleanError,
  onSetError } = pokedexSlice.actions
