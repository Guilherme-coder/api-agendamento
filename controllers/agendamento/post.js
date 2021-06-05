const Agendamento = require('../../models/agendamento')

module.exports = app => {
    app.post('/api/agendamentos', async (req, res) => {
        try{
            const agendamento = await Agendamento.create(req.body)
            res.status(201).end()
        }catch(err){
            res.status(400).send(JSON.stringify({
                message: err.message
            }))
        }
    })
}