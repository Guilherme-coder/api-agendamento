const Paciente = require('../../models/paciente')

module.exports = app => {
    app.get('/api/pacientes/:id', async (req, res) => {
        try{
            const id = req.params.id
            const paciente = await Paciente.findOne({ _id: id })
            if(paciente === null)
                throw new Error('Paciente não encontrado')
            res.send(paciente)
        }catch(err){
            res.status(404).send(JSON.stringify({
                message: err.message
            }))
        }
    })
}