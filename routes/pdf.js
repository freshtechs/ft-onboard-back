const express = require('express');
const router = express.Router();

const generatePdf = async (req, res) => {
    console.log(req.body)
}


router.post("", generatePdf);


module.exports = router;