const {con} = require('./dbconnect.js')
const funcionarios = (req, res) => {
    let string = 'select * from funcionario' 
    con.query(string, (err, result)=>{
        res.json(result)
    })
}

const funcionario_add = (req, res) => {
    let string = 'insert into funcionario(matricula, nome_completo, data_desligamento, ultimo_salario) values(\''+req.body.matricula+'\','+req.body.nome_completo+',\''+req.body.data_desligamento+',\',\''+req.body.ultimo_salario+',\')' 
    con.query(string, (err, result)=>{
        if (result.affectedRows == 1){
            res.status(201).end() 
        }else{
            res.status(304).end()  
        }   
    })
}

const funcionario_delete = (req, res) => {
    let string = 'delete from funcionario where matricula = '+ req.params.matricula 
    con.query(string, (err, result)=>{
        if (result.affectedRows == 1){
            res.status(410).end() 
        }else{
            res.status(304).end()  
        }
    })
}

const funcionario_upt = (req, res) => {
    let string = 'update funcionario set nome_completo = \''+req.body.matricula+'\','+req.body.nome_completo+',\''+req.body.data_desligamento+',\',\''+req.body.ultimo_salario+',\' where id = '+req.body.matricula
    con.query(string, (err, result)=>{
        if (result.affectedRows == 1){
            res.status(202).end() 
        }else{
            res.status(304).end() 
        }
    })
}

module.exports = {
    funcionarios, funcionario_add, funcionario_delete, funcionario_upt
}