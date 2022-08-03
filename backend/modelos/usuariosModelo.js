import mongoose from "mongoose";

const esquemaUsuarios = new mongoose.Schema(
    {
        nombre: {
            type: String, required: [true, 'Agrega tu nombre']
        },
        email: {
            type: String, required: [true, 'Agrega tu email'], unique: true
        },
        contra: {
            type: String, required: [true, 'Agrega tu contraseña']
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model('Usuarios', esquemaUsuarios);