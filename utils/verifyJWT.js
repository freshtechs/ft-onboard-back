const jwt = require("jsonwebtoken")

function verifyJWT(req, res, next) {
    try {
        const token = req.headers["x-access-token"]?.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) { res.status(401).json({ message: "Auth Failed", isLoggedIn: false }); }
            req.user = {};
            req.user.email = decoded.email
            req.user.esAdmin = decoded.esAdmin
            req.user.esCoordinador = decoded.esCoordinador
            req.user.esExterno = decoded.esExterno
            req.user.compania = decoded.compania
            next();
        });
    } catch (error) {
        res.status(401).json({ message: error.message, isLoggedIn: false });
    }
}

module.exports = verifyJWT