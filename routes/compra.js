import { Router } from 'express'
import compraControllers from '../controllers/compra.js'
import { validarJWT } from '../middlewares/validar-jwt.js'
import validadorCampos from '../middlewares/validar-campos.js'
import { check } from 'express-validator'
import validarRoles from '../middlewares/validar-rol.js'
import {existeCompraByid,existeCompraBynumComprobante,existeTipoComprobante,existeSerieComprobante} from '../helpers/compra.js'

const router = Router();
router.get('/', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL,ADMIN_ROL'),
    validadorCampos
], compraControllers.compraGet) //correcto

router.get('/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL,ADMIN_ROL'),
    validadorCampos 
], compraControllers.compraGetByid) //correcto


router.post('/',[ 
    validarJWT,
    validarRoles('VENDEDOR_ROL,ADMIN_ROL' ),
    check(' num_Comprobante').custom(existeCompraBynumComprobante),
    check(' serie_Comprobante').custom(existeSerieComprobante),
    check('tipoComprobante').custom(existeTipoComprobante),
    validadorCampos
], compraControllers.compraPost)//correcto


router.put('/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL,ADMIN_ROL'),
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existeCompraByid),
    check('num_Comprobante').custom(existeCompraBynumComprobante),
    validadorCampos

], compraControllers.compraPut)//correcto

router.put('/activar/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL,ADMIN_ROL'),
    check('id', 'No es valido').isMongoId(),  
    check('id').custom(existeCompraByid),
    validadorCampos 
], compraControllers.compraPutactivar) //correcto 

router.put('/desactivar/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL,ADMIN_ROL'),
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existeCompraByid),
    validadorCampos
], compraControllers.compraPutDesactivar) //correcto

router.delete('/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL,ADMIN_ROL'),
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existeCompraByid),
    validadorCampos
], compraControllers.compraPutDelete) //correcto


export default router