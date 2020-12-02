const { response } = require('express');

const Partido = require('../models/partido');


const getPartidos = async(req, res = response) => {

    const partidos = await Partido.find()

    res.json({
        ok: true,
        partidos
    })
}

const crearPartido = async(req, res = response) => {

    const partido = new Partido({
        ...req.body
    });

    try {

        const partidoDB = await partido.save();


        res.json({
            ok: true,
            partido: partidoDB
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }



}

const actualizarPartido = async (req, res = response) => {

    const id  = req.params.id;
    const uid = req.uid;

    try {

        const partido = await Partido.findById( id );

        if ( !partido ) {
            return res.status(404).json({
                ok: true,
                msg: 'Partido no encontrado por id',
            });
        }

        const cambiosPartido = {
            ...req.body
        }

        const partidoActualizado = await Partido.findByIdAndUpdate( id, cambiosPartido, { new: true } );


        res.json({
            ok: true,
            hospital: partidoActualizado
        })

    } catch (error) {

        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }


}



module.exports = {
    getPartidos,
    crearPartido,
    actualizarPartido
}
