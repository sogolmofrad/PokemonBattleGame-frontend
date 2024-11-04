import { useEffect, useState } from "react";
import Header from "../components/Header";
import PokemonCard from "../components/PokemonCard";

function Battle() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    // Define the async function inside useEffect
    const fetchPokemons = async () => {
      try {
        // Step 1: Fetch the list of 25 Pokémon with their URLs
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=25"
        );
        const data = await response.json();

        // Step 2: Fetch full details for each Pokémon
        const pokemonPromises = data.results.map(async (pokemon) => {
          const pokemonResponse = await fetch(pokemon.url);
          return await pokemonResponse.json();
        });

        // Step 3: Wait for all promises to resolve and update the state
        const pokemonArray = await Promise.all(pokemonPromises);
        setPokemons(pokemonArray); // Set state with the full Pokémon array
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <div>
      <Header />
      <div className="flex flex-wrap gap-[2rem] p-[5rem]">
        {pokemons.map((pokemon) => (
          <PokemonCard
            img={pokemon.sprites.front_default}
            key={pokemon.name}
            name={pokemon.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Battle;
