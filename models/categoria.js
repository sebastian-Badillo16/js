import Mongoose from "Mongoose";

const categoriaShema=Mongoose.Schema({
 Nombre: {type:String,required:true,maxLength:50,unique:true},
descripcion: {type:String,maxLength:250},
estado: {type:Number,default:1},  //1: para activo 0: para inactivo
createAt: {type:Date,default:Date.now}
});

export default Mongoose.model('Categoria',categoriaShema)

// tablas => son iguales a Collection en mongo
// campos=>property es lo que tiene  las tablas por dentro por ejemplo  direccion o nombre
// registros=> son documentos   