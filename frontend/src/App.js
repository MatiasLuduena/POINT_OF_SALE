import { BrowserRouter, Routes, Route } from "react-router-dom";

// pag
import Home from "./pag/home";
import Productos from "./pag/productos";
import Usuario from "./pag/usuario";

const App = () => {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/usuario" element={<Usuario />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
