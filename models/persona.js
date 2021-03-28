import mongoose from 'mongoose'

const personaShema = mongoose.Schema({
    tipoPersona: { type: String,  maxlength: 20 }, //cliente - prpvedor
    nombre: { type: String, maxlength: 40 },
    tipoDocument: { type: String, required:true, maxlength: 25 }, // cc-- ti
    numeroDocument: { type: String, required:true },
    direccion: { type: String,  },
    telefono: { type: String, required:true },
    email: { type: String, unique:true, maxlength: 40 },
    estado: { type: Number, default: 1 },
    createdAt: { type: Date, default: Date.now }
})
export default mongoose.model('Persona', personaShema)