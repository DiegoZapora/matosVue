import mongoose from "mongoose";
const Schema = mongoose.Schema

const IngredientesSchema = new Schema({
    Paes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Paes"
    },
    Carnes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Carnes"
    },
    Queijo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Queijo"
    }
})

const Ingredientes = mongoose.model("Ingredientes", IngredientesSchema)

export {Ingredientes}