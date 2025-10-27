// Imports
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import session from "express-session"

// Models

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



// Iniciar o servidor
app.listen(8085, () => {
    console.log("Estamos rodando!")
})