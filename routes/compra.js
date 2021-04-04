import {Router} from 'express'
import compraControllers from '../controllers/compra.js'

const router = Router();
router.get('/', compraControllers.compraGet)



router.post('/', compraControllers.compraPost)

router.put('/:id', compraControllers.compraPut)

router.put('/activar/:id', compraControllers.compraPutactivar)

router.put('/desactivar/:id', compraControllers.compraPutDesactivar)

router.delete('/:id', compraControllers.compraPutDelete)


export default router