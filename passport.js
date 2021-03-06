const passport = require ('passport');
const GoogleStrategy = require ('passport-google-oauth20').Strategy;
const User = require ('./models/User');

require('dotenv').config();

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
        clientID: process.env.googleClientID,
        clientSecret: process.env.googleClientSecret,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        console.log("PROFILE:")
        console.log(profile);
        
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

module.exports = passport;