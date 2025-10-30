// Imports
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import session from "express-session"


// Models
import {Paes} from "./Models/Ingredientes/Paes.js"
import { Carnes } from "./Models/Ingredientes/Carnes.js"
import { Queijo } from "./Models/Ingredientes/Queijo.js"

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
        const novoPao = new Paes(req.body)
        const paoSalvo = await novoPao.save()
        res.json(paoSalvo)
    } catch (err) {
        console.log(err)
        res.status(400)
    }
})

app.post("/cadastrar/carne", async (req, res) => {
    try {
        const novaCarne = new Carnes(req.body)
        const carneSalva = await novaCarne.save()
        res.json(carneSalva)
    } catch (err) {
        console.error(err)
        res.status(400)
    }
})

app.post("/cadastrar/queijo", async (req, res) => {
    try {
        const novoQueijo = new Queijo(req.body)
        const queijoSalvo = await novoQueijo.save()
        res.json(queijoSalvo)
    } catch(err) {
        console.error(err)
        res.status(400)
    }
})

app.get("/ingredientes/todos", async (req, res) => {
    try {
        const paes = await Paes.find()
        const carnes = await Carnes.find()
        const queijos = await Queijo.find()

        res.json({ paes, carnes, queijos })
    }catch(err) {
        console.error(err)
    }
})

// Iniciar o servidor
app.listen(8085, () => {
    console.log("Estamos rodando!")
})