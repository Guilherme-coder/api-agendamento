const Medico = require('../../models/medico')

module.exports = app => {
    app.delete('/api/medicos/:id', async (req, res) => {
        try{
            const id = req.params.id
            const medico = await Medico.deleteOne({ _id: id })
            res.end()
        }catch(err){
            res.status(400).send(JSON.stringify({
                message: err.message
            }))
        }
    })
}