import { Router } from 'express'
import compraControllers from '../controllers/compra.js'
import { validarJWT } from '../middlewares/validar-jwt.js'
import validadorCampos from '../middlewares/validar-campos.js'
import { check } from 'express-validator'
import validarRoles from '../middlewares/validar-rol.js'
import {existeCompraByid,existeCompraBynumComprante} from '../helpers/compra.js'

const router = Router();
router.get('/', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL,ADMIN_ROL'),
    validadorCampos
], compraControllers.compraGet)

router.get('/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL,ADMIN_ROL'),
    validadorCampos
], compraControllers.compraGetByid)


router.post('/',[
    validarJWT,
    validarRoles('ALMACENISTA_ROL,ADMIN_ROL' ),
    // check(' num_Comprobante',' numero, es obligatorio').not().isEmpty(),
    check(' num_Comprobante').custom(existeCompraBynumComprante),
    validadorCampos
], compraControllers.compraPost)


router.put('/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL,ADMIN_ROL'),
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existeCompraByid),
    check('nombre').custom(existeCompraBynumComprante),
    validadorCampos

], compraControllers.compraPut)

router.put('/activar/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL,ADMIN_ROL'),
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existeCompraByid),
    validadorCampos
], compraControllers.compraPutactivar)

router.put('/desactivar/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL,ADMIN_ROL'),
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existeCompraByid),
    validadorCampos
], compraControllers.compraPutDesactivar)

router.delete('/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL,ADMIN_ROL'),
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existeCompraByid),
    validadorCampos
], compraControllers.compraPutDelete)


export default router