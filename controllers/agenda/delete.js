const Agenda = require('../../models/agenda')

module.exports = app => {
    app.delete('/api/agendas/:id', async (req, res) => {
        try{
            const id = req.params.id
            const agenda = await Agenda.deleteOne({ _id: id })
            res.end()
        }catch(err){
            res.status(400).send(JSON.stringify({
                message: err.message
            }))
        }
    })
}