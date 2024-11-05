import { BrowserRouter, Routes , Route} from "react-router-dom";
import Battle from "./pages/Battle";
import Details from "./pages/Details";
import HomePage from "./pages/HomePage";
import Favorites from "./pages/Favorites";


function App() {

  return (
    <BrowserRouter>
    <Routes>

    <Route path="/" element={<HomePage />} />
      <Route path="/battle" element={<Battle/>}/>
      <Route path="/pokemon/:id" element={<Details />} />
      <Route path="/favorites" element={<Favorites />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
