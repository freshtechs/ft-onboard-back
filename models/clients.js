const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, required: false },
    telefono: { type: String, required: true },
    latitud: { type: String, required: true },
    longitud: { type: String, required: true },
    tipoDeVivienda: { type: String, required: true },
    nombreDeVivienda: { type: String, required: true, default: '' },
    numeroDeVivienda: { type: String, required: true, default: '' },
    rangoMinimoDePago: { type: Number, required: false },
    rangoMaximoDePago: { type: Number, required: false },
    esPotencial: { type: Boolean, required: true, default: false },
    yaTieneServicio: { type: Boolean, required: true, default: false },
    calificacion: { type: String, required: true, default: '' },
    calificacionCalidadPrecio: { type: String, required: true, default: '' },
    loRemplazaria: { type: String, required: true, default: '' },
    loAdquiriria: { type: String, required: true, default: '' },
    loRecomendaria: { type: String, required: true, default: '' },
    vendedor: { type: String, required: true }
}, { timestamps: true })

const Client = mongoose.model("client", clientSchema)

module.exports = Client;