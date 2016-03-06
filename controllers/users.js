var express = require('express');
var router = express.Router();
var passport = require('passport');

var User = require('../models/userModel');

//Index
// router.get('/', function(req, res) {
//   res.locals.login = req.isAuthenticated();
//   User.find(function(err, data) {
//       res.render('./signup.html', {users: data});
//   });
// });


// CREATE NEW USER
    //PROCESS SIGNUP FORM
router.post('/', passport.authenticate('local-signup', {
    failureRedirect : '/users'}), function(req, res) { //redirect back to signup if there is an error
        res.redirect('/users/' + req.user.id);
        console.log(users);
});
    //PROCESS THE LOGIN FORM
router.post('/login', passport.authenticate('local-login', {
    // successRedirect : '/profile', // redirect to the secure profile section
   failureRedirect : '/users'}), function(req, res) { // redirect back to the signup page if there is an error
        res.redirect('/users/' + req.user.id);
});




//defines isLoggedIn
function isLoggedIn(req, res, next) {
//if user exists, do this
  if (req.isAuthenticated())
    return next();
//if user doesn't exists, go here
      res.redirect('/');
} ;


module.exports = router;
