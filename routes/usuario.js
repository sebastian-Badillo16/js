import { Router } from 'express'
import usuarioControllers from '../controllers/usuario.js'

const router = Router();

router.get('/', usuarioControllers.usuarioGet);

router.get('/:id', usuarioControllers.usuarioGetByid);

router.post('/', usuarioControllers.usuarioPost);

router.post('/login', usuarioControllers.login);

router.put('/:id', usuarioControllers.usuarioPut);

router.put('/activar/:id', usuarioControllers.usuarioPutactivar);

router.put('/desactivar/:id', usuarioControllers.usuarioPutdesactivar);

export default router;