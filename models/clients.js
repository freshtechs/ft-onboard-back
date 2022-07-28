const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, required: false },
    telefono: { type: String, required: true },
    latitud: { type: String, required: true },
    longitud: { type: String, required: true },
    tipoDeVivienda: { type: String, required: true },
    tipoDeTecnologia: { type: String, required: false, default: '' },
    planActual: { type: String, required: false, default: '' },
    companiaActual: { type: String, required: false, default: '' },
    atributos: [{ type: String, required: false }],
    pagaria: { type: Boolean, required: true, default: false },
    rif: { type: String, required: false, default: '' },
    pagariaInstalacion: { type: Boolean, required: false, default: false },
    nombreDeVivienda: { type: String, required: false, default: '' },
    numeroDeVivienda: { type: String, required: true, default: '' },
    rangoMinimoDePago: { type: Number, required: false },
    rangoMaximoDePago: { type: Number, required: false },
    esPotencial: { type: Boolean, required: true, default: false },
    yaTieneServicio: { type: Boolean, required: true, default: false },
    calificacion: { type: String, required: false, default: '' },
    calificacionCalidadPrecio: { type: String, required: false, default: '' },
    loRemplazaria: { type: String, required: false, default: '' },
    loAdquiriria: { type: String, required: true, default: '' },
    loRecomendaria: { type: String, required: true, default: '' },
    vendedor: { type: String, required: true }
}, { timestamps: true })

const Client = mongoose.model("client", clientSchema)

module.exports = Client;