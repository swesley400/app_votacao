const express = require('express')
const router = express.Router()

const lerVotos = require("../config/retornaVotosGerais")

router.get("/votosgerais", async(req, res) => {
    try{
        res.status(200).json({votosGerais: await lerVotos()})
    }
    catch(erro){
        console.log("Houve um erro na votacao", erro)
    }
})

module.exports = router