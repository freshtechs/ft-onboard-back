const express = require('express');
const fs = require('fs');
const fse = require('fs-extra')
const router = express.Router();
const Client = require("../models/clients");
const verifyJWT = require('../utils/verifyJWT');
const singleCrearClientePotencial = require('../utils/crmLoad');
const crearServicio = require('../utils/crearServicio');
const crearFactura = require('../utils/crearFactura');
const crearContrato = require('../utils/crearContrato');
const crearReporte = require('../utils/crearReporte');
const crearReciboPago = require('../utils/crearReciboPago');
const crearBienvenida = require('../utils/crearBienvenida');
const sendClientEmail = require('../utils/sendClientEmail');
const sendInternEmails = require('../utils/sendInternEmails');
const actualizarServicio = require('../utils/actualizarServicio');
const activarEnTV = require('../utils/activarEnTV');


// /api/clients routes

const handleGetClients = async (req, res) => {
    // if (!req.user.esAdmin) return res.status(401).json({ message: "Auth Failed" });
    const vendedor = JSON.parse(req.query.vendedor)
    const compania = vendedor.compania
    let data;
    try {
        if (compania !== 'Fresh Techs') {
            const allClients = await Client.find({}).populate({ path: 'vendedor', select: '-password' })
            data = allClients.filter((client) => {
                return (client.vendedor.compania === compania && client.estaActivado === false)
            })
        } else {
            data = await Client.find();
        }
        return res.status(200).json(data);
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
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
    const client = await Client.findById(req.params.id);
    try {
        let contratoGenerado;
        let reporteGenerado;
        let reciboGenerado;
        let bienvenidaGenerado;
        if (!client.idCRM) {
            const crmClientId = await singleCrearClientePotencial(client)
            client.idCRM = crmClientId
        }
        if (!client.serviceIdCRM) {
            const serviceIdCRM = await crearServicio(client)
            client.serviceIdCRM = serviceIdCRM
        }
        if (!client.facturaIdCRM) {
            const facturaIdCRM = await crearFactura(client)
            client.facturaIdCRM = facturaIdCRM
        }

        const activoEnCRM = await actualizarServicio(client)
        // const activoEnTV = await activarEnTV(client)
        const activoEnTV = true

        await Client.findByIdAndUpdate(req.params.id, {
            idCRM: client.idCRM, serviceIdCRM: client.serviceIdCRM,
            facturaIdCRM: client.facturaIdCRM, activoEnTV: activoEnTV, activoEnCRM: activoEnCRM
        });

        const [contratoExpressPath, contratoCrmPath] = await crearContrato(client)
        const [reporteExpressPath, reporteCrmPath] = await crearReporte(client)
        const [reciboPagoExpressPath, reciboPagoCrmPath] = await crearReciboPago(client)
        const [bienvenidaExpressPath, bienvenidaCrmPath] = await crearBienvenida(client)

        if (contratoExpressPath && contratoCrmPath) contratoGenerado = true
        if (reporteExpressPath && reporteCrmPath) reporteGenerado = true
        if (reciboPagoExpressPath && reciboPagoCrmPath) reciboGenerado = true
        if (bienvenidaExpressPath, bienvenidaCrmPath) bienvenidaGenerado = true

        const activo = (
            activoEnCRM && activoEnTV && contratoGenerado &&
            reporteGenerado && reciboGenerado && bienvenidaGenerado
        )

        if (activo) {
            await sendClientEmail(
                client, contratoExpressPath, contratoCrmPath,
                reporteExpressPath, reporteCrmPath,
                bienvenidaExpressPath, bienvenidaCrmPath
            )
            await sendInternEmails(
                client, reporteExpressPath, reporteCrmPath,
                reciboPagoExpressPath, reciboPagoCrmPath
            )
            await Client.findByIdAndUpdate(req.params.id, {
                estaActivado: activo,
                contratoExpressPath,
                bienvenidaExpressPath,
                reporteExpressPath,
                reciboPagoExpressPath,
            });
            console.log('Creo que aqui sale')
            return res.status(200).send({ success: true })
        } else {
            throw Error(`message: 'Couldnt activate client: ${client}'`)
        }
    } catch (error) {
        return res.status(500).send({ error });
    }

}

const handleUpdateClient = async (req, res) => {
    try {
        const id = req.params.id;
        await Client.findByIdAndUpdate(id, req.body);
        const updatedClient = await Client.findById(id);
        return res.status(200).json(updatedClient);
    } catch (e) {
        return res.status(400).json(e)
    }

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
router.post('/:id', loadInCRM);


module.exports = router;