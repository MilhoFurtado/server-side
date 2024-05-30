import connect from "../config/connection.js"

let assinaturas = {}
const con = await connect()

assinaturas.all = async function(req, res){
    try{
        let assinaturas = await con.query("select * from assinaturas;")
        res.send(assinaturas[0])
    } catch (e) {
        console.log("erro consulta......", e)
    }
}

assinaturas.nome = async function(req, res){
    try{
        let nome = req.params.nome
        let sql = "select * from assinaturas where nome=?;"
        let values = [nome]
        let result = await con.query(sql, values)
        res.send({
            status:"",
            result:result

        })
    } catch (e) {
         console.log("não foi possivel realizar a consulta por nome", e)
    }
}

assinaturas.create = async function(req, res){
    try{
        let assinaturas = req.body
        let sql = "insert into assinaturas values (?,?,?,?);"
        let values = [assinaturas.cpf_ass, assinaturas.nome, assinaturas.email, assinaturas.codass]
        let result = await con.query(sql, values)
        res.send({
            status:"assinatura criada com sucesso!",
            result:result
        })
    } catch (e){
        console.log("erro ao criar nova assinatura",e)
    }
}

assinaturas.update = async function(req, res){
    try{
        let codass = req.params.codass
        let assinaturas = req.body
        let sql = "update assinaturas set cpf_ass=?, nome=?, email=? where codass=?;"
        let values = [assinaturas.cpf_ass, assinaturas.nome, assinaturas.email, codass]
        let result = await con.query(sql, values)
        res.send({
            status:"assinatura de " + assinaturas.nome + " foi atualizada",
            result:result
        })
    } catch(e){
        console.log("a atualização teve algum contratempo e não pode ser realizada",e)
    }
}

assinaturas.delete = async function(req, res){
    try{
        let codass = req.params.codass
        let sql = "delete from assinaturas where codass=?;"
        let result = await con.query(sql, [codass])
        res.send({
            status:"foi deletado com sucesso",
            result:result
        })
    } catch (e){
        console.log("não foi possivel excluir",e)
    }
}
export {assinaturas}