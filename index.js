const express = require('express')
const cors = require('cors')

const app = express()

const porta = 3000

const candidatos = require('./src/routes/candidatos')
const votar = require('./src/routes/votar.js')
app.use(express.json())
app.use(cors())

app.use(candidatos)
app.use(votar)

app.listen(process.env.PORT || porta, () => {
    console.log("Servidor iniciado com sucesso em http://localhost:3000")
})