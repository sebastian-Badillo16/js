import express from 'express'
import cors from 'cors';
import dbconnection from '../database/config.js';
import categoria from '../routes/categoria.js'  
import usuario from '../routes/usuario.js'
import articulo  from '../routes/articulo.js'
// import persona from '../routes/persona.js'
import Persona from '../routes/persona.js'
import compra from '../routes/compra.js'

class Server{
    constructor(){
      this.port=process.env.PORT;
      this.app = express();
      this.conectarBD();
      this.middlewares();
      this.routes();
      
    }
routes(){
this.app.use('/api/categoria',categoria)
this.app.use('/api/usuarios',usuario)
this.app.use('/api/articulo',articulo)
this.app.use('/api/persona',Persona)
this.app.use('/api/compra',compra)

}

async conectarBD(){
 
await dbconnection();

}

middlewares(){
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(express.static('public'));
}
listen(){
    this.app.listen(this.port,()=>{
      console.log(`servidor esta corriendo en el puerto ${this.port}`);

    });
  }
}

export default Server

 