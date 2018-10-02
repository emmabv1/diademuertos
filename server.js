const express = require ('express');
const cookieParser = require ('cookie-parser')
const session = require('express-session');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
const MongoStore  = require('connect-mongo')(session);
const passport = require ('passport');
const passportSetup = require ('./passport')
//const keys = require ('./keys');
//const cookieSession = require ('cookie-session');
const path = require ('path');

const app = express();
const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/diademuertos";

//if(process.env.NODE_ENV === 'production') {
    // app.use(express.static('dia-de-muertos/build'))
    // app.get('*', (req, res) => {
    //     res.sendFile(path.resolve(_dirname, 'dia-de-muertos', 'build', 'index.html'));
    // })
//}

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
   // store: new MongoStore({mongooseConnection:db })
   // store: new MongoStore({ mongoose_connection: mongoose.connections[0] })
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        collection: 'session',
    })
}));

// app.use((req, res, next) => {
//        // if (req.session) {
//             console.log("session:");
//             console.log(req.session);
//             console.log("url: " + req.url);
//      //   }
//         next();
// //     //req.session.username = _id; 
// //     req.session.save();
// //     console.log("session = " + req.session);
// });



// app.use(cookieSession({
//     maxAge: 60*60*1000,
//     keys: [process.env.sessionCooKey]
// }))

app.use(passport.initialize());
app.use(passport.session());

app.use(require('./routes/api'));
app.use(require('./routes/auth'));

app.use(express.static('dia-de-muertos/build'));



//In the front end, i want to make an axios get request that logs the info from req.session
//First I need to create a get route in the back end. (there is no axios request written yet)

//This works
app.get('/home', (req, res, next) => { 
    console.log("YOU ARE IN DA HOOOOOOOMEEEEEEEEIIIYYYYYEEE");
    console.log(req.session);
    next();
    // res.sendFile(__dirname + '/src/index.html');  // THIS WILL WORK (probably)
    // if(req.session.passport){
    //    console.log("Username not set in session yet");
    //  } 
    //  else {
    //      console.log("Username from session: "+ req.session.passport);
    //  } 
 });



//This doesn't
// app.get('/', (req, res, next) => { 
//     console.log("YOU ARE IN DA HOOOOOOOMEEEEEEEEIIIYYYYYEEE");
//     console.log(req.session);
//     res.send("test");
//     // res.sendFile(__dirname + '/src/index.html');  // THIS WILL WORK (probably)
//     // if(req.session.passport){
//     //    console.log("Username not set in session yet");
//     //  } 
//     //  else {
//     //      console.log("Username from session: "+ req.session.passport);
//     //  } 
//  });

app.get('*', (req, res) => {
        res.redirect("/");
    })

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
});