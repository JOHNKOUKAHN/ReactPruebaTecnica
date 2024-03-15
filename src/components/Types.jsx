import { Cell } from './index'

export const Types = ({ types }) => {
    return (
        <>

            <p className='font-bold text-center'>Types</p>

            <ul className=" grid grid-cols-1 sm:grid-cols-2 gap-1 align-center justify-items-center">
                {
                    types.map((type) => (
                        <Cell
                            key={type.name}
                            property={type.name}
                            backgroundColorClass={'bg-blue-400'}
                            textColorClass={'text-white'}
                        />
                    ))
                }
            </ul>
        </>
    )
}
