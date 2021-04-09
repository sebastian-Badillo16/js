import Compra from "../models/compra.js"


const  existeCompraByid=async (id)=>{

    const existe= await Compra.findById(id)

    if (!existe) throw new Error(`El id no existe ${id}`)

}
const  existeCompraBynumComprante=async ( num_Comprobante)=>{

    const existe= await Compra.findOne({num_Comprobante})

    if (existe) throw new Error(`ya exsiste una compra con ese numero de compra   `)

}


 export  {existeCompraByid,existeCompraBynumComprante}  