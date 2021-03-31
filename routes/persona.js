import { Router } from 'express'

import personaControllers from '../controllers/persona.js'

const router = Router();

router.get('/', personaControllers.personaGet)

router.get('/:id', personaControllers.personaGetByid)

router.post('/', personaControllers.personaPost)

router.put('/:id', personaControllers.personaPut)

router.put('/activar/:id', personaControllers.personaPutactivar)

router.put('/desactivar/:id', personaControllers.personaPutDesactivar)

router.delete('/:id', personaControllers.personaPutDelete)


export default router