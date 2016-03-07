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
}]); //<---MainController


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
        var clickedPlanet = name;
        controller.displayContent = true;
        console.log(controller.displayContent, "displayContent");
        console.log(clickedPlanet ,"here");

        $http({
            url: '/seed/data',
            method: 'GET',
        }).then(
        //success
        function(results){      
          var planets = results.data;
          console.log(planets);
          console.log(planets[0].name);

          for (var i = 0; i < planets.length; i++) {
            if(planets[i].name === clickedPlanet) {
              return console.log('you win', planets[i].name);
            }

          };

        }),
        //error
        function(err){
            console.log(err);
        };


    }; //<--getExtract

}]);

















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

       
