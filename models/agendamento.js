const mongoose = require('../database/index')

const Agendamento = mongoose.model('Agendamento', {
    data_hora: {
        type: Date,
        required: true
    },
    paciente_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Paciente',
        required: true
    },
    agenda_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Agenda',
        required: true
    }
})

module.exports = Agendamento