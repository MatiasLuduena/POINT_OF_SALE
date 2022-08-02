import { BrowserRouter, Routes, Route } from "react-router-dom";

// pag
import Home from "./pag/home";
import Carrito from "./pag/carrito";
import Usuario from "./pag/usuario";

const App = () => {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/usuario" element={<Usuario />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
