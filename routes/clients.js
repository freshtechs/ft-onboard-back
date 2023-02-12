const express = require('express');
const router = express.Router();
const Client = require("../models/clients");
const verifyJWT = require('../utils/verifyJWT');

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

router.get("", verifyJWT, handleGetClients);
router.post("", handleCreateClient);

module.exports = router;