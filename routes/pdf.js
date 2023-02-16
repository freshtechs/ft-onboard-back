const express = require('express');
const fs = require('fs')
const pdf = require('html-pdf');
const contratoTemplate = require('../documents/contrato');
const router = express.Router();

const generateContrato = async (req, res) => {
    console.log(req.body)
    pdf.create(contratoTemplate(req.body), { format: 'Legal' }).toFile('./documents/generated/contrato.pdf', (err) => {
        if (err) {
            return console.log('error');
        }
        res.send(Promise.resolve())
    });
}

const fetchContrato = async (req, res) => {
    res.sendFile('contrato.pdf', { root: './documents/generated' });
};

const deleteContrato = async (req, res) => {
    var filename = "./documents/generated/contrato.pdf";
    var stream = fs.createReadStream(filename);
    stream.pipe(res).once("close", function () {
        stream.destroy(); // makesure stream closed, not close if download aborted.
        deleteFile(filename);
    });
}
const generateInstalacion = async (req, res) => {
    pdf.create(contratoTemplate(req.body), { format: 'Letter' }).toFile('./documents/generated/instalacion.pdf', (err) => {
        if (err) {
            return console.log('error');
        }
        res.send(Promise.resolve())
    });
}

const fetchInstalacion = async (req, res) => {
    res.sendFile('instalacion.pdf', { root: './documents/generated' });
};

const deleteInstalacion = async (req, res) => {
    var filename = "./documents/generated/instalacion.pdf";
    var stream = fs.createReadStream(filename);
    stream.pipe(res).once("close", function () {
        stream.destroy(); // makesure stream closed, not close if download aborted.
        deleteFile(filename);
    });
}
const generateBienvenida = async (req, res) => {
    pdf.create(contratoTemplate(req.body), { format: 'Letter' }).toFile('./documents/generated/bienvenida.pdf', (err) => {
        if (err) {
            return console.log('error');
        }
        res.send(Promise.resolve())
    });
}

const fetchBienvenida = async (req, res) => {
    res.sendFile('bienvenida.pdf', { root: './documents/generated' });
};

const deleteBienvenida = async (req, res) => {
    var filename = "./documents/generated/bienvenida.pdf";
    var stream = fs.createReadStream(filename);
    stream.pipe(res).once("close", function () {
        stream.destroy(); // makesure stream closed, not close if download aborted.
        deleteFile(filename);
    });
}
const generateReciboDePago = async (req, res) => {
    pdf.create(contratoTemplate(req.body), { format: 'Letter' }).toFile('./documents/generated/recibo_de_pago.pdf', (err) => {
        if (err) {
            return console.log('error');
        }
        res.send(Promise.resolve())
    });
}

const fetchReciboDePago = async (req, res) => {
    res.sendFile('recibo_de_pago.pdf', { root: './documents/generated' });
};

const deleteReciboDePago = async (req, res) => {
    var filename = "./documents/generated/recibo_de_pago.pdf";
    var stream = fs.createReadStream(filename);
    stream.pipe(res).once("close", function () {
        stream.destroy(); // makesure stream closed, not close if download aborted.
        deleteFile(filename);
    });
}

function deleteFile(file) {
    fs.unlink(file, function (err) {
        if (err) {
            console.error(err.toString());
        } else {
            console.warn(file + ' deleted');
        }
    });
}




router.post("/contrato", generateContrato);
router.get("/contrato", fetchContrato)
router.get('/contrato/delete', deleteContrato);

router.post("/instalacion", generateInstalacion);
router.get("/instalacion", fetchInstalacion)
router.get('/instalacion/delete', deleteInstalacion);

router.post("/bienvenida", generateBienvenida);
router.get("/bienvenida", fetchBienvenida)
router.get('/bienvenida/delete', deleteBienvenida);

router.post("/recibo_de_pago", generateReciboDePago);
router.get("/recibo_de_pago", fetchReciboDePago)
router.get('/recibo_de_pago/delete', deleteReciboDePago);


module.exports = router;