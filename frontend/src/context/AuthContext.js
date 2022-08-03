import { createContext, useState } from "react";

const AuthContext = createContext();

const sesion = localStorage.getItem('usuario') ? JSON.parse(localStorage.getItem('usuario')) : null;
const inicialToken = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null;

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(sesion);
    const [token, setToken] = useState(inicialToken);

    const data = {auth, setAuth, token, setToken};

    return(
        <AuthContext.Provider value={data}>
            { children }
        </AuthContext.Provider>
    );
}

export { AuthProvider };
export default AuthContext;