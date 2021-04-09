 import { Router } from 'express';
import categoriasControllers from '../controllers/categoria.js';
import { check } from 'express-validator'
import validadorCampos from '../middlewares/validar-campos.js'
import existeCategoriaByid from '../helpers/categorias.js'
import existeCategoriaBynombre from '../helpers/categorias.js'
import {validarJWT} from '../middlewares/validar-jwt.js'
import validarRoles from '../middlewares/validar-rol.js'

const router = Router();

router.get('/',[
    validarJWT,
    validarRoles('ALMACENISTA_ROL,ADMIN_ROL'), 
     validadorCampos
], categoriasControllers.categoriaGet);

router.get('/:id', [
     validarJWT,
    validarRoles('ALMACENISTA_ROL,ADMIN_ROL'), 
     check('id', 'No es valido').isMongoId(),
     check('id').custom(existeCategoriaByid),
     validadorCampos

], categoriasControllers.categoriaGetByid);

router.post('/', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL,ADMIN_ROL'), 
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('nombre').custom(existeCategoriaBynombre),
    validadorCampos

], categoriasControllers.categoriaPost);

router.put('/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL,ADMIN_ROL'), 
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existeCategoriaByid),
    check('nombre').custom(existeCategoriaBynombre),
    validadorCampos

], categoriasControllers.categoriaPut);

router.put('/activar/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL,ADMIN_ROL'), 
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existeCategoriaByid),
    validadorCampos
], categoriasControllers.categoriaPutactivar);

router.get('/desactivar/:id', [
    validarRoles('ALMACENISTA_ROL,ADMIN_ROL'), 
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existeCategoriaByid),
    validadorCampos
], categoriasControllers.categoriaPutDesactivar);

router.delete('/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL,ADMIN_ROL'), 
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existeCategoriaByid),
    validadorCampos
], categoriasControllers.categoriaPutDelete)

export default router;