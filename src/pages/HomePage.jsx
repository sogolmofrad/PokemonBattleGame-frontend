// HomePage.jsx

import Header from "../components/Header";
import PokemonCard from "../components/PokemonCard";
import { usePokemon } from "../contexts/PokemonContext";

function HomePage() {
  const { pokemons } = usePokemon();
  function handleAddFav() {
    console.log("pokemon has been added");
  }
  return (
    <div>
      <Header />
      <main className="py-[3rem] px-[5rem]">
        <h1 className="text-[1.2rem] font-semibold text-white">All Pokemons</h1>
        <div className="flex flex-wrap gap-[2rem] p-[5rem]">
          {pokemons.map((pokemon) => (
            <PokemonCard
              img={pokemon.sprites.front_default}
              key={pokemon.name}
              name={pokemon.name}
              onClick={handleAddFav}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default HomePage;
