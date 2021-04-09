import { Router } from 'express'
import articulosControllers from '../controllers/articulo.js'
import { validarJWT } from '../middlewares/validar-jwt.js'
import validarRoles from '../middlewares/validar-rol.js'
import validadorCampos from '../middlewares/validar-campos.js'
import {existeArticuloByid,existeArticuloBynombre} from '../helpers/articulo.js'
import { check } from 'express-validator'


const router = Router();

router.get('/', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL' , 'ADMIN_ROL'),
    validadorCampos
], articulosControllers.articulosGet)

router.get('/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL,ADMIN_ROL'),
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existeArticuloByid), 
    validadorCampos
], articulosControllers.articulosGet)

router.post('/', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL,ADMIN_ROL'),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('nombre').custom(existeArticuloBynombre),
    validadorCampos

], articulosControllers.articulosPost)

router.put('/:id', [validarJWT,
    validarRoles('ALMACENISTA_ROL,ADMIN_ROL'),
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existeArticuloByid),
    check('nombre').custom(existeArticuloBynombre),
    validadorCampos

], articulosControllers.articulosPut)

router.put('/activar/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL,ADMIN_ROL'),
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existeArticuloByid),
    validadorCampos
], articulosControllers.articulosPutactivar)

router.put('/desactivar/:id', [
    validarRoles('ALMACENISTA_ROL,ADMIN_ROL'),
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existeArticuloByid),
    validadorCampos
], articulosControllers.articulosPutDesactivar)

router.delete('/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL,ADMIN_ROL'),
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existeArticuloByid),
    validadorCampos
], articulosControllers.articulosPutDelete)


export default router