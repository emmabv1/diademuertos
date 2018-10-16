const express = require ('express');
const cookieParser = require ('cookie-parser')
const session = require('express-session');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
const MongoStore  = require('connect-mongo')(session);
const passport = require ('passport');
const passportSetup = require ('./passport')
const path = require ('path');
const app = express();
const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/diademuertos";

require('dotenv').config();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

mongoose.Promise = Promise;
mongoose
    .connect(MONGODB_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.use(session({
    secret: 'keyboard cat',
    saveUninitialized: true,
    resave: true,
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        collection: 'session',
    })
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(require('./routes/api'));
app.use(require('./routes/auth'));
app.use(express.static('dia-de-muertos/build'));

app.get('*', (req, res) => {
        res.redirect("/");
    })

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
});