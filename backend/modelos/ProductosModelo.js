import mongoose from "mongoose";

const esquemaProductos = new mongoose.Schema(
    {
        nombre: {type: String, required: true},
        categoria: {type: String, required: true},
        precio: {type: Number, required: true},
        imagen: {type: String, required: true},
        cantidad: {type: Number}
    },
    { timestamps: true }
);

export default mongoose.model('Productos', esquemaProductos);