const express = require('express');
const router = express.Router();
const Client = require("../models/clients");
const verifyJWT = require('../utils/verifyJWT');
const singleCrearClientePotencial = require('../utils/crmLoad');
const crearServicio = require('../utils/crearServicio');
const crearFactura = require('../utils/crearFactura');
const actualizarServicio = require('../utils/actualizarServicio');

// /api/clients routes

const handleGetClients = async (req, res) => {
    if (!req.user.esAdmin) return res.status(401).json({ message: "Auth Failed" });
    try {
        const data = await Client.find();
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const handleCreateClient = async (req, res) => {
    try {
        const data = new Client(req.body);
        const dataToSave = await data.save();
        return res.status(200).json(dataToSave);
    } catch (error) {
        if (error.name === "ValidationError") {
            let errors = {};
            Object.keys(error.errors).forEach((key) => {
                errors[key] = error.errors[key].message;
            });
            return res.status(400).send(errors);
        }
        return res.status(500).json({ message: error.message });
    }
};

const loadInCRM = async (req, res) => {
    try {
        const client = await Client.findById(req.params.id);
        console.log(client);
        try {
            const crmClientId = await singleCrearClientePotencial(client);
            const serviceIdCRM = await crearServicio(client)
            const facturaIdCRM = await crearFactura(client)
            const estaActivado = await actualizarServicio(client)
            await Client.findByIdAndUpdate(req.params.id, {
                idCRM: crmClientId, serviceIdCRM: serviceIdCRM,
                facturaIdCRM: facturaIdCRM, estaActivado: estaActivado
            });
            if (estaActivado) {
                res.status(200).send({ success: true })
            } else {
                throw Error(`Couldnt activate client: ${client}`)
            }
        } catch (error) {
            console.log(error);
            res.status(500).send({ error });
        }
    } catch (e) {
        res.status(400).send({});
    }
}

const handleUpdateClient = async (req, res) => {
    const id = req.params.id;
    await Client.findByIdAndUpdate(id, req.body);
    const updatedClient = await Client.findById(id);
    return res.status(200).json(updatedClient);
}

const handleGetUniqueClient = async (req, res) => {
    const id = req.params.id;
    const client = await Client.findById(id);
    return res.status(200).json(client);
}

router.get("", verifyJWT, handleGetClients);
router.post("", handleCreateClient);
router.get("/:id", handleGetUniqueClient);
router.put("/:id", handleUpdateClient);
router.post('/:id', loadInCRM)

module.exports = router;