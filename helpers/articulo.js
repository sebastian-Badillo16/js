import Articulo from "../models/articulo.js"


const  existeArticuloByid=async (_id)=>{

    const existe= await Articulo.findById(_id)

    if (!existe) throw new Error(`El id no existe ${_id}`)

}
const  existeArticuloBynombre=async (nombre)=>{

    const existe= await Articulo.findOne({nombre})

    if (existe) throw new Error(`ya exsiste un articulo con ese nombre  `)

}


 export {existeArticuloByid,existeArticuloBynombre}