import mongoose from "mongoose";

const ArticuloShema = mongoose.Schema({
    categoria:{type:mongoose.Schema.Types.ObjectId,ref:'categoria',require:true},//no modifica
    codigo:{type : String,maxlength: 64,unique: true }, //no modifica
    nombre: { type : String, required: true, maxlength: 50, unique: true },
    descripcion: { type: String, maxlength: 250 },
    precioventa:{ type: Number, default:0},
    cantidad:{type:Number,default:0},
    stock:{ type: Number, default:0},
    estado: { type:Number, default: 1 },  //1: para activo 0: para inactivo //no modifica
    createAt: { type:Date, default: Date.now }    //no modifica
});

export default mongoose.model('Articulo',ArticuloShema)