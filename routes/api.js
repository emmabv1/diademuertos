const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/api/users', (req, res) => {
    User.find()
        .then(data => res.json(data));
});

router.get('/api/what', (req, res) => {
    res.send('what');
});

router.post('/api/users', (req, res) => {
    const newUser = new User({
        name: req.body.name,
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