import { BrowserRouter, Routes , Route} from "react-router-dom";
import Battle from "./pages/Battle";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/battle" element={<Battle/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
