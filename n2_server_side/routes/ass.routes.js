import express from "express"
import {assinaturas} from "../controle/ass_controle.js"

let router = express.Router()


router.get('/assinaturas', assinaturas.all)
router.get('/assinaturas/:nome',assinaturas.nome)
router.post('/assinaturas', assinaturas.create)
router.put('/assinaturas/:codass', assinaturas.update)
router.delete('/assinaturas/:codass', assinaturas.delete)

export {router}