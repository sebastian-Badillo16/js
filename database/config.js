// const mongoose = require('mongoose');
import mongoose from 'mongoose'


const dbconnection=async()=>{

try{ 
    await mongoose.connect(process.env.mongodb_cnx,{
         useNewUrlParser: true,
         useUnifiedTopology: true,
         useCreateIndex:true,
         useFindAndModify:false

    });  

    console.log('Base de datos online');

}catch(error){

throw new Error('error al iniciar la base de datos');

}

}

export default dbconnection
