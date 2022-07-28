const express = require('express');
const router = express.Router();
const Client = require("../models/clients");
const verifyJWT = require('../utils/verifyJWT');


// /api/clients routes

// all clients 
router.get("", verifyJWT, async (req, res) => {
    try {
        if (req.user.esAdmin) {
            const data = await Client.find();
            res.status(200).json(data)
        } else {
            res.status(401).json({ message: "Auth Failed" })
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// new client
router.post("", async (req, res) => {
    try {
        const data = new Client({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            telefono: req.body.telefono,
            latitud: req.body.latitud,
            longitud: req.body.longitud,
            tipoDeVivienda: req.body.tipoDeVivienda,
            tipoDeServicio: req.body.tipoDeServicio,
            tipoDeTecnologia: req.body.tipoDeTecnologia,
            planActual: req.body.planActual,
            companiaActual: req.body.companiaActual,
            atributos: req.body.atributos,
            pagaria: req.body.pagaria,
            rif: req.body.rif,
            pagariaInstalacion: req.body.pagariaInstalacion,
            nombreDeVivienda: req.body.nombreDeVivienda,
            numeroDeVivienda: req.body.numeroDeVivienda,
            rangoMinimoDePago: req.body.rangoMinimoDePago,
            rangoMaximoDePago: req.body.rangoMaximoDePago,
            esPotencial: req.body.esPotencial,
            yaTieneServicio: req.body.yaTieneServicio,
            calificacion: req.body.calificacion,
            calificacionCalidadPrecio: req.body.calificacionCalidadPrecio,
            loRemplazaria: req.body.loRemplazaria,
            loAdquiriria: req.body.loAdquiriria,
            loRecomendaria: req.body.loRecomendaria,
            vendedor: req.body.vendedor
        })
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        if (error.name === "ValidationError") {
            let errors = {};

            Object.keys(error.errors).forEach((key) => {
                errors[key] = error.errors[key].message;
            });
            console.log(errors)
            return res.status(400).send(errors);
        }
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;