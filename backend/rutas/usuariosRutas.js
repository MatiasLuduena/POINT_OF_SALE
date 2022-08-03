import express from "express";
const rutas = express.Router();

// imports
import {
    registrarUsuario, authUsuario, iniciarUsuario
} from "../controladores/UsuariosControlador.js";
import { protector } from "../middlewares/authMiddleware.js";

// rutas
rutas.post('/registrarse', registrarUsuario);

rutas.post('/iniciarsesion', iniciarUsuario);

rutas.get('/auth', protector, authUsuario);

export default rutas;