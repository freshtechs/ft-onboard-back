const express = require('express');
const router = express.Router();

const generatePdf = async (req, res) => {
    message = req.body
    return res.status(200).json(message);
}


router.post("", generatePdf);


module.exports = router;