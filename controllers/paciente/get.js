const Paciente = require('../../models/paciente')

module.exports = app => {
    app.get('/api/pacientes', async (req, res) => {
        try{
            const paciente = await Paciente.find()
            res.send(JSON.stringify(paciente))
        }catch(err){
            res.status(400).send(JSON.stringify({
                message: err.message
            }))
        }
    })
}