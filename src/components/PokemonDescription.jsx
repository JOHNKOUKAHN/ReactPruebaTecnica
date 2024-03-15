import React, { useState } from 'react'
import { BasicInfo } from './BasicInfo'
import { Moves } from './Moves'
import { Types } from './Types'
import { Abilities } from './Abilities'
import { Stats } from './Stats'

export const PokemonDescription = ({ pokemon = null }) => {

  useState

  return (
    <>
    { pokemon &&
    <div>
      
      <BasicInfo name={pokemon.name}  height={pokemon.height} weight={pokemon.weight} />
        <Stats stats={pokemon.stats}/>
        <Moves moves={pokemon.moves}/> 
        <Types types={pokemon.types}/> 
        <Abilities abilities={pokemon.abilities}/> 
    </div>
    }
    </>
  )
}
