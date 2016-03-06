var express 	 	= require('express'),
		bodyParser 	= require('body-parser'),
		mongoose		= require('mongoose'),
		morgan 			= require('morgan'),
		passport 		= require('passport'),
		session 		= require('express-session'),
		port 				= process.env.PORT || 3000,
		app					= express();


app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json);

app.use(morgan('dev'));

app.use(session({secret: 'secretsecretsecret', resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

var usersController = require('./controllers/users');
require('./config/passport.js')(passport);

app.get('/', function(req,res){
	res.render('signin.html');
});

app.listen(port, function(){
	console.log('Today will be a good day');
});