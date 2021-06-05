const Paciente = require('../../models/paciente')

module.exports = app => {
    app.put('/api/pacientes/:id', async (req, res) => {
        try{
            const id = req.params.id
            const paciente = await Paciente.updateOne({ _id: id }, req.body)
            res.status(201).end()
        }catch(err){
            res.status(400).send(JSON.stringify({
                message: err.message
            }))
        }
    })
}