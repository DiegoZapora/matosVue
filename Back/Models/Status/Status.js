import mongoose from "mongoose";
const Schema = mongoose.Schema

const StatusSchema = new Schema({
    Solicitado: {
        texto: {
            type: String
        }
    },
    EmProducao: {
        texto: {
            type: String
        }
    },
    Finalizado: {
        texto: {
            type: String
        }
    }
})

const Status = mongoose.model("Status", StatusSchema)

new Status({
    Solicitado: {
        texto: "Solicitado"
    },
    EmProducao: {
        texto: "Em Produção"
    },
    Finalizado: {
        texto: "Finalizado"
    }
}).save()

export {Status}