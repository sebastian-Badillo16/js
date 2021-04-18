import mongoose from 'mongoose'

const usuarioShema=mongoose.Schema({
nombre :{type:String,required:true,maxlength:40}, //correcto
email:{type:String,unique:true,maxlength:40}, //correcto
password:{type:String,unique:true},//correcto
rol:{type:String,required:true,maxlength:20},//correcto
estado:{type:Number,default:1},//correcto
createdAt:{type:Date,default:Date.now}//correcto
})
 export default mongoose.model('Usuario',usuarioShema) 