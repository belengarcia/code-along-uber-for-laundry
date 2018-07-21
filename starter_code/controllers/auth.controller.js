
const mongoose = require("mongoose");
const User = require("../models/user");

module.exports.signup = (req, res, next) => {
    res.render('auth/signup', {
        errorMessage: ''
    })
}

module.exports.doSignup = (req, res, next) => {

    console.log(req.body)
    User.findOne({email : req.body.email})
        .then(user =>{
            if(user) {
                res.render('auth/signup', {
                    user: req.body,
                    error : 'email is already'
                })
            } else {
                user = new User(req.body)
                return user.save()
                .then( user => {
                 res.redirect('/auth/login')
                });
            }
        })
        .catch(error => {
            next(error);
        })
    };
