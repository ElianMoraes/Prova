const express = require('express')
const cors = require('cors')

const app = express()
const routes = express.Router()

app.use(cors())
app.use(express.json())

const funcionario = require('./router/funcionario_rota.js')
app.use(funcionario)

app.use("/", routes)
app.listen(3000, ()=>{
    console.log('rodando')
})