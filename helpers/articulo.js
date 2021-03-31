import Articulo from "../models/articulo.js"


const  existeArticuloByid=async (id)=>{

    const existe= await Articulo.findById(id)

    if (!existe) throw new Error(`El id no existe ${id}`)

}
const  existeArticuloBynombre=async (nombre)=>{

    const existe= await Articulo.findOne({nombre})

    if (!existe) throw new Error(`ya exsiste un articulo con ese nombre  `)

}


 export default {existeArticuloByid,existeArticuloBynombre}