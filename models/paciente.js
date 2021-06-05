const mongoose = require('../database/index')

const Paciente = mongoose.model('Paciente', {
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        select: false,
        required: true
    },
    sexo: {
        type: String,
        enum: ['m', 'f'],
        required: true
    }
})

module.exports = Paciente