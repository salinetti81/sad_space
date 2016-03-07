var express     = require('express'),
    router      = express.Router(),
    passport    = require('passport'),
    User        = require('../models/userModel');


//Index
router.get('/', function(req,res) {
    res.send('index.html');
});

// router.get('/:id', function(req,res){
//     res.locals.login = req.isAuthenticated();
//      User.find(function(err, data) {
//       res.send('index.html', {user: data});
//       console.log(err);
//   });
// });




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

