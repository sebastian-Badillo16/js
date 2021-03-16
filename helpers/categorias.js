import Categoria from "../models/categoria.js"

const  existeCategoriaByid=async (id)=>{

    const existe= await Categoria.findById(id)

    if (!existe) throw new Error(`El id no existe ${id}`)

}
const  existeCategoriaBynombre=async (nombre)=>{

    const existe= await Categoria.findOne({nombre})

    if (!existe) throw new Error(`ya exixte una categoria con ese nombre  `)

}


 export default {existeCategoriaByid,existeCategoriaBynombre}