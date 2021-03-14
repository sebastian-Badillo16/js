import {Router} from 'express';
import categoriasControllers from '../controllers/categoria.js';


const router=Router();

router.get('/',categoriasControllers.categoriaGet);

router.get('/:id',categoriasControllers.categoriaGetByid);

router.post('/',categoriasControllers.categoriaPost);

router.put('/:id',categoriasControllers.categoriaPut);

router.put('/activar/:id',categoriasControllers.categoriaPutactivar);

router.get('/desactivar/:id',categoriasControllers.categoriaPutDesactivar);

router.delete('/:id',categoriasControllers.categoriaPutDelete)

export  default router;