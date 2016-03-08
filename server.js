var express 	 	= require('express'),
		bodyParser 	= require('body-parser'),
		mongoose		= require('mongoose'),
		morgan 			= require('morgan'),
		passport 		= require('passport'),
		session 		= require('express-session'),
		bcrypt			= require('bcrypt-nodejs'),
		port 				= process.env.PORT || 3000,
		app					= express(),
		passportLocal = require('passport-local');

mongoose.connect('mongodb://localhost:27017/planetproject');

app.use(morgan('dev'));

app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use(session({secret: 'secretsecretsecret', resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next){
	res.locals.login = req.isAuthenticated();
	next();
});

var usersController = require('./controllers/users');
require('./config/passport.js')(passport);

var seedController = require('./controllers/seed.js');
app.use('/seed', seedController);


app.use('/users', usersController);
// app.get('/milkyway', function(req,res){
// 	res.render('index.html');
// });

app.listen(port, function(){
	console.log("Hey you. Think alcohol.");
});