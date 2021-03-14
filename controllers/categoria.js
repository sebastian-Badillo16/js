
import Categoria from "../models/categoria.js";

const categoriasControllers = {
    // get normal
    categoriaGet: async (res, req) => {
        const value = req.query.value;
        const categoria = await Categoria
            .find({
                $or: [
                    { Nombre: new RegExp(value, 'i') },
                    { descripcion: new RegExp(value, 'i') }
                ]
            })
            .sort({ 'Nombre': -1 })
        res.json({
            categoria
        })
    },

    // getByid
    categoriaGetByid: async (res, req) => {
        const { id } = req.params;
        const categoria = await Categoria.findOne({ _id: id })

        res.json({
            categoria
        })
    },

    // post
    categoriaPost: async (req, res) => {
        try {
            const { nombre, descripcion } = req.body;
            const categoria = new Categoria({ nombre, descripcion });

            await categoria.save();
            res.json({
                categoria
            })
        } catch (error) {
            console.log(`Catch ${error}`);
        }

    },
    // put
    categoriaPut: async (req, res) => {
        const { id } = req.params
        const { _id, estado, createAt, __v, ...resto } = req.body

        const categoria = await Categoria.findByidAndupdate(id, resto);

        res.json({
            categoria
        })

    },

    categoriaPutactivar: async (req, res) => {
        const { id } = req.params
        const categoria = await Categoria.findByidAndupdate(id,{estado:1});
        res.json({
            categoria
        })

    },

    categoriaPutDesactivar: async (req, res) => {
        const { id } = req.params
        const categoria = await Categoria.findByidAndupdate(id,{estado:0});
        res.json({
            categoria
        })

    },

    categoriaPutDelete: async (req, res) => {
        const { id } = req.params
        const categoria = await Categoria.findByIdAndDelete(id,);
        res.json({
            categoria
        })

    },
}
export default categoriasControllers
