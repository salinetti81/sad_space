var app = angular.module('sadSpace', []);


app.controller('MainController', ['$http', function($http){
	var controller = this;
	this.signUpData = {};
	this.logInData = {};
  this.logOutData = {};
	this.isLoggedIn = null;
	this.user = {}

  controller.displayContent = false;

  this.revealLogin = function(){
    controller.displayContent = true;
  };



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
      controller.displayContent = false;
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
      controller.displayContent = false;
  	},
  	function(err){
  		console.log(err)
  	});   
  }; //<--logIn
  
    this.logOut = function(){
    console.log("LOGOUT function is working")

    $http({
      method: 'GET',
      url: '/users/login',
      data: this.logOutData
    }).then(
    //success
    function(response){
      console.log('this is the response',response.config.data);
      controller.isLoggedIn = false;
    
      controller.user = {};
      console.log(controller.user)

    },
    function(err){
      console.log(err)
    });
    controller.displayContent = false;
  }; //<--logOut

}]); //<---MainController


// app.controller('SignUpController', ['$http', function($http){
//     var controller = this;
//     this.signUpData = {};
//     this.isLoggedIn = false;

//     this.signUp = function(){
//         console.log("SIGNUP function firing in app.js");

//         console.log(this.signUpData);

      
//         $http({
//             method: 'POST',
//             url: '/users/signup',
//             data: this.signUpData
//         }).then(
//             //success
//             function(response){
//                 console.log(response);
//                 controller.isLoggedIn = true;
//                 controller.signUpData = {};
//             },
//             function(err){
//                 console.log(err);
//             });       

//     }; //<--signUp
    
//     this.logIn = function(){
//         console.log("LOGIN function firing in app.js")

//         $http({
//             method: 'POST',
//             url: '/users/login',
//             data: this.loginData
//         }).then(
//         //success
//         function(response){
//             console.log(response)
//         },
//         function(err){
//             console.log(err)
//         });

//     }; //<--logIn
// }]);



app.controller('PlanetController', ['$http', function($http){
    var controller = this;
    var planet = '';
    
    
    controller.displayContent = false;


    this.getData = function(name){
        var clickedPlanet = name;
        controller.displayContent = true;
        console.log(controller.displayContent, "displayContent");
        console.log(clickedPlanet ,"here");

        $http({
            url: '/seed/data',
            method: 'GET',
            // data: { name: clickedPlanet }
        }).then(
        //success
        function(results){      
          var planetData = results.data;
          // console.log(planets);
          console.log(results);

          for (var i = 0; i < planetData.length; i++) {
            if(planetData[i].name === clickedPlanet) {
              controller.planet = planetData[i]; 
              console.log(controller.planet);
              return controller.planet;
            }

          };

        }),
        //error
        function(err){
            console.log(err);
        };

    }; //<--getExtract

    this.leaveInfoBox = function() {
      controller.displayContent = false;

    } //<---leaveInfoBox

}]); //<--PlanetController



//FILTERS BOOLEAN INTO YES/NO
app.filter('yesNo', function() {
    return function(input) {
        return input ? 'Yes' : 'No';
    }
});













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

       
