import { Stat } from "./Stat"

export const Stats = ({ stats }) => {
    return (
        <>
            <p className='font-bold text-center'>Base stats</p>
            <ul>

                {
                    stats.map((stat) => (
                        <Stat key={stat.name} stat={stat}/> 
                    ))
                }

            </ul>
        </>
    )
}
