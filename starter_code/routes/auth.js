const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require ("../models/user");
const authController = require('../controllers/auth.controller');

// const bcryptSalt = 10;

router.get('/signup', authController.signup);
router.post('/signup', authController.doSignup);

router.get('/login', authController.login);
router.post('login', authController.doLogin);



// router.post("/signup", (req, res, next) => {
//     const nameInput = req.body.name;
//     const emailInput = req.body.email;
//     const passwordInput = req.body.password;
  
//     if (emailInput === '' || passwordInput === '') {
//       res.render('auth/signup', {
//         errorMessage: 'Enter both email and password to sign up.'
//       });
//       return;
//     }
  
//     User.findOne({ email: emailInput }, '_id', (err, existingUser) => {
//       if (err) {
//         next(err);
//         return;
//       }
  
//       if (existingUser !== null) {
//         res.render('auth/signup', {
//           errorMessage: `The email ${emailInput} is already in use.`
//         });
//         return;
//       }
  
//         res.redirect('/');
//       });
//     });
//   });

// router.get('/login',(req, res,next) => {
//       res.render('auth/login', {
//         errorMessage: ''
//         });
//   });


//   router.post('/login', (req, res, next) => {
//     const emailInput = req.body.email;
//     const passwordInput = req.body.password;
  
//     if (emailInput === '' || passwordInput === '') {
//       res.render('auth/login', {
//         errorMessage: 'Enter both email and password to log in.'
//       });
//       return;
//     }
  
//     User.findOne({ email: emailInput }, (err, theUser) => {
//       if (err || theUser === null) {
//         res.render('auth/login', {
//           errorMessage: `There isn't an account with email ${emailInput}.`
//         });
//         return;
//       }
  
//       if (!bcrypt.compareSync(passwordInput, theUser.password)) {
//         res.render('auth/login', {
//           errorMessage: 'Invalid password.'
//         });
//         return;
//       }
  
//       req.session.currentUser = theUser;
//       res.redirect('/');
//       console.log('logged in');
//     });
//   });

module.exports = router;


