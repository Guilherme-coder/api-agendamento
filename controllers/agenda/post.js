const Agenda = require('../../models/agenda')

module.exports = app => {
    app.post('/api/agendas', async (req, res) => {
        try{
            const agenda = await Agenda.create(req.body)
            res.status(201).end()
        }catch(err){
            res.status(400).send(JSON.stringify({
                message: err.message
            }))
        }
    })
}