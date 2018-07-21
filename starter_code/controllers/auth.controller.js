
const mongoose = require("mongoose");
const User = require("../models/user");

module.exports.signup = (req, res, next) => {
    res.render('auth/signup', {
        errorMessage: ''
    })
}

module.exports.doSignup = (req, res, next) => {
    const nameInput = req.body.name;
    const emailInput = req.body.email;
    const passwordInput = req.body.password;

    console.log(req.body)
    User.findOne(emailInput)
        .then(user =>{
            
        })
    };
