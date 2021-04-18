import Mongoose from "mongoose";

const categoriaShema = Mongoose.Schema({
    nombre: { type: String, required: true, maxlength: 50 }, //correcto
    descripcion: { type: String, maxlength: 250 }, //correcto
    estado: { type:Number, default: 1 },  //1: para activo 0: para inactivo
    createAt: { type:Date, default: Date.now }
});

export default Mongoose.model('Categoria', categoriaShema)

// tablas => son iguales a Collection en mongo
// campos=>property es lo que tiene  las tablas por dentro por ejemplo  direccion o nombre
// registros=> son documentos   