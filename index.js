const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const consign = require('consign')

app.use(bodyParser.json())
consign()
    .include('controllers')
    .into(app)

app.listen(3000, console.log('API rodando na porta 3000'))