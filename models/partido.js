const { Schema, model } = require('mongoose');

const PartidoSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    votos: {
        type: Number
    },
    img: {
        type: String,
    }
});


PartidoSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})



module.exports = model( 'Partido', PartidoSchema );
