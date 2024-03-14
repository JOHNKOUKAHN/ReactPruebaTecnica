
import { useEffect, useRef, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { PokemonCard } from '../components/PokemonCard'
import { usePokedex } from '../hooks/usePokedex'


export const Pokedex = () => {

  const { 
          offset,
          limit,
          selectedPokemon, 
          pokemonList, 
          previous,
          next,

          startFetchPokemonList, 
          startFetchPokemon,
          getNextPage,
          getPreviousPage} = usePokedex()

  const navigate = useNavigate();

  const handleSelection = (pokemon) => {
      
    startFetchPokemon({pokemon})  

  }  

  const handleNavigation = (pokemon) => {
      
    const slicedUrl  = pokemon.url.split('/')
    const pokemonID  = slicedUrl[slicedUrl.length -2]
    navigate(`/pokedex/${pokemonID}`) 

  }  
  useEffect(() => {

    startFetchPokemonList()
    
  }, [])

  useEffect(() => {
    startFetchPokemonList()
    
  }, [offset])
  

  

  return (
    <>
    { pokemonList &&
      <main className='w-full grid grid-cols-2 justify-center items-center p-[3%]'>

      <PokemonCard pokemon={selectedPokemon} />

      <ul className=' grid grid-cols-2 gap-1'>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name} onDoubleClick={() => handleNavigation(pokemon) } onClick={ () => handleSelection(pokemon)}>{pokemon.name}</li>
        ))

        }
      </ul>  

      <button disabled={!previous} onClick={() => getPreviousPage()}>prev</button>
      
      <button disabled={!next} onClick={() => getNextPage()}>next</button>
      </main>
      }
    </>
  )
}

