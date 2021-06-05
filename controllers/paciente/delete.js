const Paciente = require('../../models/paciente')

module.exports = app => {
    app.delete('/api/pacientes/:id', async (req, res) => {
        try{
            const id = req.params.id
            const paciente = await Paciente.deleteOne({ _id: id })
            res.end()
        }catch(err){
            res.status(400).send(JSON.stringify({
                message: err.message
            }))
        }
    })
}