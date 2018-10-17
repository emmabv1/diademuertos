const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/auth/session', (req, res, next) => {
    console.log(req.session);
    res.json(req.session.passport);
 });

router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile']
}));

router.get('/auth/google/redirect', passport.authenticate('google'), (req, res) => {
   res.redirect("/");
});

router.get('/auth/logout', (req,res) => {
    req.logout();
    res.json(req.session.passport);
})

module.exports = router;