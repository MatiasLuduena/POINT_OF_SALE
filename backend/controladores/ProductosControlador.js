import Productos from "../modelos/ProductosModelo.js";

export const getProductos = async (req, res) => {
    try {
        const productos = await Productos.find();
        res.status(200).send(productos);
    } catch(err) {
        console.log(err);
    }
}

export const postProductos = async (req, res) => {
    try {
        const nuevoProducto = new Productos(req.body);
        await nuevoProducto.save();
        res.status(200).send('Producto guardado con éxito');
    } catch (err) {
        console.log(err);
    }
}