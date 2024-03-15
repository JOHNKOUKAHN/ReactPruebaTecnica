import React, { useEffect, useState } from 'react'
import { PokemonCard } from '../components/PokemonCard'
import { PokemonDescription } from '../components/PokemonDescription'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { usePokedex } from '../hooks/usePokedex'
import { ErrorElement } from '../components/ErrorElement'


export const PokemonDetails = () => {

  const navigate = useNavigate();

  const { selectedPokemon, errorMessage, startFetchPokemonByID } = usePokedex();

  const { pokemonID } = useParams();


  useEffect(() => {

    if (Number(pokemonID) > 151 || Number(pokemonID) < 1) {
      navigate('/pokedex');
      return
    }
    startFetchPokemonByID({ pokemonID })

  }, [])


  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2  justify-center items-center p-4'>

        <PokemonCard pokemon={selectedPokemon} />
        <PokemonDescription pokemon={selectedPokemon} />
        <ErrorElement errorMessage={errorMessage} />
      </div>

      <div className=' flex flex-row justify-center align-items-center'>
        <Link className=' bg-amber-900 text-gray-200 p-2 rounded-xl' to={'/pokedex'}>Back To Pokedex</Link>
      </div>

    </>
  )
}
