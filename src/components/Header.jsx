import { Link } from "react-router-dom"

function Header() {
    return (
        <header className="header flex py-[3rem] px-[5rem] justify-between items-center bg-white">
            <div className="logo">
                Pokemon
            </div>
            <nav>
                <ul className="flex gap-[2rem] ">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/favorites">My Favorites</Link>
                    </li>
                    <li>
                        <Link to="/leaderboard">Leaderboard</Link>
                    </li>
                    <li >
                        <Link to="/" className="bg-[#9B44E5] text-white rounded-[6px] py-[5px] px-[10px]">Let&apos;s Fight!</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
