import Persona from "../models/persona.js"

const  existePersonaByid=async (id)=>{

    const existe= await Persona.findById(id)

    if (!existe) throw new Error(`El id no existe ${id}`)

}
const  existePersonaBynumeroDocument=async (numeroDocument)=>{
  
    const existe= await Persona.findOne({numeroDocument})
    console.log(existe);
    if (existe) throw new Error(`ya exsiste una persona registrada con el   documento ${numeroDocument} `)

}

 export {existePersonaBynumeroDocument,existePersonaByid}