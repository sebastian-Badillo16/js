import {Router} from 'express'
// import { articulosPutactivar, articulosGet, articulosPost, articulosPut, articuloPutDesactivar, articuloPutDelete} from '../controllers/articulo.js'
import articulosControllers from '../controllers/articulo.js'

const router=Router();

router.get('/',articulosControllers.articulosPost)

router.post('/',articulosControllers.articulosPost)

router.put ('/',articulosControllers.articulosPut)

router.put ('/activar/:id',articulosControllers.articulosPutactivar)

router.put ('/activar/:id',articulosControllers.articulosPutDesactivar)

router.put ('/delete/:id',articulosControllers.articulosPutDelete)


export default router