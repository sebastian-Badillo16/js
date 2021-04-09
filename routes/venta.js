import { Router } from "express";
import ventacontrollers from '../controllers/venta.js'
import existeVentaByid from '../helpers/venta.js'
import { check } from 'express-validator'
import { validarJWT } from '../middlewares/validar-jwt.js'
import validarRoles from '../middlewares/validar-rol.js'
import validadorCampos from '../middlewares/validar-campos.js'

const router = Router();

router.get('/', [
    validarJWT,
    validarRoles('VENDEDOR_ROL', 'ADMIN_ROL'),
    validadorCampos
], ventacontrollers.ventaGet);

router.get('/:id', [
    validarJWT,
    validarRoles('VENDEDOR_ROL,ADMIN_ROL'),
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existeVentaByid),
    validadorCampos
], ventacontrollers.ventaGetById);

router.post('/', [
    validarJWT,
    validarRoles('VENDEDOR_ROL,ADMIN_ROL'),
    check('serieComprobante', 'la serie comprobante es obligatorio').not().isEmpty(),
    validadorCampos
], ventacontrollers.ventaPost);

router.put('/:id',[validarRoles('ALMACENISTA_ROL,ADMIN_ROL'),
check('id', 'No es valido').isMongoId(),
check('id').custom(existeVentaByid),
validadorCampos
], ventacontrollers.ventaPut);


router.put('/activar/:id',ventacontrollers.ventaActivar);

router.put('/desactivar/:id', ventacontrollers.ventaDesactivar);

export default router;