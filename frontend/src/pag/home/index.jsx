import React, { useEffect, lazy, Suspense } from "react";
import axios from "axios";

// componentes
import Navbar from "../../componentes/Navbar";
import "./home.css";
import Loader from "../../componentes/Loader";

// redux
import { useSelector, useDispatch } from "react-redux";
import { anadir, leerDatos } from "../../redux/actions/actionCarrito";

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
        localStorage.setItem('carrito', JSON.stringify(state.reducerCarrito.carrito));
    }, [state.reducerCarrito.carrito]);

  return (
    <div>
        <Navbar />
        <div className="h-contenedor container">
            
            { state.reducerCarrito.cargando ? (<Loader />) : 
                <div className="h-productos d-flex flex-wrap">
                    { state.reducerCarrito.productos.map((item) => (
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
            }
        </div>
    </div>
  );
}

export default Home;