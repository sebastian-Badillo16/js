import Articulo from '../models/articulo.js'

const articulosControllers = {
  articulosGet: async (req, res) => {
    const articulos = await Articulo.find()
      // .populate('nombre','categoria')
    res.json({
      articulos
    })
  },//correcto

  articuloGetByid: async (req, res) => {
        const { id } = req.params;
        const articulo = await Articulo.findOne({ _id: id })

        res.json({ 
            articulo 
        })
    }, // mal,responde con  todos los articulos 

  articulosPost: async (req, res) => {
    const { cantidad, codigo, nombre, descripcion, precioventa, stock } = req.body
    const articulo = new Articulo({ cantidad, codigo, nombre, descripcion, precioventa, stock })

    await articulo.save();
    res.json({
      articulo
    })
  }, //correcto

  articulosPut: async (req, res) => {
    const { id } = req.params
    const { _id, estado, createAt, __v, ...resto } = req.body

    
const articulo = await Articulo.findByIdAndUpdate (id, resto);
    res.json({
      articulo
    })

  }, //correcto

  articulosPutactivar: async (req, res) => {
    const { id } = req.params
    const articulo = await Articulo.findByIdAndUpdate(id,{estado:1});

    res.json({
      articulo
    })

  }, //correcto

  articulosPutDesactivar: async (req, res) => {
    const { id } = req.params
    const articulo = await Articulo.findByIdAndUpdate(id,{ estado: 0 });
    res.json({
     articulo
    })

  }, //correcto

  articulosPutDelete: async (req, res) => {
    const { id } = req.params
    const articulo = await Articulo.findByIdAndDelete(id,);
    res.json({
      articulo
    })

  }, //correcto
} 

export default articulosControllers