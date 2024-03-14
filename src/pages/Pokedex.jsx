
import { useEffect, useRef, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { PokemonCard } from '../components/PokemonCard'
import { usePokedex } from '../hooks/usePokedex'
import { PokemonList } from '../components/PokemonList'
import { ErrorElement } from '../components/ErrorElement'


export const Pokedex = () => {

  const { 
          offset,
          errorMessage,
          selectedPokemon, 
          pokemonList, 
          previous,
          next,

          startFetchPokemonList, 
          startFetchPokemonByID,
          getNextPage,
          getPreviousPage} = usePokedex()

  const navigate = useNavigate();

  const handleSelection = (url) => {
    
    const pokemonID = getID(url)
    startFetchPokemonByID({pokemonID})  
    
  }  
  
  const handleNavigation = (url) => {
    
    const pokemonID = getID(url)
    navigate(`/pokedex/${pokemonID}`) 
    
  }  
  
  const getID = (url) => {
    
    const slicedUrl  = url.split('/')
    const pokemonID  = slicedUrl[slicedUrl.length -2]
    return pokemonID

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


      <PokemonList pokemons={pokemonList} handleDoubleClick={handleNavigation} handleClick={handleSelection}/>

      <button disabled={!previous} onClick={() => getPreviousPage()}>prev</button>
      
      <button disabled={!next} onClick={() => getNextPage()}>next</button>
      
      { errorMessage &&
        <ErrorElement errorMessage={errorMessage}/>
      }
      </main>

      }
    </>
  )
}

