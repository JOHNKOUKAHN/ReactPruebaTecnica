import { Navigate, Route, Routes } from "react-router-dom"
import { Pokedex } from "../pages/Pokedex"
import { PokemonDetails } from "../pages/PokemonDetails"

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokedex/:pokemonID" element={<PokemonDetails />} />
        <Route path="/*" element={<Navigate to={"/pokedex"} />} />
      </Routes>
    </>
  )
}
