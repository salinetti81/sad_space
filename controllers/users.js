var express 	= require('express'),
		router 		= express.Router(),
		passport 	= require('passport'),
		User 			= require('../models/userModel');


//Index
router.get('/', function(req,res) {
 	res.render('index.html');
});

router.get('/:id', function(req,res){
	res.locals.login = req.isAuthenticated();
	 User.find(function(err, data) {
      res.render('index.html', {users: data});
      console.log(err);
  });
});

//JSON
router.get('/json', function(req, res) {
    User.find(function(err, users) {
        res.send(users);
    });
});

//SINGLE JSON 
router.get('/:id/json', function(req, res) {
    User.findById(req.params.id, function(err, user) {
        res.send(user);
    });
});

//LOGOUT
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/users');
});

//SHOW PAGE FOR WHEN USER IS LOGGED IN
router.get('/:id', isLoggedIn, function(req, res) {
    //checks if the user is logged in
    res.locals.usertrue = (req.user.is == req.params.id);
    //list users
    User.find({}, function(err, users) {
        //finds single user
        User.findById(req.params.id, function(err, user) {
            res.render('index.html', {
                user: user
             
            });
        });
    });
});

// CREATE NEW USER
    //PROCESS SIGNUP FORM
router.post('/signup', passport.authenticate('local-signup', {
    
    failureRedirect : '/'}), function(req,res) { //redirect back to signup if there is an error
        res.redirect('/' + req.user.id);
        console.log(user);
});

    //PROCESS THE LOGIN FORM
router.post('/login', passport.authenticate('local-login', {
    // successRedirect : '/profile', // redirect to the secure profile section
   failureRedirect : '/'}), function(req,res) { // redirect back to the signup page if there is an error
        res.redirect('/' + req.user.id);
});

//DELETE
// router.delete('/:id', function(req, res) {
// console.log('A user was deleted');
// var deleteUser = req.params.id;
// User.findById(deleteUser, function(err, data) {
//     //for loop to delete user
//     for (var i = 0; i < users.length; i++) {
//         User.findByIdAndRemove(deleteUser, function(err, users) {
//           res.redirect('/');
//       });
//     };
// });
// });



//defines isLoggedIn
function isLoggedIn(req, res, next) {
//if user exists, do this
  if (req.isAuthenticated())
    return next();
//if user doesn't exists, go here
      res.redirect('/');
} ;

module.exports = router;
