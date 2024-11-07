import { createContext, useContext, useReducer, useEffect } from "react";

const initialState = {
  pokemons: [],
  favorites: [],
};
function reducer(state, action) {
  switch (action.type) {
    case "setPokemons":
      return { ...state, pokemons: action.payload };

    case "addToFavorites":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
}

const pokemonContext = createContext();

function PokemonProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  //fetch the pokemon
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=50"
        );
        const data = await response.json();

        const pokemonPromises = data.results.map(async (pokemon) => {
          const pokemonResponse = await fetch(pokemon.url);
          return await pokemonResponse.json();
        });

        const pokemonArray = await Promise.all(pokemonPromises);
        dispatch({ type: "setPokemons", payload: pokemonArray });
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    };

    fetchPokemons();
  }, []);
  return (
    <pokemonContext.Provider value={{ ...state, dispatch }}>
      {children}
    </pokemonContext.Provider>
  );
}
function usePokemon() {
  const context = useContext(pokemonContext);
  if (context === undefined)
    throw new Error("value was used outside of the context");
  return context;
}
export { PokemonProvider, usePokemon };
