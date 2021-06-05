const Agendamento = require('../../models/agendamento')

module.exports = app =>{
    app.get('/api/agendamentos/:id', async (req, res) => {
        try{
            const id = req.params.id
            const agendamento = await Agendamento.findOne({ _id: id })
            if(agendamento === null)
                throw new Error('Agendamento não encontrado')
            res.send(agendamento)
        }catch(err){
            res.status(404).send(JSON.stringify({
                message: err.message
            }))
        }
    })
}