import { Router } from 'express'
import personaControllers from '../controllers/persona.js'
import validadorCampos from '../middlewares/validar-campos.js'
import { check } from 'express-validator'
import {existePersonaBynumeroDocument,existePersonaByid} from '../helpers/persona.js'
import { validarJWT } from '../middlewares/validar-jwt.js'
import validarRoles from '../middlewares/validar-rol.js'

const router = Router();

router.get('/', [
    validarJWT,
    validarRoles('ADMIN_ROL'),
    validadorCampos
], personaControllers.personaGet)

router.get('/:id', [
    validarJWT,
    validarRoles('ADMIN_ROL'),
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existePersonaByid),
    validadorCampos
],personaControllers.personaGetByid)

router.post('/', [
    validarJWT,
    validarRoles('ADMIN_ROL'),
    check('numeroDocument', 'numero de documento es obligatorio').not().isEmpty(),
    check('direccion', 'dieccion es obligatorio').not().isEmpty(),
    check('nombre', 'nombre es obligatorio').not().isEmpty(),
    check('tipoDocument', ' tipo de documento es obligatorio').not().isEmpty(),
    check('telefono','telefono es obligatorio').not().isEmpty(),
    check('email','email es obligatorio').not().isEmpty(),
    check('numeroDocument').custom(existePersonaBynumeroDocument),
    validadorCampos
], personaControllers.personaPost)

router.put('/:id',[
    validarJWT,
    validarRoles('ADMIN_ROL'),
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existePersonaByid),
    validadorCampos
 
], personaControllers.personaPut)

//  error en el rol 
router.put('/activar/:id',[
    validarJWT,
    validarRoles('ADMIN_ROL'),
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existePersonaByid),
    validadorCampos
], personaControllers.personaPutactivar)
//  error en el rol 
router.put('/desactivar/:id',[
    validarJWT,
    validarRoles('ADMIN_ROL'),
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existePersonaByid),
    validadorCampos
], personaControllers.personaPutDesactivar)
 
//  error en el rol 
router.delete('/:id',[ 
    validarJWT,
    validarRoles('ADMIN_ROL'),
    check('id', 'No es valido').isMongoId(),
    check('id').custom(existePersonaByid),
    validadorCampos
], personaControllers.personaPutDelete)


export default router