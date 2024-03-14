import React from 'react'

export const ErrorElement = ({errorMessage}) => {
  return (
    <>
        <p className='text-red-400'>{errorMessage}</p>
    </>
  )
}
