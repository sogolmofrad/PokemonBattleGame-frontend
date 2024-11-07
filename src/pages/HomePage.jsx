import Header from "../components/Header";
import PokemonCard from "../components/PokemonCard";
import { usePokemon } from "../contexts/PokemonContext";
import LoginPopup from "../components/LoginPopup";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const { pokemons, isLoginPopupVisible, dispatch } = usePokemon();
  const navigate = useNavigate();

  const handleCardClick = (pokemonId) => {
    navigate(`/pokemon/${pokemonId}`);
  };

  return (
    <div>
      <Header />
      {isLoginPopupVisible && <LoginPopup onClose={handleClosePopup} />}
      <main className="py-[3rem] px-[5rem]">
        <h1 className="text-[1.2rem] font-semibold text-white">All Pokemons</h1>
        <div className="flex flex-wrap gap-[2rem] p-[5rem]">
          {pokemons.map((pokemon) => (
            <PokemonCard
              img={pokemon.sprites.front_default}
              key={pokemon.name}
              name={pokemon.name}
              onClick={() => handleCardClick(pokemon.id)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default HomePage;
