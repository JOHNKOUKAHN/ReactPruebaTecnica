
export const PaginationButton = ({ disableFlag, text, handleClick }) => {
    return (
        <>
            <button className='rounded-xl bg-green-200 text-grey-600 px-2 min-w-36' disabled={!disableFlag} onClick={() => handleClick()}>{text}</button>
        </>
    )
}
