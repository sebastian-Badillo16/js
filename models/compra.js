import mongoose from 'mongoose' 

const comprasShema = mongoose.Schema({
    usuario:{type:mongoose.Schema.Types.ObjectId,ref:'usuario',required:true},//no modifica
    persona:{type:mongoose.Schema.Types.ObjectId,ref:'persona',required:true},//no modifica
    tipoComprobante:{type: String,maxlength: 20 }, //no modifica
    serie_Comprobante:{type: String,maxlength: 7,unique: true }, //no modifica
    num_Comprobante:{type: String ,maxlength: 10,unique: true }, //no modifica
    impuesto:{type : Number,maxlength: 10 },
    total:{type : Number,maxlength: 10},
    detalles:[{ 
      _id:{type:mongoose.Schema.Types.ObjectId, ref:`Articulo`,required:true},
    articulo: { type : String,  maxlength: 50 },
    cantidad:{ type: Number, default:0},
    precioventa:{ type: Number, default:0},
    
  }],
    estado: { type:Number, default: 1 },  //1: para activo 0: para inactivo //no modifica
    createAt: { type:Date, default: Date.now }    //no modifica
});

export default mongoose.model('Compra',comprasShema)