const Medico = require('../../models/medico')

module.exports = app => {
    app.get('/api/medicos', async (req, res) => {
        try{
            const medico = await Medico.find()
            res.send(JSON.stringify(medico))
        }catch(err){
            res.status(400).send(JSON.stringify({
                message: err.message
            }))
        }
    })
}