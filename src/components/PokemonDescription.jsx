import { Abilities, BasicInfo, Moves, Stats, Types } from './index'

export const PokemonDescription = ({ pokemon = null }) => {


  return (
    <>
      {pokemon &&
        <div data-testid="pokemonDetails">

          <BasicInfo name={pokemon.name} height={pokemon.height} weight={pokemon.weight} />
          <Stats stats={pokemon.stats} />
          <Moves moves={pokemon.moves} />
          <Types types={pokemon.types} />
          <Abilities abilities={pokemon.abilities} />
        </div>
      }
    </>
  )
}
