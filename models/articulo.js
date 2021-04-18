import mongoose from "mongoose";

const ArticuloShema = mongoose.Schema({
    categoria:{type:mongoose.Schema.Types.ObjectId,ref:'Categoria',require:true},//no modifica //correcto
    codigo:{type : String,maxlength: 64,unique: true }, //no modifica //correcto
    nombre: { type : String, required: true, maxlength: 50, unique:true }, //correcto
    descripcion: { type: String, maxlength: 250 }, //correcto
    precioventa:{ type: Number, default:0},//correcto
    cantidad:{type:Number,default:0},//correcto
    stock:{ type: Number, default:0},//corecto
    estado: { type:Number, default: 1 },  //1: para activo 0: para inactivo //no modifica  //correcto
    createAt: { type:Date, default: Date.now }    //no modifica //correcto
});

export default mongoose.model('Articulo',ArticuloShema) 