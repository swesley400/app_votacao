const express = require('express')
const router = express.Router()

const votar = require("../controllers/votar")

router.post("/votar", async(req, res) => {
    const voto = req.body
    const votando = new votar(voto.id, voto.candidato)
    votando.addVoto()
    res.status(201).json(voto) 
})

module.exports = router