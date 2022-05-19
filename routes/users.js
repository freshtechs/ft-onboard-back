const bcrypt = require("bcrypt")
const express = require('express');
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../models/users");
const verifyJWT = require("../utils/verifyJWT");

// /register
router.post("/register", async (req, res) => {
    const user = req.body;
    const takenUsername = await User.findOne({ email: user.email.toLowerCase() })
    console.log(user)

    if (takenUsername) {
        return res.status(409).json({ message: "Este usuario ya existe" })
    }
    if (!user.password) {
        return res.status(400).json({ message: "Ingrese password" })
    }
    user.password = await bcrypt.hash(req.body.password, 10)
    try {
        var dbUser = new User({
            email: user.email.toLowerCase(),
            password: user.password,
            nombre: user.nombre,
            apellido: user.apellido,
            telefono: user.telefono,
            esAdmin: user.esAdmin,
            esCoordinador: user.esCoordinador,
            esExterno: user.esExterno,
            compania: user.compania
        })
        await dbUser.save()
        const payload = {
            id: dbUser._id,
            email: dbUser.email,
            esAdmin: dbUser.esAdmin,
            esCoordinador: dbUser.esCoordinador,
            esExterno: dbUser.esExterno,
            compania: dbUser.compania
        }
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: 86400 },
            (err, token) => {
                return res.status(200).json({ message: "Success", token: "Bearer " + token })
            }
        )
    } catch (error) {
        if (error.name === "ValidationError") {
            let errors = {};

            Object.keys(error.errors).forEach((key) => {
                errors[key] = error.errors[key].message;
            });

            return res.status(400).send(errors);
        }
        res.status(500).json({ message: error.message })
    }
})

// login
router.post("/login", async (req, res) => {
    const userLoggingIn = req.body;
    const email = userLoggingIn.email
    const password = userLoggingIn.password

    if (!userLoggingIn || !email || !password) {
        return res.status(400).json({
            message: "No se pudo completar la solicitud"
        })
    }

    await User.findOne({ email: userLoggingIn.email.toLowerCase() })
        .then(dbUser => {
            if (!dbUser) {
                return res.status(400).json({ message: "Los datos ingresados no son validos." })
            }
            bcrypt.compare(userLoggingIn.password, dbUser.password)
                .then(isCorrect => {
                    if (isCorrect) {
                        const payload = {
                            id: dbUser._id,
                            email: dbUser.email,
                            esAdmin: dbUser.esAdmin,
                            esCoordinador: dbUser.esCoordinador,
                            esExterno: dbUser.esExterno,
                            compania: dbUser.compania
                        }
                        jwt.sign(
                            payload,
                            process.env.JWT_SECRET,
                            { expiresIn: 86400 },
                            (err, token) => {
                                return res.status(200).json({ message: "Success", token: "Bearer " + token })
                            }
                        )
                    } else {
                        return res.status(400).json({ message: "Los datos ingresados no son validos." })
                    }
                })

        })

})

router.get("/isUserAuth", verifyJWT, (req, res) => {
    return res.json({ isLoggedIn: true, email: req.user.email })
})

module.exports = router;