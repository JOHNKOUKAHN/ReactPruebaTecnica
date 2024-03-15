
export const BasicInfo = ({ name, weight, height }) => {
    return (
        <>
            <p className="text-center">{name}</p>
            <div data-testid="pokemonBasicInfo" className=" w-full grid grid-cols-2 gap-2 justify-center items-center ">
                <p className="text-center">weight: {weight}</p>
                <p className="text-center">height: {height}</p>
            </div>
        </>
    )
}
