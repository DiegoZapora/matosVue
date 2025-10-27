import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PaesSchema = new Schema({
    tipo: { type: String, required: true }
})

export const Paes = mongoose.model("Paes", PaesSchema);