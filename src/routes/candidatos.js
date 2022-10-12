const express = require('express')
const router = express.Router()
const canditatosVindoDoBanco = require("../models/lerDadosCandidatosDoBanco")

router.get('', async (req, res)=>{
    const candidatos =  await canditatosVindoDoBanco()
    res.json(candidatos)    
})

module.exports = router
