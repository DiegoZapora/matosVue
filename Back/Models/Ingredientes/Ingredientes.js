import mongoose from "mongoose";
const Schema = mongoose.Schema

const BurguerSchema = new Schema({
    nome: {
        type: String,
        require: true
    },
    Paes: {
        type: String,
    },
    Carnes: {
        type: String,
    },
    Queijo: {
        type: String,
    },
    Adicional: {
        type: Array
    },
    status: {
        type: String,
        required: true,

        enum: ["Solicitado", "Em Produção", "Finalizado"],
        default: "Solicitado"
    }
})

const Burguers = mongoose.model("Burguers", BurguerSchema)

export {Burguers}