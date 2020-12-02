/*
    Partidos
    ruta: '/api/partidos'
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwt');

const {
    getPartidos,
    crearPartido,
    actualizarPartido
} = require('../controllers/partido')


const router = Router();

router.get( '/', getPartidos );

router.post( '/',
    [
        // validarJWT,
        check('nombre','El nombre del partido es necesario').not().isEmpty(),
        validarCampos
    ],
    crearPartido
);

router.put( '/:id',
    [
        // validarJWT,
        check('nombre','El nombre del partido es necesario').not().isEmpty(),
        validarCampos
    ],
    actualizarPartido
);

// router.delete( '/:id',
//     validarJWT,
//     borrarHospital
// );



module.exports = router;
