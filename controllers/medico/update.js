const Medico = require('../../models/medico')

module.exports = app => {
    app.put('/api/medicos/:id', async (req, res) => {
        try{
            const id = req.params.id
            const medico = await Medico.updateOne({ _id: id }, req.body)
            res.status(201).end()
        }catch(err){
            res.status(400).send(JSON.stringify({
                message: err.message
            }))
        }
    })
}