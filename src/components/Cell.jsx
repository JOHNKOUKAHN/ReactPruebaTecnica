
export const Cell = ({ property, backgroundColorClass, textColorClass }) => {
    return (
        <>

            <li className=" w-[70%] rounded-lg">
                <p className={`
                    ${backgroundColorClass ? backgroundColorClass : 'bg-gray-200'}
                    ${textColorClass ? textColorClass : 'text-black'}
                    text-center  rounded w-full`}  >

                    {property}

                </p>
            </li>
        </>
    )
}
