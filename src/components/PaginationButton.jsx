
export const PaginationButton = ({ disableFlag, text, handleClick }) => {
    return (
        <>
            <button className='rounded-xl bg-green-400 text-grey-600 px-2 min-w-36 disabled:bg-green-100' disabled={!disableFlag} onClick={() => handleClick()}>{text}</button>
        </>
    )
}
