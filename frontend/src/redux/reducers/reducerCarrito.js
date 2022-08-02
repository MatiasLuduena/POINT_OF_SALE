import { ANADIR, ELIMINAR_TODOS, ELIMINAR_UNO, LEER_DATOS } from "../../redux/types";

let estadoInicial = {
    carrito: localStorage.getItem('carrito') ? JSON.parse(localStorage.getItem('carrito')) : [],
    productos: [],
    cargando: true
}

export default function reducerCarrito(state = estadoInicial, action) {
    switch (action.type) {
        case LEER_DATOS: {
            return {...state, productos: action.payload, cargando: false };
        }
        case ANADIR: {
            let nuevoProducto = state.productos.find(
                (item) => item._id === action.payload
            );
            
            // comprobar si ya existe el producto en carrito, y si es así, aumentar la cantidad
            let productoEnCarrito = state.carrito.find(
                (item) => item._id === nuevoProducto._id
            );

            return productoEnCarrito ? {
                ...state,
                carrito: state.carrito.map((item) => (
                    item._id === nuevoProducto._id ? {
                        ...item, cantidad: item.cantidad + 1
                    } : { 
                        item
                    }
                ))
            } : {
                ...state,
                carrito: [...state.carrito, {...nuevoProducto, cantidad: 1}]
            }
        };
        case ELIMINAR_UNO: return {
            ...state, carrito: state.carrito.filter(
                (item) => item._id !== action.payload
            )
        };
        case ELIMINAR_TODOS: return {
            ...state, carrito: []
        };
        default: return state;
    }
}