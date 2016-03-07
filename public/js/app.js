var app = angular.module('sadSpace', []);


// app.controller('MainController', [function(){

	
// }]);

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