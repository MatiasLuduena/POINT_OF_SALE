import { ANADIR, ELIMINAR_TODOS, ELIMINAR_UNO, LEER_DATOS } from "../../redux/types";

export const anadir = (id) => {
    return { type: ANADIR, payload: id };
};

export const eliminarUno = (id) => {
    return { type: ELIMINAR_UNO, payload: id };
};

export const eliminarTodos = () => {
    return { type: ELIMINAR_TODOS };
};

export const leerDatos = (data) => {
    return { type: LEER_DATOS, payload: data };
}