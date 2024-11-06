import { createContext, useContext, useReducer, useEffect } from "react";

const initialState = { 
  pokemons: [],
  user: null, 
  favorites: [],
  isLoginPopupVisible: false 
};
function reducer(state, action) {
  switch (action.type) {
    case "setPokemons":
      return { ...state, pokemons: action.payload };
    case "setUser":
      return { ...state, user: action.payload }; 
    case "toggleLoginPopup":
      return { ...state, isLoginPopupVisible: !state.isLoginPopupVisible };
   case "addToFavorites": 
      return { 
        ...state, 
        favorites: [...state.favorites, action.payload] 
      };
    default:
      return state;
  }
}

const pokemonContext = createContext();

function PokemonProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    // Define the async function inside useEffect
    const fetchPokemons = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=50"
        );
        const data = await response.json();

        // Step 2: Fetch full details for each Pokémon
        const pokemonPromises = data.results.map(async (pokemon) => {
          const pokemonResponse = await fetch(pokemon.url);
          return await pokemonResponse.json();
        });

        // Step 3: Wait for all promises to resolve and update the state
        const pokemonArray = await Promise.all(pokemonPromises);
        dispatch({ type: "setPokemons", payload: pokemonArray }); // Set state with the full Pokémon array
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
