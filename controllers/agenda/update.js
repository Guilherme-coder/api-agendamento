const Agenda = require('../../models/agenda')

module.exports = app => {
    app.put('/api/agendas/:id', async (req, res) => {
        try{
            const id = req.params.id
            const agenda = await Agenda.updateOne({ _id: id }, req.body)
            res.status(201).end()
        }catch(err){
            res.status(400).send(JSON.stringify({
                message: err.message
            }))
        }
    })
}