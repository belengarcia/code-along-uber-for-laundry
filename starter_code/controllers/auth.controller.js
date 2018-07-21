
const mongoose = require("mongoose");
const User = require("../models/user");

module.exports.signup = (req, res, next) => {
    res.render('auth/signup', {
        errorMessage: ''
    })
}

module.exports.doSignup = ("/signup", (req, res, next) => {
    const nameInput = req.body.name;
    const emailInput = req.body.email;
    const passwordInput = req.body.password;
  
    if (emailInput === '' || passwordInput === '') {
      res.render('auth/signup', {
        errorMessage: 'Enter both email and password to sign up.'
      });
      return;
    }
  
    User.findOne({ email: emailInput }, '_id', (err, existingUser) => {
      if (err) {
        next(err);
        return;
      }
  
      if (existingUser !== null) {
        res.render('auth/signup', {
          errorMessage: `The email ${emailInput} is already in use.`
        });
        return;
        }
      });
    });
