// Imports
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import session from "express-session"


// Models
import {Paes} from "./Models/Ingredientes/Paes.js"
import { Carnes } from "./Models/Ingredientes/Carnes.js"
import { Queijo } from "./Models/Ingredientes/Queijo.js"
import { Burguers } from "./Models/Ingredientes/Ingredientes.js"
import { Adicional } from "./Models/Ingredientes/Adicionais.js"
import { Status } from "./Models/Status/Status.js"

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

app.post("/cadastrar/adicional", async (req, res) => {
    try {
        const novoAdicional = new Adicional(req.body)
        const adicionalSavo = await novoAdicional.save()
        res.json(adicionalSavo)
    } catch (err) {
        console.error(err)
    }
})

app.get("/ingredientes/todos", async (req, res) => {
    try {
        const paes = await Paes.find()
        const carnes = await Carnes.find()
        const queijos = await Queijo.find()
        const adicional = await Adicional.find()
        const status = await Status.find()

        res.json({ paes, carnes, queijos, adicional, status })
    }catch(err) {
        console.error(err)
    }
})

app.post("/burguers", async (req, res) => {
    try {
        const novoBurguer = new Burguers(req.body)
        const burguerSavo = await novoBurguer.save()
        res.json(burguerSavo)
    } catch(err) {
        console.error(err)
    }
})

// Iniciar o servidor
app.listen(8085, () => {
    console.log("Estamos rodando!")
})