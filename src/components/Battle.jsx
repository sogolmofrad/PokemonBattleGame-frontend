

function Battle({pokemonUser}) {
    return (
        <>
        <h1>Our Battle </h1>
        <div className="bg-white w-[60%] rounded-[10px] flex justify-between items-center p-[5rem] mt-[3rem] mx-auto">
            <div className="w-[15rem] h-[15rem] p-[3rem]">
                <img src={pokemonUser.img} title={pokemonUser.name}/>
                <h3>{pokemonUser.name}</h3>
            </div>
            
            <div className="w-[15rem] h-[15rem] p-[3rem]">
                <img src={pokemonUser.img} title={pokemonUser.name}/>
                <h3>{pokemonUser.name}</h3>
            </div>
        </div>
        </>
    )
}

export default Battle;
