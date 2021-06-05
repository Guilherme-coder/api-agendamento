const Agenda = require('../../models/agenda')

module.exports = app => {
    app.get('/api/agendas', async (req, res) => {
        try{
            const agenda = await Agenda.find()
            res.send(JSON.stringify(agenda))
        }catch(err){
            res.status(400).send(JSON.stringify({
                message: err.message
            }))
        }
    })
}