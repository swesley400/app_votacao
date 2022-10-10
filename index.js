const express = require('express')

const app = express()

const porta = 3000

const candidatos = require('./src/routes/candidatos')
 
app.use(candidatos)

app.listen(porta, () => {
    console.log("Servidor iniciado com sucesso em http://localhost:3000")
})