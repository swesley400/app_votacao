const express = require('express')
const router = express.Router()

const Votar = require("../controllers/votar.js")

router.post("/votar", async(req, res) => {
    try{
        const voto = req.body
        const votando = new Votar(voto.id, voto.candidato)
        votando.addVoto()
        res.status(201).json({status: "Voto feito com sucesso"}) 
    }
    catch(erro){
        console.log("Houve um erro na votacao", erro)
    }
})

module.exports = router