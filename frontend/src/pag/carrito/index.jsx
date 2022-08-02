import React, { useEffect } from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
import { eliminarTodos, eliminarUno } from "../../redux/actions/actionCarrito";

// componentes
import Navbar from "../../componentes/Navbar";
import Loader from "../../componentes/Loader";

const Carrito = () => {
  const { carrito } = useSelector(state => state.reducerCarrito);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  return (
    <div>
      <Navbar />
      { !carrito.length ? (
        <div className="d-flex justify-content-center mt-5">
          <h4>Carrito vacío</h4>
        </div>
      ) :
      <div className="container">
        <button 
          className="btn btn-warning"
          onClick={() => dispatch(eliminarTodos())}
        >Limpiar carrito</button>
        <div className="carrito d-flex flex-wrap">
          { carrito.map((item) => (
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
      }
    </div>
  );
}

export default Carrito;