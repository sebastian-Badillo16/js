import Usuario from '../models/usuario.js'
import bcryptjs from 'bcrypt'
import {generarJWT} from '../middlewares/validar-jwt.js'


const usuarioControllers = {

    usuarioGet: async (req, res) => {
        const query = req.query.value
        const usuarios = await Usuario.find({
            $or: [
                { nombre: new RegExp(query, 'i') },
                { email: new RegExp(query, 'i') },
                { rol: new RegExp(query, 'i') }
            ]
        });


        res.json({
            usuarios
        })
    },

    usuarioGetByid: async (req, res) => {
        const { id } = req.params
        const usuario = await Usuario.findById(id)

        res.json({
            usuario
        })
    },

    usuarioPost: async (req, res) => {
        const { nombre, email, password, rol } = req.body;
        const usuario = Usuario({ nombre, email, password, rol });

        const salt = bcryptjs.genSaltSync();

        usuario.password = bcryptjs.hashSync(password, salt);
        usuario.save();

        res.json({
            usuario
        })

    },

    login: async (req, res) => {
        const { email, password } = req.body;

        const usuario = await Usuario.findOne({ email });

        if (!usuario) {
            return res.json({
                mgs: 'Usuario/ password no son correctos email '
            })

        }
        if (usuario.estado === 0) {
            return res.json({
                msg: 'Usuario/ password no son correctos estado'
            })
        }
        const validarPassword = bcryptjs.compareSync(password, usuario.password)
        if (!validarPassword) {
            res.json({
                msg: 'Usuario/ password no son correctos password'
            })

        }

       const token=generarJWT(usuario.id);

        res.json({
          usuario,
          token
        })


    },

    usuarioPut: async (req, res) => {
        const { id } = req.params
        const { __id, createdAt, estado, _v, email, rol, password, ...resto } = req.body
        if (password) {
            const salt = bcryptjs.genSaltSync();
            resto.password = bcryptjs.hashSync(password, salt);
        }
        const usuario = await Usuario.findOneAndUpdate(id, resto)

        res.json({
            usuario
        })

    },

    usuarioPutactivar: async (req, res) => {
        const { id } = req.params
        const usuario = await Usuario.findByIdAndUpdate(id, { estado: 1 })


        res.json({ usuario })

    },

    usuarioPutdesactivar: async (req, res) => {
        const { id } = req.params
        const usuario = await Usuario.findByIdAndUpdate(id, { estado: 0 })


        res.json({ usuario })

    },

}

export default usuarioControllers