import mongoose from "mongoose";
const Schema = mongoose.Schema

const AdicionalSchema = new Schema({
    nome: {
        type: String,
        require: true
    }
})

const Adicional = mongoose.model("Adicional", AdicionalSchema)

export {Adicional}