const express = require('express')
const router = express.Router()
const controll = require('../controll/funcionarios_controll.js')

router.get('/funcionario', controll.funcionarios)
router.post('/funcionario/add', controll.funcionario_add)
router.delete('/funcionario/del/:id', controll.funcionario_delete)
router.put('/funcionario/upt', controll.funcionario_upt)
module.exports = router