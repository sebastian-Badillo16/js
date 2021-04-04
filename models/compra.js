import mongoose from 'mongoose' 

const comprasShema = mongoose.Schema({
    usuario:{type:mongoose.Schema.Types.ObjectId,ref:'usuario',require:true},//no modifica
    persona:{type:mongoose.Schema.Types.ObjectId,ref:'persona',require:true},//no modifica
    tipoComprante:{type : String,maxlength: 20,unique: true }, //no modifica
    serieComprante:{type : String,maxlength: 7,unique: true }, //no modifica
    numComprante:{type : Number,maxlength: 10,unique: true }, //no modifica
    impuesto:{type : Number,maxlength: 10,unique: true },
    total:{type : Number,maxlength: 10,unique: true},

    detalles:{nombre: { type : String, required: true, maxlength: 50, unique: true },
    precioventa:{ type: Number, default:0},
    stock:{ type: Number, default:0},
  },
    // nombre: { type : String, required: true, maxlength: 50, unique: true },
    // descripcion: { type: String, maxlength: 250 },
    // precioventa:{ type: Number, default:0},
    // stock:{ type: Number, default:0},
    estado: { type:Number, default: 1 },  //1: para activo 0: para inactivo //no modifica
    createAt: { type:Date, default: Date.now }    //no modifica
});

export default mongoose.model('Compra',comprasShema)