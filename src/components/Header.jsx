import { Link } from "react-router-dom";
import { usePokemon } from "../contexts/PokemonContext";

function Header() {
  const { user, dispatch } = usePokemon();

  const handleLoginClick = () => {
    dispatch({ type: "toggleLoginPopup" });
  };

  return (
    <header className="header flex py-[3rem] px-[5rem] justify-between items-center bg-white">
      <div className="logo">Pokemon</div>
      <nav className="flex-1 flex justify-center"> 
        <ul className="flex gap-[2rem] items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites</Link>
          </li>
          <li>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
        </ul>
      </nav>
      <div>
        {user ? (
          <div className="text-center">
            <span className="text-gray-800 font-medium mr-4">
              {user.firstName}
            </span>
            {/* <span className="text-gray-600 font-medium">, {user.country}</span> */}
          </div>
        ) : (
          <button
            onClick={handleLoginClick}
            className="text-gray-800 font-medium mr-4"
          >
            Log in
          </button>
        )}
      </div>
      <div>
        <Link
          to="/battle"
          className="bg-[#9B44E5] text-white rounded-[6px] py-[8px] px-[14px]"
        >
          Let&apos;s Fight!
        </Link>
      </div>
    </header>
  );
}

export default Header;
