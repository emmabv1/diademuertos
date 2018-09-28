const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile']
}));

router.get('/auth/google/redirect', passport.authenticate('google'), (req, res) => {
    //res.send(req.user);
    console.log(req.user);
    res.redirect("http://localhost:3000/");
});

router.get('/auth/logout', (req,res) => {
    //res.send("logging out")
    req.logout();
    res.redirect("http://localhost:3000/login")
})

module.exports = router;