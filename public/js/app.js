
var app = angular.module('sadSpace', []);


app.controller('MainController', ['$http', function($http){
	var controller = this;
	this.signUpData = {};
	this.logInData = {};
	this.isLoggedIn = null;

	this.user = {}

this.signUp = function(){
	console.log("SIGNUP function firing in app.js");

	console.log(this.signUpData);

$http({
	method: 'POST',
	url: '/users/signup',
	data: this.signUpData
}).then(
	//success
	function(response){
		console.log(response);
		controller.isLoggedIn = true;
		controller.signUpData = {};
		controller.user = response.data;
	},
	function(err){
		console.log(err);
	});       

}; //<--signUp


this.logIn = function(){
	console.log("LOGIN function firing in app.js")

	$http({

		method: 'GET',
		url: '/',
		data: this.loginData
	}).then(
	//success
	function(response){
		console.log('this is the response',response.config.data);
		controller.isLoggedIn = true;
		// controller.logInData = {};
		controller.user = response.config.data;
		console.log(controller.user)

	},
	function(err){
		console.log(err)
	});

}; //<--logIn

}]); //end form controller