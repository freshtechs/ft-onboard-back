const express = require('express');
const pdf = require('html-pdf');
const pdfTemplate = require('../documents');
const router = express.Router();

const generatePdf = async (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if (err) {
            return console.log('error');
        }
        res.send(Promise.resolve())
    });
}

const fetchPdf = async (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`);
};



router.post("", generatePdf);
router.get("", fetchPdf)


module.exports = router;