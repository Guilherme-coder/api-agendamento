const Agenda = require('../../models/agenda')

module.exports = app => {
    app.get('/api/agendas/:id', async (req, res) => {
        try{
            const id = req.params.id
            const agenda = await Agenda.findOne({ _id: id })
            if(agenda === null)
                throw new Error('Agenda não encontrada')
            res.send(agenda)
        }catch(err){
            res.status(404).send(JSON.stringify({
                message: err.message
            }))
        }
    })
}