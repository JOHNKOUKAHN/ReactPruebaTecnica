import { Cell } from "./index"

export const Abilities = ({ abilities }) => {
    return (
        <>

            <p className='font-bold text-center'>Abilities</p>

            <ul data-testid="pokemonAbilities" className=" grid grid-cols-1 sm:grid-cols-2 gap-1 justify-center justify-items-center">
                {
                    abilities.map((ability) => (
                        <Cell
                            key={ability.name}
                            property={ability.name}
                            backgroundColorClass={'bg-orange-400'}
                            textColorClass={'text-amber-900'}
                        />
                    ))
                }
            </ul>
        </>
    )
}
