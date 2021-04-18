import Compra from "../models/compra.js"
const existeCompraByid = async (id) => {

    const existe = await Compra.findById(id)

    if (!existe) throw new Error(`El id no existe ${id}`)

}
const existeCompraBynumComprobante = async (num_Comprobante) => {

    const existe = await Compra.findOne({ num_Comprobante })

    if (existe) throw new Error(`ya exsiste una compra con ese numero de compra   `)

}

const existeTipoComprobante = async (tipoComprobante) => {
    if (tipoComprobante != "Factura") {
        if (tipoComprobante != "Nota credito") {
            if (tipoComprobante != "Nota Debito") {
                throw new Error('solo se permitira,Factura,Nota credito,Nota Debito')
            }
        }
    }
}

const existeSerieComprobante = async (serie_Comprobante) => {

    const existe = await Compra.findOne({serie_Comprobante})

    if (existe) throw new Error(`ya exsiste una compra con ese numero de compra`)

}


export { existeCompraByid, existeCompraBynumComprobante, existeTipoComprobante,existeSerieComprobante }