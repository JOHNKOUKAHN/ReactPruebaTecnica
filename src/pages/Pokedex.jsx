
import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import { PokemonCard } from '../components/PokemonCard'
import { usePokedex } from '../hooks/usePokedex'
import { PokemonList } from '../components/PokemonList'
import { ErrorElement } from '../components/ErrorElement'
import { PaginationButton } from '../components/PaginationButton'


export const Pokedex = () => {

  const navigate = useNavigate();

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
    getPreviousPage } = usePokedex()


  const handleSelection = (url) => {
    const pokemonID = getID(url)
    startFetchPokemonByID({ pokemonID })

  }

  const handleNavigation = (url) => {
    const pokemonID = getID(url)
    navigate(`/pokedex/${pokemonID}`)
  }

  const getID = (url) => {
    const slicedUrl = url.split('/')
    const pokemonID = slicedUrl[slicedUrl.length - 2]
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
      {pokemonList &&
        <div className=' p-[5%]'>
          <main className='grid grid-cols-1 sm:grid-cols-2  justify-center items-center p-4'>

            <PokemonCard pokemon={selectedPokemon} />

            <PokemonList pokemons={pokemonList} handleDoubleClick={handleNavigation} handleClick={handleSelection} />

            {errorMessage &&
              <ErrorElement errorMessage={errorMessage} />
            }
          </main>

          <div className='flex flex-row gap-4 justify-center align-items-center'>
            <PaginationButton disableFlag={previous} text={'previous'} handleClick={getPreviousPage} />
            <PaginationButton disableFlag={next} text={'next'} handleClick={getNextPage} />
          </div>

        </div>
      }
    </>
  )
}

