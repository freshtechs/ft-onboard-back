require("dotenv").config()
const bodyParser = require("body-parser")
const express = require("express")
const mongoose = require("mongoose")
const userRoutes = require('./routes/users');
const clientRoutes = require('./routes/clients');
const pdfRoutes = require('./routes/pdf')

const app = express()


// use bodyparser middleware to receive form data
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json(), urlencodedParser)


app.use((req, res, next) => {
    const allowedOrigins = [
        'http://localhost:3000',
        'http://localhost:5000',
        'http://localhost:9000',
        'http://127.0.0.1:3000',
        'http://127.0.0.1:5000',
        'http://127.0.0.1:9000',
        'https://ft-potenciales.netlify.app',
        'https://ft-onboard-back.onrender.com',
        'https://aqueous-journey-82080.herokuapp.com',
        'https://ft-potenciales.herokuapp.com',
        'https://potenciales.herokuapp.com/'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-access-token, Accept, X-Requested-With, User-Agent');
    res.header('Access-Control-Allow-Credentials', true);
    return next();
})


app.get("/service-worker.js", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "service-worker.js"));
});

app.get('/', function (req, res) {
    res.send('hello world')
})

app.use('/api/auth', userRoutes)
app.use('/api/clients', clientRoutes)
app.use('/api/create-pdf', pdfRoutes)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// connects to mongoDB database
const dbURI = process.env.MONGODB_URI
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => {
        // only listen for requests once database data has loaded
        app.listen(process.env.PORT || 5000, () => console.log("Server is up on port " + (process.env.PORT || 5000)))
    })
    .catch(err => console.log(err))

