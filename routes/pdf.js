const express = require('express');
const router = express.Router();

const generatePdf = async (req, res) => {

    return res.status(200).json({
        success: true,
        result: res.data
    });
}


router.post("", generatePdf);


module.exports = router;