import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PaesSchema = new Schema({
    tipoPao: { type: String, required: true }
})

const Paes = mongoose.model("Paes", PaesSchema);

export {Paes}