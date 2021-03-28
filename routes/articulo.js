import {Router} from 'express'

import articulosControllers from '../controllers/articulo.js'

const router=Router();

router.get('/',articulosControllers.articulosGet)

router.get('/:id',articulosControllers.articulosGet)

router.post('/',articulosControllers.articulosPost)

router.put ('/:id',articulosControllers.articulosPut)

router.put ('/activar/:id',articulosControllers.articulosPutactivar)

router.put ('/desactivar/:id',articulosControllers.articulosPutDesactivar)

router.put ('/delete/:id',articulosControllers.articulosPutDelete)


export default router