import React, { useEffect } from "react";
import axios from "axios";

// componentes
import Navbar from "../../componentes/Navbar";
import "./home.css";

// redux
import { useSelector, useDispatch } from "react-redux";
import { anadir, eliminarTodos, eliminarUno, leerDatos } from "../../redux/actions/actionCarrito";

const Home = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchProductos() {
            try {
                let fetch = await axios.get('http://localhost:4000/api/productos/get');
                dispatch(leerDatos(fetch.data));
            } catch (error) {
                console.log(error);
            }
        }
        fetchProductos();
    }, []);

  return (
    <div>
        <Navbar />
        <div className="h-contenedor container">
            <div className="h-productos d-flex flex-wrap">
                { state.app.productos.map((item) => (
                    <div key={item._id} className="card">
                        <div className="card-head">
                            <img src={item.imagen} alt={item.nombre} />
                        </div>
                        <div className="card-body">
                            <p>{item.nombre}</p>
                            <p>${item.precio}.00</p>
                        </div>
                        <div className="card-foot">
                            <p>{item.categoria}</p>
                        </div>
                        <button 
                            className="btn btn-success"
                            onClick={() => dispatch(anadir(item._id))}
                        >AÑADIR AL CARRITO</button>
                    </div>
                )) }
            </div>
            <hr />
            <button 
                className="btn btn-warning"
                onClick={() => dispatch(eliminarTodos())}
            >Limpiar carrito</button>
            <div className="carrito d-flex flex-wrap">
                { state.app.carrito.map((item) => (
                    <div key={item._id} className="card">
                        <div className="card-head">
                            <img src={item.imagen} alt={item.nombre} />
                        </div>
                        <div className="card-body">
                            <p>{item.nombre}</p>
                            <p>${item.precio}.00</p>
                        </div>
                        <div className="card-foot_carrito">
                            <p>{item.categoria}</p>
                            <p>Cantidad: {item.cantidad}</p>
                        </div>
                        <button 
                            className="btn btn-danger"
                            onClick={() => dispatch(eliminarUno(item._id))}
                        >ELIMINAR</button>
                    </div>
                )) }
            </div>
        </div>
    </div>
  );
}

export default Home;