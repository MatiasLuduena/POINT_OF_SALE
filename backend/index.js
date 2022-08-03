// Importaciones de módulos
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import dotenv from "dotenv";

// Métodos de los módulos
const app = express();
dotenv.config();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

// Conexión a DB
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Conexión a MongoDB exitosa');
}).catch((err) => {
    console.log(err);
});

// Rutas
import rutaProductos from "./rutas/ProductosRutas.js";
import usuariosRutas from "./rutas/usuariosRutas.js";

app.use('/api/productos', rutaProductos);
app.use('/api/usuarios', usuariosRutas);

// Puerto
const puerto = process.env.PUERTO;

// Iniciar servidor
app.listen(puerto, () => {
    console.log(`Servidor funcionando en http://localhost:${puerto}`);
});