const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    telefono: { type: String, required: true },
    esAdmin: { type: Boolean, required: false, default: false },
    esCoordinador: { type: Boolean, required: false, default: false },
    esExterno: { type: Boolean, required: false, default: false },
    compania: { type: String, required: false, default: "" },
}, { timestamps: true })

const User = mongoose.model("User", userSchema)

module.exports = User;