const express = require('express')
const router = express.Router()
const canditatosVindoDoBanco = require("../models/lerDadosCandidatosDoBanco")

const candidatos = require('../models/criaCanditadoNoBanco')



router.get('', async (req, res)=>{
    const candi = await canditatosVindoDoBanco()
    const candiJson = candi
    res.json(candiJson)
    
    
})

module.exports = router
