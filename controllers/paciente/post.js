const Paciente = require('../../models/paciente')

module.exports = app => {
    app.post('/api/pacientes', async (req, res) => {
        try{
            const email = req.body.email
            if(await Paciente.findOne({ email: email }))
                throw new Error('O email já foi cadastrado.')

            await Paciente.create(req.body)
            res.status(201).end()
        }catch(err){
            res.status(400).send(JSON.stringify({
                message: err.message
            }))
        }
    })
}