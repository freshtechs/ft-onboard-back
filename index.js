require("dotenv").config()
const bodyParser = require("body-parser")
const cors = require('cors');
const express = require("express")
const mongoose = require("mongoose")
const userRoutes = require('./routes/users');
const clientRoutes = require('./routes/clients');
const pdfRoutes = require('./routes/pdf')

const app = express()


// use bodyparser middleware to receive form data
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json(), urlencodedParser)


app.use(cors());


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

