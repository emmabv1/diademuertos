const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile']
}));

router.get('/auth/google/redirect', passport.authenticate('google'), (req, res) => {
    //console.log("redirecting");
    //res.send(req.user);
    //console.log(req.user);
   //res.redirect("http://localhost:3000/");
   res.redirect("http://localhost:8080/");
   //res.send('you have been authenticated');
});

router.get('/auth/logout', (req,res) => {
    console.log("logging out");
    req.logout();
    //req.session.destroy();
    console.log (req.session);
    res.json(req.session.passport);
})

module.exports = router;