import React, { useEffect, useState } from 'react'
import { PokemonCard } from '../components/PokemonCard'
import { PokemonDescription } from '../components/PokemonDescription'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { usePokedex } from '../hooks/usePokedex'
import { ErrorElement } from '../components/ErrorElement'


export const PokemonDetails = () => {

  const navigate = useNavigate();

  const {selectedPokemon, errorMessage,startFetchPokemonByID} = usePokedex();

  const {pokemonID} =  useParams();


  useEffect(() => {
    
    if (Number(pokemonID) > 151 || Number(pokemonID) < 1 ) {
     navigate('/pokedex');
     return
  }
    startFetchPokemonByID({pokemonID})

  }, [])
  

  return (
    <>
    <div className='grid grid-cols-2 gap-2 justify-center items-center'>
      
      <PokemonCard pokemon={selectedPokemon}/>
      <PokemonDescription pokemon={selectedPokemon}/>
      <Link to={'/pokedex'}>Back To Pokedex</Link>
      <ErrorElement errorMessage={errorMessage}/>
    </div>

    </>
  )
}
