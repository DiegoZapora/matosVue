import express from "express"
import mongoose from "mongoose"
import cors from "cors"

import { Paes } from "./Models/Ingredientes/Paes.js"
import { Carnes } from "./Models/Ingredientes/Carnes.js"
import { Queijo } from "./Models/Ingredientes/Queijo.js"
import { Burguers } from "./Models/Ingredientes/Ingredientes.js"
import { Adicional } from "./Models/Ingredientes/Adicionais.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGO_URL)
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
    } catch (err) {
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

        res.json({ paes, carnes, queijos, adicional })
    } catch (err) {
        console.error(err)
    }
})

app.post("/burguers", async (req, res) => {
    try {
        const novoBurguer = new Burguers(req.body)
        const burguerSavo = await novoBurguer.save()
        res.json(burguerSavo)
    } catch (err) {
        console.error(err)
    }
})

app.get("/burguers", async (req, res) => {
    try {
        const burguers = await Burguers.find()
        res.json(burguers)
    } catch (err) {
        console.log(err)
    }
})

app.patch("/burguers/:id", async (req, res) => {
    try {
        const id = req.params.id
        const novoStatus = req.body.status

        const statusValidos = ["Solicitado", "Em Produção", "Finalizado"]
        if (!statusValidos.includes(novoStatus))  {
            return res.status(400)
        }

        const pedidoAtualizado = await Burguers.findByIdAndUpdate(
            id,
            { status: novoStatus },
            { new: true }
        )

        if (!pedidoAtualizado) {
            return res.status(404)
        }

        res.status(200).json(pedidoAtualizado)

        if (novoStatus === "Finalizado") {
            setTimeout(async () => {
                try {
                    await Burguers.findByIdAndDelete(id)
                } catch(err) {
                    console.log("Erro ao excluir projeto", err)
                }
            }, 30000);
        }

    } catch(err) {
        console.log(err)
    }
})

app.delete("/burguers/:id", async (req, res) => {
    try {
        const id = req.params.id
        const burguerDeletado = await Burguers.findByIdAndDelete(id)
        res.status(200).json()
    } catch (err) {
        console.log(err)
    }
})

const PORT = process.env.PORT || 8085

app.listen(PORT, () => {
    console.log("Estamos rodando!")
})