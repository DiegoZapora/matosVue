// Imports
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import session from "express-session"

// Models
import { Paes } from "./Models/Ingredientes/Paes"

// Configurações
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({
    secret: "Andre Matos",
    resave: false,
    saveUninitialized: true,
}))

// Conexão com o db
mongoose.connect("mongodb://localhost/makedb")
.then(() => {
    console.log("Conectado ao MongoDB")
})

// Rotas
app.post("/cadastrar/pao", async (req, res) => {
    try {
        const pao = new Paes(req.body)
        const paoSalvo = await pao.save()
        res.status(201).json(paoSalvo)
    } catch (err) {
        console.log(err)
        res.status(400)
    }
})

// Iniciar o servidor
app.listen(8085, () => {
    console.log("Estamos rodando!")
})