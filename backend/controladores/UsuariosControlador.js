import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Usuarios from "../modelos/usuariosModelo.js";

export const registrarUsuario = async (req, res) => {
    try {
        const { nombre, email, contra } = req.body;

        // Datos incorrectos
        if (!nombre || !email || !contra) {
            res.status(400).json({error: 'Datos incorrectos'});
            throw new Error('Datos incorrectos');
        }

        // Usuario existente
        const usuarioExistente = await Usuarios.findOne({email});
        if (usuarioExistente) {
            res.status(400).json({error: 'Usuario existente'});
            throw new Error('Usuario existente');
        }

        // Encriptar contraseña
        const salt = await bcrypt.genSaltSync(10);
        const hashContra = await bcrypt.hash(contra, salt);
        
        // Crear usuario
        const usuario = await Usuarios.create({
            nombre,
            email,
            contra: hashContra
        });

        if (usuario) {
            res.status(201).json({
                _id: usuario._id,
                nombre: usuario.nombre,
                email: usuario.email,
                token: generarToken(usuario._id)
            });
        } else {
            res.status(400).json({error: 'Error al crear el usuario'});
            throw new Error('Error al crear el usuario');
        }
    } catch (error) {
        console.log(error);
    }
}

export const iniciarUsuario = async (req, res) => {
    try {
        const { email, contra } = req.body;

        const usuario = await Usuarios.findOne({email});
        if (usuario && (await bcrypt.compare(contra, usuario.contra))) {
            res.status(201).json({
                _id: usuario._id,
                nombre: usuario.nombre,
                email: usuario.email,
                token: generarToken(usuario._id)
            });
        } else {
            res.status(400).json({error: 'Error al inicar sesión'});
            throw new Error('Error al inicar sesión');
        }
    } catch (error) {
        console.log(error);
    }
}

export const authUsuario = async (req, res) => {
    try {
        const { nombre, email } = await Usuarios.findById(req.usuario.id);

        res.status(200).json({
            nombre,
            email
        });
    } catch (error) {
        console.log(error);
    }
}

// Generar Token
const generarToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '30d'});
}