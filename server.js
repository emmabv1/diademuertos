const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const passport = require ('passport');
const passportSetup = require ('./passport')
const keys = require ('./keys');
const cookieSession = require ('cookie-session');
const path = require ('path');

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
app.use(require('./routes/auth'));

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('dia-de-muertos/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(_dirnae, 'dia-de-muertos', 'build', 'index.html'));
    })
}

app.use(passport.initialize());
app.use(passport.session());
app.use(cookieSession({
    maxAge: 60*60*1000,
    keys: [keys.session.cooKey]
}))

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
}) 