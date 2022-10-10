const express = require('express')
const router = express.Router()

const candidatos = require('../models/criaCanditadoNoBanco')

router.get('', (req, res, next)=>{
    res.json(candidatos)
    next()
})

module.exports = router
