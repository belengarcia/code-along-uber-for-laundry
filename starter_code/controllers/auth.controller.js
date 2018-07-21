
const mongoose = require("mongoose");
const User = require("../models/user");
const bcrypt = require('bcrypt');

module.exports.signup = (req, res, next) => {
    res.render('auth/signup', {
        errorMessage: ''
    })
}

module.exports.doSignup = (req, res, next) => {
    User.findOne({email : req.body.email})
        .then(user => {
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

module.exports.login = (req, res, next) => {
        res.render('auth/login', {
          errorMessage: ''
          });        
    };
    

module.exports.doLogin = (req, res, next) => {

        const email = req.body.email;
        const password = req.body.password;

        console.log('entra en login');
      
        if (email === '' || password === '') {
          res.render('auth/login', {
            errorMessage: 'Enter both email and password to log in.'
          });
          return;
        }
      
        User.findOne({ email: email }, (err, user) => {
          if (err || user === null) {
            res.render('auth/login', {
              errorMessage: `There isn't an account with email ${emailInput}.`
            });
            return;
          }
      
          if (!bcrypt.compareSync(password, user.password)) {
            res.render('auth/login', {
              errorMessage: 'Invalid password.'
            });
            return;
          }
      
          req.session.currentUser = user;
          res.redirect('/');
          console.log('logged in');
        });
    }
