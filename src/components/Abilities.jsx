import { Cell } from "./Cell"

export const Abilities = ({abilities}) => {
    return (
        <>

            <p className='font-bold text-center'>Abilities</p>

            <ul className=" grid grid-cols-2 gap-1 justify-center justify-items-center">
                {
                    abilities.map((ability) => (
                        <Cell
                            key={ability.name}
                            property={ability.name}
                            backgroundColorClass={'bg-orange-400'}
                            textColorClass={'text-brown-600'}
                        />
                    ))
                }
            </ul>
        </>
    )
}
