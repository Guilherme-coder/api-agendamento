const Agendamento = require('../../models/agendamento')

module.exports = app => {
    app.get('/api/agendamentos', async (req, res) => {
        try{
            const agendamento = await Agendamento.find()
            res.send(JSON.stringify(agendamento))
        }catch(err){
            res.status(400).send(JSON.stringify({
                message: err.message
            }))
        }
    })
}