import express from "express";
const rutas = express.Router();

// Imports
import { getProductos, postProductos } from "../controladores/ProductosControlador.js";

// Rutas
rutas.get('/get', getProductos);

rutas.post('/post', postProductos);

export default rutas;