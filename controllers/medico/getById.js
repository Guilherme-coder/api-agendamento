const Medico = require('../../models/medico')

module.exports = app => {
    app.get('/api/medicos/:id', async (req, res) => {
        try{
            const id = req.params.id
            const medico = await Medico.findOne({ _id: id })
            if(medico === null)
                throw new Error('Médico não encontrado')
            res.send(medico)
        }catch(err){
            res.status(404).send(JSON.stringify({
                message: err.message
            }))
        }
    })
}