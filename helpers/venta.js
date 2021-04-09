import Venta from "../models/venta.js"
const  existeVentaByid=async (id)=>{

    const existe= await Venta.findById(id)

    if (!existe) throw new Error(`El id no existe ${id}`)

}



 export default existeVentaByid