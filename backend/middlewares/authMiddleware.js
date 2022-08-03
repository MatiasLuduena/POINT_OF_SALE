import jwt from "jsonwebtoken";
import Usuario from "../modelos/usuariosModelo.js";

export const protector = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];

            const tokenPayload = jwt.verify(token, process.env.JWT_SECRET);

            req.usuario = await Usuario.findById(tokenPayload.id).select('-contra');

            next();
        } catch (error) {
            res.status(401).json({error: 'No autorizado'});
            throw new Error('No autorizado', error);
        }
    }

    if (!token) {
        res.status(401).json({error: 'No autorizado, no existe token'});
        throw new Error('No autorizado, no token'); 
    }
}