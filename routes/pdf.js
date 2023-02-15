const express = require('express');
const fs = require('fs')
const pdf = require('html-pdf');
const pdfTemplate = require('../documents');
const router = express.Router();

const generatePdf = async (req, res) => {
    pdf.create(pdfTemplate(req.body), { format: 'Legal' }).toFile('./documents/generated/result.pdf', (err) => {
        if (err) {
            return console.log('error');
        }
        res.send(Promise.resolve())
    });
}

const fetchPdf = async (req, res) => {
    res.sendFile('result.pdf', { root: './documents/generated' });
};

function deleteFile(file) {
    fs.unlink(file, function (err) {
        if (err) {
            console.error(err.toString());
        } else {
            console.warn(file + ' deleted');
        }
    });
}



router.post("", generatePdf);
router.get("", fetchPdf)
router.get('/delete', function (req, res) {
    var filename = "./documents/generated/result.pdf";
    var stream = fs.createReadStream(filename);
    stream.pipe(res).once("close", function () {
        stream.destroy(); // makesure stream closed, not close if download aborted.
        deleteFile(filename);
    });
});


module.exports = router;