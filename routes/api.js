const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.get('/api/users', (req, res) => {
    User.find()
        .then(data => res.json(data));
});

router.post('/api/users', (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    newUser.save((err, data) => {
        if (err) {
            res.status(500);
            return res.json(err);
        }
        res.json(data);
    });
});

module.exports = router;