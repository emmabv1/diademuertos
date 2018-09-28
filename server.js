const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const passport = require ('passport');
const GoogleStrategy = require ('passport-google-oauth20').Strategy;
const keys = require ('./keys');
const User = require ('./models/User');
const cookieSession = require ('cookie-session');

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
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieSession({
    maxAge: 60*60*1000,
    keys: [keys.session.cooKey]
}))

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user.id);
    })
});

passport.use(
    new GoogleStrategy({
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: 'localhost:8080/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        User.findOne({googleID: profile.id}).then((currentUser) => {
            if(currentUser) {
                console.log(`already exists`);
                done(null, currentUser);
            }
            else {
                new User({
                    name: profile.displayName,
                    googleID: profile.id
                }).save().then((newUser) => {
                    console.log(`new user: ${newUser}`);
                    done(null, newUser)
                });
            }
        });

    })
);


//don't know where this goes because React
const authCheck = (req, res, next) => {
    if (!req.user) {
        res.redirect("/auth/login")
    }
    else {
        next();
    }
}

// router.get('/', authCheck, (req, res) => {
//     res.send('you are logged in')
// })

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
}) 