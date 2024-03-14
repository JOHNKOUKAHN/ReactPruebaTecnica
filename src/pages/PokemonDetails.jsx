import React, { useEffect, useState } from 'react'
import { PokemonCard } from '../components/PokemonCard'
import { PokemonDescription } from '../components/PokemonDescription'
import pokemonSample from '../mocks/selectedPokemon.json'
import { Link, useParams } from 'react-router-dom'

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

export const PokemonDetails = () => {

  const [selectedPokemon, setSelectedPokemon] = useState()
  const {pokemonID} =  useParams()

  const fetchPokemon = async () => {

    const url = baseUrl+String(pokemonID)

    const response = await fetch(url)
    const pok = await response.json()

    setSelectedPokemon(pok)

  }


  useEffect(() => {
  
    fetchPokemon()

  }, [])
  

  return (
    <>
    <div className='grid grid-cols-2 gap-2 justify-center items-center'>
      
      <PokemonCard pokemon={selectedPokemon}/>
      <PokemonDescription pokemon={selectedPokemon}/>
      <Link to={'/pokedex'}>Regresar</Link>
    </div>

    </>
  )
}
