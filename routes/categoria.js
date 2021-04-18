 import { Router } from 'express';
import categoriasControllers from '../controllers/categoria.js';
import { check } from 'express-validator'
import validadorCampos from '../middlewares/validar-campos.js'
import {existeCategoriaByid,existeCategoriaBynombre} from '../helpers/categorias.js'
import {validarJWT} from '../middlewares/validar-jwt.js'
import validarRoles from '../middlewares/validar-rol.js'

const router = Router();

router.get('/',[
    validarJWT,
    validarRoles('ALMACENISTA_ROL,ADMIN_ROL'), 
     validadorCampos
], categoriasControllers.categoriaGet); //correcto

router.get('/:id', [
     validarJWT,
    validarRoles('ALMACENISTA_ROL,ADMIN_ROL'), 
     check('id', 'No es valido').isMongoId(),
     check('id').custom(existeCategoriaByid),
     validadorCampos

], categoriasControllers.categoriaGetByid);//correcto

router.post('/', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL,ADMIN_ROL'), 
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('nombre').custom(existeCategoriaBynombre),
    validadorCampos
], categoriasControllers.categoriaPost);//correcto

router.put('/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL,ADMIN_ROL'), 
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existeCategoriaByid),
    check('nombre').custom(existeCategoriaBynombre),
    validadorCampos

], categoriasControllers.categoriaPut);//correcto

router.put('/activar/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL,ADMIN_ROL'), 
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existeCategoriaByid),
    validadorCampos
], categoriasControllers.categoriaPutactivar); //correcto

router.put('/desactivar/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL,ADMIN_ROL'), 
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existeCategoriaByid),
    validadorCampos
], categoriasControllers.categoriaPutDesactivar); //correcto

router.delete('/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL,ADMIN_ROL'), 
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existeCategoriaByid),
    validadorCampos
], categoriasControllers.categoriaPutDelete)  ; //correcto

export default router;