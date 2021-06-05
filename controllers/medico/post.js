const Medico = require('../../models/medico')

module.exports = app => {
    app.post('/api/medicos', async (req, res) => {
        try{
            const nome = req.body.nome
            if(await Medico.findOne({ nome: nome }))
                throw new Error(`O médico ${nome} já possui cadastro.`)

            const medico = await Medico.create(req.body)
            res.status(201).end()
        }catch(err){
            res.status(400).send(JSON.stringify({
                message: err.message
            }))
        }
    })
}