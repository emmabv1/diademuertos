const express = require ('express');
const cookieParser = require ('cookie-parser')
const session = require('express-session');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
const passport = require ('passport');
const passportSetup = require ('./passport')
//const keys = require ('./keys');
//const cookieSession = require ('cookie-session');
const path = require ('path');

const app = express();
const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/diademuertos";

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('dia-de-muertos/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(_dirnae, 'dia-de-muertos', 'build', 'index.html'));
    })
}

require('dotenv').config();

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));

mongoose.Promise = Promise;
mongoose
    .connect(MONGODB_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// app.use(cookieSession({
//     maxAge: 60*60*1000,
//     keys: [process.env.sessionCooKey]
// }))

app.use(passport.initialize());
app.use(passport.session());

app.use(require('./routes/api'));
app.use(require('./routes/auth'));


app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
});