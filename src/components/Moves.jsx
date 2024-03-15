import { Cell } from "./index"

export const Moves = ({ moves }) => {
    return (
        <>

            <p className='font-bold text-center'>moves</p>

            <ul className=" grid grid-cols-1 sm:grid-cols-2 gap-1 align-center justify-items-center">
                {
                    moves.slice(0, 4).map((move) => (
                        <Cell key={move.name} property={move.name} />
                    ))
                }
            </ul>
        </>
    )
}
