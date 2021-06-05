const Agendamento = require('../../models/agendamento')

module.exports = app => {
    app.delete('/api/agendamentos/:id', async (req, res) => {
        try{
            const id = req.params.id
            const agendamento = await Agendamento.deleteOne({ _id: id })
            res.end()
        }catch(err){
            res.status(400).send(JSON.stringify({
                message: err.message
            }))
        }
    })
}