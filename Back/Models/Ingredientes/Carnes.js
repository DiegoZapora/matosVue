import mongoose from "mongoose";
const Schema = mongoose.Schema

const CarnesSchema = new Schema({
    nomeCarne: {
        type: String,
        require: true
    }
})

const Carnes = mongoose.model("Carnes", CarnesSchema)

export {Carnes}