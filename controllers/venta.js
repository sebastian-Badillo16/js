import Venta from '../models/venta.js';
import aumentarStock from '../controllers/aumentarStock.js';
import disminuirStock from '../controllers/disminuirStock.js';

const ventacontrollers = {
    ventaPost: async (req, res) => {

        const { usuario, persona, tipoComprobante, serieComprobante, numComprobante, impuesto, total, detalles } = req.body;
        const venta = new Venta({ usuario, persona, tipoComprobante, serieComprobante, numComprobante, impuesto, total, detalles })

        await venta.save();

        await detalles.map((articulo) => disminuirStock(articulo._id, articulo.cantidad))

        res.json({
            venta
        })
    }, //correcto

    ventaGet: async (req, res) => {
        const venta = await Venta
            .find()
            .populate('articulo', 'nombre')

        res.json({
            venta
        })
    }, //correcto

    ventaGetById: async (req, res) => {
        const { id } = req.params;

        const venta = await Venta.findOne({ _id: id });

        res.json({
            venta
        })
    }, //correcto 
 
    ventaPut: async (req, res) => {
        const { id } = req.params
        const { _id, estado, createAt, __v, ...resto } = req.body

        const venta = await Venta.findByIdAndUpdate(id, resto);
        res.json({
            venta
        })
    }, //correcto
    ventaActivar: async (req, res) => {
        
        const { id } = req.params
        const venta = await Venta.findByIdAndUpdate(id, { estado: 1 });
        await venta.detalles.map((articulo) => disminuirStock(articulo._id, articulo.cantidad))


        res.json({
            venta
        })
    }, //correcto

    ventaDesactivar: async (req, res) => {
        const { id } = req.params
        const venta = await Venta.findByIdAndUpdate(id, { estado: 0 });
        await venta.detalles.map((articulo) => aumentarStock(articulo._id, articulo.cantidad))

        res.json({
            venta
        })
    }, //correcto

    ventaPutDelete: async (req, res) => {
        const { id } = req.params
        const venta= await Venta.findByIdAndDelete(id,);
        res.json({
          venta
        })
    
      }, //correcto

}

export default ventacontrollers