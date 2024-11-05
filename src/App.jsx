import { BrowserRouter, Routes, Route } from "react-router-dom";

import Details from "./pages/Details";
import HomePage from "./pages/HomePage";
import Favorites from "./pages/Favorites";
import BattlePage from "./pages/BattlePage";
import { PokemonProvider } from "./contexts/PokemonContext";

function App() {
  return (
    <PokemonProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/battle" element={<BattlePage />} />
          <Route path="/pokemon/:id" element={<Details />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </PokemonProvider>
  );
}

export default App;
