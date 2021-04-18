import Compra from '../models/compra.js'
import aumentarStock from '../controllers/aumentarStock.js'
import disminuirStock from '../controllers/disminuirStock.js'

const CompraControllers = {

  compraGet: async (req, res) => {
    const compra = await Compra.find();
    res.json({
      compra
    })

  }, //correcto

  compraGetByid: async (req, res) => {
    const { id } = req.params;
    const compra = await Compra.findOne({ _id: id })

    res.json({
      compra
    })
  }, //correcto

  compraPost: async (req, res) => {
    const { usuario, persona, tipoComprobante, serie_Comprobante, num_Comprobante, impuesto, total, detalles, } = req.body
    const compra = new Compra({ usuario, persona, tipoComprobante, serie_Comprobante, num_Comprobante, impuesto, total, detalles })

    await compra.save();

    await detalles.map((articulo) => aumentarStock(articulo._id, articulo.cantidad))
    res.json({
      compra
    })
  }, //correcto

  compraPut: async (req, res) => {
    const { id } = req.params
    const { _id, estado, createAt, __v, ...resto } = req.body

    const compra = await Compra.findByIdAndUpdate(id, resto);
    res.json({
      compra
    })
  }, //correcto

  compraPutactivar: async (req, res) => {
    const { id } = req.params
    const compra = await Compra.findByIdAndUpdate(id, { estado: 1 });
    await compra.detalles.map((articulo) => aumentarStock(articulo._id, articulo.cantidad))

    res.json({
      compra
    })

  }, //correcto

  compraPutDesactivar: async (req, res) => {
    const { id } = req.params
    const compra = await Compra.findByIdAndUpdate(id, { estado: 0 });
    await compra.detalles.map((articulo) => disminuirStock(articulo._id, articulo.cantidad))

    res.json({
      compra
    })
  }, //correcto

  compraPutDelete: async (req, res) => {
    const { id } = req.params
    const compra = await Compra.findByIdAndDelete(id,);
    res.json({
      compra
    })

  }, //correcto
}
export default CompraControllers
