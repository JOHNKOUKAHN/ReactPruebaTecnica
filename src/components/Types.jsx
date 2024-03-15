import React from 'react'
import { Cell } from './Cell'

export const Types = ({ types }) => {
    return (
        <>

            <p className='font-bold text-center'>Types</p>

            <ul className=" grid grid-cols-2 gap-1 align-center justify-items-center">
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
