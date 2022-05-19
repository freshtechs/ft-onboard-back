require("dotenv").config()
const bodyParser = require("body-parser")
const cors = require('cors');
const express = require("express")
const mongoose = require("mongoose")
const userRoutes = require('./routes/users');
const clientRoutes = require('./routes/clients');

const app = express()


// use bodyparser middleware to receive form data
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json(), urlencodedParser)


app.use((req, res, next) => {
    const allowedOrigins = ['http://127.0.0.1:3000', 'http://localhost:3000', 'http://127.0.0.1:9000', 'http://localhost:9000'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-access-token, Accept, X-Requested-With, User-Agent');
    res.header('Access-Control-Allow-Credentials', true);
    return next();
});


app.get('/', function (req, res) {
    res.send('hello world')
    })
    
app.use('/api/auth', userRoutes)
app.use('/api/clients', clientRoutes)

// connects to mongoDB database
const dbURI = process.env.MONGODB_URI
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => {
        // only listen for requests once database data has loaded
        app.listen(process.env.PORT || 5000, () => console.log("Server is up on port " + (process.env.PORT || 5000)))
    })
    .catch(err => console.log(err))

