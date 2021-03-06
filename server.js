var express 	 	  = require('express'),
		bodyParser 	  = require('body-parser'),
		mongoose		  = require('mongoose'),
		morgan 			  = require('morgan'),
		passport 		  = require('passport'),
		session 	  	= require('express-session'),
		bcrypt			  = require('bcrypt-nodejs'),
		port 				  = process.env.PORT || 3000,
		app				 	  = express(),
		passportLocal = require('passport-local');


var mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/planetproject';
mongoose.connect(mongoUri);

app.use(morgan('dev'));

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use(session({secret: 'secretsecretsecret', resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next){
	res.locals.login = req.isAuthenticated();
	next();
});

var gamesController = require('./controllers/games.js');
app.use('/games',gamesController);

var usersController = require('./controllers/users');
require('./config/passport.js')(passport);

var seedController = require('./controllers/seed.js');
app.use('/seed', seedController);

app.use('/users', usersController);

app.listen(port, function(){

	console.log("Space, the final frontier.");

});