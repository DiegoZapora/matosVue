import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, required: true }
})

export const Usuarios = mongoose.model("Usuarios", UserSchema);