import { BrowserRouter, Routes , Route} from "react-router-dom";
import BattlePage from "./pages/BattlePage";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/battle" element={<BattlePage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
