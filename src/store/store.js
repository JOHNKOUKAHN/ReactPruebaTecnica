import { configureStore } from '@reduxjs/toolkit'
import { pokedexSlice } from './slices/pokedexSlice'

export const store = configureStore({
  reducer: {
    pokedex: pokedexSlice.reducer,
  },
})