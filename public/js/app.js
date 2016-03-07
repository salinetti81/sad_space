var app = angular.module('sadSpace', []);


<<<<<<< HEAD
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
=======

app.controller('SignUpController', ['$http', function($http){
    var controller = this;
    this.signUpData = {};
    this.isLoggedIn = false;

    this.signUp = function(){
        console.log("SIGNUP function firing in app.js");

        console.log(this.signUpData);

        if (!user)
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
            },
            function(err){
                console.log(err);
            });       

    }; //<--signUp
    if (user)
    this.logIn = function(){
        console.log("LOGIN function firing in app.js")

        $http({
            method: 'POST',
            url: '/users/login',
            data: this.loginData
        }).then(
        //success
        function(response){
            console.log(response)
        },
        function(err){
            console.log(err)
        });

    }; //<--logIn
}]);


app.controller('PlanetController', ['$http', function($http){
    var controller = this;
    
    

    controller.displayContent = false;
    this.getData = function(name){
    controller.displayContent = true;
    console.log(controller.displayContent, "displayContent")
    }; //<--getExtract

}]);















	// var planet = name;
	// console.log(planet ,"here");
//===================================
//AJAX CALL FOR WIKIMEDIA API
//===================================

			// function setHeader(xhr) {
			// 	console.log('setHeader');
			// 	XMLHttpRequest.setRequestHeader('Access-Control-Allow-Origin', '*');
			// }

			// $http({
	  //    url: "https://en.wikipedia.org/w/api.php?action=query&format=json&indexpageids&prop=revisions&titles=" + planet + "&prop=extracts&exintro",
	  //    method: "GET",
	  //    dataType: 'jsonp',
	  //    crossDomain: true,
	  //    beforeSend: setHeader()

	  // 	}).then(
	  // 	function(result){
	  // 		console.log(result);
	  	
	  // 		var pageID = result.query.pageids;
	  // 		var number = parseInt(pageID);
	  // 		var extract = result.query.pages[number].extract;
   //    	console.log(extract);
   //    	// $('#info').html(extract);

	  // 	}),
	  // 	function(err){
	  // 		console.log(err);
	  // 	}

       

}]); //end form controller
>>>>>>> 8f870a21afa9150c3c0b73735a466776b46a3179

