import { Link } from "react-router-dom";

import { useAuth } from "../contexts/AuthUserContext";
import LoginPopup from "./LoginPopup";

function Header() {
  const { user, isLoginPopupVisible, dispatch } = useAuth();

  const handleLoginClick = () => {
    dispatch({ type: "toggleLoginPopup" });
  };
  const handleClosePopup = () => {
    dispatch({ type: "toggleLoginPopup" });
  };

  return (
    <header className="header flex py-[3rem] px-[5rem] items-center bg-white">
  <div className="logo mr-auto">Pokemon</div>
  <nav className="absolute left-1/2 transform -translate-x-1/2">
      <ul className="flex gap-[2rem] items-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favorites">My Favorites</Link></li>
        <li><Link to="/leaderboard">Leaderboard</Link></li>
      </ul>
    </nav>
    <div className="ml-auto flex items-center gap-4">
      {user ? (
        <span className="text-gray-800 font-medium mr-4">{user.firstName}</span>
      ) : (
        <button onClick={handleLoginClick} className="text-gray-800 font-medium">
          Log in
        </button>
      )}
      <Link to="/battle" className="bg-[#9B44E5] text-white rounded-[6px] py-[8px] px-[14px]">
        Let&apos;s Fight!
      </Link>
    </div>

    {isLoginPopupVisible && (
      <div className="login-popup">
        <LoginPopup onClose={handleClosePopup} />
      </div>
    )}
  </header>
);
}

export default Header;
