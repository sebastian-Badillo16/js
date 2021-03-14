import mongoose from 'mongoose'

const usuarioShema=mongoose.Schema({
nombre :{type:String,required:true,maxlength:40},
email:{type:String,unique:true,maxlength:40},
password:{type:String,unique:true},
rol:{type:String,required:true,maxlength:20},
estado:{type:Number,default:1},
createdAt:{type:Date,default:Date.now}
})
 export default mongoose.model('Usuario',usuarioShema) 