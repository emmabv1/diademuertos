const passport = require ('passport');
const GoogleStrategy = require ('passport-google-oauth20').Strategy;
const User = require ('./models/User');
const keys = require ('./keys');

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
        callbackURL: '/auth/google/redirect'
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
// const authCheck = (req, res, next) => {
//     if (!req.user) {
//         res.redirect("/auth/login")
//     }
//     else {
//         next();
//     }
// }

// router.get('/', authCheck, (req, res) => {
//     res.send('you are logged in')
// })