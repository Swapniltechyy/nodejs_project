// controllers/userController.js
// const User = require('../models/user');

const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send("hello get user");
});

router.post('/', (req, res) => {
    res.send("hello create user");
});

router.put('/', (req, res) => {
    res.send("hello update user");
});

router.delete('/', (req, res) => {
    res.send("hello delete user");
});


module.exports = router