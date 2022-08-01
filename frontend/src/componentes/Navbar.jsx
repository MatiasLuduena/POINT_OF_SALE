import { Link } from "react-router-dom";
import "./nav.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">POINT OF SALE</a>
                <button 
                    className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item ms-2">
                        <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                    </li>
                    <li className="nav-item ms-2">
                        <Link className="nav-link" to="/productos">Productos</Link>
                    </li>
                    <li className="nav-item ms-2">
                        <Link className="nav-link" to="/usuario">Usuario</Link>
                    </li>
                </ul>
                <button className="btn-nav">Cerrar sesión</button>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;