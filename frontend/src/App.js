import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";

// pag
import Home from "./pag/home";
import Carrito from "./pag/carrito";
import Usuario from "./pag/usuario";
import Register from "./pag/auth/Register";
import Login from "./pag/auth/Login";

// context
import AuthContext from "./context/AuthContext";

const App = () => {
  const { auth, setAuth, token } = useContext(AuthContext);

  useEffect(() => {
    async function comprobarAuth() {
      try {
        const res = await axios.get('http://localhost:4000/api/usuarios/auth', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (res) {
          localStorage.setItem('usuario', JSON.stringify(res.data));
          localStorage.setItem('token', JSON.stringify(token));
          setAuth(res.data);
        }
      } catch (error) {
        localStorage.removeItem('usuario');
        localStorage.removeItem('token');
        setAuth(null);
      }
    }
    comprobarAuth();
  }, [token, auth]);

  return (
      <div className="App">
        <BrowserRouter>
          {
            !auth ? (
              <Routes>
                <Route exact path="/*" element={<Navigate to="/iniciarsesion" />} />
                <Route path="/registrarme" element={<Register />} />
                <Route path="/iniciarsesion" element={<Login />} />
                <Route path="/*" element={<Navigate to="/iniciarsesion" />} />
              </Routes>
            ) : (
              <Routes>
                <Route path="/inicio" element={<Home />} />
                <Route path="/carrito" element={<Carrito />} />
                <Route path="/usuario" element={<Usuario />} />
                <Route path="/*" element={<Navigate to="/inicio" />} />
              </Routes>
            )
          }
        </BrowserRouter>
      </div>
  );
}

export default App;
