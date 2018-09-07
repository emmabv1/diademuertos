const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');

const app = express();

const PORT = process.env.PORT || 8080;

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/diademuertos";

mongoose.Promise = Promise;

mongoose
    .connect(MONGODB_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.use(bodyParser.json());


app.use(require('./routes/api'));

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
})