import Compra from '../models/compra.js'

const CompraControllers = {
    compraGet: async (req, res) => {
        const compra = await Compra.find();
        res.json({
            compra
        })

    },
    compraPost: async (req, res) => {
        const { tipoComprante,serieComprante, numComprante, impuesto,total,detalles,
             } = req.body
            const compra =new Compra ({tipoComprante,
                serieComprante, numComprante, impuesto,total,detalles
                // nombre,
                // precioventa,stock
            })

                await compra.save();

                res.json({
                compra
                })
    },

    compraPut:async (req,res)=>{
        const { id } = req.params
        const { _id, estado, createAt, __v, ...resto } = req.body
    
    const compra = await Compra.findByIdAndUpdate (id, resto);
        res.json({
          compra
        })
    },
    compraPutactivar: async (req, res) => {
        const { id } = req.params
        const compra = await Compra.findByIdAndUpdate(id,{estado:1});
    
        res.json({
          compra
        })
    
      },
    compraPutDesactivar: async (req, res) => {
        const { id } = req.params
        const compra = await Compra.findByIdAndUpdate(id,{estado:0});
    
        res.json({
          compra
        })
    },

    compraPutDelete: async (req, res) => {
        const { id } = req.params
        const compra = await Compra.findByIdAndDelete(id,);
        res.json({
          compra
        })
    
      },
}
export default CompraControllers