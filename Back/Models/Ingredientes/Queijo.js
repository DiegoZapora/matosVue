import mongoose from "mongoose";
const Schema = mongoose.Schema

const QueijoSchema = new Schema({
    nomeQueijo: {
        type: String,
        require: true
    }
})

const Queijo = mongoose.model("Queijo", QueijoSchema)

export {Queijo}