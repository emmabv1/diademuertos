const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/api/users', (req, res) => {
    User.find()
        .then(data => res.json(data));
});

router.get('/api/users/:id', (req, res) => {
    User.findOne({_id: req.params.id})
        .then(data => res.json(data));
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

router.post('/api/users/:id', (req, res) => {
    User.updateOne({_id: req.params.id}, {$push: {items: req.body.item}})
    .then(data => res.json(data));
});

module.exports = router;