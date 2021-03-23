//import {validationResult} from 'express-validator'
import validador from 'express-validator'
const { validationResult } = validador;

const validadorCampos = (req, res, next) => {
    const errors = validationResult(req)
 
    if (!errors.isEmpty()) {
        return res.status(400).json(errors)
    }

    next();



}
export default validadorCampos