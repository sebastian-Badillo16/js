import Articulo from '../models/articulo.js'

const articulosControllers = {
  articulosGet: async (req, res) => {
    const articulos = await Articulo.find()
    //   .populate('nombre','categoria')
    res.json({
      articulos
    })
  },

  articulosPost: async (req, res) => {
    const { codigo, categoria, nombre, descripcion, precioventa, stock } = req.body
    const articulo = new Articulo({ codigo, categoria, nombre, descripcion, precioventa, stock })

    await articulo.save();
    res.json({
      articulo
    })
  },

  articulosPut: async (req, res) => {
    const { id } = req.params
    const { _id, estado, codigo, categoria, createAt, __v, ...resto } = req.body

    const articulo = await Articulo.findByidAndupdate(id, resto);

    res.json({
      articulo
    })

  },

  articulosPutactivar: async (req, res) => {
    const { id } = req.params
    const articulo = await Articulo.findByidAndupdate(id, { estado: 1 });

    res.json({
      articulo
    })

  },

  articulosPutDesactivar: async (req, res) => {
    const { id } = req.params
    const articulo = await Articulo.findByidAndupdate(id, { estado: 0 });
    res.json({
      categoria
    })

  },

  articulosPutDelete: async (req, res) => {
    const { id } = req.params
    const articulo = await Articulo.findByIdAndDelete(id,);
    res.json({
      articulo
    })

  },
}

export default articulosControllers