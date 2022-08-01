import { combineReducers } from "redux";
import reducerCarrito from "./reducerCarrito";

const reducers = combineReducers({
    app: reducerCarrito
});

export default reducers;