function Battle({ pokemonUser, pokemonSystem }) {
  return (
    <>
      <h1>Our Battle</h1>
      <div className="bg-white w-[60%] rounded-[10px] mt-[3rem] mx-auto p-[5rem] flex flex-col justify-center items-center gap-[2rem]">
        <div className="w-full flex justify-around items-center">
          <div className="w-[15rem] h-[15rem] p-[3rem] flex flex-col items-center border-2">
            <h3>{pokemonUser.name || "Your Pokémon"}</h3>
            <span className="font-thin mb-[1rem]">(You)</span>
            {pokemonUser.img && (
              <img src={pokemonUser.img} alt={pokemonUser.name} />
            )}
          </div>
          <div className="flex flex-col justify-center items-center gap-[1rem]">
            <div className="w-[0.5px] h-[7rem] bg-black"></div>
            <img src="/images/icons8-bolt-64.png" alt="bolt icon" />
            <div className="w-[0.5px] h-[7rem] bg-black"></div>
          </div>
          <div className="w-[15rem] h-[15rem] p-[3rem] flex flex-col items-center border-2">
            <h3>{pokemonSystem?.name || "System Pokémon"}</h3>
            <span className="font-thin mb-[1rem]">(System)</span>
            {pokemonSystem?.sprites?.front_default && (
              <img
                src={pokemonSystem.sprites.front_default}
                alt={pokemonSystem.name}
              />
            )}
          </div>
        </div>
        <button className="fightBtn bg-black text-white text-[1.2rem] py-[1rem] px-[2rem] rounded-md w-[16rem]">
          Fight!
        </button>
      </div>
    </>
  );
}

export default Battle;
