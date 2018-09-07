const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');

const app = express();

const PORT = 8080;

app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
})