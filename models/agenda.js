const mongoose = require('../database/index')

const Agenda = mongoose.model('Agenda', {
    nome: {
        type: String,
        required: true
    },
    endereco: [{
        cidade: {
            type: String,
            required: true
        },
        rua: {
            type: String,
            required: true
        },
        numero: {
            type: String,
            required: true
        }
    }],
    medico_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Medico',
        required: true
    }
})

module.exports = Agenda