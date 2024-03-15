import { Stat } from "./index"

export const Stats = ({ stats }) => {
    return (
        <>
            <p className='font-bold text-center'>Base stats</p>
            <ul data-testid="pokemonStats">

                {stats.map((stat) => (
                        <Stat key={stat.name} stat={stat} />
                    ))
                }

            </ul>
        </>
    )
}
