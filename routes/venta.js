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
], ventacontrollers.ventaGet); // si devuelve

router.get('/:id', [
    validarJWT,
    validarRoles('VENDEDOR_ROL,ADMIN_ROL'),
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existeVentaByid),
    validadorCampos
], ventacontrollers.ventaGetById);// si devuelve  by id

router.post('/', [
    validarJWT,
    validarRoles('VENDEDOR_ROL,ADMIN_ROL'),
    check('numComprobante', 'numero comprobante es obligatorio').not().isEmpty(),
    validadorCampos
], ventacontrollers.ventaPost); // si postea

router.put('/:id', [
    validarJWT,
    validarRoles('VENDEDOR_ROL,ADMIN_ROL'),
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existeVentaByid),
    validadorCampos
], ventacontrollers.ventaPut); // si modifica

router.put('/activar/:id', [
    validarJWT,
    validarRoles('VENDEDOR_ROL,ADMIN_ROL'),
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existeVentaByid),
    validadorCampos
], ventacontrollers.ventaActivar); //si activa

router.put('/desactivar/:id', [
    validarJWT,
    validarRoles('VENDEDOR_ROL,ADMIN_ROL'),
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existeVentaByid),
    validadorCampos
], ventacontrollers.ventaDesactivar); // si desactiva

router.delete('/:id', [
    validarJWT,
    validarRoles('VENDEDOR_ROL,ADMIN_ROL'),
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existeVentaByid),
    validadorCampos
],ventacontrollers.ventaPutDelete) //correcto borra


export default router;