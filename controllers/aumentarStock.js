import Articulo from '../models/articulo.js' 
const aumentarStock = async (_id, cantidad) =>{
    console.log(_id);
    let { stock} = await Articulo.findById(_id);
    stock = parseInt( stock) + parseInt(cantidad);
    await Articulo.findByIdAndUpdate({_id},{ stock});
} 

 export default aumentarStock;