import express from 'express'
import{} from "dotenv/config.js"
import cors from 'cors';



let app=express();

app.use(express.json());
app.use(cors);

// 4 forma:headers
app.get('/', function (req, res) {
const{token}=req.headers;
    res.json({menssage:`sirviendo get`, token });
  });

  // 1 forma:query
app.get('/', function (req, res) {
  const{nombre,edad}=req.query;
  console.log(req.query);
  res.json({menssage:`Hola ${nombre}, tienes ${edad} años` });
});

  // 2 forma:body
app.post('/', function (req, res) {
    console.log(req.body);
    const{apellido}=req.body
  res.json({
      menssage:'Registro añadido correctamente ',
      usuario:req.body
    });

});
app.put('/', function (req, res) {
  res.json({menssage:'sirviendo Put' });
});

app.delete('/', function (req, res) {
  res.json({menssage:'sirviendo Delete' });
});

// 3 forma:params 
// delet 2
app.delete('/:id', function (req, res) {
   console.log(req.params);
   const{id}=req.params;
    res.json({menssage:'sirviendo Delete',
              id });
  });


app.listen(process.env.PORT,()=>{

  console.log(`servidor corriendo en el puerto ${process.env.PORT}`) 

});