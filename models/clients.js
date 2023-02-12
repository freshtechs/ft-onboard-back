const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
    nombre: { type: String, required: false },
    apellido: { type: String, required: false },
    email: { type: String, required: false, lowercase: true },
    telefono: { type: String, required: false },
    cedula: { type: String, required: false },
    cedulaURL: { type: String, required: false },
    firmaURL: { type: String, required: false },
    latitud: { type: String, required: false },
    longitud: { type: String, required: false },
    tipoDeVivienda: { type: String, required: false, default: 'Edificio' },
    tipoDeServicio: { type: String, required: false, default: 'Residencial' },
    nombreDeVivienda: { type: String, required: false, default: '' },
    numeroDeVivienda: { type: String, required: false, default: '' },
    montoInstalacion: { type: Number, required: false },
    serviciosContratados: [{ type: String, required: false }],
    modeloONU: { type: String, required: false },
    macONU: { type: String, required: false },
    serialONU: { type: String, required: false },
    potenciaONU: { type: Number, required: false },
    metrosDrop: { type: Number, required: false },
    metrosUTP: { type: Number, required: false },
    conectoresSC: { type: Number, required: false },
    nap: { type: String, required: false },
    puertoNap: { type: Number, required: false },
    marcaRouterCliente: { type: String, required: false },
    macRouterCliente: { type: String, required: false },
    medicionURL: { type: String, required: false },
    rutaURL: { type: String, required: false },
    posicionURL: { type: String, required: false },
    fechaDeInstalacion: { type: Date, required: false },
    notas: { type: String, required: false },
    totalRecaudado: { type: Number, required: false },
    fechaDePago: { type: Date, required: false },
    metodoDePago: { type: String, required: false },
    comprobanteURL: { type: String, required: false },
    numeroReferencia: { type: String, required: false },
    titularCuenta: { type: String, required: false },

    esPotencial: { type: Boolean, required: false, default: true },
    vendedor: { type: String, required: true }
}, { timestamps: true })

const Client = mongoose.model("client", clientSchema)

module.exports = Client;