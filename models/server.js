import express from 'express'
import cors from 'cors';
import dbconnection from '../database/config.js';


class Server{
    constructor(){
      this.port=process.env.PORT;
      this.app = express();
      this.conectarBD();
      this.routes();
      this.middlewares();
    }
routes(){


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

