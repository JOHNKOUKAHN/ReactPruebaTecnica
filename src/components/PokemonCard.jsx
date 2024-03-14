import pokeballImage from '../assets/poke.jpg'

export const PokemonCard = ({pokemon}) => {
  return (
    <>
          <img className='w-[70%]' src={pokemon? pokemon.sprites.other.dream_world.front_default : pokeballImage} alt="pokemon sprite" />

    </>
  )
}
