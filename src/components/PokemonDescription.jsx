import React, { useState } from 'react'

export const PokemonDescription = ({ pokemon = null }) => {

  useState

  return (
    <>
    { pokemon &&
    <div>
      <p>height: {pokemon?.height}</p>
      <p>weight: {pokemon?.weight}</p>
      <p>type:   {pokemon?.types[0].type.name}</p>
      
      <p className='font-bold'>base stats</p>
      {
        pokemon.stats.map((stat) => (
          <p key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</p>
        ))
      }
    </div>
    }
    </>
  )
}
