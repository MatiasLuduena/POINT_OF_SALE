import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./nav.css";

import AuthContext from "../context/AuthContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const { carrito } = useSelector(state => state.reducerCarrito);
    const { setAuth } = useContext(AuthContext);

    function cerrarSesion() {
        localStorage.removeItem('usuario');
        localStorage.removeItem('token');
        setAuth(null);
    }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">POINT OF SALE</Link>
            <button 
                className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
                
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-3 me-auto mb-2 mb-lg-0">
                    <li className="nav-item ms-2">
                        <Link className="nav-link active" to="/inicio">Inicio</Link>
                    </li>
                    <li className="nav-item ms-2">
                        <Link className="nav-link" to="/usuario">Usuario</Link>
                    </li>
                </ul>
                <Link className="me-3" to="/carrito">
                    <FontAwesomeIcon icon={faCartShopping} size='lg' />
                    <span className="translate-middle badge rounded-pill bg-danger">
                        { carrito.length }
                    </span>
                </Link>
                <button className="btn-nav" onClick={() => cerrarSesion()}>Cerrar sesión</button>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;