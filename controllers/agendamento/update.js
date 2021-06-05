const Agendamento = require('../../models/agendamento')

module.exports = app => {
    app.put('/api/agendamentos/:id', async (req, res) => {
        try{
            const id = req.params.id
            const agendamento = await Agendamento.updateOne({ _id: id }, req.body)
            res.status(201).end()
        }catch(err){
            res.status(400).send(JSON.stringify({
                message: err.message
            }))
        }
    })
}