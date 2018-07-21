const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require ("../models/user")

const bcrypt = 10;

router.get('/signup', (req, res, next) => {
    res.render('auth/signup', {
        errorMessage: ''
    })
});

router.post("/signup")

module.exports = router;


