const mongoose = require('../database/index')

const Medico = mongoose.model('Medico', {
    nome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    sexo: {
        type: String,
        enum: ['m', 'f'],
        required: true
    },
    especialidade: {
        type: String,
        required: true
    }
})

module.exports = Medico