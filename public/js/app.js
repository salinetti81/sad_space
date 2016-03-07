var app = angular.module('sadSpace', []);


// app.controller('MainController', [function(){

	
// }]);

app.controller('PlanetController', ['$http','$scope', function($http,$scope){
	var controller = this;

	$scope.getExtract = function(event){
		console.log(this);
		console.log(event.target.id);
		console.log('function accessed');
			// $.http({

	  //    url: "https://en.wikipedia.org/w/api.php?action=query&format=json&indexpageids&prop=revisions&titles=mars&prop=extracts&exintro",
	  //    method: "GET",
	  //    dataType: 'jsonp'
	  // 	}).then(
	  // 	function(result){
	  // 		console.log(result);
	  // 		// getExtract(result);
	  // 		var pageID = result.query.pageids;
	  // 		var number = parseInt(pageID);
	  // 		var extract = result.query.pages[number].extract;
   //    	console.log(extract);
   //    	// $('#info').html(extract);

	  // 	}),
	  // 	function(err){
	  // 		console.log(err);
	  // 	}
	  }; //<--getExtract





}]);