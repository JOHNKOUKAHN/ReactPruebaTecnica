import React from 'react'

export const Stat = ({stat}) => {
  return (
    <>
    <li className=' w-full flex justify-start place-content-start'>
        <label htmlFor={stat.name} className='justify-self-end  w-1/4'> {stat.name}: {stat.baseValue} </label>
        <input readOnly className='w-1/2' type="range" name={stat.name} value={stat.baseValue} min={0} max={200}/>

    </li>
    </>
  )
}
