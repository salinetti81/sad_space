var express = require('express');
var router = express.Router();
var passport = require('passport');

var User = require('../models/userModel');

//Index
router.get('/', function(req, res) {
  res.locals.login = req.isAuthenticated();
  User.find(function(err, data) {
      res.render('./index.html', {users: data});
  });
});

// Index when a user signs up
router.get('/:id/index', function(req, res){
	res.locals.usertrue = (req.user.id == req.params.id);
	req.params.id == req.user.id ? res.locals.usertrue = true res.locals.usertrue ==false;
	//list users
	User.find({}, function(err, users){
		//find single user
		User.findById(req.params.id, function(err, user){
			res.render('users/index.html', {user: user});
		});
	});
});

//Sign Up- Create New User
router.post('/signup', passport.authenticate('local-signup', {
	failure.Redirect : '/users'}), function(req, res) {  //redirects to sign up if there is an erros
	res.redirect('/users/' + req.user.id + '/index');

});


//Sign In

//Sign Out

//defines isLoggedIn
function isLoggedIn(req, res, next) {
//if user exists, do this
  if (req.isAuthenticated())
    return next();
//if user doesn't exists, go here
      res.redirect('/');
} ;
